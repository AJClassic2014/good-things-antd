import { Col, Row } from 'antd';
import coopers from '../../imgs/coopers@2x.png'
import dulux from '../../imgs/dulux@2x.png'
import loreal from '../../imgs/loreal@2x.png'
import petbarn from '../../imgs/petbarn@2x.png'
import scape from '../../imgs/scape.jpg'
import netflix from '../../imgs/netflix.png'
import samsung from '../../imgs/samsung.png'
import afterpay from '../../imgs/afterpay.png'
import myob from '../../imgs/myob.png'
import maybelline from '../../imgs/maybelline.png'

import { useEffect, useState } from 'react';

const Sponser = () => {
  const [flap, setFlap] = useState(true);
  useEffect(
    () => {
      let id = setInterval(
        () => {
          setFlap(!flap);
        }, 3000
      );
      return () => clearInterval(id);
    },

  );
  return (<div className='sponser'>
    <div className='sponser-container'>
      <div><h2>Trusted By</h2></div>
      <Row gutter={16} justify="space-evenly" align="middle">
        <Col span={4}>
          <img src={flap ? dulux : netflix} />
        </Col>
        <Col span={4}>
          <img src={flap ? coopers : samsung} />
        </Col>
        <Col span={4}>
          <img src={flap ? petbarn : afterpay} />
        </Col>
        <Col span={4}>
          <img src={flap ? loreal : myob} />
        </Col>
        <Col span={4}>
          <img src={flap ? scape : maybelline} />
        </Col>
      </Row>
    </div>
  </div>)
};
export default Sponser;