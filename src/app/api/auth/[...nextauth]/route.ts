import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { AuthServices } from "../../service";
import { User } from "next-auth";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log("credentials", credentials);
        if (!credentials) return null;
        try {
          const { username, password } = credentials;
          if (username === "admin" && password === "admin") {
            const user: User = { 
              id: "1", 
              name: username, 
              email: `${username}@example.com`,
              role: "admin",
              accessToken: "1234567890",
            };
            return user;
          }
          return null;
          // Call database to login
        } catch (error) {
          console.error(error);
          return null; // Explicitly return null on error
        }
      },
    }),
  ],
  secret: process.env.NEXT_AUTH_SECRET_KEY,
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt", // Use JWT for session management
  },
  callbacks: {
    async signIn({ user, account, credentials }): Promise<any> {
      if (account?.provider === "google") {
        try {
          const dataInput = {
            accessToken: account?.access_token || "",
            idToken: account?.id_token || "",
            refreshToken: "haha",
          };
          const res = await AuthServices.loginWithGoogle(dataInput);
          if (res.metaData.status === "ok") {
            // Store the access token in the user object
            user.accessToken = res.data.token;
            return true;
          }
          return false;
        } catch (error) {
          return false;
        }
      }
      // For credential provider, we've already validated in the credentials callback
      if (account?.provider === "credentials") {
        return true;
      }
      return false;
    },
    // Customize the JWT token
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
      }
      return token;
    },
    // Customize the session data
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.sub;
        session.user.role = token.role;
        session.user.expires = token.exp;
      }
      session.user.role = token.role || session.user.name === "admin" ? "admin" : "user";
      console.log("session", session);
      return session;
    },
  },
});

export { handler as GET, handler as POST };
