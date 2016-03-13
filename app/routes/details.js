import Ember from 'ember';
import config from 'icd-10-cm/config/environment';
import AuthenticatedRouteMixin from 'ember-icis-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  snowflake_provider: config.APP.SNOWFLAKE_PROVIDER,
  snowflake_url: config.APP.SNOWFLAKE_URI,

  model(params) {
    return this.store.findRecord('medical-code-details', params.medical_code_id, { reload: true });
  },

  setupController(controller, model) {
    controller.set('modifiercombination', model.get('MODIFIERCOMBINATION.RECORD'));
    controller.set('modifiertype', model.get('MODIFIERTYPE.RECORD'));
  }
});
