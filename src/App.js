import { Routes, Route } from 'react-router-dom';
import React from 'react';
import AdminOverview from './pages/Admin Overview/AdminOverview';
import ListedApartment from './pages/Listed Properties/ListedProperties';
import Transactions from './pages/Transactions/Transactions';
import SettingsContainer from './pages/Settings.js/SettingsContainer';
import EditTransactions from './pages/Transactions/EditTransaction';
import EnterPassword from './pages/Sign Up/EnterPassword';
import SignInContainer from './pages/Sign In/SignInContainer';
import Users from './pages/Users/Users';


function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminOverview />}></Route>
      <Route path="/listed-properties" element={<ListedApartment />}></Route>

      <Route path="/transactions" element={<Transactions />}></Route>

      <Route path="/settings" element={<SettingsContainer />}></Route>

      <Route path="/edit-transaction" element={<EditTransactions />}></Route>

      <Route path="/admin-sign-up" element={<EnterPassword />}></Route>

      <Route path="/admin-sign-in" element={<SignInContainer />}></Route>

      <Route path="/users" element={<Users />}></Route>

    </Routes>
  );
}

export default App;
