import { Carousel } from 'antd';
import ReviewGroupOne from "./review/ReviewGroupOne";
import ReviewGroupTwo from "./review/ReviewGroupTwo";

const Review = () => (
    <div className='review'>
        <div className='review-container'>
            <div className='review-title'><h2><a href="#">What our clients say ⭐️⭐️⭐️⭐️⭐️</a></h2></div>
            <Carousel autoplay>
                <div>
                    <ReviewGroupOne />
                </div>
                <div>
                    <ReviewGroupTwo />
                </div>
                <div>
                    <ReviewGroupOne />
                </div>
                <div>
                    <ReviewGroupTwo />
                </div>
            </Carousel>
        </div>
    </div>
);
export default Review;