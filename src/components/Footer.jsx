import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useCookies } from 'react-cookie';
import * as Constant from './Constants';
import { Telephone, GeoAlt, Clock } from 'react-bootstrap-icons';

const Footer = () => {
    const [cookies, setCookie] = useCookies(['language']);

    return (
        <footer className="footer">
            <Container>
                <Row className="text-center">
                    <Col size={12} sm={6} md={4}>
                        <p><Telephone size={20} className="me-2" />{Constant.tel}</p>
                    </Col>
                    <Col size={12} sm={6} md={4}>
                        <p><GeoAlt size={20} className="me-2" />{cookies.language == 'MN' ? Constant.address_mn : Constant.address_en}</p>
                    </Col>
                    <Col size={12} sm={6} md={4}>
                        <p><Clock size={20} className="me-2" />{Constant.time}</p>
                    </Col>
                </Row>
                <Row className="text-center">
                    <p>© 2022. {cookies.language == 'MN' ? Constant.copyright_mn : Constant.copyright_en}</p>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;
