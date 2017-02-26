# Login State

Share Login State between the Sub Domains for Meteor Apps (Support for static apps too)

## Getting Started

Using `kadira:login-state` you can share the login information between apps hosted in different sub-domains. All apps are not necessory to be meteor apps. One app must be a meteor app and its login state can be share easialy across multiple sub-domains using this package.

### On Meteor App

#### Install

clone this repository  to packages folder
meteor add kadira:login-state

#### Configuration

Update `settings.json` as follows. You need to provide appropriate values for `domain` and `cookineName` fields.

> Note: You must have update the `domain` field in `settings.json`, with the domain name which you need to share login state.
> Eg: When your domain name and landing page is `mysite.com` and `app.mysite.com` is your app subdomain and, also `supports.mysite.com` is the support forum, then you need to update `domain` field as `.mysite.com`.

```json
{
  "public": {
    "loginState": {
      "domain": ".your-domain-name.com",
      "cookieName": "app-login-state-cookie-name"
    }
  }
}
```
