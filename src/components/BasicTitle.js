import styled from 'styled-components';

export const BasicTitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
  /* Below is simple way accessing props when the component is passed a prop in the parent component */
  /* color: ${(props) => props.special && 'red'}; */
  /* Below is destructuring the prop */
  /* color: ${({special}) => special && 'red'}; */
  /* Ternary operator */
  color: ${({special}) => (special ? 'red' : 'blue')};
`;
// 