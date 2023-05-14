import { Card, Col, Row } from 'antd';
import sock from '../../../imgs/black_sock.jpg'

const Clothing = () => (
  <div className='product-list'>
    <Row gutter={16} justify="space-evenly" align="middle">
      <Col span={4}>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src={sock} />}
        >
          <div>Tradie Socks</div>
          <div><div>from<span>$0.5</span></div><div>Min Qty: 500</div></div>
        </Card>
      </Col>
      <Col span={4}>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src={sock} />}
        >
          <div>Tradie Socks</div>
          <div><div>from<span>$0.5</span></div><div>Min Qty: 500</div></div>
        </Card>
      </Col>
      <Col span={4}>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src={sock} />}
        >
          <div>Tradie Socks</div>
          <div><div>from<span>$0.5</span></div><div>Min Qty: 500</div></div>
        </Card>
      </Col>
      <Col span={4}>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src={sock} />}
        >
          <div>Tradie Socks</div>
          <div><div>from<span>$0.5</span></div><div>Min Qty: 500</div></div>
        </Card>
      </Col>
    </Row>
  </div>

);
export default Clothing;