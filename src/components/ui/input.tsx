import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
  name: string;
  id: string;
}

const Input: React.FC<Props> = ({ className, name, id }) => {
  return (
    <div className="flex-col relative mb-4">
      <input
        id={id}
        name={id}
        className={cn(
          "peer w-full py-2 px-3 outline-none border-2 border-black/20 rounded-md transition-colors duration-500 ease-in-out hover:border-black/35 focus:border-black/50",
          className
        )}
      />
      <label
        className="px-3 absolute -top-3 left-5 bg-white text-black/20 font-bold transition-colors duration-500 peer-hover:text-black/35 peer-focus:text-black/50"
        htmlFor={id}
      >
        {name}
      </label>
    </div>
  );
};

export default Input;
