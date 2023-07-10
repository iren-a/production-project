let articleId = '';

describe('Пользователь заходит на страницу статьи', () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then((article) => {
      articleId = article.id;
      cy.visit(`articles/${article.id}`);
    });
  });
  afterEach(() => {
    cy.removeArticle(articleId);
  });
  it('и видит содержимое статьи', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist');
  });
  it('и видит список рекоммендаций', () => {
    cy.getByTestId('ArticleRecommendationsList').should('exist');
  });
  it('и оставляет комментарий', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist');
    cy.getByTestId('AddCommentForm').scrollIntoView();
    cy.addComment('text');
    cy.getByTestId('CommentCard.Content').should('have.length', 1);
  });
  it('и ставит оценку', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist');
    cy.getByTestId('RatingCard').scrollIntoView();
    cy.setRate(5, 'feedback');
    cy.get('[data-selected=true]').should('have.length', 5);
  });
  it('и ставит оценку (пример со стабом на фикстурах)', () => {
    cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
    cy.getByTestId('ArticleDetails.Info').should('exist');
    cy.getByTestId('RatingCard').scrollIntoView();
    cy.setRate(5, 'feedback');
    cy.get('[data-selected=true]').should('have.length', 5);
  });
});
