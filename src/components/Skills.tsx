import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel"
import { Row, Col } from "react-bootstrap"
import "react-multi-carousel/lib/styles.css"


export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skills-box"></div>
                        <h2>skills</h2>
                        <p>hey, these are my skills. i have experience in a lot of engineering areas, so i'm basically a jack of all trades. <br></br> the perks of being a systems design engineer!</p>
                        <Carousel responsive={responsive} infinite={true} draggable={true} className="skills-slider">
                            {/* TODO remove  skill item class prob don't need it */}
                            <div className="skill-item"> 
                                <h5>web development</h5>
                            </div>
                            <div className="skill-item">
                                <h5>UX/UI design</h5>
                            </div>
                            <div className="skill-item">
                                <h5>electromechanical design</h5>
                            </div>
                            <div className="skill-item">
                                <h5>project management</h5>
                            </div>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}