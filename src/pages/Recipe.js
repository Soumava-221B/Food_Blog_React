import React from "react";
import { RecipeList } from "../helpers/RecipeList";
import RecipeItem from "../components/RecipeItem";
import "../styles/Recipe.css";

function recipe() {
  return (
    <div className="recipe">
      <h1 className="recipeTitle">Our Recipe</h1>
      <div className="recipeList">
        {RecipeList.map((recipeItem, key) => {
          return (
            <RecipeItem
              key={key}
              image={recipeItem.image}
              name={recipeItem.name}
              about={recipeItem.about}
            />
          );
        })}
      </div>
    </div>
  );
}

export default recipe;
