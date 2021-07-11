/** This file is the App.js before learning Animations */


import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
// import { BasicTitle } from './components/BasicTitle';
// import { DefaultButton, DangerButton, HipsterButton } from './components/MyButtons';
// import { Button } from '@material-ui/core';
// import ComplexTitle from './components/ComplexTitle';
// import AlternateWrapper from './components/AlternateTitle';
// import GlobalClass from './components/GlobalClass';
// add these components between the div in return to see other changes
import Card from './components/Card/Card';
import GlobalStyles from './global-styles';


const LightTheme = {
  color: '#222',
  background: '#fff'
}

const DarkTheme = {
  color: '#fff',
  background: '#222'
}

const Container = styled.div`
  padding: 2rem;
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.background}
`;

function App() {
  
  const [baseTheme, setTheme] = useState(true);
  const toggleTheme = () => {
    setTheme(!baseTheme)
  };

  return (
    <ThemeProvider theme={baseTheme ? LightTheme : DarkTheme}>
      <div style={{padding:'2rem'}}>
        <GlobalStyles/>
        <Card />
        <Container>
          <h2>Theme Changer</h2>
          <button className='btn' onClick={toggleTheme}>Toggle Theme</button>
        </Container>
      </div>
    </ThemeProvider>
    
  );
}

export default App;

// Place the below between main div tags
// <BasicTitle>My Styled Component for Basic Title</BasicTitle>
// <BasicTitle special>Special Component</BasicTitle>
// <DefaultButton>Styled Component Button</DefaultButton>
// <HipsterButton>Hipster Button</HipsterButton>
// <DangerButton>DANGER !!!</DangerButton>
// <h2>extend material ui button</h2>
// <Button color="primary" variant="contained">Hello World</Button>