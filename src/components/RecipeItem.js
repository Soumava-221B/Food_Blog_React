import React from "react";
import {Link} from "react-router-dom";

function RecipeItem({ image, name, url}) {
  return (
    <div className="recipeItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <div className="ChilliChiken">
        <button><Link
  to={{
    pathname: "/courses",
    search: "?sort=name",
    hash: "#https://api.alat.ng/RegistrationApi/index.html",
    state: { fromDashboard: true }
  }}
/>read</button>
          </div>
      
    </div>
  );
}


export default RecipeItem;

