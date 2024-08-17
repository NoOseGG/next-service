import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Container: React.FC<Props> = ({ children }) => {
  return <div className="max-w-[1920x] w-full mx-auto">{children}</div>;
};
