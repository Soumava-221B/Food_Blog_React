import React from "react";

function RecipeItem({ image, name, url}) {
  return (
    <div className="recipeItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <div className="ChilliChiken">
        <button>{url}</button>
          </div>
      
    </div>
  );
}


export default RecipeItem;

