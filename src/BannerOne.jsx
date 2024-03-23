import React, { useEffect } from 'react'
import { gsap } from "gsap";

import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
gsap.registerPlugin(MorphSVGPlugin);



function BannerOne() {

    useEffect(() => {

        gsap.to(".Lmorph1", { duration: 2,  morphSVG: ".Lmorph11", repeat: -1, yoyo: true, ease: "sine.out", });
        gsap.fromTo('.leftSvg', { },{  rotate:360, duration:30,   repeat:-1, });


        gsap.to(".Rmorph1", { duration: 3,  morphSVG: ".Rmorph11", repeat: -1, yoyo: true, ease: "sine.out", });

    },);





    return (
        <>
            <div className='bgBlack flex'>
                <div className="CardContainer">

                    <svg className='leftSvg' width="100%" height="400px" viewBox="0 0 314 288" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className='Lmorph1' d="M237 106.5C275.078 82.1814 380 139 250 229C214.876 253.317 182.31 248.342 147.598 248.342C105.616 248.342 63.5302 226.095 38.2251 196.537C17.6002 172.445 0.880188 148.188 0.880188 114C0.880188 79.8118 0.880203 33.2073 38.2251 7.20732C70.1585 -15.0252 105.511 18.3904 105.511 85.4958C105.511 131.691 118 182.5 237 106.5Z" fill="#D71A65"/>
                    </svg>

                    <svg width="300" height="400px" viewBox="0 0 314 288" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className='Lmorph11' d="M296.151 141.366C287.513 185.713 288.459 231.248 254.848 256.39C231.819 273.616 181.429 288 146.717 288C104.736 288 62.65 265.753 37.3449 236.195C16.72 212.104 0 187.847 0 153.659C0 119.47 0 72.8658 37.3449 46.8658C69.2784 24.6334 96.8668 0 138.848 0C215.047 0 321.636 10.5366 296.151 141.366Z" fill="#D71A65"/>
                    </svg>



                    
                    <svg className='leftSvg' width="664" height="666" viewBox="0 0 664 666" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className='Lmorph1' id='floodFilter'  filter="url(#blurMe)" d="M664 333.21C650.337 541.275 541.037 637.07 332 664.75C113.399 682.094 0 516.314 0 333.21C0 150.106 99.7366 17.6506 332 1.67044C627.776 -18.6795 664 150.106 664 333.21Z" fill="url(#paint0_radial_44_173)"/>
                 
                    <defs>
                    <radialGradient id="paint0_radial_44_173" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(332 296) rotate(131.469) scale(562.215 559.751)">
                    <stop offset="0.221" stop-color="#FF078D"/>
                    <stop offset="0.880617" stop-color="#FF0F0F"/>
                    </radialGradient>
                    </defs>
                    </svg>

 

    

                    <svg width="698" height="700" viewBox="0 0 698 700" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className='Lmorph11' d="M698 350.221C683.638 568.908 568.741 669.593 349 698.686C119.206 716.916 0 542.673 0 350.221C0 157.769 104.844 18.5517 349 1.75572C659.921 -19.6331 698 157.769 698 350.221Z" fill="url(#paint0_radial_44_175)"/>
                    <defs>
                    <radialGradient id="paint0_radial_44_175" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(348.282 303.937) rotate(140.869) scale(544.387 542.002)">
                    <stop offset="0.290701" stop-color="#ED0281"/>
                    <stop offset="1" stop-color="#F40000"/>
                    </radialGradient>
                    </defs>
                    </svg>

  

  

                    <div class="spacer"></div>

                    <svg  width="100%" height="400px" viewBox="0 0 188 306" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className='Rmorph11' d="M186.608 152C172.932 259.131 117.66 306 32.6084 306C-52.4435 306 54.6087 266 64.6087 152C75.4443 28.4743 -20.8911 18 23.6085 0C108.66 0 198.609 58 186.608 152Z" fill="#FF2323"/>
                    </svg>

                    <svg className='rightSvg' width="100%" height="400px" viewBox="0 0 321 306" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className='Rmorph1' d="M321 146C321 231.052 245.052 308 160 308C74.9482 308 0 260.052 0 175C0 89.9482 74.9482 0 160 0C245.052 0 321 60.9482 321 146Z" fill="#FF2323"/>
                    </svg>


                </div>
                {/* <div className="upperCard">


                </div> */}
            </div>


        </>
    )
}

export default BannerOne