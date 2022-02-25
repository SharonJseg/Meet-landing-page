import './Header.css';
import logo from '../../images/logo.svg';

const Header = () => {
  return (
    <header className='header'>
      <picture>
        <img src={logo} alt='app logo' className='header_logo' />
      </picture>
    </header>
  );
};

export default Header;
