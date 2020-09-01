const express = require("express")
const app = express()
const db = require("./config/keys").mongoURI
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
const passport = require("passport")
const users = require("./routes/api/users")
const jobListings = require('./routes/api/jobListings')
const companies = require("./routes/api/companies");
const favorites = require("./routes/api/favorites")
const path = require("path")

if (process.env.NODE_ENV === "production") {
    app.use(express.static("frontend/build"))
    app.get("/", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
    })
}

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch((err) => console.log(err))

app.get("/", (req, res) => {
    res.send("Hello JobieWalkies")
})

app.use(passport.initialize())
require("./config/passport")(passport)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/api/users", users)
app.use("/api/jobListings", jobListings);
app.use("/api/favorites", favorites);
app.use("/api/companies", companies);

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server is running on port ${port}`))