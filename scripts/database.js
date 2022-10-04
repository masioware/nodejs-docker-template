const { database } = require("../src/databases");

module.exports = {
  sync: () => {
    require("../src/models/user");
    database.sync();
  },
};
