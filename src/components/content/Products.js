import { Tabs, Button } from 'antd';
import Latest from "./category/Latest";
import BestSellers from "./category/BestSellers";
import Clothing from "./category/Clothing";
import Eco from "./category/Eco";
import Express from "./category/Express";

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: `Latest Products`,
    children: <Latest />,
  },
  {
    key: '2',
    label: `Best Sellers`,
    children: <BestSellers />,
  },
  {
    key: '3',
    label: `Express Products`,
    children: <Express />,
  },
  {
    key: '4',
    label: `Clothing & Apparel`,
    children: <Clothing />,
  },
  {
    key: '5',
    label: `Eco Friendly`,
    children: <Eco />,
  }
];


const Products = () => (
  <div className='products-lists'>
    <div className='products-list'>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />

    </div>
    <div className='all-latest-products'>
      <Button>See all Latest Products</Button>
    </div>
  </div>

);
export default Products;