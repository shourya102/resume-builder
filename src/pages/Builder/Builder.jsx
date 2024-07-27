import {AnimatePresence, motion} from "framer-motion";
import {BsCursor} from "react-icons/bs";
import {useEffect, useMemo, useState} from "react";
import BuilderName from "../../components/BuilderSlides/BuilderName.jsx";
import BuilderEmail from "../../components/BuilderSlides/BuilderEmail.jsx";
import BuilderMob from "../../components/BuilderSlides/BuilderMob.jsx";
import BuilderLocation from "../../components/BuilderSlides/BuilderLocation.jsx";
import BuilderSocials from "../../components/BuilderSlides/BuilderSocials.jsx";
import BuilderSummary from "../../components/BuilderSlides/BuilderSummary.jsx";
import BuilderProjects from "../../components/BuilderSlides/BuilderProjects.jsx";
import BuilderEducation from "../../components/BuilderSlides/BuilderEducation.jsx";
import BuilderSkills from "../../components/BuilderSlides/BuilderSkills.jsx";
import BuilderOthers from "../../components/BuilderSlides/BuilderOthers.jsx";
import BuilderSave from "../../components/BuilderSlides/BuilderSave.jsx";

const Builder = () => {
    const [slide, setSlide] = useState(1);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [mob, setMob] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [social, setSocial] = useState("");
    const [summary, setSummary] = useState("");
    const [projects, setProjects] = useState([]);
    const [skills, setSkills] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [achievements, setAchievements] = useState([]);
    const [institute, setInstitute] = useState("");
    const [course, setCourse] = useState("");
    const [educationCity, setEducationCity] = useState("");
    const [educationState, setEducationState] = useState("");
    const [data, setData] = useState({})

    const modifiedProject = useMemo(() => {
        return projects.filter(project => project.title.trim() !== '' && project.description.trim() !== '');
    }, [projects])

    useEffect(() => {
        const tmp = {
            name: firstName + " " + lastName,
            email: email,
            mob: mob,
            city: city,
            state: state,
            social: social,
            summary: summary,
            projects: modifiedProject,
            skills: skills,
            languages: languages,
            achievements: achievements,
            institute: institute,
            course: course,
            education_city: educationCity,
            education_state: educationState
        }
        setData(tmp)
    }, [achievements, city, course, educationCity, educationState, email, firstName, institute, languages, lastName, mob, modifiedProject, projects, skills, social, state, summary]);

    const handleSlideNext = () => {
        setSlide(prevState => prevState + 1);
    }

    const handleSlidePrev = () => {
        if (slide === 1) return;
        setSlide(prevState => prevState - 1);
    }

    const handleAnimateProgressBar = () => {
        switch (slide) {
            case 1:
                return {width: '0%'}
            case 2:
                return {width: '10%'}
            case 3:
                return {width: '20%'}
            case 4:
                return {width: '30%'}
            case 5:
                return {width: '40%'}
            case 6:
                return {width: '50%'}
            case 7:
                return {width: '60%'}
            case 8:
                return {width: '70%'}
            case 9:
                return {width: '80%'}
            case 10:
                return {width: '90%'}
            default:
                return {width: '100%'}
        }
    }


    return (
        <div>
            <div className="w-full min-h-screen flex justify-center items-center bg-blue-700">
                <motion.div
                    initial={{opacity: 0, scale: 0.75}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{delay: 0.2, ease: "linear", duration: 0.3}}
                    className="flex-col bg-white border border-opacity-70 border-gray-400 rounded-lg shadow-xl w-5/6 h-[50rem]">
                    <motion.div
                        initial={{width: 0}}
                        animate={handleAnimateProgressBar}
                        transition={{duration: 0.5}}
                        className={`rounded-tl-lg rounded-tr-lg border-4 ${slide === 1 ? 'border-transparent' : ''}`}></motion.div>
                    <h1 className="flex m-4 space-x-1 font-dancing-script text-gray-500 text-3xl font-bold">
                        <BsCursor/>
                        <span>Resume Builder</span>
                    </h1>
                    <AnimatePresence>
                        <BuilderName firstName={firstName} lastName={lastName} setFirstName={setFirstName}
                                     setLastName={setLastName} key={1} slide={slide} handleSlideNext={handleSlideNext}/>
                        <BuilderEmail email={email} setEmail={setEmail} key={2} slide={slide}
                                      handleSlideNext={handleSlideNext}
                                      handleSlidePrev={handleSlidePrev}/>
                        <BuilderMob mob={mob} setMob={setMob} key={3} slide={slide} handleSlideNext={handleSlideNext}
                                    handleSlidePrev={handleSlidePrev}/>
                        <BuilderLocation setSelectedCity={setCity} setSelectedState={setState} key={4} slide={slide}
                                         handleSlideNext={handleSlideNext}
                                         handleSlidePrev={handleSlidePrev}/>
                        <BuilderSocials setSocial={setSocial} social={social} key={5} slide={slide}
                                        handleSlideNext={handleSlideNext}
                                        handleSlidePrev={handleSlidePrev}/>
                        <BuilderSummary summary={summary} setSummary={setSummary} key={6} slide={slide}
                                        handleSlideNext={handleSlideNext}
                                        handleSlidePrev={handleSlidePrev}/>
                        <BuilderProjects setProjects={setProjects} projects={projects} key={7} slide={slide}
                                         handleSlideNext={handleSlideNext}
                                         handleSlidePrev={handleSlidePrev}/>
                        <BuilderEducation institute={institute} setInstitute={setInstitute} course={course}
                                          setSelectedCourse={setCourse} setCity={setEducationCity}
                                          setState={setEducationState}
                                          key={8} slide={slide} handleSlideNext={handleSlideNext}
                                          handleSlidePrev={handleSlidePrev}/>
                        <BuilderSkills skills={skills} setSkills={setSkills} key={9} slide={slide}
                                       handleSlideNext={handleSlideNext}
                                       handleSlidePrev={handleSlidePrev}/>
                        <BuilderOthers languages={languages} setLanguages={setLanguages} achievements={achievements}
                                       setAchievements={setAchievements} key={10} slide={slide}
                                       handleSlideNext={handleSlideNext}
                                       handleSlidePrev={handleSlidePrev}/>
                        <BuilderSave data={data} key={11} slide={slide}
                                     handleSlidePrev={handleSlidePrev}/>
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default Builder;