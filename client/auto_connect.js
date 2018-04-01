Meteor.startup(function () {
    const config = Meteor.settings && Meteor.settings.public && Meteor.settings.public.loginState;

    if (config) {
        let getCustomData = null;

        if (LoginState.getCustomData) {
            getCustomData = LoginState.getCustomData;
        }

        LoginState.init(
            config.domain,
            config.cookieName,
            config.maxage,
            getCustomData,
        );
    }
});
