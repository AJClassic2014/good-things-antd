import { Tag } from 'antd';
const HelloBar = () => (
    <div className='hello-bar'>
        <div className='hello-bar-container'>
            <Tag bordered={false} color="#edb6e3" closable>
                <a href="#">Want to see our custom branded products? 🎨 Check out our Portfolio page here</a>
            </Tag>
        </div>
    </div>
);
export default HelloBar;