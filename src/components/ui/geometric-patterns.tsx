"use client";

import { motion } from "framer-motion";

export function GridPattern({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-border/30"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

export function DotPattern({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" className="fill-accent/20" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </div>
  );
}

export function GradientOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-500/15 blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

export function FloatingShapes() {
  const shapes = [
    { size: 60, x: "10%", y: "20%", delay: 0, duration: 15 },
    { size: 40, x: "80%", y: "30%", delay: 2, duration: 18 },
    { size: 80, x: "70%", y: "70%", delay: 4, duration: 20 },
    { size: 30, x: "20%", y: "80%", delay: 1, duration: 12 },
    { size: 50, x: "50%", y: "10%", delay: 3, duration: 16 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute border border-accent/20 rounded-lg"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            rotate: [0, 360],
            y: [-20, 20, -20],
          }}
          transition={{
            rotate: {
              duration: shape.duration,
              repeat: Infinity,
              ease: "linear",
            },
            y: {
              duration: shape.duration / 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: shape.delay,
            },
          }}
        />
      ))}
    </div>
  );
}

export function WavePattern({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        className="relative block w-full h-24"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z"
          className="fill-card/50"
          animate={{
            d: [
              "M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z",
              "M0,60 C200,20 400,100 600,60 C800,20 1000,100 1200,60 L1200,120 L0,120 Z",
              "M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
}

export function GlowingRing({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`absolute rounded-full border-2 border-accent/30 ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
