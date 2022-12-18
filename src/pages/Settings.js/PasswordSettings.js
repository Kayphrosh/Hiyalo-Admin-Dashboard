import React from 'react'

const PasswordSettings = () => {
  return (
    <main class="settings-form-container">
      <div class="personal-information-settings">
        <header>
          <h6>Update Password</h6>
        </header>

        <form className="employment-status-form">
          <label for="password"> Current Password</label>
          <input
            type="password"
            placeholder="enter your current password"
          />

          <label for="new password">New Password</label>
          <input
            type="password"
            placeholder="enter a new password here"
          />

          <label for="confirm new password">Confirm New Password</label>
          <input
            type="password"
            placeholder="confirm your new password"
          />

          <button>Update Password</button>
        </form>
      </div>
    </main>
  )
}

export default PasswordSettings