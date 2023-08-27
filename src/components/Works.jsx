import { Tilt } from "react-tilt"
import { motion } from "framer-motion"

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


const ProjectCard = ({ index, title, image, repoLink, details}) => {
    const parsedHtmlContent = () => ({ __html: details });
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                option={{
                    max: 45,
                    scale: 1, 
                    speed: 450
                }}
                className="rounded-2xl sm:w-[360px] w-full blue-gradient p-[1px] rounded-[20px] shadow-card"    
            >
                <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>

                <div className="bg-black rounded-[20px] py-5 px-5
                min-h-[500px] flex items-center flex-col">
                    <img src={image} alt={title}
                    className="w-auto max-h-[200px] rounded-lg"/>
                    <div className="mt-5" dangerouslySetInnerHTML={parsedHtmlContent()}></div>
                    <div className="absolute inset-0 flex justify-end pt-12 pr-5 card-img_hover">
                        <div
                            onClick={() => window.open(repoLink, "_blank")}
                            className="black-gradient w-10 h-10 rounded-full 
                            flex justify-center items-center cursor-pointer"
                            >
                                <img
                                    src={github}
                                    alt="github"
                                    className="w-7 h-7 object-contain">
                                </img>
                        </div>
                    </div>
                </div>
            </Tilt>
        </motion.div>
    )
}

const Works = () => {
    return (
        <>
        <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>
                My Projects
            </p>
                <h2 className={styles.heroHeadText}>Projects</h2>
        </motion.div>
        <div className="w-full flex">
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-3 text-secondary, text-[17px] max-w-3xl leading[30px]"
            >
                Here are some projects that I have made alone or with other people. We used GitHub and Jira to 
                collaborate and manage our projects. I invite you to visit the repositories. 

            </motion.p>
        </div>
        <div className="mt-20 flex flex-wrap justify-around gap-20">
            {projects.map((project, index) => (
                <ProjectCard key={`project-${index}`} index={index} {...project}/>
            ))}
        </div>
    </>
    )
}

export default SectionWrapper(Works, "my projects")