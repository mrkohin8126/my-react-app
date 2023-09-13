import React, { useContext } from "react";
import MyContext from "../context/MyContext";

const Header = () => {
  const context = useContext(MyContext);
  const { setIsTokenExists } = context;

  const handleLogoutClicked = () => {
    // localStorage.removeItem("token");
    localStorage.clear();
    setIsTokenExists(false);
  };

  return (
    <div className="sticky top-0 flex justify-between items-center p-4 border-b bg-white/25">
      <div className="font-bold text-xl">Task</div>
      <button
        onClick={handleLogoutClicked}
        className="px-2 py-1 bg-teal-500 hover:scale-95 duration-300 rounded-md"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
