const bcrypt = require("bcrypt");

const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Parvez Ahmed",
    email: "parvez@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Anis Ratul",
    email: "ratul@email.com",
    password: bcrypt.hashSync("123456", 10),
  },
];
module.exports = users;
