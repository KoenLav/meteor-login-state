import Cookies from 'js-cookie';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

const defaultCookieName = 'meteor-login-state';

export default {
  init({ domain = document.location.hostname, cookieName = defaultCookieName, maxAge = 365 }) {
    Tracker.autorun(function () {
      const user = Meteor.user && Meteor.user();

      if (user) {
        const data = {
          timestamp: Date.now(),
          username: user.username,
          userId: user._id,
          email: user.emails && user.emails[0] && user.emails[0].address,
          url: window.location.origin,
          loginToken: window.localStorage['Meteor.loginToken'],
          loginTokenExpires: window.localStorage['Meteor.loginTokenExpires'],
        };

        Cookies.set(cookieName, data, {
          path: '/',
          expires: maxAge,
          domain: domain,
        });
      } 
      else {
        Cookies.remove(cookieName, {
          path: '/',
          domain: domain,
        });
      }
    });
  },

  get(cookieName = defaultCookieName) {
    const loginState = Cookies.getJSON(cookieName);

    return loginState || false;
  },
};