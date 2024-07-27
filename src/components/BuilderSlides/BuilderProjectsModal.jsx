import {AiFillDelete, AiOutlineClose} from "react-icons/ai";
import {AnimatePresence, motion} from "framer-motion";
import React, {useEffect, useRef, useState} from "react";
import {PiListBullets, PiNumberCircleOne, PiNumberCircleTwo} from "react-icons/pi";
import {BsScrewdriver} from "react-icons/bs";
import {BiPen, BiSave} from "react-icons/bi";

const BuilderProjectsModal = ({close, title, setTitle, description, setDescription, id}) => {
    const modalRef = useRef(null);
    const [wordCount, setWordCount] = useState(null);
    const [openToolsDropdown, setOpenToolsDropdown] = useState(false);
    const toolsRef = useRef(null);
    const btnRef = useRef(null);

    const handleRewrite = (e) => {

    }

    const handleBulletize = (e) => {

    }

    const toolsList = [
        {
            'name': <div className="flex space-x-1 items-center"><BiPen/><span>Rephrase</span></div>,
            'action': handleRewrite,
        },
        {
            'name': <div className="flex space-x-1 items-center"><PiListBullets/><span>Bulletize</span></div>,
            'action': handleBulletize,
        },
    ];


    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            close(false);
        }
        if (toolsRef.current && !toolsRef.current.contains(event.target) && !btnRef.current.contains(event.target)) {
            setOpenToolsDropdown(false);
        }
    };

    useEffect(() => {
        if (description.length === 0) {
            setWordCount(0);
            return;
        }
        setWordCount(description.trim().split(" ").length);
    }, [description]);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div
            className="top-0 left-0 p-2 flex justify-center items-center absolute w-screen h-screen bg-black bg-opacity-40">
            <motion.div
                ref={modalRef}
                initial={{scale: 0, opacity: 0, originX: 0, originY: 0}}
                animate={{scale: 1, opacity: 1, transition: {duration: 0.3, ease: 'easeInOut'}}}
                exit={{scale: 0, opacity: 0, transition: {duration: 0.3, ease: 'easeInOut'}}}
                className="w-full p-2 shadow-xl space-y-4 flex-col sm:w-[30rem] bg-white rounded-lg border border-gray-200 border-opacity-70">
                <div className="flex items-center justify-between ">
                    <h1 className="font-bold text-cyan-900 text-lg">Project {id}</h1>
                    <button onClick={() => close(false)}
                            className="transition-colors delay-[70ms] inline-flex rounded-full hover:bg-gray-200 p-2">
                        <AiOutlineClose/></button>
                </div>
                <div className="flex-col space-y-2">
                    <div
                        className="flex w-full focus-within:border-cyan-600 border-gray-200 border rounded-lg overflow-clip">
                        <div className="flex p-4 bg-gray-50 text-cyan-900 justify-center items-center">
                            <PiNumberCircleOne size={30}/></div>
                        <input value={title} onChange={e => setTitle(e.target.value)} type="text" id="title"
                               placeholder="Project Title"
                               className="p-4 w-full"/>
                    </div>
                    <div
                        className="flex-col w-full focus-within:border-cyan-600 border-gray-200 border rounded-lg overflow-clip">
                        <div
                            className="flex w-full">
                            <div className="flex p-4 bg-gray-50 text-cyan-900 justify-center items-center">
                                <PiNumberCircleTwo size={30}/></div>
                            <span
                                className="p-4 flex items-center bg-gray-50 w-full text-cyan-900">Project Description</span>
                        </div>
                        <textarea
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            placeholder="In this project..."
                            rows={8}
                            className="p-4 w-full resize-none"/>
                    </div>
                    <div className="flex justify-between">
                        <div
                            className={`${wordCount > 70 ? 'text-red-00' : ''} bg-white flex w-20 justify-center items-center p-2 text-gray-500 text-sm border border-gray-200 rounded-full`}>
                            <span>{wordCount} words</span></div>
                        <div className="flex space-x-2 justify-end">
                            <button
                                ref={btnRef}
                                onClick={() => setOpenToolsDropdown(prevState => !prevState)}
                                className="p-2 flex justify-center items-center space-x-1 bg-cyan-900 text-white rounded-lg hover:bg-cyan-700 transition-colors delay-[70ms]">
                                <BsScrewdriver/>
                                <span>Tools</span>
                            </button>
                            <AnimatePresence>
                                {openToolsDropdown && <motion.div
                                    initial={{opacity: 0.5}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                    ref={toolsRef}
                                    className="absolute -translate-x-44 translate-y-12 grid grid-cols-1 p-2 bg-white border border-gray-200 z-10 rounded-2xl">
                                    {toolsList.map((item, id) => {
                                        return (<button key={id} onClick={e => item.action(e)}
                                                        className="p-0.5 hover:bg-gray-200 rounded-lg">{item.name}</button>);
                                    })}
                                </motion.div>}
                            </AnimatePresence>
                            <button
                                className="p-2 flex justify-center items-center space-x-1 bg-cyan-900 text-white rounded-lg hover:bg-cyan-700 transition-colors delay-[70ms]">
                                <BiSave/>
                                <span>Save</span>
                            </button>
                            <button
                                className="p-2 flex justify-center items-center space-x-1 bg-cyan-900 text-white rounded-lg hover:bg-red-700 transition-colors delay-[70ms]">
                                <AiFillDelete/>
                                <span>Delete</span>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default BuilderProjectsModal;