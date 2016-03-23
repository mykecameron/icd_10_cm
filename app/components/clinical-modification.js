import Ember from 'ember';
import _ from 'underscore';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  medicalCodeDetails: function() {
    return this.get('store').findRecord('medical-code-details', this.get('medicalCode.id'), { reload: true });
  }.property('medicalCode'),

  modifiercombination: function() {
    return this.get('medicalCodeDetails.MODIFIERCOMBINATION.RECORD');
  }.property('medicalCodeDetails.MODIFIERCOMBINATION.RECORD'),

  modifiertype: function() {
    return this.get('medicalCodeDetails.MODIFIERTYPE.RECORD');
  }.property('medicalCodeDetails.MODIFIERTYPE.RECORD'),

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

  onlyOneEnabledModifiercombination: function() {
    return this.get('enabledModifiercombinations.length') === 1;
  }.property('enabledModifiercombinations'),

  slideSpiny: function() {
    var animate = () => {
        this.$('.spiny').animate({left: '-=325'}, 5000, () => {
          this.$('.spiny img').addClass('flip');
          this.$('.spiny').animate({left: '+=325'}, 5000, () => {
            this.$('.spiny img').removeClass('flip');
            animate();
          });
        });
    };

    if(this.get('onlyOneEnabledModifiercombination')){
      setTimeout(() => {
        animate();
      }, 200);
    }
  }.observes('onlyOneEnabledModifiercombination'),

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
