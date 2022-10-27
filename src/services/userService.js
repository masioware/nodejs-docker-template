const user = require("../models/user");

const create = async (name, email) => await user.create({ name, email });

const getById = async (id) => await user.findByPk(id);

const getByEmail = async (email) => await user.findOne({ where: { email } });

const updateById = async (id, data) =>
  await user.update(data, { where: { id } });

const updateByEmail = async (email, data) =>
  await user.update(data, { where: { email } });

const deleteById = async (id) => user.destroy({ where: { id } });

const deleteByEmail = async (email) => await user.destroy({ where: { email } });

module.exports = {
  create,
  getById,
  getByEmail,
  updateById,
  updateByEmail,
  deleteById,
  deleteByEmail,
};
