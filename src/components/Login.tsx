'use client';

import Link from "next/link";
import { FieldValues, SubmitHandler } from "react-hook-form";
import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@heroui/button";
import { useUserLogin } from "@/src/hooks/auth.hook";
import CtForm from "@/src/components/form/CtFrom";
import CtInput from "@/src/components/form/CtInput";
const Login = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const redirect = searchParams.get("redirect");
  const { mutate, isPending, isSuccess,  } = useUserLogin();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    mutate(data);
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      router.push(redirect || "/");
    }
  }, [isPending, isSuccess]);

  return (
    <>
      {isPending && "loading..."}
      <div className="flex w-full flex-col items-center justify-center">
        <div className="w-[35%]">
          <CtForm onSubmit={onSubmit}>
            <div className="py-3">
              <CtInput label="Email Address" name="email" type="email" />
            </div>
            <div className="py-3">
              <CtInput label="Password" name="password" type="password" />
            </div>

            <Button
              className="my-3 w-full rounded-md bg-default-900 font-semibold text-default"
              size="lg"
              type="submit"
            >
              Login
            </Button>
          </CtForm>
          <div className="text-center mt-4 text-sm text-gray-700">
            Don’t have an account?{" "}
            <Link className="text-blue-600 underline" href={"/register"}>
              Join the Community
            </Link>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Login;
