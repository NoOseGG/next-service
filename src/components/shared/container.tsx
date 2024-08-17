import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Container: React.FC<Props> = ({ children }) => {
  return <div className="max-w-[1280px] w-full mx-auto">{children}</div>;
};
