import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import './admin-overview.css';
import SideBar from '../../components/Sidebar/SideBar';
import TopBar from '../../components/Topbar/TopBar';
import walletIcon from '../../images/walletIcon.svg';
import housesIcon from '../../images/housesIcon.svg';
import tenantUsersIcon from '../../images/tenantUsersIcon.svg';
import agentusersIcon from '../../images/agentUsersIcon.svg';

const AdminOverview = () => {
  const totalIcome = '1,000,000';

  const totalListedApartment = '1,011';

  const recentTransactions = [
    {
      invoiceId: 12221,
      name: 'Olakunbi Olabode',
      status: 'Successful',
      amount: '1,000,000',
      date: 'Today',
    },
    {
      invoiceId: 12221,
      name: 'Olakunbi Olabode',
      status: 'Successful',
      amount: '1,000,000',
      date: 'Today',
    },
    {
      invoiceId: 12221,
      name: 'Olakunbi Olabode',
      status: 'Successful',
      amount: '1,000,000',
      date: 'Today',
    },
    {
      invoiceId: 12221,
      name: 'Olakunbi Olabode',
      status: 'Successful',
      amount: '1,000,000',
      date: 'Today',
    },
    {
      invoiceId: 12221,
      name: 'Olakunbi Olabode',
      status: 'Successful',
      amount: '1,000,000',
      date: 'Today',
    },
  ];
  return (
    <section className="dashboard-container">
      <SideBar />

      <main className="dashboard-main">
        <TopBar />
        <div className="page-title">
          <h4>Account Overview:</h4>
          <span class="overview-date">
            <button>Sep, 2022</button>
          </span>
        </div>

        <div className="overview-header admin-overview-header">
          <div className="overall-income">
            <header>
              <span>
                <img src={walletIcon} alt="" />
              </span>
              <Icon icon="material-symbols:more-vert" />
            </header>

            <p>Total Income Balance</p>

            <h4>NGN {totalIcome}:00</h4>
          </div>

          <div className="total-listed-apartment">
            <header>
              <span>
                <img src={housesIcon} alt="" />
              </span>

              <Icon icon="material-symbols:more-vert" />
            </header>

            <p>Total Listed Apartment</p>

            <h4>{totalListedApartment}</h4>
          </div>

          <div className="total-listed-apartment">
            <header>
              <span>
                <img src={tenantUsersIcon} alt="" />
              </span>

              <Icon icon="material-symbols:more-vert" />
            </header>

            <p>Total Tenantt</p>

            <h4>{totalListedApartment}</h4>
          </div>

          <div className="total-listed-apartment">
            <header>
              <span>
                <img src={agentusersIcon} alt="" />
              </span>

              <Icon icon="material-symbols:more-vert" />
            </header>

            <p>Total Agent</p>

            <h4>{totalListedApartment}</h4>
          </div>
        </div>

        <div className="recent-transaction-chart-container">
          <div className="transaction-history-overview">
            <header>
              <h6>Payment History:</h6>
              <Link to="/payments">View all</Link>
            </header>

            <table className="apartments-list payment-history">
              <thead>
                <tr>
                  <th>Invoice ID</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {recentTransactions.map((recentTransaction, idx) => {
                  return (
                    <tr>
                      <td className="apartment-id">
                        <p>#{recentTransaction.invoiceId}</p>
                      </td>

                      <td>
                        <p>{recentTransaction.name}</p>
                      </td>

                      <td>
                        <p class="payment-status">{recentTransaction.status}</p>
                      </td>
                      <td>
                        <p>{recentTransaction.amount}</p>
                      </td>
                      <td>
                        <p>{recentTransaction.date}</p>
                      </td>
                      <td class="action-options payment-actions">
                        <iconify-icon
                          class="action-icon"
                          icon="carbon:overflow-menu-vertical"
                        ></iconify-icon>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="chart transaction-history-overview">
            <header>
              <h6>User Chartboard</h6>
              <Link to="/payments">View all</Link>
            </header>
          </div>
        </div>
      </main>
    </section>
  );
};

export default AdminOverview;
