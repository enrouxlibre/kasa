import React from "react";
import "./Home.scss";
import cliffImage from "/images/cliff.png";
import TitleImage from "../../components/TitleImage/TitleImage";
import logements from "../../assets/logements.json";
import Thumbnail from "../../components/Thumbnail/Thumbnail";

export default function Home() {
  console.log(logements);
  const logement_list = logements.map((logement) => (
    <li key={logement.id}>
      <a href={"/housing/" + logement.id}>
        <Thumbnail image={logement.cover} title={logement.title} />
      </a>
    </li>
  ));

  return (
    <>
      <TitleImage
        image={cliffImage}
        alt="Home"
        title={
          <>
            Chez vous,
            <wbr /> partout et ailleurs
          </>
        }
      />
      <ul className="thumbnails-list">{logement_list}</ul>
    </>
  );
}
