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
import { ToggleFeatures } from '@/shared/lib/features';
import { MainLayout } from '@/shared/layouts/MainLayout';

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
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <div id="app" className={classNames('app-redesigned', {}, [theme])}>
          <MainLayout
            header={<Navbar />}
            content={<AppRouter />}
            sidebar={<Sidebar />}
            toolbar={<div>123</div>}
          />
        </div>
      }
      off={
        <div id="app" className={classNames('app', {}, [theme])}>
          <Navbar />
          <div className="content-page">
            <Sidebar />
            <AppRouter />
          </div>
        </div>
      }
    />
  );
};

export default App;
