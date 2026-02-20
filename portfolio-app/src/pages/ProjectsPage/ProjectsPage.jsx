import { Link } from 'react-router-dom';
import './ProjectsPage.css';
import projectImg from '../../assets/images/testwallpaper.jpg';

function Projects() {
    return (
        <>
            <h1>Projects page</h1>
            <div className='projects-container'>
                <div className='project'>
                    <Link to="/projects/project-1">
                        <img className='project-image' src={projectImg} alt="My project" />
                    </Link>
                </div>
                <div className='project'>
                    <img className='project-image' src={projectImg} alt="My project" />
                </div>
                <div className='project'>
                    <img className='project-image' src={projectImg} alt="My project" />
                </div>
                <div className='project'>
                    <img className='project-image' src={projectImg} alt="My project" />
                </div>
            </div>
        </>
    )
}

export default Projects
