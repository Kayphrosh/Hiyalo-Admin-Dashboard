import React from 'react';
import { useState, useEffect } from 'react';
import AddNewAdminSettings from './AddNewAdminSettings';
import PasswordSettings from './PasswordSettings';
import PersonalInformationSettings from './PersonalInformationSettings';
import './settings.css';
import TopBar from '../../components/Topbar/TopBar';
import SideBar from '../../components/Sidebar/SideBar';

const SettingsContainer = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="dashboard-container">
      <SideBar />

      <main className="dashboard-main">
        <TopBar />

        <main class="add-new-property-container">
          <header className='property-page-title transaction-title'>
            <h4>Account Settings:</h4>
            {/* <div class="add-property-cta">
              <button type="submit">Cancel</button>
              <button type="submit">Save</button>
            </div> */}
          </header>

          <div class="settings-filter">
            <ul>
              <li
                class="active-settings"
                className={
                  toggleState === 1
                    ? 'settings-tabs active-setings-tabs'
                    : 'settings-tabs'
                }
                onClick={() => toggleTab(1)}
              >
                General Details
              </li>

              <li
                className={
                  toggleState === 2
                    ? 'settings-tabs active-setings-tabs'
                    : 'settings-tabs'
                }
                onClick={() => toggleTab(2)}
              >
                Add New Admin
              </li>
              <li
                className={
                  toggleState === 3
                    ? 'settings-tabs active-setings-tabs'
                    : 'settings-tabs'
                }
                onClick={() => toggleTab(3)}
              >
                Password
              </li>
              {/* <li>Contact Us</li>
              <li>Terms of Service</li> */}
            </ul>
          </div>

          {toggleState === 1 && (
            <PersonalInformationSettings
            // className={
            //   toggleState === 1
            //     ? 'settings-content  active-settings-content'
            //     : 'settings-content'
            // }
            />
          )}

          {toggleState === 2 && (
            <AddNewAdminSettings
              className={
                toggleState === 2
                  ? 'settings-content  active-settings-content'
                  : 'settings-content'
              }
            />
          )}

          {toggleState === 3 && (
            <PasswordSettings
              className={
                toggleState === 3
                  ? 'settings-content  active-settings-content'
                  : 'settings-content'
              }
            />
          )}

          {/* {toggleState === 4 && (
            <EmploymentStatus
              className={
                toggleState === 4
                  ? 'settings-content  active-settings-content'
                  : 'settings-content'
              }
            />
          )}

          {toggleState === 5 && (
            <NextOfKin
              className={
                toggleState === 5
                  ? 'settings-content  active-settings-content'
                  : 'settings-content'
              }
            />
          )} */}
        </main>
      </main>
    </section>
  );
};

export default SettingsContainer;
