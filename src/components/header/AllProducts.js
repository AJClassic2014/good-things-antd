import { Col, Row, Menu } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import blog from '../../imgs/blog.jpg'
import bestsellers from '../../imgs/bestsellers.jpg'

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const items = [
    getItem('Content', '1', null, null),
    getItem('Content', '2', null, null),
    getItem('Content', '3', null, null),
    getItem('Content', '4', null, null),
    getItem('Content', '5', null, null),
    getItem('Content', '6', null, null),
];

const AllProducts = () => (
    <div className='all-products-tab'>
        <Row>
            <Col span={24}>Products</Col>
        </Row>
        <Row>
            <Col span={6}><Menu
                mode="vertical"
                items={items}
            /></Col>
            <Col span={6}><Menu
                mode="vertical"
                items={items}
            /></Col>
            <Col span={6}><Menu
                mode="vertical"
                items={items}
            /></Col>
            <Col span={6}>
                <div><a><img src={bestsellers} /></a></div>
                <div><a>Best sellers<ArrowRightOutlined /></a></div>
                <div><a><img src={blog} /></a></div>
                <div><a>Our blog<ArrowRightOutlined /></a></div>
            </Col>
        </Row>
    </div>
);
export default AllProducts;