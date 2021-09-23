import React from "react";
import RecipeIngredientEdit from "./RecipeIngredientEdit";

export default function RecipeEdit() {
  return (
    <div className="recipe-edit">
      <div className="recipe-edit__remove-button-container">
        <button className="btn recipe-edit__remove-button">&times;</button>
      </div>
      <div className="recipe-edit__details-grid">
        <label 
          className="recipe-edit__label" 
          htmlFor="name">
          Name
        </label>
        <input
          className="recipe-edit__input"
          type="text"
          name="name"
          id="name"
        />
        <label 
          className="recipe-edit__label" 
          htmlFor="cookTime">
          Cook Time
        </label>
        <input
          className="recipe-edit__input"
          type="text"
          name="cookTime"
          id="cookTime"
        />
        <label 
          className="recipe-edit__label" 
          htmlFor="servings">
          Servings
        </label>
        <input
          className="recipe-edit__input"
          type="number"
          min="1"
          name="servings"
          id="servings"
        />
        <label 
          className="recipe-edit__label" 
          htmlFor="instructions">
          Instructions
        </label>
        <textarea 
          name="instructions" 
          id="instructions"
          className="recipe-edit__input"
        />
      </div>
      <br />
      <label className="recipe-edit__label">Ingredients</label>
      <div className='recipe-edit__ingredient-grid'>
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        <RecipeIngredientEdit />
        <RecipeIngredientEdit />
      </div>
      <div className='recipe-edit__add-ingredient-btn-container'>
        <button className='btn btn--primary' type="button">Add Ingredient</button>
      </div>
    </div>
  );
}
