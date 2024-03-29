import Ember from 'ember';
import OauthInitializer from 'icd-10-cm/initializers/oauth';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | oauth', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  OauthInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
