import React from 'react';
import { AppRouter } from 'app/providers/router';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

const App = () => (
  <div className={classNames('app', {}, [])}>
    <Navbar />
    <div className="content-page">
      <Sidebar />
      <AppRouter />
    </div>
  </div>
);

export default App;
