import { Link } from "react-router-dom";

const Sidebar = () => {
  //{ selectedTab, setSelectedTab }
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
      style={{ width: "180px" }} // text-bg-dark <=>
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li
          className="nav-item"

          // Not Needed
          // onClick={() => {
          //   console.log("Home post clicked");
          //   //   setSelectedTab("Home");
          // }}
        >
          <Link // Instead of anchor tag we use Link tag so whole page doesn't ged re-rendered
            to="/"
            className="nav-link text-white"
            // {`nav-link text-white ${selectedTab === "Home" && "active" }`}
            aria-current="page"
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </Link>
        </li>
        <li

        // Not Needed
        // onClick={() => {
        //   console.log("Create post clicked");
        //   //   setSelectedTab("Create Post");
        // }}
        >
          <Link
            to="/create-post"
            className="nav-link text-white"
            // {`nav-link text-white ${ selectedTab === "Create Post" && "active"}`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Create Post
          </Link>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://cdnb.artstation.com/p/assets/images/images/016/067/975/large/charles-logan-spaceghost.jpg?1550763590"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>SpaceGhost</strong>
        </a>
        <ul className="dropdown-menu text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
