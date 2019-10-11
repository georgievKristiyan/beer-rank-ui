let serviceHost = process.env.SERVICE_HOST || 'http://localhost';

function getConfigs() {
  console.log('serviceHost: ' + serviceHost);

  let serviceConfigs = {
    '/users/**': {
      'target': serviceHost,
      'secure': false
    },
    '/beers': {
      'target': serviceHost,
      'secure': false
    },
    '/reviews': {
      'target': serviceHost,
      'secure': false
    }
  };

  // merge configurations
  return Object.assign(serviceConfigs);
}

module.exports = getConfigs();
