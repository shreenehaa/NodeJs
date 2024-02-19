import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "./config.js";

export const User = sequelize.define("User", {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true
