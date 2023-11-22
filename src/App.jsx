import React, { useRef } from "react";
import "./App.css";
import { motion, useScroll, useTransform } from "framer-motion";
import Image1 from "./assets/1.png";
import Image2 from "./assets/2.png";
import Image3 from "./assets/3.png";
import Image4 from "./assets/4.png";
import Image5 from "./assets/5.png";

function App() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const background5 = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
  const background4 = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const background3 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const background2 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const background1 = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div>
      <div
        ref={ref}
        className="w-full h-screen overflow-hidden relative grid place-items-center"
      >
        <motion.h1
          style={{ y: textY }}
          className="font-bold text-white text-7xl md:text-9xl relative z-40"
        >
          PARALLAX
        </motion.h1>

        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${Image5})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: background5,
          }}
        />
        <motion.div
          className="absolute inset-0 z-10"
          style={{
            backgroundImage: `url(${Image4})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: background4,
          }}
        />
        <motion.div
          className="absolute inset-0 z-20"
          style={{
            backgroundImage: `url(${Image3})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: background3,
          }}
        />
        <motion.div
          className="absolute inset-0 z-30"
          style={{
            backgroundImage: `url(${Image2})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: background2,
          }}
        />
        <motion.div
          className="absolute inset-0 z-40"
          style={{
            backgroundImage: `url(${Image1})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: background1,
          }}
        />
      </div>
      
      <div className="h-screen flex justify-center items-center bg-gradient-to-b from-slate-950 to-blue-950 text-white">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
        cupiditate sit laboriosam natus alias laborum ratione sunt ut nisi
        dignissimos. Dignissimos, soluta! Harum excepturi eaque incidunt soluta
        aliquid nobis magni?
      </div>
    </div>
  );
}

export default App;
