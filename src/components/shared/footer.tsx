"use client";

import React from "react";
import { useRouter } from "next/router";

import { cn } from "@/lib/utils";
import { Container } from "./container";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { URLS } from "@/lib/constants";

interface Props {
  className?: string;
}

const iconStyle = "cursor-pointer hover:fill-black/50";

export const Footer: React.FC<Props> = ({ className }) => {
  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <footer className="border-t-2">
      <Container>
        <div
          className={cn(
            "w-full py-2 px-5 flex justify-between items-center",
            className
          )}
        >
          <div className="flex justify-center gap-2">
            <FaInstagram
              className={iconStyle}
              size={32}
              onClick={() => handleClick(URLS.socials.instagram)}
            />
            <FaGithub
              className={iconStyle}
              size={32}
              onClick={() => handleClick(URLS.socials.gitHub)}
            />
            <FaLinkedin
              className={iconStyle}
              size={32}
              onClick={() => handleClick(URLS.socials.linkedIn)}
            />
          </div>
          <span className="text-2xl font-bold">2024</span>
        </div>
      </Container>
    </footer>
  );
};
