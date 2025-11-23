import React from "react";
import "./Error404.scss";

export default function Error404() {
  return (
    <div className="error-404">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <a href="/">Retourner sur la page d'accueil</a>
    </div>
  );
}
