import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { StoreProvider } from '@/app/providers/StoreProvider';
import App from './app/App';
import '@/shared/config/i18n/i18n';
import '@/app/styles/index.scss';
import { ForceUpdateProvider } from '@/shared/lib/render/forceUpdate';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Контейнер root на найден. Не удалось вмонтировать React приложение');
}

const root = createRoot(container);

root.render(
  <BrowserRouter>
    <StoreProvider>
      <Suspense fallback="">
        <ErrorBoundary>
          <ForceUpdateProvider>
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </ForceUpdateProvider>
        </ErrorBoundary>
      </Suspense>
    </StoreProvider>
  </BrowserRouter>,
);
