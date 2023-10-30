import { Sequelize, DataTypes } from "sequelize";
const user = "postgres";
const password = "admin";
const host = "db";
const db_name = "scadenzario";



const sequelize = new Sequelize(
  `postgres://${user}:${password}@${host}:5432/${db_name}`
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



export {
 income
};
