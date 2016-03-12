import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  primaryKey: 'imo_lexical_code'
});
