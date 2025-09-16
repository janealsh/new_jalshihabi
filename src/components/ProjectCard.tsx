import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imageUrl}: any) => {
    return (
        <Col size={12} sm ={6} md={4}>
            <div className="project-imgbx">
                <img src={imageUrl} />
                <div className="project=txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}