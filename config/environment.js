/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'icd-10-cm',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV.APP.SNOWFLAKE_URI      = process.env.SNOWFLAKE_URI || 'http://snowflake.dev';
    ENV.APP.SNOWFLAKE_PROVIDER = process.env.SNOWFLAKE_PROVIDER || 'snowflake';
    ENV.APP.STAFF_URL          = process.env.STAFF_URL || 'http://icisstaff.dev';
    ENV.APP.OAUTHD_KEY         = process.env.OAUTHD_KEY;
    ENV.APP.OAUTHD_URL         = process.env.OAUTHD_URL || 'http://localhost:6284';

    // Do not mock http requests in development mode
    ENV['ember-cli-mirage'] = { enabled: false };
  }

  if (environment === 'staging') {
    ENV.APP.SNOWFLAKE_URI = 'https://snowflake-staging.icisapp.com';
    ENV.APP.SNOWFLAKE_PROVIDER = 'snowflake-staging';
    ENV.APP.STAFF_URL = 'https://staging.icisapp.com';
    ENV.APP.OAUTHD_KEY = '3CidUDFuAk4GsBsWKmbDcRJz-20';
    ENV.APP.OAUTHD_URL = 'https://oauthd-staging.icisapp.com';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';

    ENV.APP.SNOWFLAKE_URI = '';
  }

  if (environment === 'training') {
    ENV.APP.SNOWFLAKE_URI = 'https://snowflake-training.icisapp.com';
    ENV.APP.SNOWFLAKE_PROVIDER = 'snowflake-training';
    ENV.APP.STAFF_URL = 'https://training.icisapp.com';
    ENV.APP.OAUTHD_KEY = 'mi643mIpeFhu0BInb0vQD7Sswaw';
    ENV.APP.OAUTHD_URL = 'https://oauthd-training.icisapp.com';
  }

  if (environment === 'preproduction') {
    ENV.APP.SNOWFLAKE_URI = 'https://snowflake-preproduction.icisapp.com';
    ENV.APP.SNOWFLAKE_PROVIDER = 'snowflake-preproduction';
    ENV.APP.STAFF_URL = 'https://preproduction.icisapp.com';
    ENV.APP.OAUTHD_KEY = 'ZKNQeuubmhb866k0ysXNrzPRZng' ;
    ENV.APP.OAUTHD_URL = 'https://oauthd-preproduction.icisapp.com';
  }

  if (environment === 'production') {
    ENV.APP.SNOWFLAKE_URI = 'https://snowflake.icisapp.com';
    ENV.APP.SNOWFLAKE_PROVIDER = 'snowflake-production';
    ENV.APP.STAFF_URL = 'https://production.icisapp.com';
    ENV.APP.OAUTHD_KEY = 'a29hk91NAyUOVBYwO4j__XCr5wI';
    ENV.APP.OAUTHD_URL = 'https://oauthd.icisapp.com';
  }

  return ENV;
};
