import React from "react";

import { cn } from "../../lib/utils";
import { getUsers } from "@/api/users";
import { LoginButton } from "../ui/loginButton";
import { useRouter } from "next/router";
import Link from "next/link";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const menuItemStyle = "cursor-pointer hover:text-black/50 hover:underline";

  return (
    <header className={cn("flex p-3 justify-between items-center", className)}>
      <Link href="/">
        <img
          className="h-auto w-40 cursor-pointer"
          src="/logo.svg"
          alt="logo"
        />
      </Link>
      <div className="flex justify-center items-center gap-2">
        <Link href="/">
          <span className={menuItemStyle}>Home</span>
        </Link>
        <Link href="/todo">
          <span className={menuItemStyle}>Todo</span>
        </Link>
        <Link href="weather">
          <span className={menuItemStyle}>Weather</span>
        </Link>
        <Link href="news">
          <span className={menuItemStyle}>News</span>
        </Link>
      </div>
      <Link href="/sign-in">
        <LoginButton />
      </Link>
    </header>
  );
};
