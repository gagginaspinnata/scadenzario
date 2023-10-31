import { Sequelize, DataTypes } from "sequelize";
import {config} from './config.js'


const sequelize = new Sequelize(
  `postgres://${config.user}:${config.password}@${config.host}:${config.port}/${config.db_name}`
);


const income = sequelize.define(
  "income",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATEONLY,
    },
    description: {
      type: DataTypes.TEXT,
    },
    value: {
      type: DataTypes.FLOAT,
    },
    payed: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    tableName: "income",
  }
);



// sincronizzazione del DB
await sequelize.sync({ });


async function get_incomes() {
  let incomes = await income.findAll();
  return incomes
}

async function insert_income(i) {
 await income.create(i);

}


export {
 get_incomes,
 insert_income
};
