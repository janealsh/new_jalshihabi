import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/images/jalshihabi_logo.svg"
import github_icon from "../assets/images/github_final.svg"
import linkedin_icon from "../assets/images/linkedin_final.svg"

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={1}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={11} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="#"><img src={github_icon} alt="Github Icon" /></a>
                            <a href="#"><img src={linkedin_icon} alt="Linkedin Icon" /></a>
                        </div>
                        <p>Jane Al-Shihabi Portfolio © 2025 by Jane Al-Shihabi is licensed under Creative Commons Attribution 4.0 International</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
    // TODO fix social icon formatting (no animation)
}