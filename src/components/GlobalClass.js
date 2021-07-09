import React from 'react'
import styled from 'styled-components';

const GlobalClass = ({title}) => {
  // bg-grey is defined in the global css file - index.css
  // with this technique, we can have a class that can re-used across multiple components
  // in h2 I used title class which is already defined in the global index.css
  // but to override this effect, adding new class to the Wrapper classes will change the global property
  return (
    <Wrapper className='bg-grey'>
      <h1>{title}</h1>
      <div className='underline'></div>
      <h2 className="title">Random</h2>
    </Wrapper>
  )
}

const Wrapper = styled.div`
// target h1 here, only targets the h1s inside the wrapper, not all the h1 in the app
// same goes for any elements inside this Wrapper or any styled component
  h1 {
    text-transform: capitalize;
    text-align: center;
  }
  .underline {
    width: 50rem;
    height: 0.25rem;
    background: green;
    margin: 0 auto;
  }
  /* .title {
    color: lightblue;
  } */
`;

export default GlobalClass
