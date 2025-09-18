import { Row, Col, Container } from "react-bootstrap"
import { Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import whereAmI_img from "../assets/images/where_am_i_img.jpg"
import motDuJour_img from "../assets/images/MDJ_img.jpg"
import gaitBetter_img from "../assets/images/gait_better_img.jpg"
import famJam_img from "../assets/images/famJam_img.png"
import donEfficace_img from "../assets/images/don_efficace_img.png"

export const Projects = () => {
    const softwareProjects = [
        {
            title: "Mot du Jour",
            description: "An independently completed web development project",
            imgUrl: motDuJour_img,
        },
        {
            title: "Gait Better",
            description: "An iOS app collaboratively developed for my team's SYDE 361 term project",
            imgUrl: gaitBetter_img,
        },
    ];

    const uxuiProjects = [
        {
            title: "Don Efficace",
            description: "The project from my time as a product designer on UW Blueprint's Don Efficace team",
            imgUrl: donEfficace_img,
        },
        {
            title: "FamJam",
            description: "My team's entry for Wilfrid Laurier University's 2024 UXL designathon",
            imgUrl: famJam_img,
        },
        {
            title: "Where Am I?",
            description: "Won the beginner track for a 2022 hackathon's beginner track",
            imgUrl: whereAmI_img,
        },
        // {
        //     title: "Maplesoft",
        //     description: "ux/ui design",
        //     imgUrl: "maplesoftImage",
        // },
    ];
    // TODO: add gait better electrical portion
    // TODO: add mathematical model for SYDE 383

    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Projects</h2>
                        <p>I'm quite a multidisciplinary person, so here are my projects. Click on any to explore!</p>
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
                                            console.log("project info ", project.title, project.imgUrl)
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