
import "./Nav.css";

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container">
      
        <a href="" className="nav-icons">
        cart
        </a>
        <a href="" className="nav-icons">
         user
        </a>
      </div>
    </nav>
  );
};

export default Nav;
