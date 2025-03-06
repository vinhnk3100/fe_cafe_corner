"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import FormErrorMsg from "../FormErrorMsg";
import { LoginSchema } from "@/schemas";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
export default function LoginForm() {
  const router = useRouter();
  const [message, setMessage] = useState<string>("");
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleSubmitForm = async (values: z.infer<typeof LoginSchema>) => {
    setMessage("");
    const validateFields = LoginSchema.safeParse(values);
    if (validateFields.success) {
      try {
        const res = await signIn("credentials", {
          redirect: false,
          username: validateFields.data.username,
          password: validateFields.data.password,
        });
        if (res?.error) {
          setMessage("Username or password is incorrect!");
          return;
        }
        if (res?.ok) {
          toast.success("Login Successfully!");
          router.push("/");
          return;
        } else {
          setMessage("Failed to Login!");
        }
      } catch (error: any) {
        setMessage(error.message);
      }
    } else {
      setMessage("Invalid Fields!");
    }
  };
  return (
    <>
      <div className="w-full max-w-md">
        <div className="py-8 px-6 rounded-md sm:px-10">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-textPrimaryColor">Login</h2>
            <p className="mt-2 text-lg text-slate-300">Welcome back!</p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmitForm)}
              className="mb-0 space-y-6"
            >
              <div className="mb-0 space-y-6">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          className="bg-coffeeBeanColor text-white border-mainNavbarColor focus:border-textPrimaryColor hover:border-textPrimaryColor transition-all"
                          type="text"
                          placeholder="Username"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          className="bg-coffeeBeanColor text-white border-mainNavbarColor focus:border-textPrimaryColor hover:border-textPrimaryColor transition-all"
                          type="password"
                          placeholder="******"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                <FormErrorMsg message={message ? message : ""} />
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <Button
                    type="submit"
                    className="text-xl font-medium w-full bg-buttonColor hover:bg-buttonHoverColor text-primaryColor transition-all"
                  >
                    Sign In
                  </Button>
                </div>
                <div className="flex justify-end">
                  <Link
                    className="text-sm font-medium text-textPrimaryColor hover:text-buttonHoverColor hover:underline hover:underline-offset-4 transition-all"
                    href="/login"
                    prefetch={false}
                  >
                    Forgotten Password?
                  </Link>
                </div>
              </div>
            </form>
          </Form>
          <div className="mb-0 space-y-6 mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-coffeeBeanColor" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-primaryColor text-textPrimaryColor">Or continue with</span>
              </div>
            </div>
            <div className="flex flex-row gap-6">
              <Button
                onClick={() => signIn("google", { callbackUrl: "/" })}
                className="w-full transition-all bg-coffeeBeanColor text-white border border-mainNavbarColor hover:border-textPrimaryColor"
              >
                <FcGoogle className="text-2xl" />
              </Button>
              <Button 
                onClick={() => signIn("github", { callbackUrl: "/" })}
                className="group transition-all w-full bg-coffeeBeanColor text-white border border-mainNavbarColor hover:border-textPrimaryColor"
              >
                <FaGithub className="text-2xl text-white" />
              </Button>
            </div>
          </div>
          <p className="mt-6 text-xs text-slate-300">
            By clicking continue, you agree to our{" "}
            <Link
              className="font-medium text-textPrimaryColor hover:text-buttonHoverColor underline hover:underline-offset-4 transition-all"
              href="/register"
              prefetch={false}
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              className="font-medium text-textPrimaryColor hover:text-buttonHoverColor underline hover:underline-offset-4 transition-all"
              href="/register"
              prefetch={false}
            >
              Privacy Policy.
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
