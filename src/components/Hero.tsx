"use client"

import Image from "next/image";
import ArrowWIcon from "@/assets/icons/arrow-w.svg";
import cursorImage from "@/assets/images/cursor.png";
import Robotic from '@/assets/images/robotics.png';
import UiRobot from '@/assets/images/uirobot.png';
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#1b0a64_34%,#3217a3_65%,#3213b7_82%)] py-[72px] sm:py-24 relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#0d2c7e] bg-[radial-gradient(closest-side,#000_82%,#271084)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>

      <div className="container relative ">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-red-400 to-indigo-400 text-transparent bg-clip-text [-webkit-background-clip:text]">
              Version 1.0 is here
            </span>

            <span className="inline-flex items-center gap-1">
              <span >Read more</span>
              <ArrowWIcon />
            </span>
          </a>
        </div>
        <div className="flex justify-center mt-8">
          <div className="inline-flex relative">
            <h1 className="text-6xl sm:text-9xl font-bold tracking-tighter text-center inline-flex cursor-default">
              ChatYol AI
            </h1>
            <motion.div className="absolute left-[650px] top-[90px] hidden sm:inline"
            drag
            dragSnapToOrigin
            >
            <Image
              src={UiRobot}
              height="200"
              width="300"
              alt="imagecursor"
              className="max-w-none cursor-grab"
              draggable="false"
            />
            </motion.div>
            <motion.div className="absolute top-[100px] right-[650px] hidden sm:inline"
            drag
            dragSnapToOrigin
            >
            <Image
              src={Robotic}
              alt="messageimage"
              height="200"
              width="300"
              className="max-w-none cursor-grab "
              draggable="false"
            />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-lg mt-8 max-w-md cursor-default">
          This chatbot provides fast and accurate solutions for every task you face. Whether answering questions, quickly mining information, or analyzing data, it supports both professional and personal needs, ensuring every job is completed with exceptional efficiency and precision.
            {/* Reliable for Unlimited Productivity */}
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-gradient-to-r from-cyan-600 via-violet-700 to-purple-800 text-white py-3 px-5 rounded-lg font-medium transition duration-300 ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 shadow-lg">
            <a href="https://chatyol-ai.vercel.app/" target="_blank">
            let&apos;s try it now
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
