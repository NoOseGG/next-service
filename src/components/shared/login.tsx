import React from "react";

import { cn } from "@/lib/utils";
import Input from "../ui/input";

interface Props {
  className?: string;
}

const Login: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 bg-black/70",
        className
      )}
    >
      <div className="p-3 w-80 h-auto bg-white rounded-lg flex-col items-center">
        <h2 className="text-lg text-center underline">
          Войти в личный кабинет
        </h2>
        <Input className="mt-5" placeholder="Введите логин" />
        <Input className="mt-2" placeholder="Введите пароль" />
        <button className=" mt-3 border-2 text-black/50 border-black/20 py-1 px-6 rounded-md cursor-pointer hover:text-black/100 hover:border-black/50 hover:bg-gray-200">
          Войти
        </button>
      </div>
    </div>
  );
};

export default Login;
