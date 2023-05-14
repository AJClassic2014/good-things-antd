import { Col, Row } from 'antd';
import { MailOutlined, MobileOutlined, FacebookOutlined, HomeOutlined, RocketOutlined, GlobalOutlined } from '@ant-design/icons';

const FindUs = () => (
  <div className='find-us'>
    <div className='find-us-container'>
      <div className='find-us-title'>Good Things come to those who contact us</div>
      <Row gutter={16} justify="space-evenly" align="middle">
        <Col span={4}>
          <a href="#"><MailOutlined /></a>
          <a href="#"><span>hello@goodthings.com.au</span></a>
        </Col>
        <Col span={4}>
          <a href="#"><MobileOutlined /></a>
          <a href="#"><span>1800 659 649</span></a>
        </Col>
        <Col span={4}>
          <a href="#"><FacebookOutlined /></a>
          <a href="#"><span>Facebook Messenger</span></a>
        </Col>
        <Col span={4}>
          <a href="#"><HomeOutlined /></a>
          <a href="#"><span>Melbourne</span></a>
        </Col>
        <Col span={4}>
          <a href="#"><RocketOutlined /></a>
          <a href="#"><span>Sydney</span></a>
        </Col>
        <Col span={4}>
          <a href="#"><GlobalOutlined /></a>
          <a href="#"><span>Gold Coast</span></a>
        </Col>
      </Row>
    </div>
  </div>
);
export default FindUs;