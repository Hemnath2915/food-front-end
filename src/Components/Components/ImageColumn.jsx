import React from 'react';

import { Link } from 'react-router-dom';
const ImageColumn = () => {
  const slideImages = [
    
    {
      url: 'https://img.freepik.com/free-photo/grilled-beef-burger-wooden-table-flame-grilled-generated-by-ai_188544-25122.jpg?size=626&ext=jpg&ga=GA1.2.949482815.1689135670&semt=ais',
      name:'Burgers'
    },
    {
      url: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-sliced-into-six-slices_141793-2157.jpg?size=626&ext=jpg&ga=GA1.2.949482815.1689135670&semt=ais',
      name:'Pizza'
    },
    {
      url: 'https://img.freepik.com/free-photo/delicious-chicken-table_144627-8761.jpg?size=626&ext=jpg&ga=GA1.2.949482815.1689135670&semt=ais',
      name:'Chicken'
    },
    {
      url: 'https://img.freepik.com/free-photo/brownie-chocolate-ice-cream-mint-sugar-powder-side-view_141793-15452.jpg?size=626&ext=jpg&ga=GA1.2.949482815.1689135670&semt=ais',
      name:'Dessert'
    },
    {
      url: 'https://img.freepik.com/free-photo/selection-various-cocktails-table_140725-2909.jpg?size=626&ext=jpg&ga=GA1.2.949482815.1689135670&semt=ais',
      name:'Drinks'
    },
    
  ];

  return (
    <div style={{width:'100%'}}>
      <h1 style={{marginBottom:'1em',textAlign:'left',marginLeft:'1em'}}>Categories:</h1>
    <Link to="/res"><div className="image-column" style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',marginLeft:'4em'}}>
      {slideImages.map((image, index) => (
        <div key={index} className="image-wrapper" style={{borderRadius:50,marginLeft:'-100px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
         <img style={{borderRadius:'50%',width:'40%',height:'100%'}} src={image.url} alt={`Image ${index + 1}`} className="circular-image" />
          <span>{image.name}</span>
        </div>
      ))}
      
    </div>
    </Link>
    </div>
  );
};

export default ImageColumn;
