import PropTypes from 'prop-types';
import Backcard from './Backcard/Backcard';
import Frontcard from './Frontcard/Frontcard';
import './Header.scss';

function Header({ infos }) {
  return (
    <>
      <div className="banner" />
      <Frontcard infos={infos} />
      <Backcard infos={infos} />
    </>
  );
}

Header.propTypes = {
  infos: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
};

export default Header;
