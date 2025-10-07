import React from 'react';
import { motion } from 'framer-motion';
import './DotBubbles.css';

const DotBubbles = ({ count = 8 }) => {
  const colors = [
    'rgba(99, 102, 241, 0.4)',   // indigo
    'rgba(139, 92, 246, 0.4)',   // violet
    'rgba(236, 72, 153, 0.4)',   // pink
    'rgba(59, 130, 246, 0.4)',   // blue
    'rgba(14, 165, 233, 0.4)',   // sky
    'rgba(168, 85, 247, 0.4)',   // purple
  ];

  const generateDots = () => {
    return Array.from({ length: count }).map((_, index) => {
      const size = Math.random() * 8 + 4; // 4-12px
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      // Random position around the edges (not in center)
      const angle = Math.random() * 360;
      const distance = Math.random() * 40 + 10; // 10-50% from edge
      const x = Math.cos(angle * Math.PI / 180) * distance;
      const y = Math.sin(angle * Math.PI / 180) * distance;
      
      const duration = Math.random() * 4 + 3; // 3-7 seconds
      const delay = Math.random() * 2;

      return (
        <motion.div
          key={index}
          className="dot-bubble"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: color,
            left: `${50 + x}%`,
            top: `${50 + y}%`,
          }}
          animate={{
            y: [0, Math.random() * 20 - 10, 0],
            x: [0, Math.random() * 20 - 10, 0],
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      );
    });
  };

  return <>{generateDots()}</>;
};

export default DotBubbles;
