import React from 'react';
import './side-bar.css'
import { NavLink } from 'react-router-dom';
import Logo from '../../images/logo.svg'
import buildingsIcon from '../../images/buildings-2.svg';
import dashboardIcon from '../../images/dashboard.svg';
import settingsIcon from '../../images/setting-2.svg';
import walletIcon from '../../images/wallet-minus.svg';
import usersIcon from '../../images/users.svg'
const SideBar = () => {
  return (
    <aside className="side-bar">
      <div class="dashboard-logo">
        <img src={Logo} alt="" />
      </div>

      <nav className="dashboard-navbar">
        <ul className="dashboard-nav-links">
          <li>
            <NavLink
              to="/"
              className="side-bar-link"
              id={window.location.pathname === '/dashboard' ? 'active' : ''}
            >
              <img src={dashboardIcon} alt="" />
              <span>Overview</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              className="side-bar-link"
              id={window.location.pathname === '/users' ? 'active' : ''}
            >
              <img src={usersIcon} alt="" />
              <span>Users</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/listed-properties"
              className="side-bar-link"
              id={window.location.pathname === '/listed-properties' ? 'active' : ''}
            >
              <img src={buildingsIcon} alt="" />
              <span>Apartments</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/transactions"
              className="side-bar-link"
              id={window.location.pathname === '/payments' ? 'active' : ''}
            >
              <img src={walletIcon} alt="" />
              <span>Transactions</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              className="side-bar-link"
              id={window.location.pathname === '/apartments' ? 'active' : ''}
            >
              <img src={settingsIcon} alt="" />
              <span>Settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
