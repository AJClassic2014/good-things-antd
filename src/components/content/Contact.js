import { Col, Row, List, Button, Form, Input } from 'antd';

const data = [
  'About Us',
  'Sustainability',
  'In The Media',
  'Privacy Policy',
  'Terms & Conditions',
];

const data_resources = [
  'Our Blog',
  'Process',
  'Product Guides',
  'Testimonials',
  'Reviews',
];

const data_help = [
  'My Account',
  'Your Merch Store',
  'FAQs',
  'PMS Chart',
  'Contact',
];

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const Contact = () => (
  <div className='contact'>
    <div className='contact-container'>
      <div className="contact-title"><a href='#'><span>Good Things</span></a></div>
      <Row justify="space-between">
        <Col span={6}>
          <List
            header={<div>Good Things</div>}
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <a href="#">{item}</a>
              </List.Item>
            )}
          />

        </Col>
        <Col span={6}><List
          header={<div>Resources</div>}
          dataSource={data_resources}
          renderItem={(item) => (
            <List.Item>
              <a href="#">{item}</a>
            </List.Item>
          )}
        /></Col>
        <Col span={6}><List
          header={<div>Help and Support</div>}
          dataSource={data_help}
          renderItem={(item) => (
            <List.Item>
              <a href="#">{item}</a>
            </List.Item>
          )}
        /></Col>
        <Col span={6}>
          <div className="form-title">Contact Us</div>
          <Form className="contact-form">
            <Form.Item
              style={{
                width: 285,
              }}>
              <Input
                style={{
                  width: 285,
                }}
                placeholder="Your name" />
            </Form.Item>
            <Form.Item
              style={{
                display: 'inline-block',
                width: '140',
              }}>
              <Input
                style={{
                  width: 140,
                }}
                placeholder="Email address" />
            </Form.Item>
            <Form.Item
              style={{
                display: 'inline-block',
                width: '140',
                marginLeft: 5,
              }}>
              <Input
                style={{
                  width: 140,
                }}
                placeholder="Phone number" />
            </Form.Item>
            <Form.Item
              style={{
                width: 285,
              }}>
              <Input.TextArea
                style={{
                  width: 285,
                }}
                placeholder="Message" />
            </Form.Item>
            <Form.Item >
              <Button type="primary" htmlType="submit">
                SEND
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  </div>
);
export default Contact;