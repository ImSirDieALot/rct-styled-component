import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const DefaultButton = styled.button`
  background: #234;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: uppercase;
  padding: 0.25rem;
  display: block;
  width: 200px;
  margin: 1rem auto;
`;

export const DangerButton = styled.button`
  background: red;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: uppercase;
  padding: 0.25rem;
  display: block;
  width: 300px;
  margin: 1rem auto;
`;

// we can customize our style components, and 
// that is by extending our style components or simply
// ability to style any react component.
// we're not limited to just HTML elements after styled., we can also pass here, react components.
// I am passing the above created DefaultButton and changing the properties to achieve a new button.

export const HipsterButton = styled(DefaultButton)`
  width: 400px;
  background: transparent;
  color: #000;
  border: solid 1px black;
`