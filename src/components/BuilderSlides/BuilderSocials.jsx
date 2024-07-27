import React, {useEffect, useRef, useState} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import {BiLogoGithub, BiLogoLinkedin, BiLogoTwitter} from "react-icons/bi";
import {CgArrowLeftO, CgArrowRightO} from "react-icons/cg";
import {TbSocial} from "react-icons/tb";
import {AiFillCaretDown} from "react-icons/ai";

const BuilderSocials = ({slide, social, setSocial, handleSlidePrev, handleSlideNext}) => {
    const [selectedSocial, setSelectedSocial] = useState({});
    const socialsList = [
        {
            'name': 'LinkedIn',
            'elementBtn': <span
                className="flex items-center space-x-2 font-bold"><BiLogoLinkedin/><span>LinkedIn</span></span>,
            'elementDropdown': <span
                className="flex items-center space-x-2"><BiLogoLinkedin/><span>LinkedIn</span></span>,
        },
        {
            'name': 'GitHub',
            'elementBtn': <span
                className="flex items-center space-x-2 font-bold"><BiLogoGithub/><span>GitHub</span></span>,
            'elementDropdown': <span
                className="flex items-center space-x-2"><BiLogoGithub/><span>GitHub</span></span>,
        },
        {
            'name': 'Twitter',
            'elementBtn': <span
                className="flex items-center space-x-2 font-bold"><BiLogoTwitter/><span>Twitter</span></span>,
            'elementDropdown': <span
                className="flex items-center space-x-2"><BiLogoTwitter/><span>Twitter</span></span>,
        },
    ];
    const [openSocialsDropdown, setOpenSocialsDropdown] = useState(false);
    const socialsRef = useRef(null);
    const btnRef = useRef(null);

    useEffect(() => {
        setSelectedSocial(socialsList[0])
    }, []);

    const handleSelectSocials = (e, id) => {
        setSelectedSocial(socialsList[id]);
        setOpenSocialsDropdown(false);
    }

    const handleClickOutside = (event) => {
        if (socialsRef.current && !socialsRef.current.contains(event.target) && !btnRef.current.contains(event.target)) {
            console.log(event);
            setOpenSocialsDropdown(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            {slide === 5 &&
                <motion.div
                    initial={{opacity: 0.5, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.3}}
                    exit={{opacity: 0, scale: 0}}
                    className="flex h-[40rem] justify-center items-center mt-4 flex-grow space-y-8">
                    <div className="flex-col space-y-4">
                        <div className="flex justify-center">
                                <span
                                    className="flex text-white bg-gradient-to-r from-gray-300 to-gray-400 p-2 rounded-full"><TbSocial
                                    size={80}/></span>
                        </div>
                        <h1 className="text-2xl text-center font-bold text-cyan-900">Social Media?</h1>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">

                            <div>
                                <button ref={btnRef} onClick={() => setOpenSocialsDropdown(prevState => !prevState)}
                                        className="p-4 flex w-full justify-between items-center bg-cyan-900 text-white rounded-lg">
                                    {selectedSocial.elementBtn}
                                    <AiFillCaretDown/>
                                </button>
                                <AnimatePresence>
                                    {openSocialsDropdown && <motion.div
                                        initial={{opacity: 0.5}}
                                        animate={{opacity: 1}}
                                        exit={{opacity: 0}}
                                        className="relative translate-y-2">
                                        <div ref={socialsRef}
                                             className="absolute grid grid-cols-1 p-2 w-full bg-white border border-gray-200 z-10 rounded-2xl">
                                            {socialsList.map((item, id) => {
                                                return (<button key={id} onClick={e => handleSelectSocials(e, id)}
                                                                className="p-0.5 hover:bg-gray-200 rounded-lg">{item.elementDropdown}</button>);
                                            })}
                                        </div>
                                    </motion.div>}
                                </AnimatePresence>
                            </div>
                            <input value={social} onChange={e => setSocial(e.target.value)} type="text"
                                   placeholder="URL"
                                   className="p-4 border focus:border focus:border-cyan-600 border-gray-200 rounded-lg"/>
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
        </>)
};

export default BuilderSocials;