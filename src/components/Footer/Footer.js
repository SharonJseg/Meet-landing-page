import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <h2 className='footer__heading'>Experience more together</h2>
        <p className='footer__subheading'>
          Stay connected with reliable HD meetings and unlimited one-on-one and
          group video sessions.
        </p>
        <button className='button button__default button__footer'>
          Download <span>v1.3</span>
        </button>
      </div>
      <div className='footer__image'></div>
      <div className='footer__background'></div>
    </footer>
  );
};

export default Footer;
