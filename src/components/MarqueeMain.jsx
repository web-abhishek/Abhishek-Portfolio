import React from 'react'
import { Marquee } from './Marquee'
import rightbg from "../assets/rightbg.png"
import leftbg from "../assets/leftbg.png"

const MarqueeMain = () => {
    return (
        <div className="relative my-30">

            <Marquee pauseOnHover repeat={6}>
                <span className="font-semibold text-gray-300 text-center text-4xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas dolor repudiandae mollitia autem inventore, facere possimus recusandae
                    similique tenetur obcaecati?</span>
            </Marquee>

            <Marquee reverse pauseOnHover repeat={6}>
                <span className="font-semibold text-gray-300 text-center text-4xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas dolor repudiandae mollitia autem inventore, facere possimus recusandae
                    similique tenetur obcaecati?</span>
            </Marquee>

            <Marquee pauseOnHover repeat={6}>
                <span className="font-semibold text-gray-300 text-center text-4xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas dolor repudiandae mollitia autem inventore, facere possimus recusandae
                    similique tenetur obcaecati?</span>
            </Marquee>

            <div className="absolute -right-2 top-2">
                    <img src={rightbg} />
                  </div>
                  <div className="absolute -left-2 top-2">
                    <img src={leftbg} />
                  </div>
        </div>
    )
}

export default MarqueeMain