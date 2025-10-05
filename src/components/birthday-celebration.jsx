"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Heart, Sparkles, Gift, Cake, Eye } from "lucide-react"

export default function BirthdayCelebration() {
  const [isCardOpen, setIsCardOpen] = useState(false)

  return (
    <div className="flex flex-col items-center px-4 py-6 sm:py-10 min-h-screen bg-gradient-to-br from-pink-50 to-purple-100">
      {/* Title Section */}
      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.3,
        }}
        className="relative mb-6"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-pink-600 mb-2">
          Happy Birthday!
        </h1>
        <div className="flex justify-center gap-3">
          <Cake className="w-8 h-8 text-pink-500" />
          <Sparkles className="w-8 h-8 text-yellow-500" />
          <Heart className="w-8 h-8 text-pink-500" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-center text-pink-600 mt-2">
          To My Piggy 🐷
        </h3>
      </motion.div>

      {/* Birthday Card Section */}
      <motion.div
        className="w-full max-w-md mx-auto my-4 sm:my-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div
          className={`relative cursor-pointer transition-all duration-700 ease-in-out transform ${
            isCardOpen ? "rotate-0" : "rotate-2"
          }`}
          onClick={() => setIsCardOpen(!isCardOpen)}
          style={{
            perspective: "1000px",
            minHeight: isCardOpen ? "480px" : "260px", // taller when open
          }}
        >
          {/* Front of the card */}
          <div
            className={`bg-gradient-to-r from-pink-400 to-purple-500 rounded-3xl p-14 sm:p-10 shadow-lg transition-all duration-700 transform ${
              isCardOpen ? "scale-95 opacity-80" : "scale-100 opacity-100"
            }`}
          >
            <div className="absolute top-2 right-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-yellow-200" />
              </motion.div>
            </div>

            <div className="text-center text-white">
              <p className="text-lg font-medium mb-4">
                Tap to {isCardOpen ? "close" : "open"} your card
              </p>
              <div className="flex justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  <Gift className="w-14 h-14 text-white" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Inside content of the card */}
          <AnimatePresence>
            {isCardOpen && (
              <motion.div
                className="absolute top-0 left-0 w-full h-full rounded-3xl p-6 sm:p-8 shadow-xl shadow-rose-100 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
                style={{
                  backfaceVisibility: "hidden",
                  backgroundImage: "url('/herphoto.jpg')",
                }}
                initial={{ rotateX: -90, opacity: 0 }}
                animate={{
                  rotateX: isCardOpen ? 0 : -90,
                  opacity: isCardOpen ? 1 : 0,
                  zIndex: isCardOpen ? 10 : -1,
                }}
                exit={{ rotateX: -90, opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-white/50 rounded-3xl"></div>

                <div className="relative text-center max-w-sm z-10">
                  <p className="text-white-700 mb-4 text-sm sm:text-base leading-relaxed">
                    Just wanted to remind you — you’re truly my favorite person in this whole wide world. 💫
                    My days shine brighter, my smiles grow wider, and everything feels a little more beautiful
                    because of you. 🌸💖 You’re not just my bestie — you’re my comfort, my laughter, and my forever
                    kind of person. 🫶🐷 Thank you for being the reason my heart feels warm, even on the coldest
                    days. 💕✨
                  </p>

                  <p className="text-black font-medium text-sm sm:text-base leading-relaxed">
                    Hope your day is full of love, cake, and endless smiles 😊 And don’t forget — I’m the one
                    who makes you smile the most 😋💞✨
                  </p>

                  <div className="flex justify-center mt-3">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      <Heart className="w-8 h-8 stroke-none fill-black" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Ending Section */}
      <motion.div
        className="w-full max-w-md mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="text-center">
          <p className="text-lg text-purple-700 mb-4">
            May every wish you make today come true. You deserve the world, and I’ll always be here to remind you
            of that.
          </p>
          <p className="text-pink-600 font-medium text-base sm:text-lg">
            Let’s always stay like this... together, forever 🫶
          </p>
        </div>
      </motion.div>
    </div>
  )
}
