import React, { useContext } from 'react';
import { ThemeContext } from '../../providers/ChangeThemeProvider';
import sunIcon from '../../assets/icons/sun.svg';
import moonIcon from '../../assets/icons/moon.svg';
import { Wrapper } from './styles';

const ToggleTheme = () => {
    const { newTheme, toggleTheme } = useContext(ThemeContext);

    return (
        <Wrapper type="button" onClick={toggleTheme}>
            <img src={newTheme === 'light' ? sunIcon : moonIcon} alt={newTheme} />
        </Wrapper>
    );
};

export default ToggleTheme;
