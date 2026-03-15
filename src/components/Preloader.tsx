"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = [
  "IMAGINE",
  "INNOVATE",
  "CODE",
  "LEARN",
  "FIX",
  "AUTOMATE",
  "COMMIT",
  "IMPACT",
];

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (index === words.length - 1) {
      const timeout = setTimeout(() => {
        setShow(false);
      }, 800);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 250); // Fast sequence like a mind-blowing reveal

    return () => clearTimeout(timeout);
  }, [index]);

  // Prevent scrolling while preloader is active
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.1,
            filter: "blur(10px)",
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
        >
          {/* Abstract Google-colored background shapes */}
          <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
            <motion.div
              className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-500/20 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, 30, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-red-500/10 blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -40, 0],
                y: [0, -50, 0],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            <motion.div
              className="absolute top-[40%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-yellow-500/20 blur-3xl"
              animate={{
                scale: [1, 1.5, 1],
                x: [0, -20, 0],
                y: [0, 40, 0],
              }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.div
              className="absolute bottom-[20%] left-[10%] w-[35vw] h-[35vw] rounded-full bg-green-500/15 blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                x: [0, 30, 0],
                y: [0, -20, 0],
              }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center -mt-24">
            <div className="h-[120px] flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={index}
                  className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground drop-shadow-sm"
                  initial={{ y: -50, opacity: 0, filter: "blur(4px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: 50, opacity: 0, filter: "blur(4px)" }}
                  transition={{
                    duration: 0.2,
                    ease: "easeOut"
                  }}
                >
                  {words[index]}
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Minimal loading progress line */}
            <motion.div
              className="absolute bottom-[-40px] left-1/2 h-[2px] bg-foreground/20 rounded-full overflow-hidden"
              initial={{ width: "0%", x: "-50%" }}
              animate={{ width: "200px", x: "-50%" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.div
                className="h-full bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: words.length * 0.25, ease: "linear" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
