import styled from '@emotion/styled'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin-top: 1rem;
    padding: 1rem;
    text-transform: uppercase;
    border: 1px solid var(--warning-color);
    background: var(--dark-back-color);
    font-family: 'Montserrat', 'sans-serif';
    font-weight: bold;
    font-size: 1.2rem;
    color: #b4b4b4;
    cursor: pointer;
  }

  button:hover {
    color: #ffffff;
  }
`

export const FormGroup = styled.div`
  width: 20rem;
  label {
    display: block;
    font-size: 0.7rem;
    margin-bottom: 0.5rem;
    margin-top: 1rem;
    font-weight: 200;
    align-self: flex-start;
  }
  input {
    width: 100%;
    padding: 0.5rem;
  }
`
