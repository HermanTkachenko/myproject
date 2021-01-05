import styled from 'styled-components';

export const Container = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 0;
`;

export const Link = styled.a`
    text-decoration: none;
    color: #000;
    padding: 8px 10px;
    margin: 0 10px;
    &:hover {
        color: #eee;
    }
`;