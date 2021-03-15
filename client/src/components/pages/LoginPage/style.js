import styled from 'styled-components';


export const LoginPageHead = styled.div`
    .MainLoginDiv{
        background-color: ${({ newTheme }) => (newTheme === 'light' ? '#000' : '#fff')};
    }
`;