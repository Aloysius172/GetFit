import React from 'react';

const Greeting = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <div className="greeting">
      <div id="greeting">
        <h1 className="tumbler">GetFit</h1>
        <nav className="greeting-logged-out">

          <button id="greeting-login" onClick={() => openModal('login')}>Login</button>
          <button id="greeting-signup" onClick={() => openModal('signup')}>Signup</button>
        </nav>
      </div>
    </div>
  );

  return sessionLinks();
};

export default Greeting;