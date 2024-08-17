import Input from "@/components/ui/input";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

const SignIn: React.FC<Props> = ({ className }) => {
  return (
    <div className="grow flex justify-center items-center ">
      <div className="group flex flex-col items-center max-w-96 h-auto border-2 border-black20 bg-white p-5 rounded-lg hover:border-black/50 transition-colors duration-500 ease-in-out">
        <h3 className="text-lg text-black/20 underline font-medium text-center mb-5 transition-colors duration-500 ease group-hover:text-black/100">
          Sign-In
        </h3>
        <Input name="Login" id="login" />
        <Input name="Password" id="password" />
        <button className="py-1 px-5 mt-4 mx-auto border-2 rounded-lg text-black/50 outline-none cursor-pointer transition-colors duration-500 ease-out focus:border-black/50 hover:border-black/50 focus:text-black/100 hover:text-black/100">
          Sign-In
        </button>
        <Link className="group outline-none" href="/sign-up">
          <div className="mt-2 text-sm text-black/50 underline cursor-pointer transition-colors duration-500 ease-in-out hover:text-black/100 group-focus:text-black/100">
            create new account
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
