import { Meteor } from 'meteor/meteor';
import LoginState from './login_state';

Meteor.startup(function() {
  const config =
    Meteor.settings && Meteor.settings.public && Meteor.settings.public.loginState
      ? Meteor.settings.public.loginState
      : {
          domain: '.mrwinston.nl',
        };

  LoginState.init(config);

  if (!Meteor.userId()) {
    const loginState = LoginState.get();

    if (loginState && loginState.loginToken && loginState.userId && loginState.loginTokenExpires) {
      window.localStorage['Meteor.loginToken'] = loginState.loginToken;
      window.localStorage['Meteor.userId'] = loginState.userId;
      window.localStorage['Meteor.loginTokenExpires'] = loginState.loginTokenExpires;
    }
  }
});
