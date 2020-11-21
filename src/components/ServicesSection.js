import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
//styles
import styled from 'styled-components';
import { About, Description, Image } from '../styles';
import {fade} from '../animation';
import {useScroll} from './onScroll';

const ServicesSection = () => {
    const[element, controls] = useScroll();
    return (
        <Services ref={element} animate={controls} variants={fade}>
            <Description>
                <h2>Trabajo de <span>alta</span> calidad</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="reloj"/>
                            <h3>Eficiente</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm"/>
                            <h3>diafragma</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="dinero"/>
                            <h3>Asequible</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="people"/>
                            <h3>Trabajo en equipo</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={home2} alt="camera"/>
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
        h3 {
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem
        }
    }
`

export default ServicesSection;