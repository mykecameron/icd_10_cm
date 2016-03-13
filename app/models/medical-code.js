import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  post_coord_map_flag: DS.attr('string')
});
