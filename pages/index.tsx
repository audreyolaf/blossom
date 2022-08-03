import type { NextPage } from 'next'
import Image from 'next/image'
import { Navbar } from '../components/Navbar'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import one from '../public/images/one.png'
export default function Index() {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };
  return (
    <div>
      <Navbar />
      <div className="grid place-items-center h-screen mb-0 bg-gradient-to-r from-[#FBB9C4] to-[#ECC8F0]">
        <div>
            <h1 className="text-9xl mt-0 text-Salmon font-semibold">blossom</h1>
          </div>
        <h2 className="text-2xl #000">examining the role social media has on eating disorders</h2>
<Particles
      id="tsparticles"
      init={particlesInit}

      options={{ 
    "fullScreen": {
        "enable": true,
        "zIndex": 1
    },
    "particles": {
        "number": {
            "value": 50,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#FF6161"
        },
        "shape": {
            "type": "star"
        },
        "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 10,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 500,
            "color": "#fff",
            "opacity": 0.4,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "bottom",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 0.5
                }
            },
            "bubble": {
                "distance": 400,
                "size": 4,
                "duration": 0.3,
                "opacity": 1,
                "speed": 3
            },
            "repulse": {
                "distance": 200
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true,
    "background": {
        // "color": "#FF8B8B",
    }
        }}
    />
      </div>
        
    </div>
  )
}


