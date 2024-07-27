import {motion} from "framer-motion";
import {GiAchievement} from "react-icons/gi";
import AddInputComponent from "../AddInputComponent/AddInputComponent.jsx";
import {CgArrowLeftO} from "react-icons/cg";
import React from "react";
import {HiOutlineSave} from "react-icons/hi";

const BuilderOthers = ({
                           slide,
                           languages,
                           setLanguages,
                           achievements,
                           setAchievements,
                           handleSlideNext,
                           handleSlidePrev
                       }) => {
    return (
        <>
            {slide === 10 && <motion.div
                initial={{opacity: 0.5, scale: 0.5}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.3}}
                exit={{opacity: 0, scale: 0}}
                className="flex h-[40rem] justify-center items-center mt-4 flex-grow space-y-8">
                <motion.div layout={"preserve-aspect"} className="flex-col p-4 lg:w-1/3 space-y-4">
                    <div className="flex justify-center">
                                <span
                                    className="flex text-white bg-gradient-to-r from-gray-300 to-gray-400 p-2 rounded-full"><GiAchievement
                                    size={80}/></span>
                    </div>
                    <h1 className="text-2xl text-center font-bold text-cyan-900">Mention the languages you speak and
                        your achievements.</h1>
                    <div className="grid gap-4">
                        <AddInputComponent inputs={languages} setInputsList={setLanguages} placeholder="Language"/>
                        <AddInputComponent inputs={achievements} setInputsList={setAchievements}
                                           placeholder="Achivements"/>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button onClick={handleSlidePrev}
                                className="text-cyan-900 hover:text-gray-300 transition-colors delay-[70ms]">
                            <CgArrowLeftO size={40}/></button>
                        <button onClick={handleSlideNext}
                                className="text-cyan-900 space-x-1 hover:text-blue-600 transition-colors delay-[70ms]">
                            <HiOutlineSave size={40}/>
                        </button>
                    </div>
                </motion.div>
            </motion.div>}
        </>
    );
};

export default BuilderOthers;