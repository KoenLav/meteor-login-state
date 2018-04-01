import { Meteor } from 'meteor/meteor';
import LoginState from './login_state';

Meteor.startup(function () {
  const config = Meteor.settings && Meteor.settings.public && Meteor.settings.public.loginState ? Meteor.settings.public.loginState : {
    domain: '.mrwinston.nl',
  };

  LoginState.init(config);
});
