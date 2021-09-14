import React, { useState } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { list } from '../NavBar';
import { slide as Menu } from 'react-burger-menu';
import Popup from 'reactjs-popup';

import styles from './styles.css';

export const Mobile = ({ location }, props) => {
  const [menuOpenState, setMenuOpenState] = useState(false);

  const closeMenu = () => {
    setMenuOpenState(!menuOpenState);
  };
  return (
    <div>
      <Menu {...props} isOpen={menuOpenState} onClose={closeMenu}>
        <Link to="/">
          <div className="imgLogo"></div>
        </Link>

        <li className="firstitem">
          <NavLink
            onClick={closeMenu}
            className="menu__item menu__item-block"
            activeClassName={location.pathname === '/' ? styles.itemActive : styles.item}
            to="/">
            How It Works
          </NavLink>

          <Fade>
            <ul className="dropdown">
              <Link to="/our-process">
                <li className="dropdownLink" onClick={closeMenu}>
                  Our Process
                </li>
              </Link>
              <Link to="/thankyou">
                <li className="dropdownLink" onClick={closeMenu}>
                  Free Consultation
                </li>
              </Link>
              <Link to="#">
                <li className="dropdownLink" onClick={closeMenu}>
                  Get Started
                </li>
              </Link>
              <Link to="/faq">
                <li className="dropdownLink" onClick={closeMenu}>
                  FAQ
                </li>
              </Link>
            </ul>
          </Fade>
        </li>
        {list.map(({ title, href }, index) => (
          <NavLink
            className="menu__item"
            onClick={closeMenu}
            activeClassName={location.pathname === href ? styles.itemActive : styles.item}
            key={index}
            to={href}>
            {title}
          </NavLink>
        ))}

        <Popup
          trigger={
            <li className="bm-item menu__item" style={{ cursor: 'pointer' }}>
              Get Started Now
            </li>
          }
          position="top center">
          <div>
            <Link to="/client-form" onClick={closeMenu}>
              <li className="dropdownLink">Client Form</li>
            </Link>
            <NavLink to="/affiliate-form">
              <li className="dropdownLink" onClick={closeMenu}>
                Affiliate Form{' '}
              </li>
            </NavLink>
          </div>
        </Popup>
        <a className="login-button" href="/#" onClick={closeMenu}>
          Login as
          <Fade>
            <ul className="dropdown dropdown-shadow">
              <li className="dropdownLinkBtn">
                <a href="https://www.creditrestorationportal.com/account/login">Client</a>
              </li>

              <li className="dropdownLinkBtn">
                <a href="https://www.affiliatecreditrepairportal.com/account/login">Affiliate</a>
              </li>
            </ul>
          </Fade>
        </a>
      </Menu>
    </div>
  );
};

export default withRouter(Mobile);
