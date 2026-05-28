import React from 'react'
import { Marquee } from './Marquee'
import rightbg from "../assets/rightbg.png"
import leftbg from "../assets/leftbg.png"

const MarqueeMain = () => {
    return (
        <div className="relative my-20 sm:my-28 md:my-40 px-4 sm:px-6 lg:px-0">

            <Marquee pauseOnHover repeat={6}>
                <span className="font-semibold color-primary text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-primary">
                    I am Abhishek Acharya, a passionate Frontend Developer focused on building performant and scalable
                    web applications.
                </span>
            </Marquee>

            <Marquee reverse pauseOnHover repeat={6}>
                <span className="font-semibold color-primary text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-primary">
                    I specialize in React, modern JavaScript, and responsive UI development using Tailwind and Bootstrap.
                </span>
            </Marquee>

            <Marquee pauseOnHover repeat={6}>
                <span className="font-semibold color-primary text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-primary">
                    I enjoy transforming complex problems into clean, intuitive, and impactful user experiences.
                </span>
            </Marquee>

            <div className="absolute right-0 top-0 hidden md:block overflow-hidden">
                    <img src={rightbg} className="w-full h-auto" />
                  </div>
                  <div className="absolute left-0 top-0 hidden md:block overflow-hidden">
                    <img src={leftbg} className="w-full h-auto" />
                  </div>
        </div>
    )
}

export default MarqueeMain;