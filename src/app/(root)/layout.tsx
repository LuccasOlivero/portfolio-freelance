import React from "react";

export default function SetUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
