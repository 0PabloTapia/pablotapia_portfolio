import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { ProjectState } from '../projectState';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const ProjectDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [projects, setProjects] = useState(ProjectState);
    const [project, setProject] = useState(null);

    useEffect(() => {
        const currentProject = projects.filter((stateProject) => stateProject.url === url);
        setProject(currentProject[0]);
    }, [projects, url])

    return(
        <>
            {project && (
            <Details
               exit="exit" 
               variants={pageAnimation} 
               initial="hidden" 
               animate="show"
            >
                <HeadLine>
                    <h2>{project.title}</h2>
                    <img src={project.mainImg} alt="athlete"/>
                </HeadLine>
                <Awards>
                    {project.awards.map((award) => (
                        <Award 
                            title={award.title} 
                            description={award.description} 
                            code={award.code}
                            key={award.title} 
                        />
                    ))}
                </Awards>
               
            </Details>
            )}
        </>
    );
};

const Details = styled(motion.div)`
    color: white;
`
const HeadLine = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2 {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%)
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`
const Awards = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 1500px) {
        display: block;
        margin: 2rem 2rem;
    }
`;
const AwardStyle = styled.div`
    padding: 2rem;

    h3 {
        font-size: 2rem;
    }
    .line {
        width: 100%;
        background: #61DAFB;
        height: 0.5rem;
        margin: 1rem 0rem;
    }
    .description a {
        color: #ccc;
        text-decoration-line: none;
        font-family: 'Inter', sans-serif;
        font-size: 1.4rem;
        &:hover {
            font-size: 1.5rem;
            color: #b6a6da;
        }
    }

    p {
        padding: 2rem 0rem;
    }
`


//Award component
const Award = ( {title, description, code} ) => {
    return(
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p className="description">{description}</p>
            <p className="description">{code}</p>
        </AwardStyle>
    )
}

export default ProjectDetail;