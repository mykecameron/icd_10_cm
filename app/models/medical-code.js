import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  icd10_description: DS.attr('string'),
  post_coord_lex_flag: DS.attr('string'),
  icd10_code: DS.attr('string'),

  needsPostCoord: function() {
    return this.get('post_coord_lex_flag') !== '0';
  }.property('post_coord_lex_flag')
});
