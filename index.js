const fastify = require("fastify")({ logger: true });

const PORT = 5000;

fastify.register(require("./routes/dataRoutes"),{prefix:"/data"}),// second parameter prefix
fastify.register(require("./routes/agentsRoutes"));


const start = async () => {
    try {
      await fastify.listen(PORT);
    } catch (e) {
      fastify.log.error(e);
      process.exit(1);
    }
  };
  
  start();