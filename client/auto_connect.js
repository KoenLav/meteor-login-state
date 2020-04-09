import { Meteor } from 'meteor/meteor';
import LoginState from './login_state';

Meteor.startup(function() {
  const config =
    Meteor.settings && Meteor.settings.public && Meteor.settings.public.loginState
      ? Meteor.settings.public.loginState
      : {
          domain: '.mrwinston.nl',
        };

  if (!Meteor.userId()) {
    const { loginToken, loginTokenExpires, userId } = LoginState.get(config);

    if (loginToken && userId && loginTokenExpires) {
      window.localStorage['Meteor.loginToken'] = loginToken;
      window.localStorage['Meteor.userId'] = userId;
      window.localStorage['Meteor.loginTokenExpires'] = loginTokenExpires;

      Meteor.connection._userId = userId;
    }
  }

  LoginState.track(config);
});
