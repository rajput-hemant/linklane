import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Register = () => {
  const [inputs, setInputs] = React.useState({
    email: "",
    password: "",
  });

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

  return (
    <>
      {/* body */}
      <section className="flex h-[90vh] items-center justify-center px-4">
        {/* login modal  */}
        <div className="card bg flex w-full max-w-xl flex-col items-center p-10">
          linklane
          <form className="mt-5 w-full" action="#" method="POST">
            {/* username input */}
            <Input
              id="username"
              name="username"
              type="text"
              required
              placeholder="Username"
              onChange={inputChangeHandler}
              className="h-[50px] w-full sm:mr-1.5"
            />
            {/* email input */}
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Email address"
              onChange={inputChangeHandler}
              className="mt-3 h-[50px] w-full"
            />
            {/* password input */}
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              required
              onChange={passwordChangeHandler}
              className="mt-3 h-[50px] w-full"
            />
            {/* confirm password input */}
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Confirm Password"
              required
              onChange={passwordChangeHandler}
              className="mt-3 h-[50px] w-full"
            />
            {/* login button */}
            <CButton className="mt-5 bg-black text-xl font-bold text-white dark:bg-white dark:text-black">
              Login
            </CButton>
            <div className="mt-7 flex justify-center gap-2">
              Already have an account?
              <Link
                href="/login"
                className="font-bold text-blue-500 dark:brightness-125"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;

const CButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        {...props}
        className={cn(
          "dark:bg-grey-500 flex h-[55px] w-full bg-slate-200 text-slate-600 dark:border-zinc-700 dark:text-white",
          className
        )}
      >
        <p className="flex gap-x-4 font-bold text-inherit">{children}</p>
      </Button>
    );
  }
);

CButton.displayName = "CButton";
