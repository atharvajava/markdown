import { MarkDownPage } from './app.po';

describe('mark-down App', () => {
  let page: MarkDownPage;

  beforeEach(() => {
    page = new MarkDownPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
