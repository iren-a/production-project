import { Story, StoryContext } from '@storybook/react';
import {
  Routes,
  Route,
  MemoryRouter,
  BrowserRouter,
} from 'react-router-dom';

export const RouterDecorator = (
  StoryComponent: Story,
  { parameters: { routerParams } }: StoryContext,
) => {
  if (!routerParams) {
    return (
      <BrowserRouter>
        <StoryComponent />
      </BrowserRouter>
    );
  }

  return (
    <MemoryRouter initialEntries={[routerParams.route]}>
      <Routes>
        <Route path={routerParams.path} element={<StoryComponent />} />
      </Routes>
    </MemoryRouter>
  );
};
