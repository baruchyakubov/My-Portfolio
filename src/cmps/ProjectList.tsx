import { useState } from "react"
import { projectList } from "../data lists/project-list"
import { Project } from "../interfaces/Project"
import ProjectCard from "./ProjectCard"

export const ProjectList = () => {
    const [list] = useState<Project[]>(projectList)

    return (
        <section className="project-list main-container">
            <h1>Projects</h1>
            <div className="card-grid">
                {list.map(project => {
                    return <ProjectCard key={project.id} project={project}></ProjectCard>
                })}
            </div>
        </section>
    )
}