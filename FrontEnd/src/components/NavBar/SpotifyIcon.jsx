import { useState,useEffect } from "react";

function SpotifyIcon() {
  const [Coordinates, setCoordinates] = useState({ X: 0, Y: 0 });
  const [showInfo, setShowInfo] = useState(false);
  const [delay,setDelay] = useState(false)

  useEffect(() => {
    let timer;
    if (showInfo) {
      setTimeout(() => {
        setDelay(true)
      }, 800);
    }else{
      setDelay(false)
    }
  
    return () => {
      clearTimeout(timer)
    }
  }, [showInfo])
  

  function HandleCoordinates(event) {
    setCoordinates({
      X: event.clientX + 8,
      Y: event.clientY + 15,
    });
  }

  return (
    <div
      className="w-15 ml-[28.5px] hover cursor-pointer relative"
      onMouseEnter={() => setShowInfo(false)}
      onMouseLeave={() => setShowInfo(false)}
      onMouseMove={HandleCoordinates}
    >
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_White.png"
        alt=""
        width="54.5%"
        height="auto"
      />

      {delay && (
        <span
          id="infobox1"
          className="inline-block font-spotify font-extralight text-[12.5px] px-1.5 pb-1 border spotify-logo z-10 text-center"
          style={{
            left: `${Coordinates.X}px`,
            top: `${Coordinates.Y}px`,
            position: "fixed",
          }}
        >
          Spotify
        </span>
      )}
    </div>
  );
}

export default SpotifyIcon;
