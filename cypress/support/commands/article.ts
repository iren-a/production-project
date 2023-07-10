import { Article } from '../../../src/entities/Article';

const defaultArticle = {
  title: 'Javascript news',
  subtitle: 'Что нового в JS в 2023 году?',
  img: 'https://www.androidfreeware.net/software_images/jsnews-javascript-news.thumb.png',
  view: 1022,
  createdAt: '10.03.2023',
  userId: '1',
  type: ['IT'],
  blocks: [],
};

export const createArticle = (article?: Article) => (
  cy.request({
    method: 'POST',
    url: 'http://localhost:8000/articles',
    headers: { Authorization: 'test' },
    body: article ?? defaultArticle,
  }).then(({ body }) => body)
);

export const removeArticle = (articleId: string) => {
  cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/articles/${articleId}`,
    headers: { Authorization: 'test' },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>;
      removeArticle(articleId: string): Chainable<void>;
    }
  }
}
