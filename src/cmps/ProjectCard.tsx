import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Project } from './ProjectList';
interface Props {
    project: Project
}

function ProjectCard({ project }: Props) {
    return (
        <Card style={{ backgroundColor: 'rgb(31, 58, 77)' }}>
            <Card.Img variant="top" src={project.imgUrl} />
            <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>
                    {project.txt}
                </Card.Text>
                <div className='btn-section'>
                    <a target="_blank" href={project.websiteUrl}><Button  variant="primary">Website</Button></a>
                    <a target="_blank" href={project.repositoryUrl}><Button variant="primary">Repository</Button></a>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;