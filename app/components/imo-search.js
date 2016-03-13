import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  medicalCodes: function() {
    var store = this.get('store');
    var query = this.get('query');

    if (query) {
      return store.query('medical-code', { query: query });
    }
  }.property('query')
});
