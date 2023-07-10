import { getByTestId } from './common';

export const setRate = (starsCount: number = 5, feedback: string = 'feedback') => {
  getByTestId(`StarRating.${starsCount}`).click();
  getByTestId('RatingCard.Input').type(feedback);
  getByTestId('RatingCard.Send').click();
};

declare global {
  namespace Cypress {
    interface Chainable {
      setRate(starsCount: number, feedback: string): Chainable<void>;
    }
  }
}
