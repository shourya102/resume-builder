import {BsCursor} from "react-icons/bs";
import {motion} from "framer-motion";
import TemplatePresenter from "../../components/TemplatePresenter/TemplatePresenter.jsx";
import temp_1 from "../../assets/temp_1.jpg";

const Home = () => {
    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-blue-700">
            <motion.div
                initial={{opacity: 0, scale: 0.75}}
                animate={{opacity: 1, scale: 1}}
                transition={{delay: 0.2, ease: "linear", duration: 0.3}}
                className="flex-col bg-white overflow-clip border border-opacity-70 border-gray-400 rounded-lg shadow-xl w-5/6 h-[50rem]">
                <h1 className="flex m-4 space-x-1 font-dancing-script text-gray-500 text-3xl font-bold">
                    <BsCursor/>
                    <span>Resume Builder</span>
                </h1>
                <div className="flex-col mt-4 flex-grow space-y-8">
                    <h1 className="text-3xl text-blue-800 text-center font-bold">Pick A Template</h1>
                    <div
                        className="flex flex-grow flex-wrap h-[38rem] overflow-y-scroll gap-4 items-center p-4 justify-center ">
                        <TemplatePresenter template={temp_1}/>
                        <TemplatePresenter template={temp_1}/>
                        <TemplatePresenter template={temp_1}/>
                        <TemplatePresenter template={temp_1}/>
                        <TemplatePresenter template={temp_1}/>
                        <TemplatePresenter template={temp_1}/>
                    </div>
                </div>
                <div
                    className="text-center text-gray-50 flex-1 flex-grow bg-gradient-to-r from-cyan-500 to-cyan-700 a p-2">Pick
                    a template to get started!
                </div>
            </motion.div>
        </div>
    );
};

export default Home;