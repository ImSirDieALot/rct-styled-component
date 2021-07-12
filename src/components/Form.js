import React from 'react'
import styled, { css } from 'styled-components/macro'

const FormButton = styled.button.attrs((props) => {
    return {type: props.type|| 'button'}
  }) 
  `
    background: var(--primary);
    border: none;
    color: white;
    padding: 0.25rem;
    cursor: pointer;
    ${({type}) => {
      return type === 'submit' && css`
        display: block;
        width:100%;
        margin-top: 1rem;
        border-radius: 0.25rem;
      `
    }}
  `

const BasicInput = styled.input.attrs((props) => {
    return {
      type: props.type || 'text',
      placeholder: props.placeholder || 'Please enter a value'
    }
  })`
    box-sizing: border-box;
    padding: 0.5rem;
    border: 2px solid #f2f4f8;
    width: 100%;
    margin-top: 1rem;
`
const Form = () => {
  return (
    <div>
      <h2>Start of Form Component</h2>
      <FormButton>Click Me!</FormButton>
      <form css={`width: 300px; 
                  background: #fff; 
                  padding: 2rem; 
                  margin-top: 1rem;`}
      >
        <h2>Form</h2>
        <BasicInput></BasicInput>
        <BasicInput type='email' placeholder='Please enter a email'></BasicInput>
        <FormButton type='submit'>Submit</FormButton>
      </form>
    </div>
  )
}

export default Form
