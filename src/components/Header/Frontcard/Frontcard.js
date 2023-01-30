import PropTypes from 'prop-types';
import './Frontcard.scss';

function Frontcard({ name, number, month, year }) {
  const transformString = (string) => {
    const newStr = string.split('');
    newStr.splice(4, 0, ' ');
    newStr.splice(9, 0, ' ');
    newStr.splice(14, 0, ' ');
    return newStr;
  };

  return (
    <div className="card card-front">
      <div className="front-circles">
        <div className="circle-xl" />
        <div className="circle-xs" />
      </div>
      <div className="front-number">{transformString(number)}</div>
      <div className="front-name">{name}</div>
      <div className="front-date">
        <span className="month">{month} </span>
        /<span className="year"> {year}</span>
      </div>
    </div>
  );
}

Frontcard.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default Frontcard;
