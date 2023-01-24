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

export default Header;
