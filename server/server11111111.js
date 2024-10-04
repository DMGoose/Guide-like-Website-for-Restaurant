// server.js
const fastify = require('fastify')({ logger: true });
const axios = require('axios');

// Google Places API Key
const API_KEY = process.env.GOOGLE_PLACES_API_KEY;


// Fastify route to fetch restaurants
fastify.get('/getAllRestaurants', async (request, reply) => {
  try {
    const { location, radius, type } = request.query;

    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${radius}&type=${type}&key=${API_KEY}`;

    const response = await axios.get(url);
    const restaurants = response.data.results;

    console.log("response:",response);
    console.log("restaurants:",restaurants);
    
    reply.send(restaurants);
  } catch (error) {
    fastify.log.error(error);
    reply.status(500).send({ error: 'Failed to fetch restaurants' });
  }
});

// Start server
const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.log.info(`Server running at http://localhost:3000`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
