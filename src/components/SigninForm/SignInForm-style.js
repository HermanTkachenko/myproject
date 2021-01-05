import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const FormContainer = styled.form`
    border: 3px solid black;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    padding: 10px;
    background-color: #eee;
    text-align: left;  
`;

export const FormName = styled.legend`
    text-align: center;
    margin: 1em;
    font-size: 2em;
    font-weight: 700;
`;

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1em;
`;

export const FormLabel = styled.label`
    font-size: 1.5em;
    margin-bottom: 0.3em;
`;

export const FormInput = styled.input`
    border-radius: 5px;
    border: 1px solid black;
    padding: 0.2em 0.3em;
    line-height: 1.7em;
    font-size: 1.3em;
    width: 100%;
    margin-bottom: 1.5em;
`;

export const FormButton = styled.button`
    display: block;
    margin: 1.5em auto;
    padding: 0.5em 1.2em;
    font-weight: 700;
    font-size: 1.3em;
    cursor: pointer;
`;