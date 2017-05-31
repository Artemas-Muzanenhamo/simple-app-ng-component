import { MyShopAppPage } from './app.po';

describe('my-shop-app App', function() {
  let page: MyShopAppPage;

  beforeEach(() => {
    page = new MyShopAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
