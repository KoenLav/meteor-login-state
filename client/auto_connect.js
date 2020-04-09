import { Meteor } from 'meteor/meteor';
import LoginState from './login_state';

Meteor.startup(function() {
  const config = {
    domain: document.location.hostname === 'localhost' ? 'localhost' : '.mrwinston.nl',
    ...((Meteor.settings && Meteor.settings.public) || {}),
  };

  if (!Meteor.userId()) {
    const { loginToken, loginTokenExpires, userId } = LoginState.get(config);

    if (loginToken && userId && loginTokenExpires && new Date(loginTokenExpires) > new Date()) {
      window.localStorage.setItem('Meteor.loginToken', loginToken);
      window.localStorage.setItem('Meteor.userId', userId);
      window.localStorage.setItem('Meteor.loginTokenExpires', loginTokenExpires);

      Meteor.connection._userId = userId;
    }
  }

  LoginState.track(config);
});
