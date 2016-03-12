import CurrentUser from 'ember-icis-auth/adapters/current-user';
import config from 'icd-10-cm/config/environment';

export default CurrentUser.reopen({
  host: config.APP.SNOWFLAKE_URI
});
