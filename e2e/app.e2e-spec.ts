import { RobustFormsPage } from './app.po';

describe('robust-forms App', () => {
  let page: RobustFormsPage;

  beforeEach(() => {
    page = new RobustFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
