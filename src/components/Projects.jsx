import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { useCookies } from 'react-cookie';
import { ProjectCard } from "./ProjectCard";
import miAdmin from "../assets/img/mi-admin-1.png";
import appre from "../assets/img/appre-1.jpeg";
import photoUploader from "../assets/img/photo-uploader.gif";
import lineApp from "../assets/img/line-app-1.png";
import backOffice from "../assets/img/back-office-1.png";
import yard from "../assets/img/realize-yard.gif";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import * as Constant from './Constants';

const Projects = () => {
    const [cookies, setCookie] = useCookies(['language']);
    const all_projects = [
        {
            title: "Mi Admin Web",
            description: "PHP CodeIgniter, HTML/CSS/JS , MySQL",
            imgUrl: miAdmin,
        },
        {
            title: "Photo Uploader App Android",
            description: "Kotlin, AWS S3",
            imgUrl: photoUploader,
        },
        {
            title: "Back Office Web",
            description: "Python Flask, ReactJS, MySQL",
            imgUrl: backOffice,
        },
        {
            title: "SUUTA App",
            description: "API, Kotlin",
            imgUrl: appre,
        },
        {
            title: "Line Chatbot App",
            description: "Python Flask, API, VueJS",
            imgUrl: lineApp,
        },
        {
            title: "Photo Uploader App Ipad",
            description: "Swift, AWS S3",
            imgUrl: yard,
        },
    ];

    const web_projects = [
        {
            title: "Mi Admin Web",
            description: "PHP CodeIgniter, HTML/CSS/JS , MySQL",
            imgUrl: miAdmin,
        },
        {
            title: "Back Office Web",
            description: "Python, Flask, ReactJS, MySQL",
            imgUrl: backOffice,
        },
    ];

    const mobile_projects = [
        {
            title: "SUUTA App",
            description: "API, Kotlin",
            imgUrl: appre,
        },
        {
            title: "Line Chatbot App",
            description: "Python, Flask, API, VueJS",
            imgUrl: lineApp,
        },
        {
            title: "Photo Uploader App Ipad",
            description: "Swift, AWS S3",
            imgUrl: yard,
        },
        {
            title: "Photo Uploader App Android",
            description: "Kotlin, AWS S3",
            imgUrl: photoUploader,
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : "" }>
                            <h2 className="pb-3">{cookies.language == 'MN' ? Constant.projects_mn : Constant.projects_en}</h2>
                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">{cookies.language == 'MN' ? Constant.all_mn : Constant.all_en}</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">{cookies.language == 'MN' ? Constant.web_mn : Constant.web_en}</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">{cookies.language == 'MN' ? Constant.app_mn : Constant.app_en}</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : "" }>
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            {
                                                all_projects.map((project, index) => {
                                                    return (
                                                        <ProjectCard key={index} {...project} />
                                                    )
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <Row>
                                            {
                                                web_projects.map((project, index) => {
                                                    return (
                                                        <ProjectCard key={index} {...project} />
                                                    )
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <Row>
                                            {
                                                mobile_projects.map((project, index) => {
                                                    return (
                                                        <ProjectCard key={index} {...project} />
                                                    )
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>}
                    </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}

export default Projects;
