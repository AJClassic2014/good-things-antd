import { Col, Row } from 'antd';
import flyingsolo from '../../imgs/as-seen-on-flyingsolo.png'
import afr from '../../imgs/as-seen-on-afr.svg'
import bandt from '../../imgs/as-seen-on-bandt.svg'
import smartcompany from '../../imgs/as-seen-on-smartcompany.svg'
import ceo from '../../imgs/as-seen-on-ceo.png'
import dynamicbusiness from '../../imgs/as-seen-on-dynamicbusiness.png'


const AsSeen = () => (
  <div className='as-seen'>
    <div className='as-seen-container'>
      <Row gutter={16} justify="space-evenly" align="middle">
        <Col span={3}>
          <h2><a href="#">As seen <br />on</a></h2>
        </Col>
        <Col span={3}>
          <img src={flyingsolo} />
        </Col>
        <Col span={3}>
          <img src={afr} />
        </Col>
        <Col span={3}>
          <img src={bandt} />
        </Col>
        <Col span={3}>
          <img src={smartcompany} />
        </Col>
        <Col span={3}>
          <img src={ceo} />
        </Col>
        <Col span={3}>
          <img src={dynamicbusiness} />
        </Col>
      </Row>
    </div>
  </div>
);
export default AsSeen;