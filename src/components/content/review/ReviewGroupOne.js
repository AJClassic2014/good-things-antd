import { Card, Col, Row, Rate } from 'antd';

const ReviewGroupOne = () => (
  <div className='review-list'>
    <Row gutter={16} justify="space-evenly" align="middle">
      <Col span={4}>
        <Card
          style={{
            width: 300,
          }}
        >
          <div><h2>Shaylee H.</h2></div>
          <div className='duration'>6 days ago</div>
          <div className='star'><Rate disabled defaultValue={5} /></div>
          <div className='feedback'>i just placed an order for 30 caps for a fundraiser i run for the royal children hospital.
            whilst ordering i was suffering very badly with covid 19 so it all had to be done via email due to having no voice.
            i dealt with Jeffrey, he was kind & patient and very informative, he even asked a couple times how i was feeling.
            A+ customer service from Jeffrey, made me feel like a valued customer !!
            can’t wait to get the caps 🫶🏽</div>
        </Card>
      </Col>
      <Col span={4}>
        <Card
          style={{
            width: 300,
          }}
        >
          <div><h2>Shaylee H.</h2></div>
          <div className='duration'>6 days ago</div>
          <div className='star'><Rate disabled defaultValue={5} /></div>
          <div className='feedback'>i just placed an order for 30 caps for a fundraiser i run for the royal children hospital.
            whilst ordering i was suffering very badly with covid 19 so it all had to be done via email due to having no voice.
            i dealt with Jeffrey, he was kind & patient and very informative, he even asked a couple times how i was feeling.
            A+ customer service from Jeffrey, made me feel like a valued customer !!
            can’t wait to get the caps 🫶🏽</div>
        </Card>
      </Col>
      <Col span={4}>
        <Card
          style={{
            width: 300,
          }}
        >
          <div><h2>Shaylee H.</h2></div>
          <div className='duration'>6 days ago</div>
          <div className='star'><Rate disabled defaultValue={5} /></div>
          <div className='feedback'>i just placed an order for 30 caps for a fundraiser i run for the royal children hospital.
            whilst ordering i was suffering very badly with covid 19 so it all had to be done via email due to having no voice.
            i dealt with Jeffrey, he was kind & patient and very informative, he even asked a couple times how i was feeling.
            A+ customer service from Jeffrey, made me feel like a valued customer !!
            can’t wait to get the caps 🫶🏽</div>
        </Card>
      </Col>
    </Row>
  </div>

);
export default ReviewGroupOne;