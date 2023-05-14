import { QuestionCircleOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

const Help = () => (
  <div className='float-help'>
    <FloatButton
      description="Help"
      icon={<QuestionCircleOutlined />}
      type="primary"
      style={{
        right: 94,
      }}
    />
  </div>
);
export default Help;