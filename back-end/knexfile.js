require("dotenv").config();
const path = require("path");

const {
  DATABASE_URL = "postgres://igkyifhw:AbTglO7FGjlpCvNTiQ_seNo2CLPcpKhu@salt.db.elephantsql.com/igkyifhw",
  DATABASE_URL_DEVELOPMENT = "postgres://igkyifhw:AbTglO7FGjlpCvNTiQ_seNo2CLPcpKhu@salt.db.elephantsql.com/igkyifhw",
  DATABASE_URL_TEST = "postgres://igkyifhw:AbTglO7FGjlpCvNTiQ_seNo2CLPcpKhu@salt.db.elephantsql.com/igkyifhw",
  DATABASE_URL_PREVIEW = "postgres://igkyifhw:AbTglO7FGjlpCvNTiQ_seNo2CLPcpKhu@salt.db.elephantsql.com/igkyifhw",
  DEBUG,
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};
