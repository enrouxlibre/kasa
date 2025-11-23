import React from "react";
import "./TitleImage.scss";

interface TitleImageProps {
  image: string;
  title?: string;
  alt?: string;
}

export default function TitleImage({
  image,
  title,
  alt = "Title image",
}: TitleImageProps) {
  return (
    <div className="title-image">
      <img className={title ? "darker" : ""} src={image} alt={alt} />
      {title && <h1>{title}</h1>}
    </div>
  );
}
