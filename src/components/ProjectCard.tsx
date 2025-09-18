import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projectLink}: any) => {
    return (
        <Col size={12} sm ={6} md={4}>
            <div className="projects-imgbx">
                <img src={imgUrl} />
                <a href={projectLink ? projectLink : "javascript:void(0)"} target={projectLink? "_blank" : ""} className="projects-text">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </a>
            </div>
        </Col>
    )
}