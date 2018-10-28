const schema = {
  response: {
    200: {
      type: 'object',
      properties: {
        hello: { type: 'string' },
      },
    },
  },
};

async function routes(fastify, options) {
  fastify.get('/hello/:name', { schema }, async (request, reply) => {
    const name = request.params.name || 'world';
    return { hello: name };
  });
}

module.exports = routes;
