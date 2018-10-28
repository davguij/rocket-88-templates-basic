// Install an 'unhandledRejection' handler
require('make-promises-safe');

// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: process.env.NODE_ENV !== 'production',
  ignoreTrailingSlash: true,
});

// Use recommended security measures
fastify.register(require('fastify-helmet'));

// Enable response compression, depending on the 'accept-encoding' header
fastify.register(require('fastify-compress'), { brotli: require('iltorb') });

// Show defined routes on the console
fastify.register(require('fastify-blipp'));

// Add X-Response-Time header at each request for Fastify. The unit used is milliseconds.
fastify.register(require('fastify-response-time'));

// Measure process load with automatic handling of "Service Unavailable"
// Also expose a /status route that sends back a { status: 'ok' } object.
fastify.register(require('under-pressure'), { exposeStatusRoute: true });

/****************************/
/* Declare your routes here */

fastify.register(require('./hello'));

/****************************/
/* End of routes declaration */

const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 3000, '::');
    fastify.blipp(); // print routes to the console
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
