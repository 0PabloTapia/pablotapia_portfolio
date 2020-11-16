import home1 from '../img/home1.png';
import styled from 'styled-components';
import {About, Description, Image, Hide} from '../styles';

const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>
                            your <span>dreams</span> come
                        </h2>
                    </Hide>
                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                </div>
                <p>
                    Contáctame para cualquier idea o trabajo relacionado a las 
                    tecnologías que encuentres en mis proyectos
                </p>
                <button>Contáctame</button>
            </Description>
            <Image>
                <img src={home1} alt="profilepic"/>
            </Image>
        </About>
    )
}

//Styled Components


export default AboutSection;