import React from 'react'
import { useRef } from 'react';
import productSampleImage from '../assets/img/productSampleImage.webp'
import {motion} from 'framer-motion';

const CardSlider = () => {
  const containerRef = useRef(null);

  const handleNextClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += containerRef.current.offsetWidth;
    }
  };

  const handlePrevClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= containerRef.current.offsetWidth;
    }
  };

  let products =[
    {
      id: 1,
      name: 'Product Name 1',
      brand: 'Brand 1',
      image: productSampleImage,
      description: 'A short line about product 1',
    },
    {
      id: 2,
      name: 'Product Name 2',
      brand: 'Brand 2',
      image: productSampleImage,
      description: 'A short line about product 2',
    },
    {
      id: 3,
      name: 'Product Name 3',
      brand: 'Brand 3',
      image: productSampleImage,
      description: 'A short line about product 3',
    },

    {
      id: 4,
      name: 'Product Name 4',
      brand: 'Brand 4',
      image: productSampleImage,
      description: 'A short line about product 4',
    },

    {
      id: 5,
      name: 'Product Name 5',
      brand: 'Brand 5',
      image: productSampleImage,
      description: 'A short line about product 5',
    },
  ];
  return (
    <div className='product'>
      <h2 className='product-category'><span className='text-green-700'>Featured</span> Products</h2>
      <button className='pre-btn' onClick={handlePrevClick}><ion-icon name="chevron-back-outline"></ion-icon></button>
      <button className='nxt-btn' onClick={handleNextClick}><ion-icon name="chevron-forward-outline"></ion-icon></button>
      <div className='product-container' ref={containerRef}>
      {products.map((product) => (
          <motion.div
          initial={{opacity:0,y:400}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:1}}
           key={product.id} className='product-card'>
            <div className="product-image">
              <img src={product.image} alt={product.name} className='product-thumb'/>
              <button className="card-btn">{product.name}</button>
            </div>
            <div className="product-info">
              <h2 className="product-brand">{product.brand}</h2>
              <p className="product-short-description">{product.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  )
}

export default CardSlider