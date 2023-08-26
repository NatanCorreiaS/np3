import AsideMusicPlayer from "../components/AsideMusicPlayer";
import AsideVideoPlayer from "../components/AsideVideoPlayer";
import MainMenu from "../components/MainMenu";
import "../styles/Home.css";

function Home() {
  return (
    <main>
      <MainMenu />
      <AsideMusicPlayer />
      <AsideVideoPlayer />
    </main>
  );
}

export default Home;
