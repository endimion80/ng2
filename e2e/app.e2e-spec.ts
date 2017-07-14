import { IntcomercialPage } from './app.po';

describe('intcomercial App', function() {
  let page: IntcomercialPage;

  beforeEach(() => {
    page = new IntcomercialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
