import { browser, by, element } from 'protractor';

export class AppPage {

  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('header span')).getText() as Promise<string>;
  }

  clickOnCreateQuizz(): Promise<void> {
    const button = element(by.css('button'));
    return button.click() as Promise<void>;
  }
}
