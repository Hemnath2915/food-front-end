import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Components/imagesliders.css'

const Slideshow = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
    const slideImages = [
      {
        url: 'https://img.freepik.com/free-photo/high-angle-vegetarian-burger-cutting-board-with-copy-space_23-2148784536.jpg?w=1060&t=st=1689153408~exp=1689154008~hmac=5d4235919edefe08e7e10802e282c6da410377583fd27607a496d15b8c616445',
        caption: 'Slide 1'
      },
      {
        url: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-sliced-into-six-slices_141793-2157.jpg?size=626&ext=jpg&ga=GA1.2.949482815.1689135670&semt=ais',
        caption: 'Slide 2'
      },
      {
        url: 'https://img.freepik.com/free-photo/delicious-chicken-table_144627-8761.jpg?size=626&ext=jpg&ga=GA1.2.949482815.1689135670&semt=ais',
        caption: 'Slide 3'
      },
      {
        url: 'https://img.freepik.com/free-photo/brownie-chocolate-ice-cream-mint-sugar-powder-side-view_141793-15452.jpg?size=626&ext=jpg&ga=GA1.2.949482815.1689135670&semt=ais',
      },
      {
        url: 'https://img.freepik.com/free-photo/selection-various-cocktails-table_140725-2909.jpg?size=626&ext=jpg&ga=GA1.2.949482815.1689135670&semt=ais',
      },
    ];
    // const {url,cap}=slideImages
    return (
      <div className="page">
  <Slider {...settings}>
         
         <div className='burger'>
           <img src="https://img.freepik.com/free-photo/grilled-beef-burger-wooden-table-flame-grilled-generated-by-ai_188544-25122.jpg?size=626&ext=jpg&ga=GA1.2.949482815.1689135670&semt=ais" alt="Slide 1" height="600rem" width="100%"/>
             
         </div>
         <div className='pizza'>
           <img src="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-sliced-into-six-slices_141793-2157.jpg?size=626&ext=jpg&ga=GA1.2.949482815.1689135670&semt=ais" alt="Slide 2" width="100%" height="600rem"/>
 
         </div>
         <div className='chicken'>
           <img src="https://img.freepik.com/free-photo/delicious-chicken-table_144627-8761.jpg?size=626&ext=jpg&ga=GA1.2.949482815.1689135670&semt=ais" alt="Slide 3" height="600rem" width="100%"/>
         </div>
         <div>
           <img src="https://img.freepik.com/free-photo/brownie-chocolate-ice-cream-mint-sugar-powder-side-view_141793-15452.jpg?size=626&ext=jpg&ga=GA1.2.949482815.1689135670&semt=ais" alt="Slide 4"height="600rem"  width="100%" />
         </div>
         <div>
           <img src="https://img.freepik.com/free-photo/selection-various-cocktails-table_140725-2909.jpg?size=626&ext=jpg&ga=GA1.2.949482815.1689135670&semt=ais" alt="Slide 5"height="600rem" width="100%"/>
         </div>
       </Slider>
             </div>
    
    );
  };
  
  export default Slideshow;