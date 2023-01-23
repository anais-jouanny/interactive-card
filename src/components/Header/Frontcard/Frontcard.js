import PropTypes from 'prop-types';
import './Frontcard.scss';

function Frontcard({ infos }) {
  const name = infos.filter((info) => info.label === 'name')[0];
  const number = infos.filter((info) => info.label === 'number')[0];
  const month = infos.filter((info) => info.label === 'month')[0];
  const year = infos.filter((info) => info.label === 'year')[0];

  return (
    <div className="card card-front">
      <div className="front-circles">
        <div className="circle-xl" />
        <div className="circle-xs" />
      </div>
      <div className="front-number">{number.value}</div>
      <div className="front-name">{name.value}</div>
      <div className="front-date">
        <span className="month">{month.value}</span>
        / <span className="year">{year.value}</span>
      </div>
    </div>
  );
}

Frontcard.propTypes = {
  infos: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
};

export default Frontcard;
