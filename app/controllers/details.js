import Ember from 'ember';
import _ from 'underscore';

export default Ember.Controller.extend({
  enabledModifiercombinations: function() {
    var combinations = this.get('modifiercombination');
    var enabledModifierCombinationCodes = this.get('enabledModifierCombinationCodes');
    if (enabledModifierCombinationCodes.length === 0) {
      return combinations;
    }

    return combinations.filter((item) => {
      return enabledModifierCombinationCodes.contains(item.CODE);
    });
  }.property('modifiercombination', 'enabledModifierCombinationCodes.@each'),

  selectedModifiers: {},
  enabledModifierCombinationCodes: [],


  actions: {
    modifierSelected(modifierType, modifierCombinations) {
      var selectedModifiers = this.get('selectedModifiers');
      selectedModifiers[modifierType] = modifierCombinations;

      var modifierIntersection = _.intersection(..._.values(selectedModifiers));
      this.set('enabledModifierCombinationCodes', modifierIntersection);
    }
  }
});
