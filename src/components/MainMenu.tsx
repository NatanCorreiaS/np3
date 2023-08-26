import "../styles/MainMenu.css";
import { useState, useEffect } from "react";
import data from "../script/script.js";

function MainMenu() {
  const [directory, setDirectory] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
  };

  const buttonFunction = () => {
    data.send(inputValue, "directory");
  };

  return (
    <section className="main-menu">
      <div className="directory-selection-container">
        {inputValue !== "" ? (
          <h3>
            Diretório Selecionado:{" "}
            <span className="low-text-directory">{inputValue}</span>
          </h3>
        ) : (
          <h3>Sem diretório declarado</h3>
        )}
        {/* <h3>Directory Selection</h3> */}
        <div className="directory-selection">
          <input
            placeholder="Please insert your directory here"
            type="text"
            name="directory"
            id="directory"
            value={inputValue} // o valor do input é o valor do estado
            onChange={handleInputValue} // a função que vai mudar o valor do estado
          />
        </div>
        <button onClick={buttonFunction} id="btn-directory">
          Select Directory
        </button>
      </div>
      <div className="video-container">
        <h3>Video</h3>
        <div className="video">
          <video src="" controls></video>
        </div>
      </div>
    </section>
  );
}

export default MainMenu;
