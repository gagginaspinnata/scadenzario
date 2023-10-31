import { Sequelize, DataTypes } from "sequelize";
import {config} from './config.js'


const sequelize = new Sequelize(
  `postgres://${config.user}:${config.password}@${config.host}:${config.port}/${config.db_name}`
);


const outcome = sequelize.define(
  "outcome",
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
    payment_method: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: "outcome",
  }
);



// sincronizzazione del DB
await sequelize.sync({ });


async function get_outcomes() {
  let incomes = await outcome.findAll();
  return incomes
}

async function insert_outcome(i) {
 await outcome.create(i);

}


export {
 get_outcomes,
 insert_outcome
};
