import {AnimatePresence, motion} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import {CgClose} from "react-icons/cg";
import {handleClickOutside} from "../../utilities/handleClickOutside.js";

const AddInputComponent = ({inputs, setInputsList, placeholder}) => {
    const [input, setInput] = useState("");
    const [wrongInput, setWrongInput] = useState(false);
    const inputRef = useRef(null);
    const variants = {
        shake: {
            rotate: [-1, 1.3, 0],
            transition: {
                repeat: 1,
                duration: 0.3
            }
        },
        reset: {
            rotate: 0
        }
    }
    const handleAddInput = (e) => {
        if (e.key === 'Enter') {
            if (inputs.find(item => item === input) || input.length === 0) {
                setWrongInput(true);
                return;
            }
            setWrongInput(false);
            setInputsList(prevState => [...prevState, input]);
            setInput("");
        }
    }

    const handleRemoveInput = (item) => {
        setInputsList(inputs.filter(i => i !== item));
    }

    useEffect(() => {
        document.addEventListener('mousedown', (e) => handleClickOutside(e, inputRef, setWrongInput));
        return () => {
            document.removeEventListener('mousedown', (e) => handleClickOutside(e, inputRef, setWrongInput));
        }
    }, []);

    return (
        <div className={`flex flex-col ${inputs.length > 0 ? 'space-y-4' : ''}`}>
            <motion.input type="text" placeholder={placeholder}
                          value={input}
                          ref={inputRef}
                          variants={variants}
                          animate={wrongInput ? 'shake' : 'reset'}
                          onChange={e => setInput(e.target.value)}
                          onKeyDown={(e) => handleAddInput(e)}
                          className={`${wrongInput ? 'focus:border-red-600' : ''} p-4 border focus:border focus:border-cyan-600 border-gray-200 rounded-lg`}/>
            <motion.div className="flex gap-2 justify-center flex-wrap">
                <AnimatePresence>
                    {inputs.map((item, id) => {
                        return (
                            <motion.button whileHover={{scale: 1.05}} layout={"position"} initial={{opacity: 0}}
                                           animate={{opacity: 1}} exit={{opacity: 0}}
                                           className="flex space-x-4 bg-cyan-900 transition-colors delay-[70ms] text-white rounded-lg p-2 items-center hover:bg-red-600"
                                           onClick={() => handleRemoveInput(item)} key={id}>
                                <span>{item}</span><CgClose/></motion.button>
                        );
                    })}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default AddInputComponent;