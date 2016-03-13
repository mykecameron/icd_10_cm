import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    codeSelected(medicalCode) {
      console.log(medicalCode);
      this.set('selectedCode', medicalCode);
    }
  }
});
