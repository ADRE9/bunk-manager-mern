import styled from 'styled-components';


export const Headings = styled.div`
    h2{
    color: ${({ newTheme }) => (newTheme === 'light' ? '#fff' : '#000')};
    }

    .HomeDiv{
        background-color: ${({ newTheme }) => (newTheme === 'light' ? '#000' : '#fff')};
    }

    .exam{
        box-shadow: 0 15px 110px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);
    }

    .classHead{
        display: flex;
        flex-direction:row;
        align-items: center;
        justify-content: space-between;
    }
`;