import React from 'react'
import styled from 'styled-components';

const ComplexTitle = ({title}) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <div className="globalVariable">Global CSS Variable</div>
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
  /* this globalVariable uses the :root properties defined in the global css file - index.css */
  /* The advantage of this is by changing the values in index.css file, all the properties that used them changes as well */
  .globalVariable {
    margin: 0 auto;
    text-align: center;
    color: var(--primary);
    background-color: var(--bgPrimary);
  }
`;

export default ComplexTitle
