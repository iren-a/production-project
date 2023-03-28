import { Story, StoryContext } from '@storybook/react';
import {
  Routes,
  Route,
  MemoryRouter,
  BrowserRouter,
} from 'react-router-dom';
import { Suspense } from 'react';

export const RouterDecorator = (
  StoryComponent: Story,
  { parameters: { routerParams } }: StoryContext,
) => {
  if (!routerParams) {
    return (
      <Suspense fallback="">
        <BrowserRouter>
          <StoryComponent />
        </BrowserRouter>
      </Suspense>
    );
  }

  return (
    <Suspense fallback="">
      <MemoryRouter initialEntries={[routerParams.route]}>
        <Routes>
          <Route path={routerParams.path} element={<StoryComponent />} />
        </Routes>
      </MemoryRouter>
    </Suspense>
  );
};
