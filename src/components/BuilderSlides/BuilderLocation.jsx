import React from 'react';
import {motion} from "framer-motion";
import {BiCurrentLocation} from "react-icons/bi";
import {CgArrowLeftO, CgArrowRightO} from "react-icons/cg";
import LocationInput from "../LocationInput/LocationInput.jsx";

const BuilderLocation = ({slide, setSelectedCity, setSelectedState, handleSlideNext, handleSlidePrev}) => {
    return (
        <>
            {slide === 4 &&
                <motion.div
                    initial={{opacity: 0.5, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.3}}
                    exit={{opacity: 0, scale: 0}}
                    className="flex h-[40rem] justify-center items-center mt-4 flex-grow space-y-8">
                    <div className="flex-col space-y-4">
                        <div className="flex justify-center">
                                <span
                                    className="flex text-white bg-gradient-to-r from-gray-300 to-gray-400 p-2 rounded-full"><BiCurrentLocation
                                    size={80}/></span>
                        </div>
                        <h1 className="text-2xl text-center font-bold text-cyan-900">Where are you based?</h1>
                        <LocationInput setSelectedCity={setSelectedCity} setSelectedState={setSelectedState}/>
                        <div className="flex justify-center space-x-4">
                            <button onClick={handleSlidePrev}
                                    className="text-cyan-900 hover:text-gray-300 transition-colors delay-[70ms]">
                                <CgArrowLeftO size={40}/></button>
                            <button onClick={handleSlideNext}
                                    className="text-cyan-900 hover:text-gray-300 transition-colors delay-[70ms]">
                                <CgArrowRightO size={40}/></button>
                        </div>
                    </div>
                </motion.div>
            }
        </>
    );
};

export default BuilderLocation;