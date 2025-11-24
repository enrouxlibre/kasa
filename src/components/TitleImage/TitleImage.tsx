import React from "react";
import "./TitleImage.scss";

export default function TitleImage({
  image,
  title,
  alt = "Title image",
}: {
  image: string;
  title?: string;
  alt?: string;
}) {
  return (
    <div className="title-image">
      <img className={title ? "darker" : ""} src={image} alt={alt} />
      {title && <h1>{title}</h1>}
    </div>
  );
}
