import HomeIcon from "./Homeicon.jsx";
import { createContext, useState } from "react";

export const stroketheme = createContext()
 

function Navbar() {

  const primaryColor = "#ffffffa1"

  const [iconStrokeTheme,setIconTheme] = useState("#ffffffa5")

  return (
    <nav className="text-white flex gap-0.5 justify-between items-center w-full h-[8.5vh] overflow-hidden">
      <div className="w-[min(60px,10vw)] ml-[28.5px]">
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_White.png" alt="" width="54.5%" height="auto"
        /></div>

      <div className="w-[35%] h-[85%] flex justify-end items-center gap-x-2 ml-60">
        <div className="w-[8.3%] h-[80%] bg-(--primaryColor) rounded-3xl flex justify-center items-center">
          <stroketheme.Provider value={iconStrokeTheme}>
            <HomeIcon />
          </stroketheme.Provider>
          </div>
        <div className="w-[85%] h-[80%] bg-(--primaryColor) rounded-3xl">
          <div><button></button></div>
          <div><button></button></div>
        </div>
      </div>

      <ul className="flex w-[25%] justify-around h-full">

        <li><button /></li>
        <li><button /></li>
        <li>whats new</li>
        <li>friend activity</li>
        <li>profile</li>
      </ul>

    </nav>
  )
}

export default Navbar
