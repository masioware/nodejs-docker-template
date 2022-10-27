const { database } = require("../src/databases");

module.exports = {
  sync: () => {
    // eslint-disable-next-line global-require
    require("../src/models/user");

    database.sync();
  },
};
