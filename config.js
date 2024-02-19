import { Sequelize } from "sequelize";
import "dotenv/config";
export const sequelize = new Sequelize(
  "postgres://postgres:Password@1@localhost:5432/zuci"
); // Example for postgres
