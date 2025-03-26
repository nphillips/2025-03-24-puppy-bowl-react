import { Link } from "react-router-dom";

const NavBar = ({ currentPuppy }) => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        {currentPuppy && (
          <Link to={`/players/${currentPuppy.id}`} className="current-player">
            {currentPuppy.name}
          </Link>
        )}
      </nav>
    </>
  );
};

export default NavBar;
