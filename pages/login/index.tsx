import React from "react";
import Link from "next/link";
import { useNetwork } from "@/hooks/use-network";
import { useToast } from "@/hooks/use-toast";
import { signIn } from "next-auth/react";

import { Icons } from "@/components/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/seperator";
import { ToastAction } from "@/components/ui/toast";

const Login = () => {
  const { toast } = useToast();
  const isOnline = useNetwork();
  const [inputs, setInputs] = React.useState({ email: "", password: "" });

  const googleLogin = async () => {
    if (!isOnline) {
      showToaster("No Internet Connection");
      return;
    }

    const response = await signIn("google", { callbackUrl: "/" });

    if (response?.error) {
      showToaster(response.error);
    }
  };

  const githubLogin = async () => {
    const response = await signIn("github", { callbackUrl: "/" });

    if (response?.error) {
      showToaster(response.error);
    }
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setInputs((prev) => ({ ...prev, email }));
    console.log(inputs.email);
  };

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setInputs((prev) => ({ ...prev, password }));
    console.log(inputs.password);
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password } = inputs;

    const response = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (response?.error) {
      showToaster(response.error);
    }
  };

  const showToaster = (description: string) => {
    toast({
      title: "Login failed",
      description,
      variant: "destructive",
      action: <ToastAction altText="Try again">Try again</ToastAction>,
    });
  };

  return (
    <>
      {/* body */}
      <section className="flex h-[90vh] items-center justify-center px-4">
        {/* login modal  */}
        <div className="card bg flex w-full max-w-xl flex-col items-center p-10">
          linklane
          <form className="mt-5 w-full" onSubmit={submitHandler}>
            {/* email input */}
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Email address"
              onChange={inputChangeHandler}
              className="h-12 w-full"
            />
            {/* password input */}
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              required
              onChange={passwordChangeHandler}
              className="mt-3 h-12 w-full"
            />
            <div className="mt-6 flex justify-center">
              <Link
                href="/auth/forgot-password"
                className="font-bold text-blue-500 dark:brightness-125"
              >
                Forgot your password?
              </Link>
            </div>
            {/* login button */}
            <Button className="mt-5 h-14 w-full text-xl font-bold">
              Login
            </Button>
            <div className="mt-7 flex justify-center gap-2">
              Don&apos;t have an account?
              <Link
                href="/signup"
                className="font-bold text-blue-500 dark:brightness-125"
              >
                Signup
              </Link>
            </div>
          </form>
          {/* divider */}
          <div className="mt-3 flex w-full items-center justify-between">
            <Separator />
            <span className="px-2 font-bold text-slate-400 dark:text-zinc-400">
              OR
            </span>
            <Separator />
          </div>
          {/* buttons wrapper */}
          <div className="mt-3 flex w-full flex-col gap-3 md:flex-row">
            {/* google login button */}
            <Button
              onClick={googleLogin}
              className={buttonVariants({
                variant: "destructive",
                className: "flex w-full h-14",
              })}
            >
              <p className="flex gap-x-2 font-bold text-inherit">
                <Icons.google className="h-5" /> Sign in with Google
              </p>
            </Button>
            {/* github login button */}
            <Button
              onClick={githubLogin}
              className={buttonVariants({
                variant: "subtle",
                className: "flex w-full h-14",
              })}
            >
              <p className="flex gap-x-2 font-bold text-inherit">
                <Icons.gitHub className="h-5" /> Sign in with Github
              </p>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
