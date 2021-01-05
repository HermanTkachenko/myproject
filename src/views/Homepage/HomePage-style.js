import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    height: 100vh;
    margin: 0 auto;
    padding: 0 2em;
`;

export const Title = styled.h1`
    font-size: 2.5em;
    text-align: center;
    color: #DE684E;
    margin-top: 2em;
`;

export const Link = styled.a`
    // position: absolute;
    // right: 1px;
    max-width: 50px;
    cursor: pointer;
    &:hover {
        color: #eee;
    }
`;