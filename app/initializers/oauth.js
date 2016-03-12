import config from 'icd-10-cm/config/environment';

export function initialize() {
  if (config.environment !== 'test') {
    OAuth.initialize(config.APP.OAUTHD_KEY);
    OAuth.setOAuthdURL(config.APP.OAUTHD_URL);
  }
}

export default {
  name: 'oauth',
  initialize: initialize
};

