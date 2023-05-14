import { Button, Carousel } from 'antd';
import appawinner from '../../imgs/slider-appawinner.jpg'
import merchfinder from '../../imgs/slider-merchfinder.png'
import portfolio from '../../imgs/slider-portfolio-new.png'
import sock from '../../imgs/slider-sock-selector.png'
import chair from '../../imgs/slider-yellow-chair.jpg'

const contentStyle = {
  maxWidth: '1110px',
  height: '454px',
  margin: '0 auto',
};
const bgStyleMerchfinder = {
  backgroundColor: '#1098d5',
};
const bgStyleChair = {
  backgroundColor: '#f1c643',
};
const bgStylePortfolio = {
  backgroundColor: '#ff8ec0',
};
const bgStyleSock = {
  backgroundColor: '#cfc3eb',
};
const bgStyleAppawinner = {
  backgroundColor: '#9bcce7',
};

const Slider = () => (
  <Carousel autoplay className='slider'>
    <div>
      <div className='merch-finder' style={bgStyleMerchfinder}>
        <div className='slider-text'>
          <span>Not sure<br />what to get?</span>
          <Button>Try our merch finder</Button>
        </div>
        <img src={merchfinder} style={contentStyle} />
      </div>
    </div>

    <div>
      <div className='brand-product' style={bgStyleChair}>
        <div className='slider-text'>
          <span>Australia's Favourite<br />Brandable Products</span>
        </div>
        <img src={chair} style={contentStyle} />
      </div>
    </div>

    <div>
      <div className='our-portfolio' style={bgStylePortfolio}>
        <div className='slider-text'>
          <span>Be inspired by<br />Our Portfolio</span>
          <Button className="what-to-get">View Our Portfolio</Button>
        </div>

        <img src={portfolio} style={contentStyle} /></div>
    </div>

    <div>
      <div className='perfect-pair' style={bgStyleSock}>
        <div className='slider-text'>
          <span>Create your perfect pair</span>
          <Button>Try our sock selector</Button>
        </div>
        <img src={sock} style={contentStyle} /></div>
    </div>

    <div>
      <div style={bgStyleAppawinner}><img src={appawinner} style={contentStyle} /></div>
    </div>
  </Carousel>

);
export default Slider;