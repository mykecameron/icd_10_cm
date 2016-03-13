import Ember from 'ember';

export default Ember.Controller.extend({
  selectedModifiers: [],

  enabledModifiercombinations: function() {
    // this must be wrong?!
    var combinations = this.get('modifiercombination');
    return combinations.filter((combination) => {
      var modifiers = combination.MODIFIERS.split(',');
      var selectedModifiers = this.get('selectedModifiers');

      return modifiers.every((modifier) => {
        return selectedModifiers.contains(modifier);
      });
    });
  }.property('modifiercombination'),

  actions: {
    modifierSelected(modifierCode) {
      this.get('selectedModifiers').pushObject(modifierCode);
    }
  }
});
