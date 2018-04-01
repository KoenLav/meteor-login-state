import { Meteor } from 'meteor/meteor';
import LoginState from './login_state';

if (!Meteor.userId()) {
  const loginState = LoginState.get();

  if (loginState && loginState.loginToken && loginState.userId && loginState.loginTokenExpires) {
    window.localStorage['Meteor.loginToken'] = loginState.loginToken;
    window.localStorage['Meteor.userId'] = loginState.userId;
    window.localStorage['Meteor.loginTokenExpires'] = loginState.loginTokenExpires;
  }
}
