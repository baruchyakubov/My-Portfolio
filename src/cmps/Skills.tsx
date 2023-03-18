import { useState } from "react"
import { skillList } from "../data lists/skill-list"
import { Skill } from "../interfaces/Skill"

export const Skills = () => {
    const [skills] = useState<Skill[]>(skillList)

    return (
        <section className="Skills-section main-container">
            <h1>Skills</h1>
            <div className="skill-list">
                {skills.map(skill => {
                    return <a key={skill.id} target="_blank" href={skill.url}>
                        <img src={skill.svgUrl} alt="" />
                    </a>
                })}
            </div>
        </section>
    )
}