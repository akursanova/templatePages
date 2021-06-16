import chai from 'chai';
import {goto, run, stop} from '../lib/browser';

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
  it('demo test', async() => {
    await page.fill('#login-form > div:nth-child(2) > input[type=text]', 'demo');
    await page.click('#login-form > div:nth-child(3) > input[type=password]');
    await page.fill('#login-form > div:nth-child(3) > input[type=password]', 'demo');
    await page.click('#login-button');
    await page.click('#login-otp-button');

    const message = ('#user-greeting');
    const messageText = await page.textContent(message);
    expect(messageText).to.have.string('Hello World!');
  })
})