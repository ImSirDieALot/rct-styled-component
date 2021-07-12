import React from 'react'
import styled, { css } from 'styled-components/macro';

const Product = ({ name, price }) => {
  return (
    <Wrapper price={price}>
      <h4>{name}</h4>
      <p>${price}</p>
    </Wrapper>
  )
}


const Wrapper = styled.article`
  width: 300px;
  background: #fff;
  padding: 1rem;
  border-radius: 0.25rem;
  margin: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h4 {
    text-transform: capitalize;
  }
  p {
    color: ${({ price }) => {
      return price < 100 ? 'green' : price < 300 ? 'blue' : price > 500 ? 'red' : 'black'
    }}
  }
`;
export default Product
