import {income} from "./models/incomes.js"



// const outcome = sequelize.define(
//   "outcome",
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//     },
//     date: {
//       type: DataTypes.DATEONLY,
//     },
//     description: {
//       type: DataTypes.TEXT,
//     },
//     value: {
//       type: DataTypes.FLOAT,
//     },
//     payed: {
//       type: DataTypes.BOOLEAN,
//     },
//     payment_method: {
//       type: DataTypes.TEXT,
//     },
//   },
//   {
//     tableName: "outcome",
//   }
// );

// sincronizzazione del DB
// await sequelize.sync({ force: true });

async function get_incomes() {
  let incomes = await income.income.findAll();
  return incomes
}

async function insert_income(i) {
 await income.income.create(i);

}


export {
  insert_income,
  get_incomes,
  //   update_income,
  //   insert_outcome,
  //   get_outcomes,
  //   update_outcome,
};
