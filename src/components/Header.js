import Navbar from "./NavbarDesigne";
import Footer from "./Footer";
import NavbarDesigne from "./NavbarDesigne";

function Header({ props }) {
  return (
    <div>
      <div>
        <NavbarDesigne />

      </div>
      <div className="text-center">
        <h1 className="diseño-titulo">{props}</h1>
      </div>
    </div>
  );
};

export default Header;