import { Button, Menu, Popover } from 'antd';
import { DownOutlined, GiftOutlined } from '@ant-design/icons';
import AllProducts from "./AllProducts";
import ContactPop from "./ContactPop";


const products = (
  <AllProducts />
);

const contact = (
  <ContactPop />
);

const items = [
  {
    label: 'Bags',
    key: 'Bags',
    icon: <GiftOutlined />,
    children: [
      {
        label: 'Tote Bags',
        key: 'Tote',
      },
      {
        label: 'Backpacks & Backsacks',
        key: 'Backpacks',
      },
    ]
  },
  {
    label: 'Caps & hats',
    key: 'Caps',
    icon: <GiftOutlined />,
    children: [
      {
        label: 'Beanies',
        key: 'Beanies',
      },
      {
        label: 'Bucket Hats',
        key: 'Bucket',
      },
    ]
  },
  {
    label: 'Clothing & apparel',
    key: 'Clothing',
    icon: <GiftOutlined />,
    children: [
      {
        label: 'T-shirts - Mens',
        key: 'T-shirts-m',
      },
      {
        label: 'T-shirts – Women’s',
        key: 'T-shirts-w',
      },
    ]
  },
  {
    label: 'Drink bottles',
    key: 'Drink',
    icon: <GiftOutlined />,
    children: [
      {
        label: 'Double Wall Drink Bottle',
        key: 'Double_w',
      },
      {
        label: 'Glass Drink Bottles',
        key: 'Glass',
      },
      {
        label: 'Metal Drink Bottles',
        key: 'Metal',
      },
      {
        label: 'Plastic Drink Bottles',
        key: 'Plastic',
      }

    ]
  },
  {
    label: ' Mugs',
    key: 'Mugs',
    icon: <GiftOutlined />,
    children: [
      {
        label: 'Ceramic Mugs',
        key: 'Ceramic',
      },
      {
        label: 'Fine Bone China Mugs',
        key: 'China',
      },
      {
        label: 'Reusable coffee cups',
        key: 'Reusable',
      },
      {
        label: 'Travel & Thermal Mugs',
        key: 'Travel',
      }

    ]
  },
  {
    label: 'Eco Friendly',
    key: 'Eco',
    icon: <GiftOutlined />,
  }
];

const Nav = () => (
  <div className='nav-bar'>
    <div className='nav-container'>
      <div><Popover placement="bottom" content={products} arrow={false}>
        <Button className='nav-all-products'>All Products<DownOutlined /></Button>
      </Popover>
        <Menu className='main-menu' mode="horizontal" items={items} /></div>
      <Popover placement="bottom" content={contact}>
        <Button className='nav-contact-us'>Contact Us</Button>
      </Popover>

    </div>
  </div>
);
export default Nav;