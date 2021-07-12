import React from 'react'
import styled from 'styled-components';
import Product from './Product'
const products = [
  {
    id: 1,
    name: 'chair',
    price: 30
  }, {
    id: 2,
    name: 'sofa',
    price: 130
  }, {
    id: 3,
    name: 'couch',
    price: 630
  },
];



const Products = () => {
  return (
    <div>
      {products.map((product) => {
        return <Product {...product} key={product.id}/>
      })}
    </div>
  )
}

export default Products
