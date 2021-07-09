import styled from 'styled-components';
// import { BasicTitle } from './components/BasicTitle';
// import { DefaultButton, DangerButton, HipsterButton } from './components/MyButtons';
// import { Button } from '@material-ui/core';
import ComplexTitle from './components/ComplexTitle';
import AlternateWrapper from './components/AlternateTitle';
import GlobalClass from './components/GlobalClass';

function App() {
  return (
    <div style={{padding:'2rem'}}>
      <h2>More Complex Title</h2>
      <ComplexTitle title="Complex Title Component"></ComplexTitle>
      <AlternateWrapper title="My Alternate Title Component"></AlternateWrapper>
      <GlobalClass title="My Global Class Component"></GlobalClass>
    </div>
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