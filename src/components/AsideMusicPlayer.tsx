import "../styles/AsideMusicPlayer.css";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { useRef, useState } from "react";
import data, { fs, path } from "../script/script.js";

function AsideMusicPlayer() {
  const [directory, setDirectory] = useState("");
  const [mp3Files, setMp3Files] = useState<string[]>([]);

  const [music, setMusic] = useState("");

  // creating a reference to audio
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleSetMusic = (mp3File: string) => {
    setMusic(mp3File);
    audioRef.current!.src = music;
  };

  const settingDirectoryCallback = (dataReceived: string) => {
    data.createDirectoryList();
    setDirectory(dataReceived);
  };

  const settingMp3FilesCallback = (dataReceived: string[]) => {
    setMp3Files(dataReceived);
  };

  data.receiveMessageDirectory(settingDirectoryCallback, "directory");
  data.receiveMp3List(settingMp3FilesCallback, "mp3Files");

  console.log(mp3Files);

  return (
    <aside className="aside-music">
      <div className="music-container">
        <div className="music-image-container">
          <img src="" alt="" />
        </div>
        <div className="music-name-container">
          {music !== "" ? (
            <h2 id="small-music-name">{music}</h2>
          ) : (
            <h2>Sem música</h2>
          )}
        </div>
        <div className="music-options-container">
          <audio
            ref={audioRef}
            controlsList="nodownload noplaybackrate"
            controls
          ></audio>
          <SkipNextIcon style={{ fontSize: "2rem" }} className="skip-icon" />
        </div>
      </div>
      <div className="music-list-container">
        {directory !== "" ? (
          <h2 id="small-directory-name">{directory}</h2>
        ) : (
          <h2>Aguardando diretório...</h2>
        )}
        <ul>
          {/* checking if mp3Files is not void */}
          {mp3Files.length !== 0 ? (
            mp3Files.map((mp3File) => {
              return (
                <li
                  onClick={() => {
                    handleSetMusic(mp3File);
                  }}
                >
                  {mp3File}
                </li>
              );
            })
          ) : (
            <li>Sem músicas!</li>
          )}
        </ul>
      </div>
    </aside>
  );
}

export default AsideMusicPlayer;
