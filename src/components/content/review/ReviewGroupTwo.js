import { Card, Col, Row, Rate } from 'antd';

const ReviewGroupTwo = () => (
  <div className='review-list'>
    <Row gutter={16} justify="space-evenly" align="middle">
      <Col span={4}>
        <Card
          style={{
            width: 300,
          }}
        >
          <div><h2>MK M.</h2></div>
          <div className='duration'>a month ago</div>
          <div className='star'><Rate disabled defaultValue={5} /></div>
          <div className='feedback'>Worked with Ebony and Anne to get some tshirts and caps made for the restaurant I work at.
            They were very flexible and accomodating to the multiple requests I had.
            Very happy with the final products. Tshirts are buttery soft and the embroidery is top notch.
            Great price for excellent quality.
            Production and delivery was super quick too. Would be buying from Good Things again.</div>
        </Card>
      </Col>
      <Col span={4}>
        <Card
          style={{
            width: 300,
          }}
        >
          <div><h2>MK M.</h2></div>
          <div className='duration'>a month ago</div>
          <div className='star'><Rate disabled defaultValue={5} /></div>
          <div className='feedback'>Worked with Ebony and Anne to get some tshirts and caps made for the restaurant I work at.
            They were very flexible and accomodating to the multiple requests I had.
            Very happy with the final products. Tshirts are buttery soft and the embroidery is top notch.
            Great price for excellent quality.
            Production and delivery was super quick too. Would be buying from Good Things again.</div>
        </Card>
      </Col>
      <Col span={4}>
        <Card
          style={{
            width: 300,
          }}
        >
          <div><h2>MK M.</h2></div>
          <div className='duration'>a month ago</div>
          <div className='star'><Rate disabled defaultValue={5} /></div>
          <div className='feedback'>Worked with Ebony and Anne to get some tshirts and caps made for the restaurant I work at.
            They were very flexible and accomodating to the multiple requests I had.
            Very happy with the final products. Tshirts are buttery soft and the embroidery is top notch.
            Great price for excellent quality.
            Production and delivery was super quick too. Would be buying from Good Things again.</div>
        </Card>
      </Col>
    </Row>
  </div>
);
export default ReviewGroupTwo;