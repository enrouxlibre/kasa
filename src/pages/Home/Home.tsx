import React from "react";
import "./Home.scss";
import cliffImage from "/images/cliff.png";
import TitleImage from "../../components/TitleImage/TitleImage";

export default function Home() {
  return (
    <>
      <TitleImage
        image={cliffImage}
        alt="Home"
        title="Chez vous, partout et ailleurs"
      />
    </>
  );
}
