import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../Hooks/useFetchHook";
import "../style/Card.sass";

const Card = () => {
  const { data } = useFetch();

  if (data) {
    if (data.length > 0) {
      return data.map((logement) => {
        return (
          <Link to={`/House/${logement.id}`} key={logement.id}>
            <div className="card">
              <img src={logement.cover} alt={logement.title}></img>
              <div className="overlay"></div>
              <h2>{logement.title}</h2>
            </div>
          </Link>
        );
      });
    }
  }
};
export default Card;
