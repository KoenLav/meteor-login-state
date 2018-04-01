import { Meteor } from 'meteor/meteor';
import LoginState from './login_state';

Meteor.startup(function () {
  const config = Meteor.settings && Meteor.settings.public && Meteor.settings.public.loginState;

  if (config) {
    const { getCustomData = null } = LoginState;

    LoginState.init(
      config.domain,
      config.cookieName,
      config.maxage,
      getCustomData,
    );
  }
});
