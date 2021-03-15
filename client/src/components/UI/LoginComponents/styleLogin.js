import styled from 'styled-components';


export const Wrapper1 = styled.div`
    button{
        background-image:  ${({ newTheme }) => (newTheme === 'light' ? '#linear-gradient(147deg, #12CBC4 0%, #12CBC4 74%)' : 'linear-gradient(147deg, #FD0054 0%, #FD0054 74%)')};
    }
`;