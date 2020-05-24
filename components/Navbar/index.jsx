import { OptionsWrapper, Nav } from './styles';
import Icon from '../Icon';
import { FaGithub, FaLinkedin, FaSpotify, FaMedium } from 'react-icons/fa';
import { FiMoon, FiSun } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';

const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark';
    if (isDark) {
      document.body.classList.add('dark');
      setIsDarkMode(true);
    }
  }, []);

  const handleToggleTheme = React.useCallback(() => {
    document.body.classList.toggle('dark');
    setIsDarkMode(!isDarkMode);
    localStorage.setItem(
      'theme',
      document.body.classList.contains('dark') ? 'dark' : 'light'
    );
  }, [isDarkMode, setIsDarkMode]);

  const handleOpenEmail = React.useCallback(() => {
    window.location.href = `mailto:germancutraro@hotmail.com`;
  }, []);

  return (
    <Nav>
      <OptionsWrapper onClick={handleToggleTheme}>
        {isDarkMode ? (
          <FiMoon
            color='#fff'
            size='1.2em'
            style={{ margin: '5px', cursor: 'pointer' }}
          />
        ) : (
          <FiSun
            color='#000'
            size='1.2em'
            style={{ margin: '5px', cursor: 'pointer' }}
          />
        )}
      </OptionsWrapper>

      <Icon
        Component={FaSpotify}
        href='https://open.spotify.com/user/k4wp05wgc21yzac4s9axvtz44'
      />
      <Icon
        Component={FaLinkedin}
        href='https://linkedin.com/in/germancutraro'
      />
      <Icon Component={FaMedium} href='https://medium.com/@germancutraro' />
      <Icon
        Component={MdEmail}
        href='https://github.com/germancutraro'
        onClick={handleOpenEmail}
        size='1.3em'
      />
      <Icon Component={FaGithub} href='https://github.com/germancutraro' />
    </Nav>
  );
};

export default React.memo(NavBar);
