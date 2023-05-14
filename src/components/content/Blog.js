import { Col, Row, Card } from 'antd';
import hero from '../../imgs/Hero-Image.jpg'
import tote from '../../imgs/tote-bag.jpg'
import as from '../../imgs/AS_color.jpg'

const Blog = () => (
    <div className='blog'>
        <div className='blog-container'>
            <div className='title'>
                <a href="#">New on our blog</a>
            </div>
            <Row gutter={32}>
                <Col span={8}>
                    <Card
                        style={{
                            height: 371,
                        }}
                        bordered={false}
                        cover={<img alt="example" src={hero} />}
                    >
                        <div className="blog-title"><a href="#">Case Study: 3 Big Companies That Use Promotional Products</a></div>
                        <div className="blog-date">Thu 11th May, 2023</div>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        style={{
                            height: 371,
                        }}
                        bordered={false}
                        cover={<img alt="example" src={tote} />}
                    >
                        <div className="blog-title"><a href="#">23 tote bag designs that pop!</a></div>
                        <div className="blog-date">Fri 28th Apr, 2023</div>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        style={{
                            height: 371,
                        }}
                        bordered={false}
                        cover={<img alt="example" src={as} />}
                    >
                        <div className="blog-title"><a href="#">AS Colour: Branded apparel that’s designed to last</a></div>
                        <div className="blog-date">Thu 13th Apr, 2023</div>
                    </Card>
                </Col>
            </Row>

        </div>
    </div>
);
export default Blog;