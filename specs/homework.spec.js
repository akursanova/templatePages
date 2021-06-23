import chai from 'chai';
import {goto, run, stop} from '../framework/lib/browser';
import {app} from '../framework/pages/index';

const {expect} = chai;
describe('demo suite', () => {
  let page;
  beforeEach(async () => {
    await run();
    page = await goto('https://idemo.bspb.ru/auth?response_type=code&client_id=1&redirect_uri=https%3A%2F%2Fidemo.bspb.ru%2Flogin%2Fsuccess&prefetch_uri=https%3A%2F%2Fidemo.bspb.ru%2Flogin%2Fprefetch&force_new_session=true');
  })
  afterEach(async () => {
    await stop();
  })
  it('just login', async() => {
    await app().LoginPage().login(page);
    const greetingText = await app().MainPage().getGreetingText(page);
    expect(greetingText).to.have.string('Hello World!');
  })
  it ('go to messages', async() => {
    await app().LoginPage().login(page);
    await app().MainPage().gotoMessages(page);
    const messagesHeader = await app().MessagesPage().getHeader(page);
    expect(messagesHeader).to.have.string('Messages');
  })
  it ('logout', async() => {
    await app().LoginPage().login(page);
    await app().MainPage().logout(page);
    let isUsernameField = await app().LoginPage().isUsername(page);
    expect(isUsernameField).to.be.true;
  })
  it ('check contacts opening', async() => {
    await app().LoginPage().login(page);
    await app().MainPage().gotoContacts(page);
    let contactsModal = await app().MainPage().isContacts(page);
    expect(contactsModal).to.be.true;
  })
  it ('send message', async() => {
    await app().LoginPage().login(page);
    await app().MainPage().gotoMessages(page);
    await app().MessagesPage().sendMessage(page);
    let isNewMessage = await app().MessagesPage().isNewMessageVisible(page);
    expect(isNewMessage).to.be.true;
  })
})