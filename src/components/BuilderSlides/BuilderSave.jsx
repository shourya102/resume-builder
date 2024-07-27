import {motion, useForceUpdate} from "framer-motion";
import {CgArrowRightO} from "react-icons/cg";
import {AiFillCaretRight, AiOutlineLoading} from "react-icons/ai";
import {useEffect, useState} from "react";
import TemplatePresenter from "../TemplatePresenter/TemplatePresenter.jsx";
import template from "../../assets/temp_1.jpg";
import {BsFileEarmarkPdfFill, BsFileEarmarkWordFill} from "react-icons/bs";
import axios from "axios";
import {saveAs} from "file-saver";
const BuilderSave = ({slide, handleSlidePrev, data}) => {
    const [loading, setLoading] = useState(false);
    const baseUrl = "http://localhost:5000";
    const [blob, setBlob] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios.post(baseUrl + '/build', data, {responseType: "blob", headers: {"Access-Control-Allow-Origin": true}}).then(res => {
            const blob = new Blob([res.data], {type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"});
            setBlob(blob);
        });
        setLoading(false);
    }, [data]);

    const saveAsWord = () => {
        saveAs(blob);
    }


    return (
        <>
            {slide === 11 &&
                <motion.div
                    initial={{opacity: 0.5, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.3}}
                    exit={{opacity: 0, scale: 0}}
                    className="flex h-[40rem] justify-center items-center mt-4 flex-grow space-y-8">
                    {loading && <motion.div layout={"size"} className="flex-col space-y-4">
                        <div className="flex justify-center">
                            <motion.span
                                className="text-cyan-900"
                                initial={{rotate: 0}} animate={{rotate: '360deg'}}
                                transition={{ease: 'linear', duration: 1, repeat: Infinity}}><AiOutlineLoading
                                size={80}/>
                            </motion.span>
                        </div>
                        <h1 className="text-2xl text-center font-bold text-cyan-900">Generating your
                            resume </h1>
                    </motion.div>}
                    {!loading && <motion.div layout={"size"} className="flex-col w-2/3 md:w-3/4 lg:w-2/3 space-y-4">
                        <div className="flex justify-center space-x-4 w-full">
                            <div className="hidden items-center justify-center lg:flex">
                                <TemplatePresenter template={template}/>
                            </div>
                            <div className="flex w-full flex-col space-y-4">
                                <h2 className="text-4xl font-bold text-cyan-900">Your resume is ready for download!</h2>
                                <div className="bg-gray-100 flex-col text-cyan-800 p-8">
                                    <p>Click here to download your resume in PDF format or as a Word file. Click on the
                                        image to preview your resume before downloading.</p>
                                    <div className="mt-14 gap-4 justify-center items-center flex space-x-2">
                                        <button
                                            className="flex bg-red-900 transition-colors delay-[70ms] justify-center items-center gap-1 w-[10rem] md:w-fit font-dancing-script font-bold hover:bg-red-600 shadow-md text-xl rounded-lg text-white p-3">
                                            <span className="hidden md:inline">Download
                                            as a PDF file</span>
                                            <BsFileEarmarkPdfFill size={40}/>
                                        </button>
                                        <span className="text-lg text-slate-700">or</span>
                                        <button
                                            onClick={saveAsWord}
                                            className="flex bg-blue-900 items-center transition-all delay-[70ms] justify-center gap-1 font-dancing-script w-[10rem] md:w-fit font-bold hover:bg-blue-600 shadow-md text-xl rounded-lg text-white p-3">
                                            <span className="hidden md:inline">Download
                                            as a Word file</span>
                                            <BsFileEarmarkWordFill size={40}/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button onClick={handleSlidePrev}
                                    className="text-cyan-900 font-bold border-2 flex space-x-1 items-center justify-center border-cyan-900 p-4 hover:text-cyan-600 hover:border-cyan-600 transition-colors delay-[70ms]">
                                <span>Generate another resume!</span>
                                <AiFillCaretRight size={30}/>
                            </button>
                        </div>
                    </motion.div>}

                </motion.div>}
        </>
    );
};

export default BuilderSave;