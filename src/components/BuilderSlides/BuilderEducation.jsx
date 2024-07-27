import {useEffect, useRef, useState} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import {CgArrowLeftO, CgArrowRightO} from "react-icons/cg";
import {LiaUniversitySolid} from "react-icons/lia";
import LocationInput from "../LocationInput/LocationInput.jsx";
import {handleClickOutside} from "../../utilities/handleClickOutside.js";
import listOfPopularDegrees from "../../data/listOfPopularDegrees.js"

const BuilderEducation = ({
                              slide,
                              institute,
                              setInstitute,
                              setSelectedCourse,
                              handleSlideNext,
                              handleSlidePrev,
                              setCity,
                              setState
                          }) => {
    const [courses, setCourses] = useState([]);
    const [courseKeyword, setCourseKeyword] = useState("");
    const [openCourseDropdown, setOpenCourseDropdown] = useState(false);
    const courseRef = useRef(null);
    const [filteredCourses, setFilteredCourses] = useState([]);

    useEffect(() => {
        const loadCourses = () => {
            setCourses(listOfPopularDegrees);
        };
        loadCourses();
    }, []);

    useEffect(() => {
        const courseByKeyword = courses.filter(course =>
            course.toUpperCase().includes(courseKeyword.toUpperCase())
        );
        setFilteredCourses(courseByKeyword.slice(0, 5));
    }, [courseKeyword, courses]);

    useEffect(() => {
        document.addEventListener("mousedown", (e) => handleClickOutside(e, courseRef, setOpenCourseDropdown));
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSetCourse = (course) => {
        setCourseKeyword(course);
        setSelectedCourse(course);
        setOpenCourseDropdown(false);
    };

    return (
        <>
            {slide === 8 && <motion.div
                initial={{opacity: 0.5, scale: 0.5}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.3}}
                exit={{opacity: 0, scale: 0}}
                className="flex h-[40rem] justify-center items-center mt-4 flex-grow space-y-8">
                <div className="flex-col space-y-4">
                    <div className="flex justify-center">
                                <span
                                    className="flex text-white bg-gradient-to-r from-gray-300 to-gray-400 p-2 rounded-full"><LiaUniversitySolid
                                    size={80}/></span>
                    </div>
                    <h1 className="text-2xl text-center font-bold text-cyan-900">Mention your education.</h1>
                    <div className="grid gap-4">
                        <input type="text" placeholder="Institution"
                               value={institute} onChange={e => setInstitute(e.target.value)}
                               className="p-4 border focus:border focus:border-cyan-600 border-gray-200 rounded-lg"/>
                        <LocationInput setSelectedState={setState} setSelectedCity={setCity}/>
                        <div>
                            <input type="text" placeholder="Course"
                                   value={courseKeyword}
                                   onSelect={() => setOpenCourseDropdown(true)}
                                   onChange={e => {
                                       setCourseKeyword(e.target.value);
                                   }}
                                   className="p-4 w-full border focus:border focus:border-cyan-600 border-gray-200 rounded-lg"/>
                            <AnimatePresence>
                                {openCourseDropdown && <motion.div
                                    initial={{opacity: 0.5}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                    className="relative translate-y-2">
                                    <div ref={courseRef}
                                         className="absolute text-sm grid grid-cols-1 p-2 w-full bg-white border border-gray-200 z-10 rounded-2xl">
                                        {filteredCourses.length === 0 &&
                                            <button onClick={() => handleSetCourse(courseKeyword)}
                                                    className="p-0.5 text-blue-600 hover:bg-gray-100">No course found
                                                with the given
                                                keyword. Click to create new.</button>}
                                        {filteredCourses.map((item, id) => {
                                            return (<button key={id}
                                                            onClick={() => handleSetCourse(item)}
                                                            className="p-0.5 hover:bg-gray-200 rounded-lg">{item}</button>);
                                        })}
                                    </div>
                                </motion.div>}
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

export default BuilderEducation;