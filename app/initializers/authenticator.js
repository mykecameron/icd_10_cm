import config from 'icd-10-cm/config/environment';

export function initialize(application) {
  var service;
  if (config.environment === 'test') {
    // use provided test double in test environment
    service = 'service:test-authenticator';
  } else {
    service = 'service:authenticator';
  }

  // injects dependency into all routes
  application.inject('route', 'authenticator', service);

}

export default {
  name: 'authenticator',
  initialize: initialize
};

