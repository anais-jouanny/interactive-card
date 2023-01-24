import PropTypes from 'prop-types';
import './Frontcard.scss';

function Frontcard({ infos, newName }) {
  return (
    <div className="card card-front">
      <div className="front-circles">
        <div className="circle-xl" />
        <div className="circle-xs" />
      </div>
      <div className="front-number">{infos.number.value}</div>
      <div className="front-name">{infos.name.value}</div>
      <div className="front-date">
        <span className="month">{infos.month.value}</span>
        / <span className="year">{infos.year.value}</span>
      </div>
    </div>
  );
}

Frontcard.propTypes = {
  infos: PropTypes.objectOf(PropTypes.shape({
    name: PropTypes.objectOf(PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })),
    number: PropTypes.objectOf(PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })),
    month: PropTypes.objectOf(PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })),
    year: PropTypes.objectOf(PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })),
    cvc: PropTypes.objectOf(PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })),
  })).isRequired,
  newName: PropTypes.string.isRequired,
};

export default Frontcard;
