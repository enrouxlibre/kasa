import { ReactNode } from "react";
import "./Tag.scss";

export default function Tag({ children }: { children: ReactNode }) {
  return <div className="tag">{children}</div>;
}
