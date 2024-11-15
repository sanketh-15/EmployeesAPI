const express = require('express');
const cors = require('cors');
const { getAllEmployees, getEmployeeById } = require('./controllers');

const app = express();
app.use(express.json());
app.use(cors());

//1
app.get('/employees', async (req, res) => {
  const employees = await getAllEmployees();
  res.json({ employees });
});

//2
app.get('/employees/details/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const employee = await getEmployeeById(id);
  res.json({ employee });
});

module.exports = { app };
