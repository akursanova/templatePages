const MainPage = function () {
  const userGreetingField = '#user-greeting';
  const messagesButton = '#messages-button > span';
  const logoutButton = '#logout-button';
  const contactsButton = '#contact-button';
  const modalContacts = '#contacts';

  this.getGreetingText = async function (page) {
    return await page.textContent(userGreetingField);
  };
  this.gotoMessages = async function (page) {
    return await page.click(messagesButton);
  }
  this.gotoContacts = async function (page) {
    return await page.click(contactsButton);
  }
  this.isContacts = async function (page) {
    return await page.isVisible(modalContacts);
  }
  this.logout = async function (page) {
    return await page.click(logoutButton);
  }
}
export {MainPage};
