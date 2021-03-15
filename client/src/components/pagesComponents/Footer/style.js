import styled from 'styled-components';


export const FooterMain = styled.div`
    p,span,a{
    color: ${({ newTheme }) => (newTheme === 'light' ? '#000' : '#fff')};
    }

    .FooterHead{
        background-color: ${({ newTheme }) => (newTheme === 'light' ? '#12CBC4' : '#FD0054')};
    }
`;