const MessagesPage = function () {
  const messagesHeader = '#contentbar > div.page-header';
  const newMessageButton = '#new-message-btn';
  const topics = '#new-message-form > .form-items > .control-group > .controls > .span6';
  const messageField = '#message-text > div > textarea';
  const sendButton = '#send-button';
  const confirm = 'table #confirm';

  this.getHeader = async function (page) {
    return await page.textContent(messagesHeader);
  };

  this.sendMessage = async function (page) {
    await page.click(newMessageButton);
    await page.selectOption(topics, 'DEPOSIT');
    await page.fill(messageField, 'ewewewew');
    await page.click(sendButton);

    let frames = await page.frames();
    const frame = frames.find(f => f.url() === 'https://idemo.bspb.ru/auth/confirm');
    await frame.waitForSelector(confirm);
    await frame.click(confirm);
  }

  this.isNewMessageVisible = async function (page) {
    return await page.isVisible(newMessageButton);
  }

 }
export {MessagesPage};