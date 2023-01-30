import PropTypes from 'prop-types';
import './Backcard.scss';

function Backcard({ cvc }) {
  return (
    <div className="card card-back">
      <div className="back-banner" />
      <div className="back-cvc">{cvc}</div>
    </div>
  );
}

Backcard.propTypes = {
  cvc: PropTypes.string.isRequired,
};

export default Backcard;
