import test from 'ava';
// const test = require('ava');
const fastify = require('fastify')();
fastify.register(require('./'));

test('hello endpoint uses the url param correctly', async t => {
  try {
    const res = await fastify.inject({ method: 'GET', url: '/hello/david' });
    t.is(res.statusCode, 200);
    t.deepEqual(JSON.parse(res.body), { hello: 'david' });
  } catch (err) {
    t.fail(err);
  }
});

test('hello endpoint works without url param', async t => {
  try {
    const res = await fastify.inject({ method: 'GET', url: '/hello/' });
    t.is(res.statusCode, 200);
    t.deepEqual(JSON.parse(res.body), { hello: 'world' });
  } catch (err) {
    t.fail(err);
  }
});
