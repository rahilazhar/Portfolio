import React, { useState, useEffect } from 'react'
import Section1image from '../Images/rpng.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

import Services from './Services';

const Home = () => {

  const phrases = ["Creative Person", "Innovative Thinker", "Dynamic Creator", "Developer"]; // Add more phrases as needed
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPhraseIndex(i => {
        const nextIndex = (i + 1) % phrases.length;
        setCurrentPhrase(phrases[nextIndex]);
        return nextIndex;
      });
    }, 2000); // Change the text every 2 seconds

    return () => clearInterval(intervalId);
  }, []);
  return (
    <main className=' text-white box-border'>

      <section className=' bg-black h-[700px] max-sm:h-auto'>
        <div className=' container mx-auto'>
          <div className=' grid grid-cols-3 py-32 max-sm:grid-cols-1 max-sm:text-center'>
            <div className=' col-span-2  flex flex-col space-y-5 2xl:px-32  2xl:py-32 max-sm:order-1 '>
              <div className=' flex space-x-5 cursor-pointer max-sm:justify-center max-sm:mt-5'>
                <span><FaFacebook className=' text-2xl'/></span>
                <span><FaInstagram className=' text-2xl'/></span>
                <span><IoLogoLinkedin className=' text-2xl'/></span>
                <span><FaXTwitter className=' text-2xl'/></span>
              </div>
              <div className=' text-4xl tracking-[10px] font-semibold max-sm:text-2xl'>I am Rahil Azhar</div>
              <div className=' text-4xl tracking-[10px] font-semibold max-sm:text-2xl'>MERN Stack Developer</div>
              {/* box */}
              <div className="border  border-white relative top-10 max-sm:mx-auto text-white w-max px-8 max-sm:p-0  py-4 rounded-md">
                {/* <div className="absolute -bottom- left-10 w-16  h-12 border border-white  transform rotate-45"></div> */}
                <p className="text-2xl font-semibold relative text-white z-10 p-4">
                  {currentPhrase}
                </p>
              </div>

            </div>
            <div className=' opacity-50  image-fade'>
              <img className='w-full scale-100 ' src={Section1image} alt="" />
            </div>
          </div>
        </div>
      </section>


      <section>
        <Services/>
      </section>


    </main>
  )
}

export default Home
