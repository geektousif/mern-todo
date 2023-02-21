import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-center  ">
        <nav className="self-center w-full max-w-7xl  ">
          <div className="flex flex-col lg:flex-row justify-around items-center ">
            <h1 className="uppercase pl-5 py-4 text-lg font-sans font-bold">
              Todo
            </h1>
            <ul className="hidden lg:flex items-center text-[18px] font-semibold pl-32">
              <li className="hover:underline  underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <a>Home</a>
              </li>

              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <a>About</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      ;
    </div>
  );
};

export default Navbar;
