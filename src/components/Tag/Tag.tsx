import React from "react";
import "./Tag.scss";

export default function Tag({ children }: { children: React.ReactNode }) {
  return <div className="tag">{children}</div>;
}
