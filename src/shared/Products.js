import React from 'react';

function Products({ img_src, link }) {
  return (
    <div className="menu">
      <div className="image">
        <a href="#" target="_blank">
          <img src={img_src} />
        </a>
      </div>
      <div className="product">
        <a href="#" target="_blank">
          {link}
        </a>
      </div>
    </div>
  );
}

export default Products;
