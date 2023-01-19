import Backcard from './Backcard/Backcard';
import Frontcard from './Frontcard/Frontcard';
import './Header.scss';

function Header() {
  return (
    <>
      <div className="banner" />
      <Frontcard />
      <Backcard />
    </>
  );
}

export default Header;
