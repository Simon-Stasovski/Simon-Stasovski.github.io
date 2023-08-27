import { motion } from "framer-motion";
import { styles } from "../styles"
import { ComputersCanvas } from "./canvas";

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto">
            <div className={`${styles.paddingX} absolute 
            inset-0 top-[120px] max-7xl mx-auto flex
            flex-row items-start gap-5`}>
                <div className="flex flex-col 
                justify-center items-center mt-5">
                    <div className="w-4 h-150 sm:h-100 h-40 blue-clear-gradient rounded-full"></div>
                </div>
                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}> <span className="text-[#0071D4]">Simon Stasovski's </span>Portfolio
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}><p className="inline text-[#0071D4]"> Automation Developer</p> at Laurentide Controls. <p className="inline text-[#0071D4]"> <br className="sm:block hidden"/> Computer engineering student</p> at Concordia University. <br className="sm:block hidden"/> <p className="inline text-[#0071D4]"> Computer science DEC graduate</p> at John Abbott College.</p>
                </div>
            </div>
            <ComputersCanvas/>
            <div className="absolute xs:bottom-10
            bottom-32 w-full flex justify-center
            items-center">
                <a href="#about">
                    <div className="sm:w-[35px] lg:w-[114px] h-[64px]
                    rounded-3xl border-4 border-secondary
                    flex sm:justify-center lg:justify-end items-start p-2">
                        <motion.dev
                            animate={{
                                y: [0, 24, 0]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: 'loop'
                            }}
                            className="w-3 h-3 rounded-full bg-secondary mb-1"
                        />
                    </div>
                </a>
            </div>
        </section>

    )
}

export default Hero