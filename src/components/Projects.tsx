import { Row, Col, Container } from "react-bootstrap"
import { Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
    const softwareProjects = [
        {
            title: "Mot du Jour",
            description: "web development",
            imgUrl: "mdjImage",
        },
    ];

    const uxuiProjects = [
        {
            title: "Don Efficace",
            description: "ux/ui design for a donation platform teehe this is the best thing in he world i am so smart and handsome and kind and loyal",
            imgUrl: "donEfficaceImage",
        },
        {
            title: "Maplesoft",
            description: "ux/ui design",
            imgUrl: "maplesoftImage",
        },
    ];

    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Projects</h2>
                        <p>these are my projects, I have some UX/UI and web development ones.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="software">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="software">Software</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="uxui">UX/UI</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="software">
                                    <Row>
                                        {softwareProjects.map((project, index) => {
                                            return (<ProjectCard key={index} {...project} />)
                                        })}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="uxui">
                                    <Row>
                                        {uxuiProjects.map((project, index) => {
                                            return (<ProjectCard key={index} {...project} />)
                                        })}
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section >

    )
}