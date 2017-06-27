import {Ng2SelectizeDemoPage} from './app.po';

describe('ng2-selectize-demo App', () => {
	let page: Ng2SelectizeDemoPage;

	beforeEach(() => {
		page = new Ng2SelectizeDemoPage();
	});

	it('should display message saying app works', () => {
		page.navigateTo();
		expect(page.getParagraphText()).toEqual('app works!');
	});
});
