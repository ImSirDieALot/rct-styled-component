import { useState } from 'react';
import styled from 'styled-components/macro';
import { HipsterButton } from './components/MyButtons'

/** To have a button use href, we need to use `as='a'`, which represents a link 
 * this comes with default styles of a, so add the specific styles in the button 
*/
function App() {

  return (
      <div style={{ padding:'2rem' }}>
        <HipsterButton>Click Me</HipsterButton>
        <HipsterButton as='a' href='https://www.udemy.com'>Click Me</HipsterButton>
        <HipsterButton>Click Me</HipsterButton>
        <div css={`color: green`}>
          <h2>Inline CSS</h2>
        </div>
      </div>
  );
}

// jZmMCy

export default App;
