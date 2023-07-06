import { selectByTestId } from '../../helpers/selectByTestId';

describe('Роутинг', () => {
  describe('Пользователь НЕ авторизован', () => {
    it('Переход на главную страницу', () => {
      cy.visit('/');
      cy.get(selectByTestId('MainPage')).should('exist');
    });
    it('Редирект неавторизованного пользователя на главную', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('MainPage')).should('exist');
    });
    it('Страница не найдена', () => {
      cy.visit('abcdefg');
      cy.get(selectByTestId('NotFoundPage')).should('exist');
    });
  });
  describe('Пользователь авторизован', () => {
    beforeEach(() => {
      cy.login();
    });
    it('Переход на страницу профиля', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('ProfilePage')).should('exist');
    });

    it('Переход на страницу со списком статей', () => {
      cy.visit('/articles');
      cy.get(selectByTestId('ArticlesPage')).should('exist');
    });
  });
});
