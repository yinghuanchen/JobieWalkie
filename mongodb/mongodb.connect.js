const mongodb = require("mongodb").MongoClient;

const connectionString =
  "mongodb+srv://mernUser:647Ys^EE@jobiewalkie.loz0h.mongodb.net/linkedIn?retryWrites=true&w=majority";

async function connect() {
  try {
    const client = await mongodb.connect(connectionString, {
      useNewUrlParser: true,
    });
    console.log("connected to mongodb");
    return client;
  } catch (err) {
    console.error(err);
  }
}

module.exports = connect;
