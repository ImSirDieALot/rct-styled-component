import React from 'react'
import styled, {css} from 'styled-components/macro';

const fruits = ['orange', 'apples', 'bananas', 'peaches'];

const FruitList = styled.li`
  list-style-type: none;
  ${({ odd }) => {
    return odd ? css`
      color: white;
      background: red;
      font-size: 1.5rem;
      padding: 1.5rem;
    ` : css`
      color: #222;
      padding: 1rem;
    `
  }}
`;


const List = () => {
  return (
    <div>
      <ul>
        {fruits.map((item, index) => {
          return <FruitList key={index} odd={(index + 1) % 2 !== 0}>{item}</FruitList>
        })}
      </ul>
    </div>
  )
}

export default List
