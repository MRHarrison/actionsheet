import { IntelligentInvestorPage } from './app.po';

describe('intelligent-investor App', () => {
  let page: IntelligentInvestorPage;

  beforeEach(() => {
    page = new IntelligentInvestorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
