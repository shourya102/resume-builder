import {motion} from "framer-motion";
import {CgArrowLeftO, CgArrowRightO} from "react-icons/cg";
import React from "react";
import AddInputComponent from "../AddInputComponent/AddInputComponent.jsx";
import {GiSkills} from "react-icons/gi";

const BuilderSkills = ({slide, skills, setSkills, handleSlideNext, handleSlidePrev}) => {
    return (
        <>
            {slide === 9 && <motion.div
                initial={{opacity: 0.5, scale: 0.5}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.3}}
                exit={{opacity: 0, scale: 0}}
                className="flex h-[40rem] justify-center items-center mt-4 flex-grow space-y-8">
                <motion.div layout={"preserve-aspect"} className="flex-col p-4 lg:w-1/3 space-y-4">
                    <div className="flex justify-center">
                                <span
                                    className="flex text-white bg-gradient-to-r from-gray-300 to-gray-400 p-2 rounded-full"><GiSkills
                                    size={80}/></span>
                    </div>
                    <h1 className="text-2xl text-center font-bold text-cyan-900">Enter a few skills.</h1>
                    <div className="grid gap-4">
                        <AddInputComponent inputs={skills} setInputsList={setSkills} placeholder="Skill"/>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button onClick={handleSlidePrev}
                                className="text-cyan-900 hover:text-gray-300 transition-colors delay-[70ms]">
                            <CgArrowLeftO size={40}/></button>
                        <button onClick={handleSlideNext}
                                className="text-cyan-900 hover:text-gray-300 transition-colors delay-[70ms]">
                            <CgArrowRightO size={40}/></button>
                    </div>
                </motion.div>
            </motion.div>}
        </>
    );
};

export default BuilderSkills;