if (process.env.NODE_ENV === "production") {
  module.exports = require("./keys_prod")
} else {
  module.exports = require("./keys_dev")
}
// module.exports = {
//   mongoURI:
//     "mongodb+srv://mernUser:647Ys^EE@jobiewalkie.loz0h.mongodb.net/jobiewalkie?retryWrites=true&w=majority",
//   secretOrKey: "T$p#27W3",
// };
