import Cookies from 'js-cookie';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

const defaultCookieName = 'meteor-login-state';

export default {
  get({ cookieName = defaultCookieName }) {
    const loginState = Cookies.getJSON(cookieName);

    return loginState || {};
  },

  track({ domain = document.location.hostname, cookieName = defaultCookieName, maxAge = 365 }) {
    Tracker.autorun(function() {
      const user = Meteor.user && Meteor.user();

      if (user) {
        const data = {
          userId: user._id,
          loginToken: window.localStorage['Meteor.loginToken'],
          loginTokenExpires: window.localStorage['Meteor.loginTokenExpires'],
        };

        Cookies.set(cookieName, data, {
          path: '/',
          expires: maxAge,
          domain,
        });
      } else {
        Cookies.remove(cookieName, {
          path: '/',
          domain,
        });
      }
    });
  },
};
