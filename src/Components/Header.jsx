import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

const Header = function ({ handleSearch, bookmarks, handleClick }) {
  const [value, setValue] = useState("");
  const [over, setOver] = useState(false);
  console.log(bookmarks);
  const handleSearchClick = function () {
    if (value.trim()) {
      handleSearch(value.trim());
      setValue(""); // Clear the input after search
    }
  };

  const handleChange = function (e) {
    setValue(e.target.value);
  };

  const handleEnter = function () {
    setOver(true);
  };

  const handleLeave = function () {
    setOver(false);
  };

  return (
    <>
      <header className="header">
        <div className="logo">🍖🍖</div>
        <input
          onChange={handleChange}
          type="text"
          className="search-bar"
          placeholder="Search..."
          value={value}
        />
        <button onClick={handleSearchClick} className="google-search-btn">
          Search
        </button>
        <div className="icons">
          <a className="link" href="/form">
            <img
              className="recipe__info-icon"
              src="icon-plus.png"
              alt="icon-plus"
            ></img>
          </a>
          <div
            className="bookmark-container"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <div className="link">
              <img
                className="recipe__info-icon"
                src="icon-bookmark.jpeg"
                alt="icon-bookmark"
              ></img>
            </div>
            {over && (
              <div className="dropdown-menu">
                <div className="sidebar-flex">
                  {bookmarks.length ? (
                    bookmarks.map((bookmark, index) => (
                      <div
                        key={bookmark.id}
                        className="sidebar"
                        onClick={() => {
                          return handleClick(bookmark.id);
                        }}
                      >
                        <img
                          className="sidebar-img"
                          src={bookmark.image_url}
                          alt={bookmark.title}
                        />
                        <a className="sidebar-title" href={bookmark.source_url}>
                          {bookmark.title}
                        </a>
                        <p className="sidebar-pub">{bookmark.publisher}</p>
                      </div>
                    ))
                  ) : (
                    <p className="dropdown-item">No bookmarks</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
