# Basic Styling
1. Inline CSS
2. Global CSS

### Downsides/Major Flaws
##### Inline CSS
+ The only way how I can reuse the inline styles is by copying pasting below the button or where/whatever I want to
+ If I want to change any property, I have to change everywhere I need to
##### Global CSS
+ If I need to have different styles for similar elements, I cannot use same class names
+ I have to use multiple classes which will make the css files large unnecessarily

##### Sample Styled Component
import styled from 'styled-components';

const BasicTitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
`;

1. import styled from the styled-components package.
2. start with declaring a const variable with a custom name, usually a short name describing what it is.
  + Here it's a Title element (so a h1, h2, etc)
3. then the value starts with styled.h1
  + styled is the imported module from the styled-components package
  + .h1 is the element tag that gets applied to the element. In this case the h1 tag. 
  + This can be any HTML element tag - button, div, section, etc.
  + The value for the styled.<tag> is wrapped in back ticks - ` `. this is called tagged template literal.
  + In this required css is passed in. This is the general css properties we would use in a .css file

