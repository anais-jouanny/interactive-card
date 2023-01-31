import PropTypes from 'prop-types';
import Backcard from './Backcard/Backcard';
import Frontcard from './Frontcard/Frontcard';
import './Header.scss';

function Header({ name, number, month, year, cvc, final }) {
  const cssClass = final ? 'banner banner-final' : 'banner';

  return (
    <>
      <div className={cssClass} />
      <Frontcard name={name} number={number} month={month} year={year} />
      <Backcard cvc={cvc} />
    </>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  cvc: PropTypes.string.isRequired,
  final: PropTypes.bool.isRequired,
};

export default Header;
