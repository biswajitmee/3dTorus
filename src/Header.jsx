import React, { useEffect } from 'react'
import { gsap } from "gsap";

import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import FrontCanvas from './FrontCanvas';
import CircleScene from './CircleScene';
gsap.registerPlugin(MorphSVGPlugin);

function Header() {



  useEffect(() => {

    gsap.to(".Lmorph1", { duration: 30, morphSVG: ".Lmorph11", repeat: -1, yoyo: true, ease: "sine.out", });
    gsap.fromTo(".Lmorph1", { rotate: 0 }, { rotate: 360, duration: 360, transformOrigin: "50% 50%", });


  },);




  return (
    <div className='backgroundColor'>
      {/* <div className="SvgLayer">

        <svg className='svgFlaoting' width="1768" height="1496" viewBox="0 0 1768 1496" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_92_18)">
            <path className='Lmorph1' d="M141.001 790C7.34602 593.882 230.724 261.909 480.383 177.938C492.511 173.614 504.538 169.717 516.459 166.237C1291.65 -75.8269 1762.22 385.023 1651.74 1011.91C1569.6 1478.02 674.356 1459.79 349 1270C61.0004 1102 0.202118 899.293 323.765 1102C1713.2 1972.46 1408.82 -94.3161 516.459 166.237C504.506 169.969 492.48 173.869 480.383 177.938C27.3434 339.456 274.655 986.118 141.001 790Z" fill="url(#paint0_radial_92_18)" fill-opacity="0.6" />
          </g>
          <defs>
            <filter id="filter0_f_92_18" x="0.962891" y="0.663574" width="1766.78" height="1494.73" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_92_18" />
            </filter>
            <radialGradient id="paint0_radial_92_18" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(845 710) rotate(60.154) scale(1396.06 1134.25)">
              <stop offset="0.160574" stop-color="#9100C4" />
              <stop offset="0.318593" stop-color="#FF7204" />
              <stop offset="0.477727" stop-color="#FF0E0E" />
              <stop offset="0.625697" stop-color="#FED500" />
            </radialGradient>
          </defs>
        </svg>




        <svg width="1941" height="1545" viewBox="0 0 1941 1545" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_92_20)">
            <path className='Lmorph11' d="M183 572C136.443 354.265 415 255.836 649.382 183.938C1575 -99.9995 1932.92 381.357 1820.74 1017.91C1738.6 1484.02 593.973 1529.79 268.618 1340C-19.3824 1172 93.1511 522.426 375 780C1714.36 2004 2279 -58.0388 983 636C628.888 825.635 229.557 789.735 183 572Z" fill="url(#paint0_radial_92_20)" fill-opacity="0.4" />
          </g>
          <defs>
            <filter id="filter0_f_92_20" x="0.424805" y="0.52417" width="1940.23" height="1544.28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_92_20" />
            </filter>
            <radialGradient id="paint0_radial_92_20" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(926.832 733.177) rotate(58.4582) scale(1475.17 1237.87)">
              <stop offset="0.160574" stop-color="#9100C4" />
              <stop offset="0.318593" stop-color="#FF7204" />
              <stop offset="0.477727" stop-color="#FF0E0E" />
              <stop offset="0.625697" stop-color="#FED500" />
            </radialGradient>
          </defs>
        </svg>






      </div> */}


      <div className="upperSvg flex justify-center items-center">

        {/* <p class="heading font-bagoda">Creative Design </p> */}

      </div>

      <div className="upperSvg flex justify-center items-center">

        <FrontCanvas />
  {/* <CircleScene /> */}
      </div>


    </div>
  )
}

export default Header