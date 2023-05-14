import { Card, Col, Row } from 'antd';
import bottle from '../../../imgs/white_bottle.jpg'

const Latest = () => (
  <div className='product-list'>
    <Row gutter={16} justify="space-evenly" align="middle">
      <Col span={4}>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src={bottle} />}
        >
          <div>Brooklyn Bottle</div>
          <div><div>from<span>$10.77</span></div><div>Min Qty: 500</div></div>
        </Card>
      </Col>
      <Col span={4}>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src={bottle} />}
        >
          <div>Brooklyn Bottle</div>
          <div><div>from<span>$10.77</span></div><div>Min Qty: 500</div></div>
        </Card>
      </Col>
      <Col span={4}>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src={bottle} />}
        >
          <div>Brooklyn Bottle</div>
          <div><div>from<span>$10.77</span></div><div>Min Qty: 500</div></div>
        </Card>
      </Col>
      <Col span={4}>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src={bottle} />}
        >
          <div>Brooklyn Bottle</div>
          <div><div>from<span>$10.77</span></div><div>Min Qty: 500</div></div>
        </Card>
      </Col>
    </Row>
  </div>

);
export default Latest;