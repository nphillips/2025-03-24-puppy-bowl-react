import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <h1> 🐶 Puppy Bowl!</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
};

export default NavBar;
