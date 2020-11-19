import home1 from '../img/home1.png';
import {About, Description, Image, Hide} from '../styles';
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';

const AboutSection = () => {
    return (
        <About>
            <Description>
                <motion.div
                    className="title">
                    <Hide>
                        <motion.h2 
                            variants={titleAnim}
                        >
                            We work to make
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            your <span>dreams</span> come
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>true.</motion.h2 >
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>
                    Contáctame para cualquier idea o trabajo relacionado a las 
                    tecnologías que encuentres en mis proyectos
                </motion.p>
                <motion.button variants={fade}>Contáctame</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={home1} alt="profilepic"/>
            </Image>
        </About>
    )
}

//Styled Components


export default AboutSection;