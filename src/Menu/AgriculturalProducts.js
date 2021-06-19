import React from 'react';
import bajra from '../images/crop imgs/bajra.png';
import fruits from '../images/crop imgs/fruits.png';
import maize from '../images/crop imgs/maize.png';
import vegetables from '../images/crop imgs/vegetables.png';
import peanut from '../images/crop imgs/peanut.png';
import wheat from '../images/crop imgs/wheat.png';
import Products from '../shared/Products';

function AgriculturalProducts() {
  return (
    <div className="parent">
      <div className="menu-container">
        <Products img_src={bajra} link={'Paper Millet'} />
        <Products img_src={wheat} link={'Wheat'} />
        <Products img_src={maize} link={'Maize'} />
      </div>

      <div className="menu-container">
        <Products img_src={peanut} link={'Peanut'} />
        <Products img_src={fruits} link={'Fruits'} />
        <Products img_src={vegetables} link={'Vegetables'} />
      </div>
    </div>
  );
}

export default AgriculturalProducts;
