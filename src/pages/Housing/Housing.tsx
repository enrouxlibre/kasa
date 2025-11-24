import React, { useEffect } from "react";
import "./Housing.scss";
import { useNavigate, useParams } from "react-router";
import logements from "../../assets/logements.json";
import Slideshow from "../../components/Slideshow/Slideshow";
import Collapsible from "../../components/Collapsible/Collapsible";
import Tag from "../../components/Tag/Tag";

export default function Housing() {
  const { id } = useParams();
  const navigate = useNavigate();
  const logement = logements.find((logement) => logement.id === id);

  useEffect(() => {
    if (!logement) {
      navigate("/Error404");
    }
  }, [logement, navigate]);

  if (!logement) {
    return null;
  }

  return (
    <div className="housing">
      <Slideshow images={logement.pictures} />
      <div className="housing-info">
        <div className="housing-info-one">
          <h1>{logement.title}</h1>
          <div className="housing-location">{logement.location}</div>
          <div className="housing-tags">
            {logement.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </div>
        </div>
        <div className="housing-info-two">
          <div className="housing-host">
            <span className="housing-host-name">{logement.host.name}</span>
            <img
              className="housing-host-picture"
              src={logement.host.picture}
              alt={logement.host.name}
            />
          </div>
          <div className="housing-rating">
            {[...Array(5)].map((_, index) => {
              if (index < parseInt(logement.rating)) {
                return (
                  <span className="housing-star" key={index}>
                    ★
                  </span>
                );
              } else {
                return (
                  <span className="housing-star grey" key={index}>
                    ★
                  </span>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className="housing-collapsibles">
        <Collapsible title="Description">
          <p>{logement.description}</p>
        </Collapsible>
        <Collapsible title="Équipements">
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapsible>
      </div>
    </div>
  );
}
