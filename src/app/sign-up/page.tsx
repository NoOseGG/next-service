'use client'

import React from "react";
import Link from "next/link";

import Input from "@/components/ui/input";

interface Props {
  className?: string;
}

const SignUp: React.FC<Props> = ({ className }) => {

  return (
    <div className="grow flex justify-center items-center ">
      <div className="group flex flex-col items-center max-w-96 h-auto border-2 border-black20 bg-white p-5 rounded-lg hover:border-black/50 transition-colors duration-500 ease-in-out">
        <h3 className="text-lg text-black/20 underline font-medium text-center mb-5 transition-colors duration-500 ease group-hover:text-black/100">
          Sign-Up
        </h3>
        <Input name="Email" id="email" />
        <Input name="Password" id="password" />
        <Input name="Repeat password" id="repeatPassword" />
        <button className="py-1 px-5 mt-4 mx-auto border-2 rounded-lg text-black/50 outline-none cursor-pointer transition-colors duration-500 ease-out focus:border-black/50 hover:border-black/50 focus:text-black/100 hover:text-black/100">
          Sign-Up
        </button>
        <Link className="group outline-none" href="/sign-in">
          <div className="mt-2 text-sm text-black/50 underline cursor-pointer transition-colors duration-500 ease-in-out hover:text-black/100 group-focus:text-black/100">
            sign in account
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
