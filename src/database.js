import postgres from "postgres";

const user = "postgres";
const password = "admin";
const host = "db";
const db_name = "scadenzario";

const sql = postgres(`postgres://${user}:${password}@${host}:5432/${db_name}`);

// let income = {
//     "date":"2023-10-12",
//     "description": "prova di inserimento",
//     "value": 45,
//     "payed": 1
//   }
async function insert_income(income) {
  await sql`insert into income (date, description, value, payed) values (${income.date},${income.description}, ${income.value}, ${income.payed})`;
  console.log("Record inserito nel database.");
}

async function get_incomes() {
  const incomes = await sql`select * from income`;
  return incomes;
}

async function update_income(income) {
  await sql`UPDATE income SET date=${income.date}, description=${income.description}, value=${income.value}, payed=${income.payed} WHERE id=${income.id}`;
}

export { insert_income, get_incomes, update_income };
