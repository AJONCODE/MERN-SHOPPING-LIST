const express    = require("express"),
      mongoose   = require("mongoose"),
      bodyParser = require("body-parser"),
      path       = require("path");

// Path is a core nodejs module, so we don't need to npm install it

const items = require("./routes/api/items");

const app = express();

// BodyParser Middleware
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to mongoDB
mongoose
    .connect(db)
    .then( () => console.log("MongoDB connected...") )
    .catch( err => console.log(err) );

// Use Routes
app.use("/api/items", items);

// Serve static assets if we are in production
if(process.env.NODE_ENV === "production") {
    // Set static folder
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        // Take response and go to client then build and then load the index.html file
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

const port = process.env.port || 8080;

app.listen(port, () => console.log(`Server started on port ${ port }`) );