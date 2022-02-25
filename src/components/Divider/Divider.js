import './Divider.css';

const Divider = ({ num }) => {
  return (
    <div className='divider'>
      <div className='divider__line'></div>
      <p className='divider__number'>{num}</p>
    </div>
  );
};

export default Divider;
