import { Row, Col, Container } from "react-bootstrap"

export const Projects = () => {
    const projects = [
        {
            title: "Mot du Jour",
            description: "web development",
            imgUrl: "mdjImage",
        },
    ];

    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>these are my projects, I have some UX/UI and web development ones.</p>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}