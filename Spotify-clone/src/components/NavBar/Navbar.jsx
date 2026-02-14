import { createContext, useState } from "react";
import NavButtons from "./NavButtons.jsx";
import SearchBar from "./Searchbar.jsx";
import SpotifyIcon from "./SpotifyIcon.jsx";
import HomeIcon from "./Homeicon.jsx";

export const stroketheme = createContext();

function Navbar() {
  const primaryColor = "#ffffffa1";

  const [iconStrokeTheme, setIconTheme] = useState("#ffffffa5");

  return (
    <nav className="text-white flex gap-0.5 justify-between items-center w-full h-[64.8px]">
      <SpotifyIcon />
      <div className="w-[35.50%] h-[85%] flex justify-end items-center gap-x-2 ml-86">
        <stroketheme.Provider value={iconStrokeTheme}>
          <div
            className="bg-(--primaryColor) rounded-3xl flex justify-center items-center
                       hover:scale-103
                       hover:bg-(--HoveringEff) "
          >
            <HomeIcon />
          </div>
          <SearchBar />
        </stroketheme.Provider>
      </div>

      <stroketheme.Provider value={iconStrokeTheme}>
        <NavButtons />
      </stroketheme.Provider>
    </nav>
  );
}

export default Navbar;
