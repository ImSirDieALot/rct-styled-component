import styled, { css } from 'styled-components';
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

  ${({ large }) => large ? css`
    padding: 1rem;
    font-size:1.5rem;
    font-weight: 700
  ` : css`
    padding: 0.5rem;
    font-size:1rem;
    font-weight: 400
  `}
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
  width: 150px;
  background: transparent;
  color: #000;
  border: solid 1px black;
  padding:1rem;
  display: inline-block;
  margin-right: 1rem;
  text-decoration: none;
  text-align: center;
  font-size: 1rem;
`