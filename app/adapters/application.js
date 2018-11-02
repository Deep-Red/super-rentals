import DS from 'ember-data';
import JSONAPIAdapter from 'ember-data/adapters/json-api'

export default DS.JSONAPIAdapter.extend({
  namespace: 'api'
});
