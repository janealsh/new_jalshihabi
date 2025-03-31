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
            <Container>
                <Navbar.Brand href="#home">
                    <div className="navbar-logo-area">
                        <img src={jjIcon} alt="JA Logo" style={{marginRight: "8px"}}/>
                        <div style={{alignItems: "left"}}>
                            <div><span className="navbar-name">Jane Al-Shihabi</span></div>
                            <div><span style={{float: "left"}}>Web Developer, Designer, & Systems Thinker</span></div>
                        </div>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={currentLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateCurrentLink("home")}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={currentLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateCurrentLink("skills")}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={currentLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateCurrentLink("projects")}>Projects</Nav.Link>
                        <Nav.Link href="#about-me" className={currentLink === "about-me" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateCurrentLink("about-me")}>About Me</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/jane-al-shihabi/"> <img src={''} alt="" /> </a>
                            <a href="https://github.com/janealsh"> <img src={''} alt="" /> </a>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}