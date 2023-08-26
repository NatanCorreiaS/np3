import "../styles/AsideVideoPlayer.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import SkipNextIcon from "@mui/icons-material/SkipNext";


function AsideVideoPlayer() {
  return (
    <aside className="aside-video">
      <div className="left-video-container">
        <div className="video-img-container">
          <img src="" alt="" />
        </div>
        <div className="video-name-container">
          <h2>Video Name</h2>
        </div>
        <div className="video-options-container">
          <PlayArrowIcon style={{ fontSize: "2rem" }} className="play-icon" />
          <StopIcon style={{ fontSize: "2rem" }} className="stop-icon" />
          <SkipNextIcon style={{ fontSize: "2rem" }} className="skip-icon" />
        </div>
      </div>
      <div className="video-list-container">
        <h2>Music List</h2>
        <ul>
          <li>Videos</li>
          <li>Videos</li>
          <li>Videos</li>
          <li>Videos</li>
          <li>Videos</li>
          <li>Videos</li>
          <li>Videos</li>
          <li>Videos</li>
          <li>Videos</li>
          <li>Videos</li>
          <li>Videos</li>
          <li>Videos</li>
          <li>Videos</li>
          <li>Videos</li>
          <li>Videos</li>
          <li>Videos</li>
          <li>Videos</li>
          <li>Videos</li>
          <li>Videos</li>
          <li>Videos</li>
          <li>Videos</li>
          <li>Videos</li>
          <li>Videos</li>
          <li>Videos</li>
          <li>Videos</li>
          <li>Videos</li>
          <li>Videos</li>
        </ul>
      </div>
    </aside>
  );
}

export default AsideVideoPlayer;
