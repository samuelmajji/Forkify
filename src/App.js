import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import FullView from "./Components/Fullview";
import React, { useEffect, useState } from "react";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [recipe, setRecipe] = useState(null);
  const [search, setSearch] = useState("egg");
  const [bookmark, setBookmark] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}&key=1aecc429-2098-4155-bac1-ed5dfab853ae`
        );
        const data = await res.json();
        setRecipes(data.data.recipes);
      } catch (err) {
        alert(err);
      }
    };

    fetchRecipes();
  }, [search]);

  const handleClick = function (id) {
    const tempRecipe = recipes.find((recipe) => recipe.id === id);
    setRecipe(tempRecipe);
  };

  const handleSearch = function (searchTerm) {
    setSearch(searchTerm);
  };

  const handleBookmark = function (id) {
    const add = bookmark.every((book) => {
      return book !== id;
    });
    if (add) {
      setBookmark((pre) => {
        return [...pre, id];
      });
    }
  };

  return (
    <div className="main-container">
      <div className="header-main">
        <Header
          handleSearch={handleSearch}
          bookmarks={bookmark}
          handleClick={handleClick}
        />
      </div>
      <div>
        <Sidebar recipes={recipes} handleClick={handleClick} />
      </div>
      <div>
        <FullView recipe={recipe} handleBookmark={handleBookmark} />
      </div>
    </div>
  );
}

export default App;
