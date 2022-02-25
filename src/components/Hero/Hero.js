import './Hero.css';
import leftHeroImg from '../../images/desktop/image-hero-left.png';
import rightHeroImg from '../../images/desktop/image-hero-right.png';
import Divider from '../Divider/Divider';

const Hero = () => {
  return (
    <section className='hero'>
      <picture>
        <img
          src={leftHeroImg}
          alt='people smiling'
          className='hero__image-left'
        />
      </picture>
      <div className='hero__container'>
        <h1 className='hero__title'>Group Chat for Everyone</h1>
        <p className='hero__text'>
          Meet makes it easy to connect with others face-to-face virtually and
          collaborate across any device.
        </p>
        <div className='hero__buttons'>
          <button className='button button__download'>
            Download <span>v1.3</span>
          </button>
          <button className='button button__default'>What is it?</button>
        </div>
      </div>
      <picture>
        <img
          src={rightHeroImg}
          alt='people smiling'
          className='hero__image-right'
        />
      </picture>
      <Divider num={'01'} />
    </section>
  );
};

export default Hero;
