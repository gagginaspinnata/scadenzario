// ESM
import Fastify from "fastify";
import * as DB from "./database.js";

const port = 3000;
const host = "0.0.0.0";

const fastify = Fastify({
  logger: true,
});

// Declare a route
fastify.get("/", function (request, reply) {
  reply.send({ hello: "world2" });
});

// Run the server!
fastify.listen({ port, host }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  // Server is now listening on ${address}
});

let income = {
  date: "2023-10-12",
  description: "prova di inserimento",
  value: 8589,
  payed: 1,
  payment_method: "bonifico",
};

// DB.insert(income)

// DB.update_income(income)

console.log(await DB.get_outcomes());
