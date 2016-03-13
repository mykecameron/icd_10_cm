import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  searchMedicalCodes: function() {
    var store = this.get('store');
    var query = this.get('query');

    if (query) {
      this.set('medicalCodes', store.query('medical-code', { query: query }));
    }
  }.observes('query'),

  actions: {
    codeSelected(medicalCode) {
      this.set('medicalCodes', []);
      this.sendAction('codeSelected', medicalCode);
    }
  }
});
