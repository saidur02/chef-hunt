import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../assets/Banner/1.jpeg'
import banner2 from '../../../assets/Banner/2.webp'
import banner3 from '../../../assets/Banner/3.jpeg'

const Banner = () => {
    return (
        <Carousel>
        <div>
            <img src={banner1} />
        </div>
        <div>
            <img src={banner2} />
        </div>
        <div>
            <img src={banner3} />
        </div>
        
    </Carousel>
    );
};

export default Banner;