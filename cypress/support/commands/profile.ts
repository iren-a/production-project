import { User } from '../../../src/entities/User';

export const updateProfile = (firstname: string, lastname: string) => {
  cy.getByTestId('EditableProfileCardHeader.EditButton').click();
  cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
  cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
  cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
  cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: 'test' },
    body: {
      id: '4',
      first: 'test',
      lastname: 'user',
      age: 26,
      currency: 'RUB',
      country: 'Russia',
      city: 'Moscow',
      username: 'testuser',
      // eslint-disable-next-line max-len
      avatar:
        'https://e-news.su/uploads/posts/2022-04/1650919998_d091d18bd181d182d180d0bed0b2_d0a5d0b0d0bad0b5d180.jpeg',
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstname: string, lastname: string): Chainable<User>;
      resetProfile(profileId: string): Chainable<void>;
    }
  }
}
