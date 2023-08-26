import { motion } from 'framer-motion';
import React from 'react';
import { styled } from 'styled-components';

const PathEl = styled(motion.div)`
position: absolute;
transform: rotate(180deg);
left: 0;
bottom: -100px;
`;

const logo = {
  hidden: {
    pathLength: 0,
    opacity: 0.5,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { delay: 0.7, duration: 5, ease: 'easeInOut' },
  },
};

function Path2() {
  return (
    <PathEl>
      <motion.svg width="900" height="450" viewBox="0 0 1080 497" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.mask id="mask0_329_8029" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="-560" y="0" width="2026" height="539">
          <motion.path
            variants={logo}
            initial="hidden"
            animate="visible"
            d="M1416 10C1399.83 91.8333 1347.96 309.53 1093 204.5C758 66.5 637.5 189.5 637.5 361.5C549 240.5 395 247.342 305.5 263C34 310.5 -216.5 480.5 -558 488.5"
            stroke="black"
            strokeWidth="100"
            strokeLinejoin="bevel"
          />
        </motion.mask>
        <motion.g mask="url(#mask0_329_8029)">
          <motion.g filter="url(#filter0_f_329_8029)">
            <motion.path
              variants={logo}
              initial="hidden"
              animate="visible"
              d="M1005.65 268.214C855.201 224.438 915.097 54.0649 963.851 -25.6495C956.773 -48.045 946.316 -96.0818 961.12 -109.065C979.624 -125.295 1048.06 -166.864 1150.09 -192.833C1252.12 -218.801 1267.27 -74.3749 1315.37 148.707C1363.46 371.788 1193.72 322.933 1005.65 268.214Z"
              fill="#C03AEC"
            />
          </motion.g>
          <motion.g filter="url(#filter1_f_329_8029)">
            <motion.path
              variants={logo}
              initial="hidden"
              animate="visible"
              d="M760.91 417.932C610.458 374.157 670.354 203.784 719.109 124.069C712.03 101.674 701.574 53.6369 716.377 40.6533C734.881 24.4238 803.315 -17.1455 905.346 -43.1138C1007.38 -69.0822 1022.53 75.3438 1070.62 298.425C1118.72 521.507 948.975 472.652 760.91 417.932Z"
              fill="#6369F7"
            />
          </motion.g>
          <motion.g filter="url(#filter2_f_329_8029)">
            <motion.path
              variants={logo}
              initial="hidden"
              animate="visible"
              d="M825.371 197.846C720.398 167.303 762.188 48.4313 796.205 -7.18672C791.266 -22.8124 783.971 -56.3284 794.299 -65.3873C807.21 -76.7109 854.957 -105.714 926.145 -123.833C997.334 -141.952 1007.91 -41.1832 1041.46 114.464C1075.02 270.112 956.586 236.025 825.371 197.846Z"
              fill="#36CF5D"
            />
          </motion.g>
          <motion.g filter="url(#filter3_f_329_8029)">
            <motion.path
              variants={logo}
              initial="hidden"
              animate="visible"
              d="M573.092 -81.6796C665.33 -178.649 746.671 -70.7126 775.811 -4.62326C792.935 -1.6779 827.631 8.19392 829.425 24.1183C831.668 44.0238 828.363 110.828 800.799 197.136C773.234 283.444 675.922 241.519 514.992 195.326C354.063 149.133 457.793 39.5321 573.092 -81.6796Z"
              fill="#FD2E1B"
            />
          </motion.g>
          <motion.g filter="url(#filter4_f_329_8029)">
            <motion.path
              variants={logo}
              initial="hidden"
              animate="visible"
              d="M543.049 74.3754C670.192 81.0224 667.498 244.963 650.259 326.102C661.43 344.454 681.748 384.828 673.65 399.511C663.528 417.866 621.385 469.378 549.363 514.239C477.342 559.1 428.806 434.23 334.807 246.635C240.808 59.041 384.119 66.0665 543.049 74.3754Z"
              fill="#FF8D32"
            />
          </motion.g>
          <motion.g opacity="0.7" filter="url(#filter5_f_329_8029)">
            <motion.path
              variants={logo}
              initial="hidden"
              animate="visible"
              d="M786.578 -79.5103C844.954 -62.8333 859.078 54.6568 858.843 111.317C865.636 125.543 878.644 156.442 876.341 166.23C873.461 178.464 859.141 211.515 830.626 236.992C802.111 262.469 768.375 168.243 708.115 24.7119C647.855 -118.819 713.609 -100.357 786.578 -79.5103Z"
              fill="#FFE712"
            />
          </motion.g>
        </motion.g>
        <motion.defs>
          <motion.filter id="filter0_f_329_8029" x="709.898" y="-395.843" width="813.723" height="910.238" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_329_8029" />
          </motion.filter>
          <motion.filter id="filter1_f_329_8029" x="465.155" y="-246.124" width="813.724" height="910.238" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_329_8029" />
          </motion.filter>
          <motion.filter id="filter2_f_329_8029" x="558.561" y="-325.933" width="688.662" height="756.001" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_329_8029" />
          </motion.filter>
          <motion.filter id="filter3_f_329_8029" x="232.236" y="-320.37" width="797.764" height="767.58" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_329_8029" />
          </motion.filter>
          <motion.filter id="filter4_f_329_8029" x="104.864" y="-128.909" width="770.644" height="852.305" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_329_8029" />
          </motion.filter>
          <motion.filter id="filter5_f_329_8029" x="484.52" y="-293.681" width="592.092" height="734.829" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_329_8029" />
          </motion.filter>
        </motion.defs>
      </motion.svg>

    </PathEl>
  );
}

export default Path2;
