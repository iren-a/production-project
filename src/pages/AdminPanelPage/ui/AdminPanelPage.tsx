import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const AdminPanelPage = memo(() => {
  const { t } = useTranslation('adminPanel');

  return (
    <Page data-testid="AdminPanelPage">
      {t('Панель администратора', { ns: 'adminPanel' })}
    </Page>
  );
});

export default AdminPanelPage;
