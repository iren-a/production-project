import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppRouter } from '@/app/providers/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { userActions, getIsUserInit } from '@/entities/User';
import { useTheme } from '@/app/providers/ThemeProvider';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const isUserInit = useSelector(getIsUserInit);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        { isUserInit && <AppRouter /> }
      </div>
    </div>
  );
};

export default App;
