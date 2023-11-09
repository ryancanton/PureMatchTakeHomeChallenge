module.exports = {
  HOST: "localhost",
  USER: "ryancanton",
  PASSWORD: "",
  DB: "program_test",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};