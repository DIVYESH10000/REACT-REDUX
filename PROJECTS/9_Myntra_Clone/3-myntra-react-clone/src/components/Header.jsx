import { IoMdPerson } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import { IoBag, IoColorFill } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const bag = useSelector((store) => store.bag);
  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img
            className="myntra_home"
            src="images/myntra_logo.webp"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav className="nav_bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">
          Studio <sup>New</sup>
        </a>
      </nav>
      <div className="search_bar">
        <span className="material-symbols-outlined search_icon">search</span>
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className="action_bar">
        <div className="action_container">
          <span className="action_name">
            <IoMdPerson />
          </span>
        </div>

        <div className="action_container">
          <span className="action_name">
            <div className="wishlistIcon">
              <IoIosHeart color="red" />
            </div>
          </span>
        </div>

        <Link className="action_container" to="/bag">
          <span className="action_name">
            <IoBag />
          </span>
          <span className="bag-item-count">{bag.length}</span>
        </Link>
      </div>
    </header>
  );
};
export default Header;
