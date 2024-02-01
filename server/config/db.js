const { default: mongoose } = require("mongoose");

async function dbConnect() {
  try {
    const { connection } = await mongoose.connect(
      "mongodb://127.0.0.1:27017/USER"
    );
    console.log("Database connection established : ", connection.host);
  } catch (error) {
    console.log("Issue while connecting to database");
    console.log(error.message);
    process.exit(1);
  }
}
module.exports = dbConnect;
