import config from 'icd-10-cm/config/environment';
import AuthenticatedRouteMixin from 'ember-icis-auth/mixins/authenticated-route-mixin';
import Ember from 'ember';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  snowflake_provider: config.APP.SNOWFLAKE_PROVIDER,
  snowflake_url: config.APP.SNOWFLAKE_URI,

  queryParams: {
    searchTerms: {
      refreshModel: true
    }
  },

  model(params) {
    return this.store.query('medical-code', { query: params.searchTerms });
  },

  setupController(controller, models) {
    controller.set('medicalCodes', models);
  }
});
