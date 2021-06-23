import {LoginPage} from './loginPage';
import {MainPage} from './mainPage';
import {MessagesPage} from './messagesPage';

const app = () => ({
  LoginPage: () => new LoginPage(),
  MainPage: () => new MainPage(),
  MessagesPage: () => new MessagesPage(),
})

export { app };