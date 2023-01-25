import PropTypes from 'prop-types';
import './Backcard.scss';

function Backcard({ infos }) {
  return (
    <div className="card card-back">
      <div className="back-banner" />
      <div className="back-cvc">{infos.cvc}</div>
    </div>
  );
}

Backcard.propTypes = {
  infos: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    month: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    cvc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Backcard;
