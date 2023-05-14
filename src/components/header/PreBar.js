import { Button, Space } from 'antd';
import { Divider } from 'antd';
import { GlobalOutlined, BulbOutlined, SkinOutlined } from '@ant-design/icons';
import climate from '../../imgs/trace-climate-positive.png'
import winner from '../../imgs/appa-winner-mini-black.png'

const PreBar = () => (
  <div className='pre-bar'>
    <div className='pre-bar-container'>
      <Space className='left' size={70}>
        <div><GlobalOutlined /> <span>Australian Owned</span></div>
        <div><SkinOutlined /> <span>Free Artwork</span></div>
        <div><BulbOutlined /><Button type="link">Our Portfolio</Button></div>
        <div><Divider type="vertical" /><Button type="link">About Us</Button></div>
      </Space>
      <Space className='right'>
        <div><img src={winner}
          alt="appa-winner-mini-black" /> <span>Award Winning<br />Merch 2022</span></div>
        <div><a href="#">
          <img src={climate}
            alt="Trace Climate Positive Brand" /></a></div>
      </Space>

    </div>
  </div>
);
export default PreBar;