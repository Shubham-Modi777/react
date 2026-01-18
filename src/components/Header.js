import { LOGO_URL } from "../utils/constant";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const OnlineStatus = useOnlineStatus(); // custom hook

  const { loggedInUser } = useContext(UserContext);
  console.log("data", loggedInUser);

  return (
    <div className="flex justify-between items-center p-5 bg-amber-100 border-solid border-amber-200 rounded-2xl m-2">
      <div className="logo-container">
        <img
          className="w-25 h-auto contain-content rounded-2xl"
          src={LOGO_URL}
        />
        <h1>My Food Point 💕</h1>
      </div>
      <div className="nav-items">
        <ul className="flex gap-4 font-medium p-1 text-amber-950">
          <li className="text-black">
            Online Status: {OnlineStatus ? "✅" : "🔴"}
          </li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact us</Link>
          </li>
          <li>
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li>Cart</li>
          <li className=" font-bold">{loggedInUser}</li>
          <button
            className=" text-sm text-amber-50 p-1 m-b-1 bg-blue-600 rounded-sm"
            onClick={() => {
              btnName === "login" ? setBtnName("logout") : setBtnName("login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
