import PropTypes from 'prop-types';
import './Backcard.scss';

function Backcard({ infos }) {
  const cvcInfos = infos.filter((info) => info.label === 'cvc')[0];

  return (
    <div className="card card-back">
      <div className="back-banner" />
      <div className="back-cvc">{cvcInfos.value}</div>
    </div>
  );
}

Backcard.propTypes = {
  infos: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
};

export default Backcard;
