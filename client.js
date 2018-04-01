import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';
import LoginState from './client/login_state';
import './client/auto_connect';
import './client/auto_login';

checkNpmVersions({
  'js-cookie': '^2.2.0',
}, 'koenlav:login-state');

export default LoginState;