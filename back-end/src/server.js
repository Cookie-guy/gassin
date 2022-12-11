const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 3000,
    url: 'mysql://root:SI5K8CdhDmeeHM9APVkT@containers-us-west-37.railway.app:7227/railway',
    host: "0.0.0.0",
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
