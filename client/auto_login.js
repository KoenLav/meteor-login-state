if (!Meteor.userId() && LoginState) {
    var loginState = LoginState.get("domain-login-state");
    if (loginState && loginState.loginToken && loginState.userId && loginState.loginTokenExpires) {
        window.localStorage["Meteor.loginToken"]=loginState.loginToken;
        window.localStorage["Meteor.userId"]=loginState.userId;
        window.localStorage["Meteor.loginTokenExpires"]=loginState.loginTokenExpires;
    }
}
