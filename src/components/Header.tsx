export default function Header() {
  return (
    <header className="header">
      <nav className="header__wrapper | wrapper">
        <div className="header__branding">
          <img
            className="header__logo"
            src="../../images/icon.png"
            alt="react native fluffle logo"
          />

          <div className="header__title-wrapper">
            <h1>Fluffle</h1>
            <h2>Built to compose</h2>
          </div>
        </div>

        <div className="header__options">
          <a
            className="header__github"
            href="https://github.com/bibliolabsofficial/react-native-fluffle"
          >
            <i className="fa-brands fa-github" aria-hidden="true"></i>
          </a>

          <a className="header__sponsor" href="https://github.com/sponsors/filipe-2">
            <i className="fa-regular fa-heart" aria-hidden="true"></i>
          </a>
        </div>
      </nav>
    </header>
  );
}
