import { Col, Row, Space, Button } from 'antd';
import { useState } from 'react';

const Collage = () => {
  const [eventsShadow, setEventsShadow] = useState(false);
  const [bagsShadow, setBagsShadow] = useState(false);
  const [shirtsShadow, setShirtsShadow] = useState(false);
  const [bottlesShadow, setBottlesShadow] = useState(false);
  const [pensShadow, setPensShadow] = useState(false);
  const [apparelShadow, setApparelShadow] = useState(false);
  const [socksShadow, setSocksShadow] = useState(false);
  const [techShadow, setTechShadow] = useState(false);
  const [umbrellashadow, setUmbrellasShadow] = useState(false);
  const [hatsShadow, setHatsShadow] = useState(false);


  return (<div className='collage'>
    <div className='collage-container'>
      <div className='collage-title'><h2>Our Brandable Products</h2></div>
      <Space direction="vertical" size={16}>
        <Row gutter={16}>
          <Col span={12}><div className='events'>
            <div className={eventsShadow ? 'shadow-show' : 'shadow-hide'}>content</div>
            <a href="#" onMouseOver={() => setEventsShadow(true)} onMouseLeave={() => setEventsShadow(false)}>
              <div>
                {eventsShadow ? '' : 'good notepads'}
              </div>
            </a></div></Col>
          <Col span={12}>
            <Row gutter={16}>
              <Col span={12}>
                <div className="good-bags">
                  <div className={bagsShadow ? 'shadow-show' : 'shadow-hide'}>content</div>
                  <a href="#" onMouseOver={() => setBagsShadow(true)} onMouseLeave={() => setBagsShadow(false)}>
                    <div>
                      {bagsShadow ? '' : ' good bags'}

                    </div>
                  </a>
                </div>
              </Col>
              <Col span={12}>
                <div className="t-shirts">
                  <div className={shirtsShadow ? 'shadow-show' : 'shadow-hide'}>content</div>
                  <a href="#" onMouseOver={() => setShirtsShadow(true)} onMouseLeave={() => setShirtsShadow(false)}>
                    <div>
                      {shirtsShadow ? '' : ' good t-shirts'}

                    </div>
                  </a>
                </div>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <div className="good-bottles">
                  <div className={bottlesShadow ? 'shadow-show' : 'shadow-hide'}>content</div>
                  <a href="#" onMouseOver={() => setBottlesShadow(true)} onMouseLeave={() => setBottlesShadow(false)}>
                    <div>
                      {bottlesShadow ? '' : ' good bottles'}

                    </div>
                  </a>
                </div>
              </Col>
              <Col span={12}>
                <div className="pens">
                  <div className={pensShadow ? 'shadow-show' : 'shadow-hide'}>content</div>
                  <a href="#" onMouseOver={() => setPensShadow(true)} onMouseLeave={() => setPensShadow(false)}>
                    <div>
                      {pensShadow ? '' : ' good pens'}

                    </div>
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Row gutter={16}>
              <Col span={12}>
                <div className="apparel">
                  <div className={apparelShadow ? 'shadow-show' : 'shadow-hide'}>content</div>
                  <a href="#" onMouseOver={() => setApparelShadow(true)} onMouseLeave={() => setApparelShadow(false)}>
                    <div>
                      {apparelShadow ? '' : ' good apparel'}

                    </div>
                  </a>
                </div>
              </Col>
              <Col span={12}>
                <div className="good-socks">
                  <div className={socksShadow ? 'shadow-show' : 'shadow-hide'}>content</div>
                  <a href="#" onMouseOver={() => setSocksShadow(true)} onMouseLeave={() => setSocksShadow(false)}>
                    <div>
                      {socksShadow ? '' : ' good socks'}

                    </div>
                  </a>
                </div>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <div className="good-tech">
                  <div className={techShadow ? 'shadow-show' : 'shadow-hide'}>content</div>
                  <a href="#" onMouseOver={() => setTechShadow(true)} onMouseLeave={() => setTechShadow(false)}>
                    <div>
                      {techShadow ? '' : ' good tech'}

                    </div>
                  </a>
                </div>
              </Col>
              <Col span={12}>
                <div className="good-umbrellas">
                  <div className={umbrellashadow ? 'shadow-show' : 'shadow-hide'}>content</div>
                  <a href="#" onMouseOver={() => setUmbrellasShadow(true)} onMouseLeave={() => setUmbrellasShadow(false)}>
                    <div>
                      {umbrellashadow ? '' : ' good umbrellas'}

                    </div>
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <div className="good-hats">
              <div className={hatsShadow ? 'shadow-show' : 'shadow-hide'}>content</div>
              <a href="#" onMouseOver={() => setHatsShadow(true)} onMouseLeave={() => setHatsShadow(false)}>
                <div>
                  {hatsShadow ? '' : ' good hats'}

                </div>
              </a>
            </div>
          </Col>
        </Row>
      </Space>
      <div className="button-set">
        <Space> <Button className="all-products-button">Browse All Products</Button>
          <Button className="portfolio-button">View Portfolio</Button></Space>
      </div>
    </div>
  </div>)
};
export default Collage;