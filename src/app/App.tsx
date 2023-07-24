import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppRouter } from '@/app/providers/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { getIsUserInit, initAuthData } from '@/entities/User';
import { useTheme } from '@/app/providers/ThemeProvider';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PageLoader } from '@/widgets/PageLoader';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const isUserInit = useSelector(getIsUserInit);

  useEffect(() => {
    dispatch(initAuthData());
  }, [dispatch]);

  if (!isUserInit) {
    return <PageLoader />;
  }

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        {isUserInit && <AppRouter />}
      </div>
    </div>
  );
};

export default App;
