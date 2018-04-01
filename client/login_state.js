import { Cookies } from 'cookie-js';

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}

LoginState = {
    init: function (domain, cookieName, maxage, customDataFn) {
        if (typeof domain == "undefined") {
            throw new Error("domain is required for login-state");
        }

        cookieName = cookieName || "meteor-login-state";
        maxage = maxage || 365;

        Tracker.autorun(function () {
            const user = Meteor.user && Meteor.user();

            if (user) {
                const data = {
                    timestamp: Date.now(),
                    username: user.username,
                    userId: user._id,
                    email: user.emails && user.emails[0] && user.emails[0].address,
                    url: window.location.origin,
                    loginToken: window.localStorage["Meteor.loginToken"],
                    loginTokenExpires: window.localStorage["Meteor.loginTokenExpires"]
                };

                if (customDataFn) {
                    data.custom = Tracker.nonreactive(function () {
                        return customDataFn();
                    });
                }

                Cookies.set(cookieName, JSON.stringify(data), {
                    path: "/",
                    expires: maxage,
                    domain: domain
                });
            } else {
                Cookies.set(cookieName, "", {
                    path: "/",
                    expires: -1,
                    domain: domain
                });
            }
        });
    },

    get: function (cookieName) {
        var loginState = getCookie(cookieName);
        if (loginState) {
            return JSON.parse(decodeURIComponent(loginState));
        } else {
            return false;
        }
    }
}

export default LoginState;