{
  "name": "{{=it.projectName}}",
  "version": "1.0.0",
  "private": true,
  "main": "src/server.js",
  "scripts": {
    "test": "ava src/**/*.test.js",
    "test:coverage": "nyc ava src/**/*.test.js",
    "dev": "nodemon src/server",
    "start": "node src/server"
  },
  "dependencies": {
    "fastify": "^1.12.1",
    "fastify-blipp": "^1.2.1",
    "fastify-compress": "^0.7.0",
    "fastify-helmet": "^2.1.0",
    "fastify-response-time": "^1.0.4",
    "iltorb": "^2.4.0",
    "make-promises-safe": "^2.0.0",
    "under-pressure": "^0.2.0"
  },
  "devDependencies": {
    "ava": "1.0.0-rc.1",
    "nodemon": "^1.18.5",
    "nyc": "^13.1.0"
  }
}
