import Ember from 'ember';
import _ from 'underscore';

export default Ember.Controller.extend({
  enabledModifiercombinations: function() {
    var combinations = this.get('modifiercombination');
    var enabledModifierCombinationCodes = this.get('enabledModifierCombinationCodes');

    var modifiersAreSelected = _.compact(_.values(this.get('selectedModifiers'))).length > 0;
    var enabledModifierCombinationCodesEmpty = enabledModifierCombinationCodes.length === 0;
    if (enabledModifierCombinationCodesEmpty && !modifiersAreSelected) {
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

      var selectedModifierGroups = _.compact(_.values(selectedModifiers));
      var modifierIntersection = _.intersection(...selectedModifierGroups);

      this.set('enabledModifierCombinationCodes', modifierIntersection);
    }
  }
});
