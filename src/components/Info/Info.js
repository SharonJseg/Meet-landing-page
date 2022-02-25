import Divider from '../Divider/Divider';
import './Info.css';

const Info = () => {
  return (
    <section className='info'>
      <h3 className='info__subheading'>Built for modern use</h3>
      <h2 className='info__heading'>Smarter meetings, all in one place</h2>
      <p className='info__text'>
        Send messages, share files, show your screen, and record your meetings —
        all in one workspace. Control who can join with invite-only team access,
        data encryption, and data export.
      </p>

      <Divider num={'02'} />
    </section>
  );
};

export default Info;
