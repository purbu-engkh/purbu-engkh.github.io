import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useCookies } from 'react-cookie';
import headerImg from "../assets/img/header-img.svg";
import TrackVisibility from 'react-on-screen';
import * as Constant from './Constants';

const Banner = () => {
    const [cookies, setCookie] = useCookies(['language']);
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        var i = cookies.language == 'MN' ? loopNum % Constant.position_mn.length : loopNum % Constant.position_en.length;
        var fullText = cookies.language == 'MN' ? Constant.position_mn[i] : Constant.position_en[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : "" }>
                            <span className="tagline">{cookies.language == 'MN' ? Constant.welcome_mn : Constant.welcome_en}</span>
                            <h1>{cookies.language == 'MN' ? Constant.name_mn : Constant.name_en}</h1>
                            <h2 className="txt-rotate" dataperiod="1000"><span className="wrap">{text}</span></h2>
                        </div>}
                    </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__zoomIn" : "" }>
                            <img src={headerImg} alt="Header Img" />
                        </div>}
                    </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;
