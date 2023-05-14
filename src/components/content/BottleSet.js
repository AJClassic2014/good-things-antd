import { Col, Row, Space } from 'antd';
import bottles from '../../imgs/three-bottles-aqua.jpg'
import { CarOutlined, FileSearchOutlined, FormOutlined } from '@ant-design/icons';

const BottleSet = () => (
    <div className='bottle-set'>
        <div className='bottle-set-container'>
            <Row gutter={[16, 16]} justify="space-evenly" align="middle">
                <Col span={12} className='bottle-set-left'>
                    <Row>
                        <Col span={24}><h2>Why choose Good Things?</h2></Col>
                    </Row>
                    <Row gutter={[16, 16]}>
                        <Col span={12}>
                            <Space direction="vertical" align="center"><Space><span className='space-item-icon'><CarOutlined /></span><span className='space-item-prefix'>99.4%</span></Space>
                                <div className='space-item-suffix'>of jobs delivered on time</div></Space>
                        </Col>
                        <Col span={12}>
                            <Space direction="vertical" align="center"><Space><span className='space-item-icon'><CarOutlined /></span><span className='space-item-prefix'>100%</span></Space>
                                <div className='space-item-suffix'>transparent pricing (no hidden extras)</div></Space>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]}>
                        <Col span={24} className='art-work'>
                            <Space direction="vertical" align="center"><Space><span className='space-item-icon'><CarOutlined /></span><span className='space-item-prefix'>Free artwork</span></Space>
                                <div className='space-item-suffix'>No cost graphic design</div></Space>
                        </Col>
                    </Row>
                </Col>
                <Col span={12} >
                    <img src={bottles} />
                </Col>

            </Row>
        </div>
    </div>
);
export default BottleSet;