import React from "react";

export const PageContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex w-full">{children && <>{children}</>}</div>;
};
