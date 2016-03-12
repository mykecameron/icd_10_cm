import authenticator from 'ember-icis-auth/services/test-authenticator';
import config from 'icd-10-cm/config/environment';

export default authenticator.extend({
  snowflake_provider: config.APP.SNOWFLAKE_PROVIDER
});

