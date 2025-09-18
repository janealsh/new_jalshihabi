import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl}: any) => {
    return (
        <Col size={12} sm ={6} md={4}>
            <div className="projects-imgbx">
                <img src={imgUrl} />
                <div className="projects-text">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}