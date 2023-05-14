import { Col, Row, Collapse } from 'antd';
const { Panel } = Collapse;

const text = `
  content
`;
const Faqs = () => (
  <div className='faqs'>
    <div className='faqs-container'>
      <div className="faqs-title">We’ve answered your Good FAQs.</div>
      <div className="pro-products">Since 2011 Good Things has been dedicated to making your branded promotional products stand out
        — with 100% accuracy and quality.
        We’ve worked with only the best, most reliable and highest-quality suppliers of
        &nbsp;<a href="#">promotional products</a>&nbsp; over the last 10 years.
        We have competitive prices and we will beat any competitor's price!
        Learn why our legendary service earns the trust and confidence of the biggest companies,
        universities and schools in Australia.</div>
      <Row gutter={16} align="middle">
        <Col span={12}>
          <div className="faqs-left">

            <Collapse>
              <Panel header="What services does Good Things provide? " key="1">
                <p>{text}</p>
              </Panel>
              <Panel header="Why should I use promotional products? " key="2">
                <p>{text}</p>
              </Panel>
              <Panel header="What are your most popular promotional products? " key="3">
                <p>{text}</p>
              </Panel>
              <Panel header="Are your products Australian made? " key="4">
                <p>{text}</p>
              </Panel>
              <Panel header="How long does it take to get a quote? " key="5">
                <p>{text}</p>
              </Panel>
              <Panel header="What format should I supply my artwork in? " key="6">
                <p>{text}</p>
              </Panel>
            </Collapse>


          </div>
        </Col>
        <Col span={12}>
          <div className="faqs-right">

            <Collapse>
              <Panel header="What is a vector file? " key="7">
                <p>{text}</p>
              </Panel>
              <Panel header="Can you create custom packaging for a gift pack or product order? " key="8">
                <p>{text}</p>
              </Panel>
              <Panel header="Can I track my order from production right through to delivery? " key="9">
                <p>{text}</p>
              </Panel>
              <Panel header="How long does delivery take? " key="10">
                <p>{text}</p>
              </Panel>
              <Panel header="Do you ship worldwide? " key="11">
                <p>{text}</p>
              </Panel>
              <Panel header="What if I receive more or less units than my order? " key="12">
                <p>{text}</p>
              </Panel>
            </Collapse>


          </div>

        </Col>
      </Row>
    </div>
  </div>
);
export default Faqs;