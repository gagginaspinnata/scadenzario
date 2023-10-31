// ESM
import Fastify from "fastify";
import {get_incomes, insert_income}  from "./models/incomes.js";
import { get_outcomes, insert_outcome } from "./models/outcomes.js";

const port = 3000;
const host = "0.0.0.0";

const fastify = Fastify({
  logger: true,
});

// Declare a route
fastify.get("/", function (request, reply) {
  reply.send({ hello: "world2" });
});


fastify.get('/incomes', async function(request, reply){
  reply.send(await get_incomes())
})

fastify.get('/outcomes', async function(request, reply){
  reply.send(await get_outcomes())
})

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


// console.log(await DB.get_incomes())
// await DB.insert_income(income)