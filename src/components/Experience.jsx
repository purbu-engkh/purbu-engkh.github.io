import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { useCookies } from 'react-cookie';
import { CircleFill, Star, StarFill } from 'react-bootstrap-icons';
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import * as Constant from './Constants';

const Experience = () => {
    const [cookies, setCookie] = useCookies(['language']);

    return (
        <section className="project pt-0" id="experience">
            <Container>
                <Row>
                    <Col size={12}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : "" }>
                            <h2 className="pb-3">{cookies.language == 'MN' ? Constant.experience_mn : Constant.experience_en}</h2>
                            <Row>
                                <Col size={12} sm={6} md={4}>
                                    <div className="exp-bx p-3">
                                        <h3 className="text-center">{cookies.language == 'MN' ? Constant.workexp_mn : Constant.workexp_en}</h3>
                                        <div className="d-flex mt-2">
                                            <CircleFill className="mt-1"/>
                                            <div className="ms-2">
                                                <h4>{cookies.language == 'MN' ? Constant.work_mn : Constant.work_en}</h4>
                                                <h6>2018.12 - {cookies.language == 'MN' ? Constant.present_mn : Constant.present_en}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col size={12} sm={6} md={4}>
                                    <div className="exp-bx p-3">
                                        <h3 className="text-center">{cookies.language == 'MN' ? Constant.edu_mn : Constant.edu_en}</h3>
                                        <div className="d-flex mt-2">
                                            <CircleFill className="mt-1"/>
                                            <div className="ms-2">
                                                <h4>{cookies.language == 'MN' ? Constant.prim_mn : Constant.prim_en}</h4>
                                                <h6>2003.09 - 2007.06</h6>
                                                <h5>{cookies.language == 'MN' ? Constant.school1_mn : Constant.school1_en}</h5>
                                            </div>
                                        </div>
                                        <div className="d-flex mt-2">
                                            <CircleFill className="mt-1"/>
                                            <div className="ms-2">
                                                <h4>{cookies.language == 'MN' ? Constant.high_mn : Constant.high_en}</h4>
                                                <h6>2007.09 - 2013.06</h6>
                                                <h5>{cookies.language == 'MN' ? Constant.school2_mn : Constant.school2_en}</h5>
                                            </div>
                                        </div>
                                        <div className="d-flex mt-2">
                                            <CircleFill className="mt-1"/>
                                            <div className="ms-2">
                                                <h4>{cookies.language == 'MN' ? Constant.bachelor_mn : Constant.bachelor_en}</h4>
                                                <h6>2007.09 - 2013.06</h6>
                                                <h5>{cookies.language == 'MN' ? Constant.university_mn : Constant.university_en}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col size={12} sm={6} md={4}>
                                    <div className="exp-bx p-3">
                                        <h3 className="text-center">{cookies.language == 'MN' ? Constant.lan_mn : Constant.lan_en}</h3>
                                        <div className="d-flex mt-2">
                                            <CircleFill className="mt-1"/>
                                            <div className="ms-2">
                                                <h4>{cookies.language == 'MN' ? 'Англи хэл' : 'English'}</h4>
                                                <h6><StarFill/> <StarFill/> <StarFill/> <Star/> <Star/></h6>
                                            </div>
                                        </div>
                                        <div className="d-flex mt-2">
                                            <CircleFill className="mt-1"/>
                                            <div className="ms-2">
                                                <h4>{cookies.language == 'MN' ? 'Япон хэл' : 'Japanese'}</h4>
                                                <h6><StarFill/> <Star/> <Star/> <Star/> <Star/></h6>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col size={12} sm={6} md={4}>
                                    <div className="exp-bx p-3">
                                        <h3 className="text-center">Frontend Development</h3>
                                        <Row>
                                            <Col sm={6}>
                                                <div className="d-flex mt-2">
                                                    <CircleFill className="mt-1"/>
                                                    <div className="ms-2">
                                                        <h4>HTML</h4>
                                                        <h6><StarFill/> <StarFill/> <StarFill/> <StarFill/> <StarFill/></h6>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="d-flex mt-2">
                                                    <CircleFill className="mt-1"/>
                                                    <div className="ms-2">
                                                        <h4>CSS</h4>
                                                        <h6><StarFill/> <StarFill/> <StarFill/> <StarFill/> <StarFill/></h6>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="d-flex mt-2">
                                                    <CircleFill className="mt-1"/>
                                                    <div className="ms-2">
                                                        <h4>JavaScript</h4>
                                                        <h6><StarFill/> <StarFill/> <StarFill/> <StarFill/> <StarFill/></h6>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="d-flex mt-2">
                                                    <CircleFill className="mt-1"/>
                                                    <div className="ms-2">
                                                        <h4>Bootstrap</h4>
                                                        <h6><StarFill/> <StarFill/> <StarFill/> <StarFill/> <StarFill/></h6>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="d-flex mt-2">
                                                    <CircleFill className="mt-1"/>
                                                    <div className="ms-2">
                                                        <h4>ReactJS</h4>
                                                        <h6><StarFill/> <StarFill/> <StarFill/> <Star/> <Star/></h6>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col size={12} sm={6} md={4}>
                                    <div className="exp-bx p-3">
                                        <h3 className="text-center">Backend Development</h3>
                                        <Row>
                                            <Col sm={6}>
                                                <div className="d-flex mt-2">
                                                    <CircleFill className="mt-1"/>
                                                    <div className="ms-2">
                                                        <h4>PHP</h4>
                                                        <h6><StarFill/> <StarFill/> <StarFill/> <StarFill/> <Star/></h6>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="d-flex mt-2">
                                                    <CircleFill className="mt-1"/>
                                                    <div className="ms-2">
                                                        <h4>MySQL</h4>
                                                        <h6><StarFill/> <StarFill/> <StarFill/> <StarFill/> <StarFill/></h6>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="d-flex mt-2">
                                                    <CircleFill className="mt-1"/>
                                                    <div className="ms-2">
                                                        <h4>Python</h4>
                                                        <h6><StarFill/> <StarFill/> <StarFill/> <StarFill/> <Star/></h6>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col size={12} sm={6} md={4}>
                                    <div className="exp-bx p-3">
                                        <h3 className="text-center">Mobile Development</h3>
                                        <Row>
                                            <Col sm={6}>
                                                <div className="d-flex mt-2">
                                                    <CircleFill className="mt-1"/>
                                                    <div className="ms-2">
                                                        <h4>Kotlin</h4>
                                                        <h6><StarFill/> <StarFill/> <StarFill/> <Star/> <Star/></h6>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="d-flex mt-2">
                                                    <CircleFill className="mt-1"/>
                                                    <div className="ms-2">
                                                        <h4>Swift</h4>
                                                        <h6><StarFill/> <StarFill/> <StarFill/> <Star/> <Star/></h6>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </div>}
                    </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Experience;
