import {Link} from 'react-router-dom';
import me1 from '../img/me1.png';
import {About, Description, Image, Hide} from '../styles';
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';
import Wave from './Wave';

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
                            Hi! My name is
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                             <span>Pablo</span> i'm a software
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>developer</motion.h2 >
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>
                    Former airplane pilot who discovered software development. Here i will be
                    posting my favorite projects i've worked on, feel free to stick around and test them out!
                </motion.p>
                <Link to="/contact">
                <motion.button variants={fade}>Contact Me</motion.button>
                </Link>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={me1} alt="profilepic"/>
            </Image>
            <Wave />
        </About>
    )
}

//Styled Components


export default AboutSection;