import PropTypes from 'prop-types';
import Backcard from './Backcard/Backcard';
import Frontcard from './Frontcard/Frontcard';
import './Header.scss';

function Header({ infos, newName }) {
  return (
    <>
      <div className="banner" />
      <Frontcard infos={infos} newName={newName} />
      <Backcard infos={infos} />
    </>
  );
}

Header.propTypes = {
  infos: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    month: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    cvc: PropTypes.string.isRequired,
  }).isRequired,
  newName: PropTypes.string.isRequired,
};

export default Header;
