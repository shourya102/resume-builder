import {AnimatePresence, motion} from "framer-motion";
import {CgArrowLeftO, CgArrowRightO} from "react-icons/cg";
import React, {useEffect, useState} from "react";
import {FaDiagramProject} from "react-icons/fa6";
import {ImFileEmpty} from "react-icons/im";
import {PiNumberCircleOne, PiNumberCircleThree, PiNumberCircleTwo} from "react-icons/pi";
import BuilderProjectsModal from "./BuilderProjectsModal.jsx";

const BuilderProjects = ({slide, projects, setProjects, handleSlideNext, handleSlidePrev}) => {
    const [openFirstModal, setOpenFirstModal] = useState(false);
    const [openSecondModal, setOpenSecondModal] = useState(false);
    const [openThirdModal, setOpenThirdModal] = useState(false);
    const [firstTitle, setFirstTitle] = useState("");
    const [firstDescription, setFirstDescription] = useState("");
    const [secondTitle, setSecondTitle] = useState("");
    const [secondDescription, setSecondDescription] = useState("");
    const [thirdTitle, setThirdTitle] = useState("");
    const [thirdDescription, setThirdDescription] = useState("");

    useEffect(() => {
        const tmp = [
            {
                title: firstTitle,
                description: firstDescription
            },
            {
                title: secondTitle,
                description: secondDescription
            },
            {
                title: thirdTitle,
                description: thirdDescription
            }
        ]
        setProjects(tmp);
    }, [firstTitle, secondTitle, thirdTitle, firstDescription, secondDescription, thirdDescription]);

    return (
        <>
            {slide === 7 && <motion.div
                initial={{opacity: 0.5, scale: 0.5}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.3}}
                exit={{opacity: 0, scale: 0}}
                className="flex h-[40rem] justify-center items-center mt-4 flex-grow space-y-8">
                <div className="flex-col w-2/3 space-y-4">
                    <div className="flex justify-center">
                                <span
                                    className="flex text-white bg-gradient-to-r from-gray-300 to-gray-400 p-2 rounded-full"><FaDiagramProject
                                    size={80}/></span>
                    </div>
                    <div className="flex-col justify-center">
                        <h1 className="text-2xl text-center font-bold text-cyan-900">Mention at most 3 projects.
                        </h1>
                        <div className="text-slate-500 self-center flex text-center text-md bg-gray-50 p-2">
                            Highlight up to three pivotal projects, detailing their impact and the skills you honed, in
                            under 70 words each.
                        </div>
                    </div>
                    <div className="flex justify-center gap-4">
                        <button
                            onClick={() => setOpenFirstModal(true)}
                            className="w-20 hover:bg-cyan-700 transition-colors delay-[70ms] text-white flex justify-center items-center h-20 bg-cyan-900 rounded-lg">
                            <PiNumberCircleOne size={20} className="absolute -translate-x-6 -translate-y-6"/>
                            <ImFileEmpty size={30}/>
                        </button>
                        <button
                            onClick={() => setOpenSecondModal(true)}
                            className="w-20 hover:bg-cyan-700 transition-colors delay-[70ms] text-white flex justify-center items-center h-20 bg-cyan-900 rounded-lg">
                            <PiNumberCircleTwo size={20} className="absolute -translate-x-6 -translate-y-6"/>
                            <ImFileEmpty size={30}/>
                        </button>
                        <button
                            onClick={() => setOpenThirdModal(true)}
                            className="w-20 hover:bg-cyan-700 transition-colors delay-[70ms] text-white flex justify-center items-center h-20 bg-cyan-900 rounded-lg">
                            <PiNumberCircleThree size={20} className="absolute -translate-x-6 -translate-y-6"/>
                            <ImFileEmpty size={30}/>
                        </button>
                        <div>
                            <AnimatePresence>
                                {openFirstModal && <BuilderProjectsModal title={firstTitle} setTitle={setFirstTitle}
                                                                         description={firstDescription}
                                                                         setDescription={setFirstDescription}
                                                                         close={setOpenFirstModal} id={1}/>}
                                {openSecondModal && <BuilderProjectsModal title={secondTitle} setTitle={setSecondTitle}
                                                                          description={secondDescription}
                                                                          setDescription={setSecondDescription}
                                                                          close={setOpenSecondModal} id={2}/>}
                                {openThirdModal && <BuilderProjectsModal title={thirdTitle} setTitle={setThirdTitle}
                                                                         description={thirdDescription}
                                                                         setDescription={setThirdDescription}
                                                                         close={setOpenThirdModal} id={3}/>}
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="flex justify-center space-x-4">
                        <button onClick={handleSlidePrev}
                                className="text-cyan-900 hover:text-gray-300 transition-colors delay-[70ms]">
                            <CgArrowLeftO size={40}/></button>
                        <button onClick={handleSlideNext}
                                className="text-cyan-900 hover:text-gray-300 transition-colors delay-[70ms]">
                            <CgArrowRightO size={40}/></button>
                    </div>
                </div>
            </motion.div>}
        </>
    );
};

export default BuilderProjects;