
import React from 'react';
import { Header } from '../../../components';

const MainContent = ({children}) => (
  <main>
    <Header title="C-Studio" />
    <div className="wrapper">
      <div className="main-content">
        {children}
      </div>
    </div>
  </main>
);

export default MainContent;
