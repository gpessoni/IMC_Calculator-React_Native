const { response } = require("express");
const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(express.json());

const customers = [];

// cpf - string
// name - string
// id - uuid
// statement - []

app.post("/account", (req, res) => {
  const { cpf, name } = req.body;

  const customersAlreadyExists = customers.some(
    (customer) => customer.cpf === cpf
  );

  if (customersAlreadyExists) {
    return res.status(400).json({ error: "Customer already exists" });
  }

  customers.push({
    id: uuidv4(),
    name,
    cpf,
    statemen: [],
  });

  return res.status(201).send();
});

app.get("/statement", (req, res) => {
  const { cpf } = req.headers;

  const customer = customers.find((customer) => customer.cpf === cpf);

  if(!customer) {
    return res.status(400).json({ error: "Customer not found" });
  }

  return res.json(customer.statement);
});

app.listen(3333);
