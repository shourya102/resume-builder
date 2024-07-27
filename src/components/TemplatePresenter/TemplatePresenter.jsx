import {motion} from "framer-motion";
import {Link} from "react-router-dom";

const TemplatePresenter = ({template}) => {
    return (
        <motion.div
            whileHover={{scale: 1.1}}
            className="inline-flex h-fit bg-gray-400 shadow-xl hover:cursor-pointer border border-gray-500 w-[15rem] lg:w-[13rem] md:w-[12.5rem]">
            {template && <Link to={"/builder"}><img src={template} alt=""/></Link>}
        </motion.div>
    );
};

export default TemplatePresenter;