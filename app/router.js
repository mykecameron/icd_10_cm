import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('target-auth', { path: '/*target/auth' });
  this.route('auth');
  this.route('details', { path: '/details/:medical_code_id' });
});

export default Router;
