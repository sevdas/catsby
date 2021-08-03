import React, { useContext } from "react";
import { MyContext } from "../Context";
import Header from "../components/Header";

const Cats = () => {
  const { catBreeds } = useContext(MyContext);
  console.log(catBreeds);

  const imgStyle = {
    width: "20rem",
    height: "auto",
    margin: "5%",
  };

  const catBreedsElement = catBreeds
    .filter((breed) => breed.image !== undefined)
    .map((breed) => (
      <div key={breed.id} className="cat-list">
        <img src={breed.image.url} alt={breed.name} style={imgStyle} />
        <div className="cat">
          <h1>{breed.name}</h1>
          <p>{breed.description}</p>
          <p>
            <small>Breed Temperament:</small> {breed.temperament}
          </p>
          <p>
            <small>Affection Level:</small>
            {breed.affection_level}
          </p>
          <p>
            <small>Short Legs:</small>
            {breed.short_legs}
          </p>
        </div>
      </div>
    ));

  return (
    <>
      <Header />
      {catBreedsElement}
    </>
  );
};

export default Cats;
