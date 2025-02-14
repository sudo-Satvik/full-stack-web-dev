import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-around items-center py-4 bg-gray-400">
      <h1 className="font-bold text-2xl">React Router</h1>
      <ul className="flex gap-4">
        <Link to="/"><li>Home</li></Link>
        <Link to="/products"><li>Products</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
        <Link to="/about"><li>About</li></Link>
      </ul>
    </div>
  );
};

export default Navbar;
