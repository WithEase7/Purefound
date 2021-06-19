import React from 'react';
import milk from '../images/animal_jpg/milk.jpg';
import curd from '../images/animal_jpg/curd.jpg';
import butter from '../images/animal_jpg/butter.jpg';
import cheese from '../images/animal_jpg/cheese.jpg';
import wool from '../images/animal_jpg/wool.jpg';
import '../shared/animalproducts.css';

function AnimalProducts() {

  const panels = document.querySelectorAll('.panel');

  panels.forEach((panel) => {
    panel.addEventListener('click', () => {
      removeActiveClass();
      panel.classList.add('active');
    });
  });
  
  function removeActiveClass() {
    panels.forEach((panel) => {
      panel.classList.remove('active');
    });
  }

  return (
    <div className="container">
      <div className="panel active" style={{ backgroundImage: `url(${milk})` }}>
        <h6>Milk</h6>
      </div>
      <div className="panel" style={{ backgroundImage: `url(${curd})` }}>
        <h6>Curd</h6>
      </div>
      <div className="panel" style={{ backgroundImage: `url(${butter})` }}>
        <h6>Butter</h6>
      </div>
      <div className="panel" style={{ backgroundImage: `url(${cheese})` }}>
        <h6>Cheese</h6>
      </div>
      <div className="panel" style={{ backgroundImage: `url(${wool})` }}>
        <h6>Wool</h6>
      </div>
    </div>
  );
}

export default AnimalProducts;
