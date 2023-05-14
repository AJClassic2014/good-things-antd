import { Col, Row } from 'antd';
import appalogo from '../../imgs/appalogo.svg'
import ppailogo from '../../imgs/ppailogo.png'
import sport from '../../imgs/sporting-chance-logo.png'
import climate from '../../imgs/trace-climate-positive.png'
import ecologi from '../../imgs/ecologi_logo.svg'
import appawinner from '../../imgs/appawinner-footer.png'



const Member = () => (
  <div className='member'>
    <div className='member-container'>
      <Row gutter={4} justify="start" align="middle">
        <Col span={4}>
          <span>Member of</span>
          <a href='#'><img src={appalogo} /></a>
        </Col>
        <Col span={4}>
          <span> </span>
          <a href='#'><img src={ppailogo} /></a>
        </Col>
        <Col span={4}>
          <span>We support</span>
          <a href='#'><img src={sport} /></a>
        </Col>
        <Col span={4}>
          <span>Proudly Climate Positive</span>
          <a href='#'><img src={climate} /></a>
        </Col>
        <Col span={4}>
          <span> </span>
          <a href='#'><img src={ecologi} /></a>
        </Col>
        <Col span={4}>
          <span>2022 APPA Winner</span>
          <a href='#'><img src={appawinner} /></a>
        </Col>
      </Row>
    </div>
  </div>
);
export default Member;