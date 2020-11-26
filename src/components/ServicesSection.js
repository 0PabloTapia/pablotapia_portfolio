
import styledcomponents from '../img/styledcomponents.png';
import home2 from '../img/home2.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faJsSquare, 
        faReact, 
        faHtml5, 
        faSass, 
        faCss3Alt, 
        faBootstrap, 
        faGitAlt
        } from '@fortawesome/free-brands-svg-icons';
//styles
import styled from 'styled-components';
import { About, Description, Image } from '../styles';
import {motion} from 'framer-motion';
import {fade, lineAnim} from '../animation';
import {useScroll} from './onScroll';

const ServicesSection = () => {
    const[element, controls] = useScroll();
    return (
        <Services ref={element} animate={controls} variants={fade}>
            <Description>
                <h2>Technical <span>Skills</span></h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Cards>
                    <Card>
                        <div className="icon">
                            <FontAwesomeIcon className="play fa-5x" icon={faJsSquare} />
                        </div>
                        
                    </Card>
                    <Card>
                        <div className="icon">
                        <FontAwesomeIcon className="play fa-5x" icon={faReact} />
                        </div>
                    </Card>
                    <Card>
                    <div className="icon">
                        <FontAwesomeIcon className="play fa-5x" icon={faHtml5} />
                        </div>
                    </Card>
                    <Card>
                    <div className="icon">
                        <FontAwesomeIcon className="play fa-5x" icon={faCss3Alt} />
                        </div>
                    </Card>
                    <Card>
                    <div className="icon">
                        <FontAwesomeIcon className="play fa-5x" icon={faSass} />
                        </div>
                    </Card>
                    <Card>
                    <div className="icon">
                        <FontAwesomeIcon className="play fa-5x" icon={faGitAlt} />
                        </div>
                    </Card>
                    <Card>
                        <div className="icon">
                        <FontAwesomeIcon className="play fa-5x" icon={faBootstrap} />
                        </div>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={styledcomponents} alt="people" height="70px" />
                        </div>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img className="img2" src={home2} alt="developer"/>
            </Image>
        </Services>
    );
};

const Services = styled(About)`
    h2 {
        padding-bottom: 5rem;
    }
    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
    .line{
        height: 0.5rem;
        background: #61DAFB;
        margin-bottom: 3rem;
        position: absolute;
        top: 6rem;
    }
    @media (max-width: 1300px) {
        justify-content: center
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Card = styled.div`
    flex-basis: 20rem;
    .icon {
        display: flex;
        align-items: center;
        padding-bottom: 3rem;
        color:  #61DAFB;
        h3 {
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem
        }
    }
`

export default ServicesSection;