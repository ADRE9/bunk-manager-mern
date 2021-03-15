import styled from 'styled-components';


export const Wrapper = styled.div`    
    width: 100%;
    text-align: -webkit-center;

     .AuthSignIn,h6{
        color:  ${({ newTheme }) => (newTheme === 'light' ? '#000' : '#fff')};
    }
    .BottomSignUp{
        background-color: ${({ newTheme }) => (newTheme === 'light' ? '#12CBC4' : '#A80038')}
    }
    .BottomSignUp > button{
        color: ${({ newTheme }) => (newTheme === 'light' ? '#000' : '#fff')};
       
    }
    .BottomSignUp > button:hover{
        background-color: ${({ newTheme }) => (newTheme === 'light' ? '#0D9C97' : '#A80038')}
       
    }
    .TopSignIn{
        background-color: ${({ newTheme }) => (newTheme === 'light' ? '#12CBC4' : '#FD0054')}
    }
    .TopSignIn > button{
        color: ${({ newTheme }) => (newTheme === 'light' ? '#000' : '#fff')};
       
    }
    .TopSignIn > button:hover{
        background-color: ${({ newTheme }) => (newTheme === 'light' ? '#0D9C97' : '#A80038')}
    
    }
`;