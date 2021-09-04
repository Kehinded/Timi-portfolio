
import '../styles/Skills.css'

const techSkills = ['html', 'css', 'bootstrap', 'javascript', 'sass', 'tailwind', 'webpack',
                    'react js', 'next js', 'vue js', 'git']

const Skills = () => {
    return (
        <div className="skill-box">
        <h3 className= 'title'>technical skills</h3>
        <div className="skills">
            {
            techSkills.map((skill, index) => <div key={index} style={{textTransform: "uppercase"}} className="skill">{skill}</div>)
            }
        
        </div>
    </div>
    )
}

export default Skills
