import React, { useEffect, useRef, useState } from 'react';
import { FaLaptopCode } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { LiaDigitalOcean } from "react-icons/lia";



const Services = () => {
    const [showReadMore, setShowReadMore] = useState([false, false, false]); // Use an array for each service item
    const hoverRefs = [useRef(null), useRef(null), useRef(null)]; // Create separate refs for each service item

    const handleAnimationEnd = (index) => {
        return () => {
            const updatedShowReadMore = [...showReadMore];
            updatedShowReadMore[index] = true;
            setShowReadMore(updatedShowReadMore);
        };
    };

    useEffect(() => {
        hoverRefs.forEach((node, index) => {
            node.current.addEventListener('animationend', handleAnimationEnd(index));
        });

        // Clean up the event listeners
        return () => {
            hoverRefs.forEach((node) => {
                node.current.removeEventListener('animationend', handleAnimationEnd);
            });
        };
    }, []);

    return (
        <section className='bg-black p-20 max-sm:p-5 text-white'>
            <div className='text-4xl tracking-[5px] text-center font-semibold'>My Services</div>

            <div className="flex max-sm:flex-col py-10 space-x-10 max-sm:space-x-0">
                {/* Service 1 */}
                <div ref={hoverRefs[0]} className="w-1/3 max-sm:w-full mb-4 flex flex-col items-center space-y-5 hover-trigger"
                    onMouseLeave={() => setShowReadMore([false, false, false])}>
                    <div><FaLaptopCode className='text-6xl' /></div>
                    <div className="text-white text-xl text-justify">Web Design</div>
                    <div className="text-amber-600 text-justify max-sm:text-justify">
                        Our web design portfolio showcases our creativity and expertise in creating visually stunning and user-friendly websites. Explore a diverse range of projects, from elegant corporate sites to dynamic e-commerce platforms, all designed to captivate and engage users.
                        <hr className="line  w-10 mt-5 border-2 border-amber-300" />
                    </div>
                    {showReadMore[0] && <button className="text-white font-semibold">Read More</button>}
                </div>

                {/* Service 2 */}
                <div ref={hoverRefs[1]} className="w-1/3 max-sm:w-full mb-4 flex  flex-col items-center space-y-5 hover-trigger  "
                    onMouseLeave={() => setShowReadMore([false, false, false])}>
                    <div><LiaDigitalOcean className='text-6xl' /></div>
                    <div className="text-white text-xl text-justify">Web Design</div>
                    <div className="text-amber-600 text-justify max-sm:text-justify">
                        Our web design portfolio showcases our creativity and expertise in creating visually stunning and user-friendly websites. Explore a diverse range of projects, from elegant corporate sites to dynamic e-commerce platforms, all designed to captivate and engage users.
                        <hr className="line  w-10 mt-5 border-2 border-amber-300" />
                    </div>
                    {showReadMore[1] && <button className="text-white font-semibold">Read More</button>}
                </div>


                {/* Service 3 */}
                <div  ref={hoverRefs[2]} className="w-1/3 max-sm:w-full mb-4 flex flex-col items-center space-y-5 hover-trigger"
                    onMouseLeave={() => setShowReadMore([false, false, false])}>
                    <div><MdDeveloperMode className='text-6xl' /></div>
                    <div className="text-white text-xl text-justify">Web Design</div>
                    <div className="text-amber-600 text-justify max-sm:text-justify">
                        Our web design portfolio showcases our creativity and expertise in creating visually stunning and user-friendly websites. Explore a diverse range of projects, from elegant corporate sites to dynamic e-commerce platforms, all designed to captivate and engage users.
                        <hr className="line  w-10 mt-5 border-2 border-amber-300" />
                    </div>
                    {showReadMore[2] && <button className="text-white font-semibold">Read More</button>}
                </div>
            </div>
        </section>
    )
}

export default Services;
