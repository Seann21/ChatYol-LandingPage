"use client"

import Image from "next/image";
import appScreen from "../assets/images/window framer.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const appImage = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#3213b7] py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter cursor-default">
          Intuitive interface
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-center text-white/70 mt-5">
            The chatbot boasts an eco-friendly interface that ensures ease of
            use for all user levels. With a clean design and easy navigation,
            you can quickly access all the features and get the most out of this
            chatbot without a long learning curve.
          </p>
        </div>
        <motion.div
          style={{
            opacity: opacity,
            rotateX: rotateX,
            transformPerspective: "800px",
          }}
          ref={appImage}
        >
          <Image
            src={appScreen}
            alt="product screenshot"
            className="mt-14 h-[500px] w-[850px] mx-auto cursor-not-allowed"
          />
        </motion.div>
      </div>
    </div>
  );
};
