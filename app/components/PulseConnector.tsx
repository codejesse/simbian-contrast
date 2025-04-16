import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/public/simbian-icon.png";

export default function PulseConnector() {
    return (
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
        <motion.div
          className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-xl flex items-center justify-center -translate-x-1/2 -translate-y-1/2 z-20"
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Image src={logo} alt="Simbian Logo" width={40} height={40} />
        </motion.div>
  
        {/* Lines from Without Simbian cards to the center */}
        {[...Array(3)].map((_, i) => {
          const startX = 300 + i * 200;
          return (
            <svg
              key={`line-from-${i}`}
              className="absolute left-0 w-full h-1/2"
              viewBox="0 0 1200 400"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id={`gradient-from-${i}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
              <motion.path
                d={`M${startX},400 C${startX},200 600,300 600,200`}
                stroke={`url(#gradient-from-${i})`}
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              />
            </svg>
          );
        })}
  
        {/* Lines from center to With Simbian cards */}
        {[...Array(3)].map((_, i) => {
          const endX = 300 + i * 200;
          return (
            <svg
              key={`line-to-${i}`}
              className="absolute top-1/2 left-0 w-full h-1/2"
              viewBox="0 0 1200 400"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id={`gradient-to-${i}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
              <motion.path
                d={`M600,0 C600,100 ${endX},100 ${endX},200`}
                stroke={`url(#gradient-to-${i})`}
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
              />
            </svg>
          );
        })}
      </div>
    );
  }
