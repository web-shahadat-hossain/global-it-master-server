const mongoose = require("mongoose");
require("dotenv").config();
const app = require("./app");

// mongoose
mongoose
  .connect(
    `mongodb+srv://socialglobalitmaster:${process.env.DATABASEPASS}@globalitmaster.wrseebw.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log(`mongoose connect `);
  });
// server
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
