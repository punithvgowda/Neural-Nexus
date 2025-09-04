const express = require("express");
const path = require("path");
const app = express();
const student=require("./schema");
const mongoose=require("mongoose");

async function main() {
    mongoose.connect('mongodb://127.0.0.1:27017/myapp');
    
}
main().then((res)=>{
    console.log(" Connection successfull");
})
.catch((err)=>console.group(err));

// ✅ view engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


// ✅ middleware
app.use(express.static(path.join(__dirname, "public"))); // serve frontend assets
app.use(express.urlencoded({ extended: true })); // parse form data

app.use(express.static(path.join(__dirname, "public"), {
    etag: false,
    maxAge: 0
}));

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
app.post("/registered",(req,res)=>{
    const {email,age,password}=req.body;
    const student1=new student({
        email:email,
        age:age,
        password:password
    })
    student1.save()
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>console.log(err));
    res.send(" ok done")


})
