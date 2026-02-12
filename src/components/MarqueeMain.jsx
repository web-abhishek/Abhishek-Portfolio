import React from 'react'
import { Marquee } from './Marquee'
import rightbg from "../assets/rightbg.png"
import leftbg from "../assets/leftbg.png"

const MarqueeMain = () => {
    return (
        <div className="relative my-40">

            <Marquee pauseOnHover repeat={6}>
                <span className="font-semibold color-primary text-center text-4xl font-primary">
                    I am Abhishek Acharya, a passionate Frontend Developer focused on building performant and scalable
                    web applications.
                </span>
            </Marquee>

            <Marquee reverse pauseOnHover repeat={6}>
                <span className="font-semibold color-primary text-center text-4xl font-primary">
                    I specialize in React, modern JavaScript, and responsive UI development using Tailwind and Bootstrap.
                </span>
            </Marquee>

            <Marquee pauseOnHover repeat={6}>
                <span className="font-semibold color-primary text-center text-4xl font-primary">
                    I enjoy transforming complex problems into clean, intuitive, and impactful user experiences.
                </span>
            </Marquee>

            <div className="absolute -right-2 top-2 overflow-hidden">
                    <img src={rightbg} />
                  </div>
                  <div className="absolute -left-2 top-2 overflow-hidden">
                    <img src={leftbg} />
                  </div>
        </div>
    )
}

export default MarqueeMain