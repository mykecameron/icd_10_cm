import Auth from 'ember-icis-auth/routes/auth';
import config from 'icd-10-cm/config/environment';

export default Auth.reopen({
  snowflake_provider: config.APP.SNOWFLAKE_PROVIDER
});
