export const ApiEndpointList = {
  quote: {
    GET_QUOTE: "https://api.api-ninjas.com/v1/quotes",
  },
  auth: {
    LOGIN_WITH_GOOGLE: "/api/GoogleAuth/login-google",
  },
  cafe: {
    GET_CAFES: "/api/cafe",
    CREATE_CAFE: "/api/cafe",
    UPDATE_CAFE: (id: string) => `/api/cafe/${id}`,
    DELETE_CAFE: (id: string) => `/api/cafe/${id}`,
  },
};
