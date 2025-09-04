const express = require("express");
const path = require("path");
const app = express();

// ✅ view engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set(express.static(__dirname,"public"));

// ✅ middleware
app.use(express.static(path.join(__dirname, "public"))); // serve frontend assets
app.use(express.urlencoded({ extended: true })); // parse form data

let port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// ✅ routes
app.get("/", (req, res) => {
    res.render("web"); // loads views/index.ejs
});

app.get("/register", (req, res) => {
    res.render("register"); // loads views/register.ejs
});

app.post("/register", (req, res) => {
    console.log("Form data received:", req.body);
    res.send("Registration successful ✅");
});
