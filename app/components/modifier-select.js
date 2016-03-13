import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['modifier-select'],

  title: function() {
    return this.get('modifiertype.TITLE');
  }.property('modifiertype'),

  type: function() {
    return this.get('modifiertype.TYPE');
  }.property('modifiertype'),

  modifiers: function() {
    return this.get('modifiertype.MODIFIERS.MODIFIER');
  }.property('modifiertype'),

  selectedModifier: function() {
    var modifierCode = this.get('selectedModifierCode');
    return this.get('modifiers').findBy('MODIFIER_CODE', modifierCode);
  }.property('selectedModifierCode', 'modifiers'),

  validModifierCombinations: function() {
    var modifierCominations = this.get('selectedModifier.MODIFIERCOMBINATIONS');
    if (modifierCominations) {
      return this.get('selectedModifier.MODIFIERCOMBINATIONS').split(',');
    }
  }.property('selectedModifier'),

  actions: {
    modifierSelected(modifierCode) {
      this.set('selectedModifierCode', modifierCode);
      this.sendAction('modifierSelected',
                      this.get('type'),
                      this.get('validModifierCombinations'));
    }
  }
});
