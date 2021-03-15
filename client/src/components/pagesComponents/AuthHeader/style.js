import styled from 'styled-components';


export const AuthHead = styled.div`
    h5,a{
    color: ${({ newTheme }) => (newTheme === 'light' ? '#000' : '#fff')};
    }

    .AppBarHead{
        background-color: ${({ newTheme }) => (newTheme === 'light' ? '#12CBC4' : '#FD0054')};
    }
`;