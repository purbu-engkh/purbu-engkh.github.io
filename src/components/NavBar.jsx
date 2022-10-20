import { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useCookies } from 'react-cookie';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import emailIcon from '../assets/img/email.svg';
import ReactFlagsSelect from "react-flags-select";
import * as Constant from './Constants';
import {
  BrowserRouter as Router
} from "react-router-dom";

const NavBar = () => {
    const [cookies, setCookie] = useCookies(['language']);
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [selected, setSelected] = useState(cookies.language)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const changeLanguage = (code) => {
        setSelected(code)
        setCookie('language', code, { path: '/' })
    }

    return (
        <Router>
            <Navbar expand="md" className={scrolled ? "scrolled" : "" }>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className={activeLink==='home' ? 'active navbar-link' : 'navbar-link' } onClick={()=> onUpdateActiveLink('home')}>{selected=='MN' ? Constant.home_mn : Constant.home_en}</Nav.Link>
                            <Nav.Link href="#skills" className={activeLink==='skills' ? 'active navbar-link' : 'navbar-link' } onClick={()=> onUpdateActiveLink('skills')}>{selected=='MN' ? Constant.skills_mn : Constant.skills_en}</Nav.Link>
                            <Nav.Link href="#projects" className={activeLink==='projects' ? 'active navbar-link' : 'navbar-link' } onClick={()=> onUpdateActiveLink('projects')}>{selected=='MN' ? Constant.projects_mn : Constant.projects_en}</Nav.Link>
                            <Nav.Link href="#experience" className={activeLink==='experience' ? 'active navbar-link' : 'navbar-link' } onClick={()=> onUpdateActiveLink('experience')}>{selected=='MN' ? Constant.experience_mn : Constant.experience_en}</Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a href={Constant.linkedin_url}><img src={navIcon1} alt="" /></a>
                                <a href={Constant.fb_url}><img src={navIcon2} alt="" /></a>
                                <a href={Constant.insta_url}><img src={navIcon3} alt="" /></a>
                                <a href={Constant.mailto}><img src={emailIcon} alt="" /></a>
                            </div>
                        </span>
                        <ReactFlagsSelect
                            countries={["MN", "GB"]}
                            showSelectedLabel={false}
                            showSecondarySelectedLabel={false}
                            showOptionLabel={false}
                            fullWidth={false}
                            placeholder=""
                            selected={selected}
                            onSelect={code => changeLanguage(code)}
                        />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    )
}

export default NavBar;
