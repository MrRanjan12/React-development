import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div
          className="fixed  flex flex-wrap 
         justify-center  bottom-12 inset-x-0 px-2"
        >
          <div
            className="flex flex-wrap justify-center
         gap-3 shadow-lg bg-white px-3 py-2 rounded-xl"
          >
            <button
              className="outline-none px-4 py-1
          rounded-full text-white shadow-lg cursor-pointer bg-red-500 hover:bg-red-700 "
              // style={{ backgroundColor: "red" }}
              onClick={() => setColor("Red")}
            >
              Red
            </button>

            <button
              className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}
            >
              Green
            </button>

            <button
              className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("Blue")}
            >
              Blue
            </button>

            <button
              className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
              style={{ backgroundColor: "#F6BE00" }}
              onClick={() => setColor("#F6BE00")}
            >
              Yellow
            </button>


          </div>
        </div>
      </div>
    </>
  );
}

export default App;
