"use client";

import React, { useState } from "react";

import { FaUser } from "react-icons/fa";
import Login from "../shared/login";

export const LoginButton = () => {
  return (
    <>
      <div className="py-1 px-2 flex justify-between items-center gap-1 cursor-pointer border-2 rounded-md hover:bg-slate-400">
        <FaUser size={24} />
        <span>Личный кабинет</span>
      </div>
    </>
  );
};
