import React from 'react';
import SideBar from '../../components/Sidebar/SideBar';
import TopBar from '../../components/Topbar/TopBar';
import './users.css';
import apartmentImg from '../../images/bg.jpg';


const Users = () => {

  const usersInformation = [
    {
      userId: 12221,
      userName: 'Olakunbi Olabode',
      userStatus: 'Active',
      price: '1,500,000',
      dateAdded: 'Today',
      //   time: '12:30pm',
    }
  ]
  return (
    <section className="dashboard-container">
      <SideBar />

      <main className="dashboard-main">
        <TopBar />

        <main className='properties-container'>
          <header className='property-page-title transaction-title'>
            <h4>Users:</h4>

            <div>
              <input type="search" name="" id="" />
            </div>
          </header>

          <div className="properties-page-filter-options">
            <div className="filter-options-container">
              <div className="filter-option active-option">
                <p>All</p>
                <span>200</span>
              </div>

              <div className="filter-option">
                <p>Tenant</p>
                <span>70</span>
              </div>

              <div className="filter-option">
                <p>Landlord</p>
                <span>30</span>
              </div>

              <div className="filter-option">
                <p>Agent</p>
                <span>04</span>
              </div>
            </div>
            <button>
              <iconify-icon class="iconify" icon="bi:filter"></iconify-icon>
              <p>Sort</p>
            </button>
          </div>




          <div className="apartment-list-container">
            <table class="apartments-list payment-history">
              <thead>
                <tr>
                  <th>UserID</th>
                  <th>Profile Picture</th>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Date Joined</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {usersInformation.map((apartment, idx) => (
                  <tr>
                    <td class="apartment-id payment id">
                      <p>#{apartment.userId}</p>
                    </td>
                    <td className="apartment-images-overview">
                      <img src={apartmentImg} />
                      {/* <img src={apartmentImg} />
                      <img src={apartmentImg} />
                      <span> +3</span> */}
                    </td>
                    <td class="name">
                      <p>{apartment.userName}</p>
                    </td>

                    <td class="apartment-price">
                      <p> &#8358; {apartment.price}</p>
                    </td>

                    <td class="payment-status">
                      <p> {apartment.userStatus}</p>
                    </td>

                    <td class="date-added">
                      <p>{apartment.dateAdded}</p>
                    </td>

                    <td class="action-options payment-actions">
                      <iconify-icon
                        class="action-icon"
                        icon="carbon:overflow-menu-vertical"
                      ></iconify-icon>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </main>
    </section>
  );
};

export default Users;
