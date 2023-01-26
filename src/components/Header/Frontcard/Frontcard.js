import PropTypes from 'prop-types';
import './Frontcard.scss';

function Frontcard({ infos }) {
  return (
    <div className="card card-front">
      <div className="front-circles">
        <div className="circle-xl" />
        <div className="circle-xs" />
      </div>
      <div className="front-number">{infos.number.split('').join(' ')}</div>
      <div className="front-name">{infos.name}</div>
      <div className="front-date">
        <span className="month">{infos.month} </span>
        /<span className="year"> {infos.year}</span>
      </div>
    </div>
  );
}

Frontcard.propTypes = {
  infos: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    month: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    cvc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Frontcard;
