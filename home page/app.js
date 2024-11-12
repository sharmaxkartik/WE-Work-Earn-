const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/signup", (req, res) => {
  res.render("signup");
});
app.get("/workerprofile", (req, res) => {
  res.render("workerprofile");
});
app.get("/profile-setup", (req, res) => {
  res.render("profile-setup");
});
app.get("/company_dashboard", (req, res) => {
  res.render("company_dashboard");
});
app.get("/laborer_dashboard", (req, res) => {
  res.render("laborer_dashboard");
});
app.get("/lp", (req, res) => {
  res.render("lp");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
// app.get("/profile/:username", function (req, res) {
//   res.send(`Hello from ${req.params.username}`);
// });

app.listen(3000, () => {
  console.log("it's running");
});

// npx nodemon ./app.js
