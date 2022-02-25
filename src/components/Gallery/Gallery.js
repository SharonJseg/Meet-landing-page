import './Gallery.css';
import img1 from '../../images/desktop/image-woman-in-videocall.jpg';
import img2 from '../../images/desktop/image-women-videochatting.jpg';
import img3 from '../../images/desktop/image-men-in-meeting.jpg';
import img4 from '../../images/desktop/image-man-texting.jpg';

const Gallery = () => {
  return (
    <section className='gallery'>
      <figure>
        <img src={img1} alt='woman-in-videocall' className='gallery__image' />
      </figure>
      <figure>
        <img src={img2} alt='women-videochatting' className='gallery__image' />
      </figure>
      <figure>
        <img src={img3} alt='men-in-meeting' className='gallery__image' />
      </figure>
      <figure>
        <img src={img4} alt='man-texting' className='gallery__image' />
      </figure>
    </section>
  );
};

export default Gallery;
