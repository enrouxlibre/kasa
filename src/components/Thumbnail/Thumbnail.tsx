import React from "react";
import "./Thumbnail.scss";

export default function Thumbnail({
  image,
  title,
  alt,
}: {
  image: string;
  title: string;
  alt?: string;
}) {
  return (
    <div className="thumbnail">
      <img src={image} alt={alt ? alt : title} />
      <h1>{title}</h1>
    </div>
  );
}
