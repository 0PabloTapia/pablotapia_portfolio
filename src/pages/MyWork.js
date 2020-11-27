import styled from 'styled-components';
import { Link } from 'react-router-dom';
//Images
import GHjobs from '../img/GHjobs.png';
import rollinplayer from '../img/rollinplayer.png';
import apperbrochure from '../img/apperbrochure.png';
import cryptoapp from '../img/cryptoapp.png';
//Animations
import { motion } from 'framer-motion';
import { pageAnimation, photoAnim, fade, lineAnim, slider } from '../animation';
import {useScroll} from '../components/onScroll';
import ScrollTop from '../components/ScrollTop';

const MyWork = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    const [element3, controls3] = useScroll();
    return(
        <Work style={{ background: "#ffffff" }} exit="exit" variants={pageAnimation} initial="hidden" animate="show" >
            <Frame1 variants={slider}></Frame1>
            <Frame2 variants={slider}></Frame2>
            <Frame3 variants={slider}></Frame3>
            <Frame4 variants={slider}></Frame4>
            <Projects>
                <motion.h2 variants={fade} >GitHub Job Finder</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/githubjobfinder">
                    <Hide>
                    <motion.img variants={photoAnim} src={GHjobs} alt="appsearch"/>
                    </Hide>
                </Link>
            </Projects>
            <Projects ref={element} animate={controls} variants={fade}>
                <h2>Rollin'Player</h2>
                <motion.div ref={element} animate={controls} variants={lineAnim} className="line"></motion.div>
                <Link to="/work/rolling-player">
                    <img src={rollinplayer} alt="musicplayer"/>
                </Link>
            </Projects>
            <Projects ref={element2} animate={controls2} variants={fade}>
                <h2>Mobile App Brochure</h2>
                <motion.div ref={element2} animate={controls2} variants={lineAnim} className="line"></motion.div>
                <Link to="/work/brochuresite">
                    <img src={apperbrochure} alt="brochure"/>
                </Link>
            </Projects>
            <Projects ref={element3} animate={controls3} variants={fade}>
                <h2>Crypto Check</h2>
                <motion.div ref={element3} animate={controls3} variants={lineAnim} className="line"></motion.div>
                <Link to="/work/cryptocheck">
                    <img src={cryptoapp} alt="cryptocoins"/>
                </Link>
            </Projects>
            <ScrollTop />
        </Work>
    )   
};

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2 {
        padding: 1rem 0rem;
    }
    @media (max-width: 1300px) {
        padding: 2rem 2rem;
    }
`;
const Projects = styled(motion.div)`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #61DAFB;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height:70vh;
        object-fit: cover;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`
const Frame2 = styled(Frame1)`
    background: #ff8efb;
`
const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`
const Frame4 = styled(Frame1)`
    background: #8effa0;
`

export default MyWork;