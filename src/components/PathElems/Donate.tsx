import { motion } from 'framer-motion';
import React from 'react';
import { styled } from 'styled-components';

const PathEl = styled(motion.div)`
display: flex;
justify-content: center;
align-items: center;
background: rgba(150, 154, 255, 0.38);
border-radius: 100%;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(4.8px);
-webkit-backdrop-filter: blur(4.8px);
border: 1px solid rgba(150, 154, 255, 1);
position: absolute;
z-index:100;
padding: 10px;
overflow: hidden;
width: 50px;
height: 50px;
`;

const icon = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      repeat: Infinity, repeatType: 'reverse', repeatDelay: 0.5, duration: 3, ease: 'easeInOut',
    },

  },
};

function Donate() {
  return (
    <PathEl>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="500"
        height="500"
        viewBox="0 0 256 256"
      >
        <motion.defs />
        <motion.g
          transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
          stroke="rgb(255,255,255)"
          strokeWidth={10}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          fill="none"
        >
          <motion.path
            d="M 51.456 47.291 c -0.256 0 -0.512 -0.098 -0.707 -0.293 L 29.812 26.061 c -5.952 -5.952 -5.952 -15.637 0 -21.589 C 32.694 1.588 36.528 0 40.605 0 S 48.517 1.588 51.4 4.472 l 0.056 0.056 l 0.056 -0.056 C 54.395 1.588 58.229 0 62.307 0 c 4.077 0 7.91 1.588 10.794 4.472 l 0 0 l 0 0 c 5.952 5.952 5.952 15.637 0 21.589 L 52.163 46.998 C 51.968 47.193 51.712 47.291 51.456 47.291 z M 40.605 2 c -3.543 0 -6.875 1.38 -9.38 3.886 c -5.172 5.172 -5.172 13.588 0 18.761 l 20.23 20.23 l 20.23 -20.23 c 5.172 -5.173 5.172 -13.589 0 -18.761 l 0 0 C 69.181 3.38 65.85 2 62.307 2 c -3.544 0 -6.875 1.38 -9.381 3.886 l -0.763 0.763 c -0.391 0.391 -1.023 0.391 -1.414 0 l -0.763 -0.763 C 47.48 3.38 44.149 2 40.605 2 z"
            transform=" matrix(1 0 0 1 0 0) "
            strokeLinecap="round"
            stroke="rgb(255,255,255)"
            strokeWidth={1}
            strokeLinejoin="miter"
            strokeMiterlimit={10}
            variants={icon}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M 43.036 90 c -2.937 0 -5.844 -1.081 -8.666 -2.129 c -3.111 -1.156 -6.323 -2.35 -9.521 -2.068 l -7.79 0.691 V 56.157 l 4.222 -0.375 c 2.65 -0.231 4.867 0.798 7.011 1.797 c 2.025 0.943 3.941 1.844 6.142 1.654 l 14.064 -2.552 c 5.025 -0.854 7.791 2.064 9.468 4.721 l 15.39 -7.154 c 5.769 -2.59 12.243 0.01 16.131 6.464 c 1.011 1.678 0.448 3.906 -1.253 4.968 c -1.993 1.243 -3.979 2.487 -5.943 3.719 C 65.158 80.133 50.363 89.403 44.041 89.956 C 43.706 89.986 43.371 90 43.036 90 z M 25.834 83.76 c 3.214 0 6.268 1.135 9.232 2.236 c 3.07 1.142 5.97 2.218 8.799 1.968 c 5.843 -0.511 21.154 -10.104 37.363 -20.261 c 1.966 -1.231 3.952 -2.477 5.946 -3.721 c 0.78 -0.486 1.049 -1.491 0.599 -2.239 c -3.341 -5.544 -8.803 -7.828 -13.586 -5.676 L 57.16 63.982 l -0.456 -0.796 c -1.52 -2.648 -3.639 -5.256 -7.859 -4.535 l -14.151 2.563 c -2.825 0.233 -5.074 -0.812 -7.246 -1.823 c -1.992 -0.929 -3.879 -1.808 -5.989 -1.617 l -2.399 0.213 v 26.321 l 5.613 -0.498 C 25.062 83.776 25.449 83.76 25.834 83.76 z"
            transform=" matrix(1 0 0 1 0 0) "
            strokeLinecap="round"
            stroke="rgb(255,255,255)"
            strokeWidth={1}
            strokeLinejoin="miter"
            strokeMiterlimit={10}
            variants={icon}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M 39.091 75.237 c -0.467 0 -0.885 -0.328 -0.979 -0.804 c -0.108 -0.542 0.243 -1.068 0.785 -1.177 c 5.57 -1.113 11.833 -3.661 19.122 -7.779 l -1.314 -2.291 c -0.275 -0.479 -0.109 -1.091 0.369 -1.365 c 0.479 -0.273 1.091 -0.108 1.365 0.369 l 1.813 3.161 c 0.274 0.479 0.109 1.09 -0.368 1.364 c -7.853 4.521 -14.589 7.302 -20.596 8.502 C 39.222 75.231 39.156 75.237 39.091 75.237 z"
            transform=" matrix(1 0 0 1 0 0) "
            strokeLinecap="round"
            stroke="rgb(255,255,255)"
            strokeWidth={1}
            strokeLinejoin="miter"
            strokeMiterlimit={10}
            variants={icon}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M 15.54 90 H 3.528 c -1.941 0 -3.52 -1.579 -3.52 -3.52 V 54.192 c 0 -1.94 1.579 -3.52 3.52 -3.52 H 15.54 c 1.941 0 3.52 1.579 3.52 3.52 V 86.48 C 19.059 88.421 17.48 90 15.54 90 z M 3.528 52.673 c -0.838 0 -1.52 0.682 -1.52 1.52 V 86.48 c 0 0.838 0.682 1.52 1.52 1.52 H 15.54 c 0.838 0 1.52 -0.682 1.52 -1.52 V 54.192 c 0 -0.838 -0.682 -1.52 -1.52 -1.52 H 3.528 z"
            transform=" matrix(1 0 0 1 0 0) "
            strokeLinecap="round"
            stroke="rgb(255,255,255)"
            strokeWidth={1}
            strokeLinejoin="miter"
            strokeMiterlimit={10}
            variants={icon}
            initial="hidden"
            animate="visible"
          />
        </motion.g>
      </motion.svg>
    </PathEl>
  );
}

export default Donate;
