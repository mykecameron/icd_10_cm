export function initialize(application) {
  application.inject('adapter', 'accessTokenWrapper', 'service:access-token');
}

export default {
  name: 'access-token-service',
  initialize: initialize
};
