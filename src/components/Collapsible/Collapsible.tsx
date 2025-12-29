import React from "react";
import "./Collapsible.scss";
import arrow from "/images/arrow.png";

export default function Collapsible({
  children,
  title,
  clickImg = false,
}: {
  children: React.ReactNode;
  title: string;
  clickImg?: boolean;
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`collapsible ${!isOpen ? "hidden" : ""}`}>
      <h2
        className={clickImg ? "" : "clickable"}
        onClick={clickImg ? undefined : toggleCollapsible}
      >
        <span>{title}</span>
        <img
          className={clickImg ? "clickable" : ""}
          onClick={clickImg ? toggleCollapsible : undefined}
          src={arrow}
          alt="arrow"
        />
      </h2>
      <div>{children}</div>
    </div>
  );
}
