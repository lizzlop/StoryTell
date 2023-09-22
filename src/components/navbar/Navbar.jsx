import { Link } from "react-router-dom";
import icon from "../../assets/img/icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Navbar = () => {
  const [menuCollapsed, setMenuCollapsed] = useState(false);

  const onMenu = () => {
    setMenuCollapsed(!menuCollapsed);
  };
  return (
    <>
      <nav className="bg-white ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center no-underline">
            <img src={icon} className="h-12 mr-1" alt="Storytell Logo" />
            <span className="italic font-serif text-customOrange text-2xl">
              StoryTell
            </span>
          </Link>

          <button className="md:hidden lg:hidden" onClick={onMenu}>
            <FontAwesomeIcon
              icon={faBars}
              className="mr-2 text-customOrange"
              size="lg"
            />
            {menuCollapsed ? (
              // TODO: Cambiar esto
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            ) : (
              <p />
            )}
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="list-none font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                {/* TODO: Cambiar links cuando se tengan las páginas */}
                <Link to="/" className="flex items-center no-underline">
                  <span className="italic font-serif text-customOrange text-xl ">
                    Library
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/" className="flex items-center no-underline">
                  <span className="italic font-serif text-customOrange text-xl ">
                    Groups
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/" className="flex items-center no-underline">
                  <span className="italic font-serif text-customOrange text-xl ">
                    Profile
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
