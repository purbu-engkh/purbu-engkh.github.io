import React, { useState, useEffect, Suspense, lazy} from 'react';
import { useCookies } from 'react-cookie';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import { Spinner } from "react-bootstrap";
const NavBar = lazy(() => import('./components/NavBar'));
const Banner = lazy(() => import('./components/Banner'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Footer = lazy(() => import('./components/Footer'));

const App = () => {
    const [cookies, setCookie] = useCookies(['language']);
    useEffect(() => {
        setCookie('language', 'MN', { path: '/' })
    }, []);

    return (
        <Suspense fallback={<div className="overlay"><Spinner animation="border" style={{color: '#fff'}}/></div>}>
            <div className="App">
                <NavBar />
                <Banner />
                <Skills />
                <Projects />
                <Footer />
            </div>
        </Suspense>
    );
}

export default App;
