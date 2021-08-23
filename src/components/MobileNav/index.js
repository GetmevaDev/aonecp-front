import React, { useState } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { list } from '../NavBar';

import styles from './styles.css';
const Mobile = ({ location }) => {
  const [openModal, setOpenModal] = useState(true);

  const handleClickOpen = () => {
    setOpenModal(!openModal);
  };
  return (
    <div>
      <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" for="menu__toggle" onClick={handleClickOpen}>
          <span></span>
        </label>

        <ul className="menu__box">
          <Link to="/">
            <div className="imgLogo"></div>
          </Link>
          <li className="firstitem">
            <NavLink
              className="menu__item menu__item-block"
              activeClassName={location.pathname === '/' ? styles.itemActive : styles.item}
              to="/">
              How It Works
            </NavLink>

            <Fade>
              <ul className="dropdown">
                <Link to="/our-process">
                  <li className="dropdownLink">Our Process</li>
                </Link>
                <Link>
                  <li className="dropdownLink">Free Consultation</li>
                </Link>
                <Link>
                  <li className="dropdownLink">Get Started</li>
                </Link>
                <Link to="/faq">
                  <li className="dropdownLink">FAQ</li>
                </Link>
              </ul>
            </Fade>
          </li>
          {list.map(({ title, href }, index) => (
            <NavLink
              className="menu__item"
              activeClassName={location.pathname === href ? styles.itemActive : styles.item}
              key={index}
              to={href}>
              {title}
            </NavLink>
          ))}
          <a className="login-button" href="/#">
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
        </ul>
      </div>
    </div>
  );
};

export default withRouter(Mobile);
