import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useEffect, useState } from "react";
import jjIcon from "../assets/images/temp-jj-logo-resized.svg"

export const NavBar = () => {
    const [currentLink, setCurrentLink] = useState("home");
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return window.removeEventListener("scroll", onScroll);
    })

    const onUpdateCurrentLink = (linkName: string) => {
        setCurrentLink(linkName)
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Navbar.Brand href="#home" style={{width: "30%"}}>
                <Container className="navbar-logo-area">
                    <img src={jjIcon} alt="JA Logo" />
                    <div className="navbar-name-area">
                        <div className="navbar-name">Jane Al-Shihabi</div>
                        <div>Web Developer, Designer, Thinker</div>
                    </div>
                </Container>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto navbar-links">
                    <Nav.Link href="#home" className={currentLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateCurrentLink("home")}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={currentLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateCurrentLink("skills")}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={currentLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateCurrentLink("projects")}>Projects</Nav.Link>
                    <Nav.Link href="#about-me" className={currentLink === "about-me" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateCurrentLink("about-me")}>About Me</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/jane-al-shihabi/"> <img src={''} alt="linkedin" /> </a>
                        <a href="https://github.com/janealsh"> <img src={''} alt="github" /> </a>
                    </div>
                </span>
            </Navbar.Collapse>
        </Navbar>
    );
}