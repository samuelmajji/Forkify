import "./fullview.css";
import { useEffect, useState } from "react";

const FullView = function ({ recipe, handleBookmark }) {
  const [recipeData, setRecipeData] = useState(null);
  useEffect(() => {
    if (recipe && recipe.id) {
      const fetchRecipes = async () => {
        try {
          const res = await fetch(
            `https://forkify-api.herokuapp.com/api/v2/recipes/${recipe.id}`
          );
          const data = await res.json();
          setRecipeData(data.data.recipe);
        } catch (err) {
          alert(err);
        }
      };

      fetchRecipes();
    }
  }, [recipe]);

  if (!recipe) {
    return <div>No recipe data available.</div>;
  }

  if (!recipeData) {
    return <div>Loading...</div>; // Show a loading message or spinner
  }

  return (
    <div className="full-container">
      <figure className="recipe__fig">
        <img
          src={recipeData.image_url ? recipeData.image_url : "icon-clock.png"}
          alt={recipeData.title ? recipeData.title : "Recipe"}
          className="recipe__img"
        />
        <h1 className="recipe__title">
          <span>{recipeData.title}</span>
        </h1>
      </figure>

      <div className="recipe__details">
        <div className="recipe__info">
          <img className="recipe__info-icon" src="icon-clock.png" alt="Clock" />
          <span className="recipe__info-data recipe__info-data--minutes">
            {recipeData.cooking_time}
          </span>
          <span className="recipe__info-text">minutes</span>
        </div>
        <div className="recipe__info">
          <svg className="recipe__info-icon">
            <use href="src/img/icons.svg#icon-users"></use>
          </svg>
          <span className="recipe__info-data recipe__info-data--people">
            {recipeData.servings}
          </span>
          <span className="recipe__info-text">servings</span>

          <div className="recipe__info-buttons">
            <button className="btn--tiny btn--increase-servings">
              <img
                className="recipe__info-icon"
                src="icon-minus.png"
                alt="icon-minus"
              ></img>
            </button>
            <button className="btn--tiny btn--increase-servings">
              <img
                className="recipe__info-icon"
                src="icon-plus.png"
                alt="icon-plus"
              ></img>
            </button>
          </div>
        </div>

        <div className="recipe__user-generated">
          <img
            className="recipe__info-icon"
            src="icon-user.png"
            alt="icon-user"
          ></img>
        </div>
        <div
          className="recipe__user-generated"
          onClick={() => {
            handleBookmark(recipeData);
          }}
        >
          <img
            className="recipe__info-icon"
            src="icon-bookmark.jpeg"
            alt="icon-bookmark"
          ></img>
        </div>
      </div>

      <div className="recipe__ingredients">
        <h2 className="heading--2">Recipe ingredients</h2>
        <ul className="recipe__ingredient-list">
          {recipeData.ingredients.map((ing, index) => (
            <li key={index} className="recipe__ingredient">
              <img
                className="recipe__info-icon"
                src="icon-check.png"
                alt="icon-check"
              ></img>
              <div className="recipe__quantity">{ing.quantity}</div>
              <div className="recipe__description">
                <span className="recipe__unit">{ing.unit}</span>
                {ing.description}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="recipe__directions">
        <h2 className="heading--2">How to cook it</h2>
        <p className="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span className="recipe__publisher">The Pioneer Woman</span>. Please
          check out directions at their website.
        </p>
        <a className="btn--small recipe__btn" href={recipeData.source_url}>
          <span>Directions</span>
          <svg className="search__icon">
            <use href="src/img/icons.svg#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default FullView;
