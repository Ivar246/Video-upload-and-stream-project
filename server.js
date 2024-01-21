const express = require("express");
const dotenv = require('dotenv');
const ejs = require("ejs")
const homeRoutes = require("./routes/home.route")
const uploadRoutes = require("./routes/upload.route")
const path = require("path")
const upload = require("./middleware/upload")


const app = express()
dotenv.config()

app.use(express.json())

app.use(express.static(path.join(__dirname, "public")))

app.set('view engine', 'ejs');

const PORT = process.env.PORT

// routes
app.use("/api/upload", upload.single("video"), uploadRoutes)
app.use("/", homeRoutes)

app.listen(PORT, () => console.log(`server running on port ${PORT}`));

