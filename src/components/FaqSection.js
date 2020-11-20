
import styled from 'styled-components';
import { About } from '../styles';
import Toggle from'./Toggle';
import { AnimateSharedLayout } from 'framer-motion';

const FaqSection = () => {
    return (
        <Faq>
            <h2> 
                Preguntas <span>FAQ</span>
            </h2>
            <AnimateSharedLayout>
            <Toggle title="How do i start?">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Maiores harum praesentium dolorem libero, officiis vel.
                    </p>
            </div>
            </Toggle>
            <Toggle title="¿Qué proyectos he creado?">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Maiores harum praesentium dolorem libero, officiis vel.
                    </p>
            </div>
            </Toggle>
            <Toggle title="Métodos de pago">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Maiores harum praesentium dolorem libero, officiis vel.
                    </p>
            </div>
            </Toggle>
            <Toggle title="Horario">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Maiores harum praesentium dolorem libero, officiis vel.
                    </p>
                </div>
            </Toggle>
            </AnimateSharedLayout>
        </Faq>
    );
};

const Faq = styled(About)`
    display: block;
    span {
        display: block;
    }
    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100% auto;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
`

export default FaqSection;