import { Col, Row, Button } from 'antd';
import merchstore from '../../imgs/merchstore-sample-home.png'

const Merch = () => (
    <div className='merch'>
        <div className='merch-container'>
            <Row gutter={16} align="middle">
                <Col span={12}>
                    <div className="merch-left">

                        <h1>Your brand's own<br />
                            merch store</h1>
                        <h2>⚡️ Powered by good things</h2>
                        <p>Easily manage all of your promotional merchandise from one <br />central location.
                            Keep track of all uniform and merch history <br />and dispatch Australia wide.
                            Perfect for franchise businesses<br /> and organisations with multiple sites and users.
                            A marketing or <br />procurement managers dream tool.</p>
                        <div><Button className="learn-more-button">Learn more</Button></div>
                        <div><Button className="view-store-button">View Good Things Merch Store</Button></div>



                    </div>
                </Col>
                <Col span={12}>
                    <a href="#">
                        <img src={merchstore} alt="sample" />
                    </a>
                </Col>
            </Row>
        </div>
    </div>
);
export default Merch;