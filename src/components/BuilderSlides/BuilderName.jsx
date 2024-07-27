import {motion} from "framer-motion";
import {BiQuestionMark} from "react-icons/bi";
import {CgArrowRightO} from "react-icons/cg";

const BuilderName = ({slide, handleSlideNext, firstName, lastName, setFirstName, setLastName}) => {
    return (
        <>
            {slide === 1 &&
                <motion.div
                    initial={{opacity: 0.5, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.3}}
                    exit={{opacity: 0, scale: 0}}
                    className="flex h-[40rem] justify-center items-center mt-4 flex-grow space-y-8">
                    <div className="flex-col space-y-4">
                        <div className="flex justify-center">
                                <span
                                    className="flex text-white bg-gradient-to-r from-gray-300 to-gray-400 p-2 rounded-full"><BiQuestionMark
                                    size={80}/></span>
                        </div>
                        <h1 className="text-2xl text-center font-bold text-cyan-900">What is your name?</h1>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                            <input value={firstName} onChange={e => setFirstName(e.target.value)} type="text"
                                   placeholder="First Name"
                                   className="p-4 border focus:border focus:border-cyan-600 border-gray-200 rounded-lg"/>
                            <input value={lastName} onChange={e => setLastName(e.target.value)} type="text"
                                   placeholder="Last Name"
                                   className="p-4 border focus:border focus:border-cyan-600 border-gray-200 rounded-lg"/>
                        </div>

                        <div className="flex justify-center">
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

export default BuilderName;