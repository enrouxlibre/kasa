import "./Home.scss";
import cliffImage from "@images/cliff.png";
import TitleImage from "../../components/TitleImage/TitleImage";
// import logements from "../../assets/logements.json";
import Thumbnail from "../../components/Thumbnail/Thumbnail";
import { useEffect, useState } from "react";

export interface logementType {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: {
    name: string;
    picture: string;
  };
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
}

export default function Home() {
  const [logements, setLogements] = useState<logementType[]>([]);
  useEffect(() => {
    fetch("http://localhost:5173/logements.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Not ok");
        }
        return response.json();
      })
      .then((result) => {
        setLogements(result);
      })
      .catch((err) => {
        console.error("Fetch error: ", err);
      });
  }, []);
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
