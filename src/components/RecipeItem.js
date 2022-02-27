import React from "react";

function RecipeItem({ image, name, about}) {
  return (
    <div className="recipeItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p>{about}</p>
    </div>
  );
}


export default RecipeItem;

