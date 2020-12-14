import React, {useState} from 'react';
import cx from 'classnames';
import { Link } from "react-router-dom";
import Search from './Search'

function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  const [showDropdown, setShowDropnown] = useState(false)

  const onDropdownBlur = () => {
    setShowDropnown(false)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Navbar</Link>
      <button onClick={() => setShowMenu(!showMenu)} className="navbar-toggler" type="button">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={cx("collapse", "navbar-collapse", {show: showMenu})}>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item dropdown" onBlur={onDropdownBlur}>
            <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" onClick={() => setShowDropnown(!showDropdown)}>
              Dropdown
            </a>
            <div className={cx("dropdown-menu", {show: showDropdown})}>
              <Link onClick={() => setShowDropnown(false)} to="/dropdown/action1" className="dropdown-item" href="#">Action</Link>
              <Link onClick={() => setShowDropnown(false)} to="/dropdown/action2" className="dropdown-item" href="#">Another action</Link>
              <div className="dropdown-divider"></div>
              <Link onClick={() => setShowDropnown(false)} to="/dropdown/action3" className="dropdown-item" href="#">Something else here</Link>
            </div>
          </li>
        </ul>
        <Search />
      </div>
    </nav>
  )
}

export default Navbar;