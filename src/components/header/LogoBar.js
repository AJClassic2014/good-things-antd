import { Space } from 'antd';
import logo from '../../imgs/logo-white.svg'
import gcolor from '../../imgs/google-g-color.svg'
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
const { Search } = Input;

const LogoBar = () => (
  <div className='logo-bar'>
    <div className='logo-bar-container'>
      <a href="#">
        <img src={logo} class="logo-white" alt="Good Things Logo" />
      </a>
      <Space className='logo-bar-right' size={20}>
        <div><img src={gcolor}
          alt="appa-winner-mini-black" /> <div className='rate'><span className='star'>★★★★★</span><span className='reviewer'>250+ Reviews</span></div>
        </div>
        <Search prefix={<SearchOutlined />} placeholder="Search promotional products" enterButton="Search" size="large" />
      </Space>

    </div>
  </div>
);
export default LogoBar;