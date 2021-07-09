import React from 'react'
import styled from 'styled-components';
import { colors } from '../utils/utils';
const AlternateTitle = ({title, className}) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <div className='underline'></div>
      <div className='colorsUtils'>This is my utils color</div>
    </div>
  )
}

// We can pass in the react component to styled-component
// and in the react component, we destructure the className and add it to the className of the div
const AlternateWrapper = styled(AlternateTitle)`
// target h1 here, only targets the h1s inside the wrapper, not all the h1 in the app
// same goes for any elements inside this Wrapper or any styled component
  h1 {
    text-transform: capitalize;
    text-align: center;
  }

  .underline {
    width: 50rem;
    height: 0.25rem;
    background: #645fff;
    margin: 0 auto;
  }

  .colorsUtils {
    text-transform: capitalize;
    text-align: center;
    width: 50rem;
    background: ${colors.bgPrimary};
    color: ${colors.primary};
    margin: 0 auto;
  }
`;

export default AlternateWrapper
