import { getByTestId } from './common';

export const addComment = (text: string) => {
  getByTestId('AddCommentForm.Input').type(text);
  getByTestId('AddCommentForm.Button').click();
};

declare global {
  namespace Cypress {
    interface Chainable {
      addComment(text: string): Chainable<void>;
    }
  }
}
