import React, { useState } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { list } from '../NavBar';

import styles from './styles.css';
const Mobile = ({ location }) => {
  return (
    <div>
      <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" for="menu__toggle">
          <span></span>
        </label>

        <ul className="menu__box">
          <Link to="/">
            <div className="imgLogo"></div>
          </Link>
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
          </a>
        </ul>
      </div>
    </div>
  );
};

export default withRouter(Mobile);
