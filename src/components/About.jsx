import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { aboutMe } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ( {index, title, image, details} ) => {
    return (
        <Tilt className="xs:w-[375px] w-full">
            <motion.div 
            variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
            className="w-full blue-gradient p-[1px] rounded-[20px] shadow-card">
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>

                <div
                option={{
                    max: 45,
                    scale: 1,
                    speed: 450
                }}
                
                className={`bg-black rounded-[20px] py-5 px-5
                min-h-[500px] flex items-center flex-col`}>

                    <img src={image} alt={title}
                    className="w-auto max-h-[200px] rounded-lg"/>
                    <div className="absolute insert-0 flex justify-end m-3 card-img_hover"></div>
                    <p className="mt-5 text-justify ver">{details}</p>

                </div>
            </motion.div>
        </Tilt>
    )
}

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>About Me</p>
                <h2 className={styles.sectionHeadText}>Overview</h2>
            </motion.div>

            <motion.p variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary test-[17px] max-w-3xl leading-[30px]">
                I am a software engineering student at Concordia University. 
                I have also completed a three year computer science DEC program at John Abbott College.
                I invite you to learn more about me, my projects and work experience below. 
            </motion.p>
            <div className="mt-20 flex flex-wrap justify-around gap-20">
                {aboutMe.map((aboutMe, index) => (
                    <ServiceCard key={aboutMe.title} index={index} {...aboutMe}/>
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(About, "about me")