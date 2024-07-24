"use client"


import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-23">
      <div className="container">
        <h2 className="text-xl text-center text-white/80 cursor-default font-medium">
          Trusted by the world&apos;s most innovative teams
        </h2>
        <div className=" flex relative overflow-hidden mt-9">
          <motion.div
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
          }}
           initial={{ translateX: 0}} 
           animate={{ translateX: '-50%' }}
           className="flex gap-16 flex-none pr-16">
            {images.map(({ src, alt }) => (
              <Image
                key={alt}
                src={src}
                alt={alt}
                className="flex-none h-8 w-auto"
              />
            ))}
            {images.map(({ src, alt }) => (
              <Image
                key={alt}
                src={src}
                alt={alt}
                className="flex-none h-8 w-auto"
              />
            ))}
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-black/45 pointer-events-none before:z-10"></div>
        </div>
      </div>
    </div>
  );
};

// import acmeLogo from "../assets/images/acme.png";
// import quantumLogo from "../assets/images/quantum.png";
// import echoLogo from "../assets/images/echo.png";
// import celestialLogo from "../assets/images/celestial.png";
// import pulseLogo from "../assets/images/pulse.png";
// import apexLogo from "../assets/images/apex.png";
// import Image from "next/image";

// const images = [
//   { src: acmeLogo, alt: "Acme Logo" },
//   { src: quantumLogo, alt: "Quantum Logo" },
//   { src: echoLogo, alt: "Echo Logo" },
//   { src: celestialLogo, alt: "Celestial Logo" },
//   { src: pulseLogo, alt: "Pulse Logo" },
//   { src: apexLogo, alt: "Apex Logo" },
// ];

// export const LogoTicker = () => {
//   return (
//     <div className="bg-black text-white py-[72px]">
//       <div className="container">
//         <h2 className="text-xl text-center text-white/70">Trusted by the world &apos;s most innovative teams</h2>
//         <div className="overflow-hidden mt-9 before:content-[''] after:content-[''] before:absolute after:
//         absolute before:h-full after:h-full before:w-5 after:w-5 relative after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0)) after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]">
//           <div className="flex gap-16">
//             {images.map(({ src, alt }, index) => (
//               <Image key={index} src={src} alt={alt} className="flex-none h-8 w-auto" />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
