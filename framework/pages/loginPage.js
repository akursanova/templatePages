const LoginPage = function () {
  const loginButton = '#login-button';
  const passwordField = '#login-form > div:nth-child(3) > input[type=password]';
  const usernameField = '#login-form > div:nth-child(2) > input[type=text]';
  const otpButton = '#login-otp-button';

  this.login = async function (page) {
    await page.fill(usernameField, 'demo');
    await page.click(passwordField);
    await page.fill(passwordField, 'demo');
    await page.click(loginButton);
    await page.click(otpButton);
  };

  this.isUsername = async function (page) {
    return await page.isVisible(usernameField);
  }
}
export {LoginPage};