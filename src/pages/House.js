import React from "react";
import { useParams, Navigate } from "react-router-dom";
import useFetch from "../Hooks/useFetchHook";
import ImageSlider from "../components/Carousel";
import Tags from "../components/Tags";
import Rating from "../components/Rating";
import DropDown from "../components/dropDown";

// Style
import "../style/House.css";

const House = () => {
  const { data } = useFetch();

  const { productId } = useParams();
  if (data) {
    if (data.length > 0) {
      const logement = data.find((logement) => logement.id === productId);
      if (!logement)  return <Navigate to="/error" replace={true} />
      const {
        title,
        pictures,
        description,
        host,
        rating,
        location,
        equipments,
        tags,
      } = logement;

      return (
        <div className="container">
          <div className="containerStyles">
            <ImageSlider slides={pictures} />
          </div>
          <div className="infoContainer">
            <div className="leftContainer">
              <div>
                <h1 className="title">{title}</h1>
                <p className="location">{location}</p>
              </div>
              <div className="tagsContainer">
                <Tags tags={tags} />
              </div>
            </div>

            <div className="rightContainer">
              <div className="host">
                <span className="hostName">{host.name}</span>
                <img
                  className="hostPicture"
                  src={host.picture}
                  alt={host.name}
                />
              </div>

              <Rating rating={rating} />
            </div>
          </div>

          <div className="bottomContainer">
            <DropDown title="Description" content={description} />
            <DropDown title="Équipements" content={equipments} />
          </div>
        </div>
      );
    }
  }
};

export default House;
