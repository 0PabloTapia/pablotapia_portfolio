import { motion } from 'framer-motion';
import { pageAnimation, titleAnim } from '../animation';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons'

const ContactMe = () => {
    return(
        <ContactStyle
            exit="exit" 
            variants={pageAnimation}
            initial="hidden" 
            animate="show"
            style={{background: "#ffff" }}
        >
            <Title>
                <Hide>
                    <motion.h2 className="title" variants={titleAnim}>Get in Touch!</motion.h2>
                </Hide>
            </Title>
            <div>
                <Hide>
                <Social variants={titleAnim} >
                    <FontAwesomeIcon className="color1 fa-4x" icon={faEnvelopeSquare} />
                        <h2>Pablotapiavasquez@gmail.com</h2>
                </Social>
                </Hide>
                <Hide>
                <Social variants={titleAnim} >
                        <a className="github fab fa-github fa-4x" href="https://github.com/0PabloTapia/" target="_blank" rel="noreferrer"><h2>GitHub</h2></a>
                </Social>
                </Hide>
                <Hide>
                <Social variants={titleAnim} >
                        <a className="linkedin fab fa-linkedin fa-4x" href="https://www.linkedin.com/in/pablo-tapia-v%C3%A1squez-2b5565146/" target="_blank" rel="noreferrer"><h2>LinkedIN</h2></a>
                </Social>
                </Hide>
            </div>
        </ContactStyle>
    )
}

const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
    @media (max-width: 1500px) {
        padding: 2rem;
        font-size: 1rem;
    }
`
const Title = styled.div`
    margin-bottom: 4rem;
    color: black;
    @media (max-width: 1500px) {
        margin-top: 5rem;
        .title {
            color: #353535;
            font-weight: 600;
        }
    }
`
const Hide = styled.div`
    overflow: hidden;
`

const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    h2 {
        margin: 2rem;
    }
    .color1 {
        color: #d44f4f;
    }
    .github {
        display: contents;
        text-decoration: none;
        color: #353535;
        h2 {
            font-family: 'Inter', sans-serif;
        }
        &:hover{
            color: #6b4ab6;
            cursor: pointer;
        }
    }
    .linkedin {
        display: contents;
        text-decoration: none;
        color:  #353535;
        h2 {
            font-family: 'Inter', sans-serif;
        }
        &:hover{
            color: #0A66C1;
            cursor: pointer;
        }
    }

`

export default ContactMe;