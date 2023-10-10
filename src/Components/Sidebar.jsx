import { useState } from "react";

export const Sidebar = ({ setMenu }) => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const toggleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };
  return (
    <div className="h text-black">
      <nav className="">
        <ul className="">
          <li className="relative group">
            <button
              href="#"
              className=" hover:border-b-black focus:border-b-black focus:border-b-2 py-2"
              onClick={toggleSubmenu}
            >
              React
            </button>
            <ul
              className={`absolute flex flex-col ml-10 ${
                showSubmenu ? "block" : "hidden"
              } mt-2  space-y-2`}
            >
              <button
                onClick={() => setMenu("counter")}
                className="hover:border-b-black  focus:border-b-black focus:border-b-2 py-2"
              >
                Counter
              </button>
              <button
                onClick={() => setMenu("from")}
                className="hover:border-b-black focus:border-b-black focus:border-b-2 py-2"
              >
                From
              </button>
              <button
                onClick={() => setMenu("list")}
                className="hover:border-b-black focus:border-b-black focus:border-b-2 py-2"
              >
                List
              </button>
            </ul>
          </li>
          {/* Add more menu items here */}
        </ul>
      </nav>
    </div>
  );
};



export default Sidebar;