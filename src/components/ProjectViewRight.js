import '../styles/Project.css'
import {FaLongArrowAltRight, FaGithub} from 'react-icons/fa'

const ProjectViewRight = ({image, title, text, link, github}) => {
    return (
        <div className= 'project_view-right'>
            <div className="img-view">
           <div className="image-view"></div>
               <figure className="img-box"><img src={image} alt="" className="img" /></figure>
           </div>
        {/* end of image vie */}
           <div className="info-view">
               <h3 className="title">{title}</h3>
               <p className="text">{text}</p>
              <div className="link-box">
              <a target= '_blank' rel="noreferrer" href={link} className="info-link"><button className="btn">go to site</button><FaLongArrowAltRight className= 'info-icon' /></a>
              <a target= '_blank' rel="noreferrer" href={github} className="info-link"><button className="btn">go to github repo</button><FaGithub className= 'info-icon' /></a>
              </div>
           </div>
           {/* end of info view */}
        </div>
    )
}

export default ProjectViewRight
