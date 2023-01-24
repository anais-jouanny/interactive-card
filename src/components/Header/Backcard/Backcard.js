import PropTypes from 'prop-types';
import './Backcard.scss';

function Backcard({ infos }) {
  return (
    <div className="card card-back">
      <div className="back-banner" />
      <div className="back-cvc">{infos.cvc.value}</div>
    </div>
  );
}

Backcard.propTypes = {
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
};

export default Backcard;
