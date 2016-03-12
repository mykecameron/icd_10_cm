import config from 'icd-10-cm/config/environment';
import ApplicationAdapter from './application';
import TokenAuthAdapter from "ember-icis-model/mixins/token-auth-adapter";

export default ApplicationAdapter.extend(TokenAuthAdapter, {
  host: config.APP.STAFF_URL,
  namespace: 'api/medical_codes/v1'
});
