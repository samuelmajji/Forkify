import "./sidebar.css";

const Sidebar = function (props) {
  console.log(props);
  return (
    <div className="sidebar-flex">
      {props.recipes.map((recipe) => (
        <div
          onClick={() => {
            props.handleClick(recipe.id);
          }}
          key={recipe.id}
          className="sidebar"
        >
          <img
            className="sidebar-img"
            src={recipe.image_url}
            alt={recipe.title}
          />
          <a className="sidebar-title" href={recipe.source_url}>
            {recipe.title}
          </a>
          <p className="sidebar-pub">{recipe.publisher}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

// 1aecc429-2098-4155-bac1-ed5dfab853ae
