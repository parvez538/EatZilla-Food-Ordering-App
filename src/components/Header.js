import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Logo = () => {
  return (
    <>
      <img
        className="w-[200px] m-3 p-3"
        src="https://eatzilla.info/bchain/hyperledger/assets/img/logos/eatzilla-color.png"
      />
    </>
  );
};

const NavBar = () => {
  const [IsLoggedIn, setIsLoggedIn] = useState(true);

  const data = useSelector((store) => store.cart);

  // console.log(data.items)

  return (
    <ul className="flex">
      <li className="m-3 p-3 text-orange-500 hover:text-orange-700 text-md">
        <Link to="/">
          <i className="fa fa-home"> Home</i>
        </Link>
      </li>
      <li className="m-3 p-3 text-orange-500  hover:text-orange-700 text-md">
        <Link to="/offers">
          <i className="fa fa-gift"> Offers</i>
        </Link>
      </li>
      <li className="m-3 p-3 text-orange-500  hover:text-orange-700 text-md">
        <Link to="/help">
          <i className="fa fa-globe"> Help</i>
        </Link>
      </li>

      <li className="m-3 p-3 text-orange-500  hover:text-orange-700 text-md">
        <Link to="/Cart">
          <i className="fa fa-shopping-cart"> Cart ( {data.items.length} )</i>{" "}
        </Link>
      </li>

      {IsLoggedIn ? (
        <button
          className="m-3 p-3 text-orange-500  hover:text-orange-700 text-md"
          onClick={() => {
            setIsLoggedIn(false);
          }}
        >
          <i className="fa fa-fw fa-user"> Login </i>
        </button>
      ) : (
        <button
          className="m-3 p-3 text-orange-500  hover:text-orange-700 text-md"
          onClick={() => {
            setIsLoggedIn(true);
          }}
        >
          <i className="fa fa-fw fa-user"> Logout </i>
        </button>
      )}
    </ul>
  );
};

const Header = () => {
  return (
    <>
      <div className="flex justify-around">
        <Logo />
        <NavBar />
      </div>
    </>
  );
};

export default Header;
