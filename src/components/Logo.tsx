import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: '#413a2e00',
    strokeOpacity: 1,
  },
  visible: (i: number) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      fill: '#413a2e',
      strokeOpacity: 0,
      transition: {
        default: { delay, duration: 1.5, ease: 'easeInOut' },
        fill: { delay, duration: 1.5, ease: [1, 0, 0.8, 1] },
      },
    };
  },
};

const logo = {
  hidden: {
    pathLength: 0,
    opacity: 1,

  },
  visible: {
    pathLength: 1,
    opacity: 1,

    transition: { duration: 5, ease: 'easeInOut' },

  },
};

const Container = styled(motion.div)`
position: absolute;
left: 0;
top: 0;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`;

function Logo() {
  return (
    <Container>
      <motion.svg
        viewBox="0 0 1080 1080"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1, ease: 'easeInOut' } }}
      >

        <motion.path
          d="M435.117 534.88C440.519 536.854 444.622 540.282 447.427 545.164C450.232 549.943 451.634 555.552 451.634 561.993C451.634 572.069 448.206 579.912 441.35 585.522C434.597 591.131 425.612 593.936 414.393 593.936H365.153V484.862H414.393C424.365 484.862 432.416 487.303 438.545 492.185C444.778 497.068 447.894 504.183 447.894 513.533C447.894 523.297 443.635 530.413 435.117 534.88ZM421.093 518.207C421.093 515.091 420.262 512.961 418.6 511.819C416.938 510.676 414.341 510.105 410.809 510.105H391.643V526.466H411.9C418.029 526.466 421.093 523.713 421.093 518.207ZM413.769 568.693C417.925 568.693 420.781 567.966 422.34 566.512C424.002 564.953 424.833 562.668 424.833 559.655C424.833 556.435 424.054 554.15 422.495 552.799C420.937 551.345 418.029 550.618 413.769 550.618H391.643V568.693H413.769Z"
          variants={icon}
          initial="hidden"
          animate="visible"
          strokeWidth="2"
          stroke="#413A2E"
          strokeLinecap="round"
          strokeLinejoin="round"
          custom={1}
        />

        <motion.path
          d="M506.351 524.752C518.297 524.752 527.491 527.66 533.931 533.478C540.372 539.295 543.592 547.865 543.592 559.188C543.592 570.511 540.216 579.133 533.464 585.054C526.815 590.975 517.622 593.936 505.883 593.936H458.67V484.862H485.159V524.752H506.351ZM549.481 484.862H575.97V593.936H549.481V484.862ZM504.793 568.693C512.791 568.693 516.791 565.421 516.791 558.876C516.791 555.448 515.856 553.059 513.986 551.709C512.116 550.254 509.208 549.527 505.26 549.527H485.159V568.693H504.793Z"
          variants={icon}
          strokeWidth="4"
          stroke="#413A2E"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial="hidden"
          animate="visible"
          custom={2}
        />

        <motion.path
          d="M685.632 593.938H654.156L634.211 559.969L614.889 593.938H583.413L618.317 537.219L585.127 484.863H616.603L634.99 516.183L653.377 484.863H684.853L651.039 539.245L685.632 593.938Z"
          variants={icon}
          strokeWidth="4"
          stroke="#413A2E"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial="hidden"
          animate="visible"
          custom={3}
        />

        <motion.path
          d="M691.903 499.199C702.915 488.291 716.471 482.838 732.573 482.838C748.674 482.838 762.179 488.291 773.086 499.199C784.097 510.002 789.603 523.403 789.603 539.401C789.603 555.398 784.097 568.851 773.086 579.758C762.179 590.562 748.674 595.963 732.573 595.963C716.471 595.963 702.915 590.562 691.903 579.758C680.996 568.851 675.542 555.398 675.542 539.401C675.542 523.403 680.996 510.002 691.903 499.199ZM754.232 516.962C748.518 511.041 741.299 508.081 732.573 508.081C723.847 508.081 716.627 511.041 710.914 516.962C705.2 522.78 702.343 530.259 702.343 539.401C702.343 548.542 705.2 556.073 710.914 561.995C716.627 567.812 723.847 570.721 732.573 570.721C741.299 570.721 748.518 567.812 754.232 561.995C759.945 556.073 762.802 548.542 762.802 539.401C762.802 530.259 759.945 522.78 754.232 516.962Z"
          variants={icon}
          strokeWidth="4"
          stroke="#413A2E"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial="hidden"
          animate="visible"
          custom={4}
        />

        <motion.path
          d="M887.769 568.695H903.351V614.974H876.862V593.938H810.638V614.974H784.148V568.695H799.419C801.185 566.721 802.535 563.033 803.47 557.632L815.001 484.863H887.769V568.695ZM829.492 560.281C829.18 562.566 828.609 565.371 827.778 568.695H861.279V510.106H837.439L829.492 560.281Z"
          variants={icon}
          strokeWidth="4"
          stroke="#413A2E"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial="hidden"
          animate="visible"
          custom={5}
        />

        <motion.g
          clipPath="url(#clip0_250_20712)"
          animate={{ scale: [2, 1], x: [330, 0] }}
          transition={{ scale: { ease: 'easeInOut', duration: 2 }, x: { delay: 0.5, ease: 'easeInOut', duration: 2 } }}
        >
          <motion.rect
            variants={logo}
            initial="hidden"
            animate="visible"
            width="155.227"
            height="73.9324"
            rx="36.9662"
            transform="matrix(0.824301 -0.566151 -0.566152 -0.824301 208.205 637.962)"
            fill="#413A2E"
          />
          <motion.mask id="mask0_250_20712" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="180" y="457" width="143" height="159">
            <motion.rect
              variants={logo}
              initial="hidden"
              animate="visible"
              width="155.79"
              height="73.9324"
              rx="36.9662"
              transform="matrix(0.824301 0.566151 -0.566152 0.824301 208.212 442.939)"
              fill="#D9D9D9"
            />
            <motion.path
              variants={logo}
              initial="hidden"
              animate="visible"
              d="M241.417 555.379C249.941 562.392 255.58 573.022 255.58 584.922C255.58 597.559 249.915 609.197 240.709 615.57L301.609 573.79C289.57 578.747 276.07 579.04 264.301 570.957L241.417 555.379Z"
              fill="#D9D9D9"

            />
          </motion.mask>
          <motion.g mask="url(#mask0_250_20712)">
            <motion.path
              variants={logo}
              initial="hidden"
              animate="visible"
              d="M187.285 473.412C198.843 456.583 221.856 452.311 238.684 463.869L306.159 510.213C322.988 521.771 327.261 544.784 315.702 561.612C304.144 578.441 281.131 582.714 264.302 571.155L196.827 524.812C179.998 513.253 175.726 490.241 187.285 473.412Z"
              fill="#FEFEFE"

            />
            <motion.path
              variants={logo}
              initial="hidden"
              animate="visible"
              d="M241.418 555.379C249.941 562.393 255.581 573.023 255.581 584.922C255.581 597.559 249.916 609.197 240.71 615.571L301.609 573.791C289.571 578.748 276.071 579.04 264.302 570.957L241.418 555.379Z"
              fill="#FEFEFE"
            />
            <motion.g filter="url(#filter0_f_250_20712)">
              <motion.path
                variants={logo}
                initial="hidden"
                animate="visible"
                d="M193.967 490.575C229.72 522.735 264.469 479.556 277.374 453.946C284.36 452.17 298.58 447.128 299.572 441.167C300.812 433.715 300.585 409.143 290.855 378.331C281.125 347.519 241.005 366.928 175.042 390.466C109.079 414.005 149.276 450.375 193.967 490.575Z"
                fill="#C03AEC"
              />
            </motion.g>
            <motion.g filter="url(#filter1_f_250_20712)">
              <motion.path
                variants={logo}
                initial="hidden"
                animate="visible"
                d="M194.511 578.628C230.264 610.788 265.012 567.609 277.917 541.999C284.903 540.223 299.123 535.18 300.115 529.219C301.355 521.768 301.128 497.195 291.398 466.384C281.668 435.572 241.548 454.98 175.585 478.519C109.622 502.058 149.82 538.428 194.511 578.628Z"
                fill="#6369F7"
              />
            </motion.g>
            <motion.g filter="url(#filter2_f_250_20712)">
              <motion.path
                variants={logo}
                initial="hidden"
                animate="visible"
                d="M241.487 526.215C266.432 548.654 290.677 518.527 299.681 500.659C304.555 499.419 314.477 495.901 315.169 491.742C316.034 486.543 315.875 469.398 309.087 447.901C302.298 426.403 274.305 439.944 228.282 456.368C182.259 472.791 210.305 498.167 241.487 526.215Z"
                fill="#36CF5D"
              />
            </motion.g>
            <motion.g filter="url(#filter3_f_250_20712)">
              <motion.path
                variants={logo}
                initial="hidden"
                animate="visible"
                d="M355.196 546.804C365.568 507.062 324.26 503.305 302.309 506.394C298.771 502.405 290.585 494.952 286.141 497.06C280.586 499.694 263.697 511.362 245.645 532.511C227.593 553.661 254.268 572.26 292.346 606.762C330.423 641.264 342.231 596.481 355.196 546.804Z"
                fill="#FD2E1B"
              />
            </motion.g>
            <motion.g filter="url(#filter4_f_250_20712)">
              <motion.path
                variants={logo}
                initial="hidden"
                animate="visible"
                d="M319.354 579.883C297.056 547.796 254.733 575.016 236.359 592.636C229.765 592.691 215.949 593.922 213.429 598.409C210.279 604.018 203.66 623.342 203.609 649.382C203.557 675.423 243.976 667.885 308.108 662.058C372.241 656.232 347.228 619.99 319.354 579.883Z"
                fill="#FF8D32"
              />
            </motion.g>
            <motion.g opacity="0.7" filter="url(#filter5_f_250_20712)">
              <motion.path
                variants={logo}
                initial="hidden"
                animate="visible"
                d="M320.093 491.472C306.301 478.945 273.373 494.264 258.633 503.49C253.824 504.02 243.661 505.625 241.481 507.808C238.756 510.538 232.452 519.619 230.419 531.177C228.386 542.735 258.419 536.294 305.601 528.795C352.784 521.296 337.333 507.132 320.093 491.472Z"
                fill="#FFE712"
              />
            </motion.g>
          </motion.g>
        </motion.g>
        <motion.defs>
          <motion.filter id="filter0_f_250_20712" x="67.9134" y="290.08" width="304.528" height="284.283" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="36.1702" result="effect1_foregroundBlur_250_20712" />
          </motion.filter>
          <motion.filter id="filter1_f_250_20712" x="68.4569" y="378.133" width="304.528" height="284.283" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="36.1702" result="effect1_foregroundBlur_250_20712" />
          </motion.filter>
          <motion.filter id="filter2_f_250_20712" x="131.67" y="364.459" width="256.209" height="242.083" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="36.1702" result="effect1_foregroundBlur_250_20712" />
          </motion.filter>
          <motion.filter id="filter3_f_250_20712" x="167.53" y="424.351" width="261.649" height="266.927" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="36.1702" result="effect1_foregroundBlur_250_20712" />
          </motion.filter>
          <motion.filter id="filter4_f_250_20712" x="131.268" y="492.672" width="289.495" height="247.419" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="36.1702" result="effect1_foregroundBlur_250_20712" />
          </motion.filter>
          <motion.filter id="filter5_f_250_20712" x="157.981" y="414.407" width="251.366" height="195.426" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="36.1702" result="effect1_foregroundBlur_250_20712" />
          </motion.filter>
          <clipPath id="clip0_250_20712">
            <motion.rect width="147.092" height="170" fill="white" transform="translate(176 455)" />
          </clipPath>
        </motion.defs>
      </motion.svg>
    </Container>
  );
}

export default Logo;
