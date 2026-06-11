import { useContext, useState, useEffect } from "react";
import { stroketheme } from "./Navbar.jsx";

function HomeIcon() {
  const iconTheme = useContext(stroketheme);
  const [showTool, setShowTool] = useState(false);
  const [delay, setDelay] = useState(false);

  useEffect(() => {
    let timer;
    if (showTool) {
      timer = setTimeout(() => {
        setDelay(true);
      }, 500);
    } else {
      setDelay(false);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [showTool]);

  return (
    <div
      className="w-full h-full relative"
      onMouseEnter={() => setShowTool(true)}
      onMouseLeave={() => setShowTool(false)}
    >
      <button className="w-12 h-12 flex items-center justify-center rounded-full">
        <svg
          viewBox="0 0 24 24"
          width={24}
          height={24}
          className="fill-(--LightUI)"
        >
          <path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732z"></path>
        </svg>
      </button>
      {delay && (
        <span className=" absolute top-14 UniTool">
          Home
        </span>
      )}
    </div>
  );
}

export default HomeIcon;
