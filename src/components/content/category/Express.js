import { Card, Col, Row } from 'antd';
import pen from '../../../imgs/blue_pen.webp'

const Express = () => (
  <div className='product-list'>
    <Row gutter={16} justify="space-evenly" align="middle">
      <Col span={4}>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src={pen} />}
        >
          <div>The Tongan Pen</div>
          <div><div>from<span>$0.5</span></div><div>Min Qty: 500</div></div>
        </Card>
      </Col>
      <Col span={4}>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src={pen} />}
        >
          <div>The Tongan Pen</div>
          <div><div>from<span>$0.5</span></div><div>Min Qty: 500</div></div>
        </Card>
      </Col>
      <Col span={4}>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src={pen} />}
        >
          <div>The Tongan Pen</div>
          <div><div>from<span>$0.5</span></div><div>Min Qty: 500</div></div>
        </Card>
      </Col>
      <Col span={4}>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src={pen} />}
        >
          <div>The Tongan Pen</div>
          <div><div>from<span>$0.5</span></div><div>Min Qty: 500</div></div>
        </Card>
      </Col>
    </Row>
  </div>

);
export default Express;