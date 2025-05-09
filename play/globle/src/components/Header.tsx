import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { getPath } from "../util/svg";

type Props = {
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  setReSpin: React.Dispatch<React.SetStateAction<boolean>>;
  setShowStats: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({ setScreen, setReSpin, setShowStats }: Props) {
  const { theme } = useContext(ThemeContext);

  function reRenderGlobe() {
    setReSpin(true);
    setScreen("Game");
  }

  const svgColour = theme.nightMode ? "rgb(209 213 219)" : "black";

  return (
    <header className="mt-8 h-10 relative dark:text-gray-300 z-10">
      <div className="relative h-full">
        <div className="space-x-1 flex absolute left-0 bottom-1">
          <button onClick={() => setScreen("Help")} aria-label="Help">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path fill={svgColour} d={getPath("help")}></path>
            </svg>
          </button>
        </div>
        <button
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 "
          onClick={reRenderGlobe}
        >
          <h1
            className="text-4xl font-extrabold"
            style={{ fontFamily: "'Montserrat'" }}
          >
            GLOBLE
          </h1>
        </button>
        <div className="space-x-1 flex absolute right-0 bottom-1">
          <button onClick={() => setShowStats(true)} aria-label="Statistics">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path fill={svgColour} d={getPath("stats")}></path>
            </svg>
          </button>
          <button onClick={() => setScreen("Settings")} aria-label="Settings">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path fill={svgColour} d={getPath("settings")}></path>
            </svg>
          </button>
        </div>
      </div>
      <hr className="bottom-0" style={{ borderColor: svgColour }} />
    </header>
  );
}
