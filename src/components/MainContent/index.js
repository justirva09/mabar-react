
import React from 'react';
import Header from '../Header';

const MainContent = ({children}) => (
  <main>
    <Header title="C-Studio" />
    <div className="wrapper">
      <div className="main-content">
        {children}
      </div>
      <div className="main-sidebar">
        <h1>Sidebar</h1>
      </div>
    </div>
  </main>
);

export default MainContent;
