import { HomeEasyPage } from './app.po';

describe('home-easy App', () => {
  let page: HomeEasyPage;

  beforeEach(() => {
    page = new HomeEasyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
