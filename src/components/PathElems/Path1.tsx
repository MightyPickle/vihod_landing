import { motion } from 'framer-motion';
import React from 'react';
import { styled } from 'styled-components';

const PathEl = styled(motion.div)`
position: absolute;
right: 0;
top: -150px;
`;

const logo = {
  hidden: {
    pathLength: 0,
    opacity: 0.5,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 5, ease: 'easeInOut' },
  },
};

function Path1() {
  return (
    <PathEl>
      <motion.svg width="650" height="800" viewBox="0 0 1080 1249" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.mask id="mask0_329_8079" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="-4" y="182" width="1401" height="605">
          <motion.path
            variants={logo}
            initial="hidden"
            animate="visible"
            d="M1377.69 455.757C897.773 264.889 411.829 55.2903 893.591 480.255C762.657 439.971 649.526 432.627 687.588 504.561C763.086 647.251 757.253 776.086 461.941 634.732C335.148 574.042 -11.9363 430.288 55.2515 512.991C215.53 710.284 33.5066 717.186 188.613 736.857"
            stroke="black"
            strokeWidth="100"
          />
        </motion.mask>
        <motion.g mask="url(#mask0_329_8079)">
          <motion.g filter="url(#filter0_f_329_8079)">
            <motion.path
              variants={logo}
              initial="hidden"
              animate="visible"
              d="M931.678 620.911C810.001 453.83 1009.98 324.373 1125.18 280.53C1135.86 251.448 1163.71 192.884 1189.63 191.28C1222.04 189.275 1326.99 201.116 1454.42 256.346C1581.84 311.577 1481.12 474.515 1351.3 746.113C1221.48 1017.71 1083.77 829.762 931.678 620.911Z"
              fill="#C03AEC"
            />
          </motion.g>
          <motion.g filter="url(#filter1_f_329_8079)">
            <motion.path
              variants={logo}
              initial="hidden"
              animate="visible"
              d="M555.486 579.662C433.81 412.581 633.787 283.124 748.985 239.281C759.669 210.199 787.519 151.634 813.443 150.03C845.848 148.026 950.803 159.867 1078.23 215.097C1205.65 270.327 1104.93 433.266 975.109 704.863C845.291 976.461 707.582 788.513 555.486 579.662Z"
              fill="#6369F7"
            />
          </motion.g>
          <motion.g filter="url(#filter2_f_329_8079)">
            <motion.path
              variants={logo}
              initial="hidden"
              animate="visible"
              d="M800.333 402.01C715.438 285.435 854.965 195.111 935.34 164.521C942.795 144.23 962.226 103.369 980.314 102.25C1002.92 100.851 1076.15 109.113 1165.06 147.648C1253.96 186.183 1183.69 299.868 1093.11 489.365C1002.53 678.863 906.453 547.729 800.333 402.01Z"
              fill="#36CF5D"
            />
          </motion.g>
          <motion.g filter="url(#filter3_f_329_8079)">
            <motion.path
              variants={logo}
              initial="hidden"
              animate="visible"
              d="M762.628 -93.2462C937.125 -120.008 934.911 58.2594 911.992 150.738C927.484 167.629 955.725 205.927 944.748 223.992C931.027 246.574 873.673 313.619 775.267 381.44C676.861 449.262 609.143 326.991 478.483 148.933C347.824 -29.1242 544.506 -59.7942 762.628 -93.2462Z"
              fill="#FD2E1B"
            />
          </motion.g>
          <motion.g filter="url(#filter4_f_329_8079)">
            <motion.path
              variants={logo}
              initial="hidden"
              animate="visible"
              d="M605.35 45.3588C732.664 154.888 597.569 323.789 514.107 394.548C510.956 422.713 499.581 481.238 479.282 490.027C453.91 501.013 368.366 520.762 257.012 509.46C145.658 498.159 195.769 328.691 249.049 57.0845C302.33 -214.522 446.209 -91.5526 605.35 45.3588Z"
              fill="#FF8D32"
            />
          </motion.g>
          <motion.g opacity="0.7" filter="url(#filter5_f_329_8079)">
            <motion.path
              variants={logo}
              initial="hidden"
              animate="visible"
              d="M983.655 81.2837C1031.11 145.79 951.05 279.79 905.085 338.726C900.694 359.052 889.337 401.793 879.036 410.148C866.159 420.591 824.546 443.526 774.233 447.102C723.92 450.678 764.747 325.13 817.68 126.729C870.613 -71.672 924.331 0.651157 983.655 81.2837Z"
              fill="#FFE712"
            />
          </motion.g>
        </motion.g>
        <motion.defs>
          <motion.filter id="filter0_f_329_8079" x="573.257" y="-129.418" width="1260.43" height="1331.15" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="160.245" result="effect1_foregroundBlur_329_8079" />
          </motion.filter>
          <motion.filter id="filter1_f_329_8079" x="197.066" y="-170.667" width="1260.43" height="1331.15" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="160.245" result="effect1_foregroundBlur_329_8079" />
          </motion.filter>
          <motion.filter id="filter2_f_329_8079" x="453.379" y="-218.385" width="1073.18" height="1122.53" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="160.245" result="effect1_foregroundBlur_329_8079" />
          </motion.filter>
          <motion.filter id="filter3_f_329_8079" x="116.025" y="-416.443" width="1151.68" height="1137.37" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="160.245" result="effect1_foregroundBlur_329_8079" />
          </motion.filter>
          <motion.filter id="filter4_f_329_8079" x="-130.171" y="-425.192" width="1108.24" height="1258.52" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="160.245" result="effect1_foregroundBlur_329_8079" />
          </motion.filter>
          <motion.filter id="filter5_f_329_8079" x="430.851" y="-321.36" width="887.828" height="1089.03" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="160.245" result="effect1_foregroundBlur_329_8079" />
          </motion.filter>
        </motion.defs>
      </motion.svg>
    </PathEl>
  );
}

export default Path1;
