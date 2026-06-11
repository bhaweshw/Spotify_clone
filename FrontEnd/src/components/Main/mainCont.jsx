import SideBar from "../Main/UserPlaylist/playList.jsx";
import Hero from "../Main/HeroSection/Hero.jsx";
import SongMetaData from "../Main/MetaDisplay/SongMetaD.jsx";

function MainContainer() {
    
    return(<>
        <div className="main-Container w-full h-150 relative">
                <SideBar/>
                {/* <Hero/> */}
                {/* <SongMetaData/> */}
        </div>
    </>)
}

export default MainContainer