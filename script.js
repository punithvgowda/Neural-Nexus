const express = require("express");
const path = require("path");
const app = express();
let port = 8080;

app.listen(port, () => {
    console.log("port 8080 in action");
});

app.get("/register", (req, res) => {
    console.log("register called");
    res.sendFile(path.join(__dirname, "register", "Registerform.html"));
});
