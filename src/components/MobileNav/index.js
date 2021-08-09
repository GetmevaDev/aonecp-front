import React, { useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { list } from '../NavBar';

import styles from './styles.css';
const Mobile = ({ location }) => {
  const [open, setOpen] = useState(false);

  const clickOpenModal = () => {
    setOpen(!open);
  };
  return (
    <div>
      <nav className={styles.nav}>
        <ul className={open ? 'list' : 'list-active'}>
          {list.map(({ title, href }, index) => (
            <NavLink
              className={styles.item}
              activeClassName={location.pathname === href ? styles.itemActive : styles.item}
              key={index}
              to={href}>
              {title}
            </NavLink>
          ))}
        </ul>
        <button onClick={clickOpenModal}>click</button>
      </nav>
    </div>
  );
};

export default withRouter(Mobile);
