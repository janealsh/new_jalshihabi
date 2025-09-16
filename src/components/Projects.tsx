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
            description: "ux/ui design",
            imgUrl: "donEfficaceImage",
        },
    ];

    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>these are my projects, I have some UX/UI and web development ones.</p>
                        <Tab.Container id="project-tabs" defaultActiveKey="software">
                            <Row>
                                <Col sm={3}>
                                    <Nav variant="pills" className="">
                                        <Nav.Item>
                                            <Nav.Link eventKey="software">Software</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="uxui">UX/UI</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={3}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="software">
                                            <Row>
                                                {softwareProjects.map((project, index) => {
                                                    return (<ProjectCard key={index} {...project}/>)
                                                })}
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="uxui">
                                            <Row>
                                                {uxuiProjects.map((project, index) => {
                                                    return (<ProjectCard key={index} {...project}/>)
                                                })}
                                            </Row>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}