import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import SingIn from '../sing-in/sing-in';
import SingOut from '../sing-out/sing-out';
import {useAppSelector} from '../../hooks';

function Header ():JSX.Element {

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.Main} className="header__logo-link header__logo-link--active">
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width={81}
                height={41}
              />
            </Link>
          </div>
          <nav className="header__nav">
            {authorizationStatus === AuthorizationStatus.Auth ? <SingOut/> : <SingIn/>}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
