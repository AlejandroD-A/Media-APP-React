import styled from '@emotion/styled'

export const Form = styled.form`
  width: 80vw;
  border-radius: 15px;
  background: #212121;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .input-form {
    align-items: flex-start;
    width: 100%;
  }
  textarea {
    border-radius: 0.8rem;
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    font-size: 1.5rem;
    padding: 1rem;
    width: 100%;
  }

  .file-input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    cursor: pointer;
  }
  .file-input + label {
    display: inline-block;
    font-size: 2rem;
    cursor: pointer;
    color: white;
  }

  .file-input + label:hover {
    color: var(--primary-color);
  }

  button {
    border: 1px solid var(--primary-color);
    background: none;
    color: white;
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    font-weight: 200;
    font-size: 1.5rem;
    width: 50%;
    align-self: center;
    padding: 0.5rem;
  }
`
