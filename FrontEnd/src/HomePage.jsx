import NavBar from "./components/NavBar/Navbar.jsx";
import Player from "./components/SpotityPlayer/Player.jsx";
import MainContainer from "./components/Main/mainCont.jsx";

function HomePage() {
  return (
    <>
      <NavBar />
      <MainContainer/>
      <Player />
    </>
  );
}

export default HomePage;
