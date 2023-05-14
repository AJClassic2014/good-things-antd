import { Card, Col, Row } from 'antd';
import cup from '../../../imgs/coffee_cup.jpg'

const Eco = () => (
  <div className='product-list'>
    <Row gutter={16} justify="space-evenly" align="middle">
      <Col span={4}>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src={cup} />}
        >
          <div>Ecopot</div>
          <div><div>from<span>$0.5</span></div><div>Min Qty: 500</div></div>
        </Card>
      </Col>
      <Col span={4}>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src={cup} />}
        >
          <div>Ecopot</div>
          <div><div>from<span>$0.5</span></div><div>Min Qty: 500</div></div>
        </Card>
      </Col>
      <Col span={4}>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src={cup} />}
        >
          <div>Ecopot</div>
          <div><div>from<span>$0.5</span></div><div>Min Qty: 500</div></div>
        </Card>
      </Col>
      <Col span={4}>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src={cup} />}
        >
          <div>Ecopot</div>
          <div><div>from<span>$0.5</span></div><div>Min Qty: 500</div></div>
        </Card>
      </Col>
    </Row>
  </div>

);
export default Eco;