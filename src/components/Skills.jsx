import { useCookies } from 'react-cookie';
import webApp from "../assets/img/web-app.svg";
import db from "../assets/img/data.svg";
import mobileApp from "../assets/img/mobile-app.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import * as Constant from './Constants';

const Skills = () => {
    const [cookies, setCookie] = useCookies(['language']);
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
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>{cookies.language == 'MN' ? Constant.skills_mn : Constant.skills_en}</h2>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={webApp} alt="Image" />
                                    <h5>{cookies.language == 'MN' ? Constant.webdev_mn : Constant.webdev_en}</h5>
                                </div>
                                <div className="item">
                                    <img src={db} alt="Image" />
                                    <h5>{cookies.language == 'MN' ? Constant.db_mn : Constant.db_en}</h5>
                                </div>
                                <div className="item">
                                    <img src={mobileApp} alt="Image" />
                                    <h5>{cookies.language == 'MN' ? Constant.mobile_mn : Constant.mobile_en}</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}

export default Skills;
