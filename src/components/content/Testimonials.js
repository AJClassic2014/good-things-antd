import { Carousel, Col, Row } from 'antd';
import coopers from '../../imgs/Coopers_Cord_Testimonial.jpg'
import LOreal from '../../imgs/LOreal_Testimonial.jpg'
import Vegemite from '../../imgs/Vegemite_Testimonial.jpg'



const Testimonials = () => (
    <div className='testimonials'>
        <div className='testimonials-container'>
            <div className='testimonials-title'>
                <h2><a href="#">Testimonials</a></h2>
            </div>
            <Carousel autoplay>
                <div>
                    <Row gutter={16}>
                        <Col span={12}>
                            <a href="#">
                                <img src={coopers} alt="sample" />
                            </a>
                        </Col>
                        <Col span={12}>
                            <div className="testimonials-coopers">
                                <a href="#">
                                    <blockquote>
                                        <p className="testimonials-description">Thanks to the efforts and expertise of Good Things,
                                            we were able to activate the brand successfully to our target
                                            audience through merchandise that would resonate with the customer.
                                            The supporting merchandise to the Oh My Cord campaign has been so successful we are doing it again this year.</p>
                                        <cite>
                                            <p>Trade Activation Manager, Coopers Brewery</p>
                                        </cite>
                                    </blockquote>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row gutter={16}>
                        <Col span={12}>
                            <a href="#">
                                <img src={LOreal} alt="sample" />
                            </a>
                        </Col>
                        <Col span={12}>
                            <div className="testimonials-coopers">
                                <a href="#">
                                    <blockquote>
                                        <p className="testimonials-description">Merchandise is an important part of our brand strategy and
                                            Good Things have been integral to our success. Good Things proactively work with us and bring ideas and
                                            suggestions to our marketing activations across the year.
                                            We are always pleased with the quality and their communication standards are second to none.</p>
                                        <cite>
                                            <p>Brand Manager, L'Oréal</p>
                                        </cite>
                                    </blockquote>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row gutter={16}>
                        <Col span={12}>
                            <a href="#">
                                <img src={Vegemite} alt="sample" />
                            </a>
                        </Col>
                        <Col span={12}>
                            <div className="testimonials-coopers">
                                <a href="#">
                                    <blockquote>
                                        <p className="testimonials-description">We’ve trusted Good Things on a number of mitey merchandise projects and
                                            the Ugly Sweater is no exception. Our brief was to create the next piece of iconic mitey merchandise
                                            for our Christmas
                                            in July campaign and what speaks Aussie Christmas in July better
                                            than a Vegemite branded Ugly Christmas Sweater.</p>
                                        <cite>
                                            <p>Marketing Manager, Vegemite</p>
                                        </cite>
                                    </blockquote>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Carousel>
        </div>
    </div>
);
export default Testimonials;