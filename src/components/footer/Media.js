import { Col, Row, Space } from 'antd';
import { InstagramOutlined, LinkedinOutlined, FacebookOutlined, YoutubeOutlined } from '@ant-design/icons';
import payment from '../../imgs/payment-methods.png'
import letsencrypt from '../../imgs/encrypt.png'

const Media = () => (
  <div className='media'>
    <div className='media-container'>
      <Row gutter={8} justify="space-evenly" align="middle">
        <Col span={8}>
          <Space> <a href='#'><img src={payment} /></a>
            <a href='#'><img src={letsencrypt} /></a></Space>
        </Col>
        <Col span={8}>
          <div className='media-title'>Connect with us</div>
          <Space size={38}> <a href='#'><InstagramOutlined /></a>
            <a href='#'><LinkedinOutlined /></a>
            <a href='#'><FacebookOutlined /></a>
            <a href='#'><YoutubeOutlined /></a>
            <a href='#'><InstagramOutlined /></a></Space>
        </Col>
      </Row>
    </div>
  </div>
);
export default Media;