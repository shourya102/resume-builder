import {motion} from "framer-motion";
import {CgArrowLeftO, CgArrowRightO} from "react-icons/cg";
import {useEffect, useState} from "react";
import {BsPerson} from "react-icons/bs";

const BuilderSummary = ({slide, summary, setSummary, handleSlideNext, handleSlidePrev}) => {
    const [wordCount, setWordCount] = useState(0);

    useEffect(() => {
        if (summary.length === 0) {
            setWordCount(0);
            return;
        }
        setWordCount(summary.trim().split(" ").length);
    }, [summary]);

    return (
        <>
            {slide === 6 && <motion.div
                initial={{opacity: 0.5, scale: 0.5}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.3}}
                exit={{opacity: 0, scale: 0}}
                className="flex h-[40rem] justify-center items-center mt-4 flex-grow space-y-8">
                <div className="flex-col space-y-4 w-2/3">
                    <div className="hidden md:flex justify-center">
                                <span
                                    className="flex text-white bg-gradient-to-r from-gray-300 to-gray-400 p-2 rounded-full"><BsPerson
                                    size={80}/></span>
                    </div>
                    <div className="flex-col justify-center">
                        <h1 className="text-2xl text-center font-bold text-cyan-900">Write a short summary about
                            yourself.
                        </h1>
                        <div className="text-slate-500 self-center flex text-center text-md bg-gray-50 p-2">
                            Summarize your professional journey in
                            under 70 words, focusing on key achievements and skills for a standout resume.
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <textarea value={summary} onChange={e => setSummary(e.target.value)} placeholder="I am a..."
                                  rows={10}
                                  className="p-4 border focus:border resize-none focus:border-cyan-600 border-gray-200 rounded-lg"/>
                    </div>

                    <div className="flex w-full justify-between">
                        <div
                            className={`${wordCount > 70 ? 'text-red-00' : ''} bg-white flex w-20 justify-between md:justify-center items-center p-2 text-gray-500 text-sm border border-gray-200 rounded-full`}>
                            <span>{wordCount} words</span></div>
                        <div className="space-x-4 flex md:flex-grow justify-end md:justify-center -translate-x-9">
                            <button onClick={handleSlidePrev}
                                    className="text-cyan-900 hover:text-gray-300 transition-colors delay-[70ms]">
                                <CgArrowLeftO size={40}/></button>
                            <button onClick={handleSlideNext}
                                    className="text-cyan-900 hover:text-gray-300 transition-colors delay-[70ms]">
                                <CgArrowRightO size={40}/></button>
                        </div>
                    </div>
                </div>
            </motion.div>}
        </>
    );
};

export default BuilderSummary;