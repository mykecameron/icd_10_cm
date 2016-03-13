import DS from 'ember-data';
import Ember from 'ember';

Ember.Inflector.inflector.
  singular(/medical-code-details/, 'medical-code-details');


export default DS.Model.extend({
  MODIFIERCOMBINATION: DS.attr(),
  MODIFIERTYPE: DS.attr()
});
