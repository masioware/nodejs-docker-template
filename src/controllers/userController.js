const userService = require("../services/userService");

const createUser = async (req, res) => {
  let { name, email } = req.body;

  await userService.create(name, email);

  res.json({ status: "created" }).status(201);
};

const getUser = async (req, res) => {
  let { id } = req.query;

  const user = await userService.getById(id);

  res.json(user).status(200);
};

const updateUser = async (req, res) => {
  let { id } = req.query;

  await userService.updateById(id, req.body);

  res.json({ status: "updated" }).status(200);
};

const deleteUser = async (req, res) => {
  let { id } = req.query;

  await userService.deleteById(id);

  res.json({ status: "deleted" }).status(200);
};

module.exports = { createUser, getUser, updateUser, deleteUser };
