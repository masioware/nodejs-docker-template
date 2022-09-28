require("dotenv").config();

app = require("./app");

const port = process.env.PORT;

app.listen(port, () => console.info("Backend listening on port:", port));
