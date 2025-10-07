import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypingAnimation = ({ text, delay = 0, speed = 50, className = '' }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    setDisplayedText('');
    setShowCursor(false);

    // Show cursor and start typing after delay
    const startTimer = setTimeout(() => {
      setShowCursor(true);
      let currentIndex = 0;

      const typeNextChar = () => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
          setTimeout(typeNextChar, speed);
        } else {
          setShowCursor(false);
        }
      };

      typeNextChar();
    }, delay);

    return () => clearTimeout(startTimer);
  }, [text, delay, speed]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          style={{ display: 'inline-block', marginLeft: '2px' }}
        >
          |
        </motion.span>
      )}
    </span>
  );
};

export default TypingAnimation;
