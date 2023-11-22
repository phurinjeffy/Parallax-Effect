import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./App.css";
import Image1 from "./assets/1.png";
import Image2 from "./assets/2.png";
import Image3 from "./assets/3.png";
import Image4 from "./assets/4.png";
import Image5 from "./assets/5.png";

function App() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <Parallax
        pages={2}
      >
        <ParallaxLayer offset={0.1} speed={-2} className="text-center z-30">
          <div
            className="font-bold text-gray-50 text-7xl md:text-9xl"
          >
            PARALLAX
          </div>  
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={-0.7} className="z-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${Image5})`,
              // backgroundPosition: "bottom",
              backgroundSize: "cover",
            }}
          ></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={-0.6} className="z-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${Image4})`,
              // backgroundPosition: "bottom",
              backgroundSize: "cover",
            }}
          ></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={-0.4} className="z-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${Image3})`,
              // backgroundPosition: "bottom",
              backgroundSize: "cover",
            }}
          ></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={-0.2} className="z-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${Image2})`,
              // backgroundPosition: "bottom",
              backgroundSize: "cover",
            }}
          ></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={-0.1} className="z-40">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${Image1})`,
              // backgroundPosition: "bottom",
              backgroundSize: "cover",
            }}
          ></div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0} className="z-50">
          <div className="h-screen flex justify-center items-center bg-gradient-to-b from-slate-950 to-blue-950 text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
            cupiditate sit laboriosam natus alias laborum ratione sunt ut nisi
            dignissimos. Dignissimos, soluta! Harum excepturi eaque incidunt
            soluta aliquid nobis magni?
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
