var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const { User } = require("./models");
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/users", (req, res) => {
  User.findAll()
    .then((users) => {
      res.json({
        users: users,
      });
    })
    .catch((err) => {
      res.json({
        err: err,
      });
    });
});

app.post("/users", (req, res) => {
  let fullName = req.body.name
  let email = req.body.email
  
  user = User.create({ name: fullName, email: email });
  if (user) {
    res.json({
      message: "User created",
      user: user
    });
  }
});

app.put("/users/:id", (req, res)=>{
  let fullName = req.body.name;
  let user = User.update({name: fullName}, {where: {id: req.params.id}});
  res.json({
    "message": "User updated",
    user: user
  })
})

app.delete("/users/:id", async (req, res)=>{
  try{

    const deletedCount = await User.destroy({where: {id: req.params.id}});
    console.log(deletedCount)

    if (deletedCount === 0){
      return res.status(400).json({error: "User not found"});
    }
    return res.status(204).send();
  }catch(err){
    res.json({
      "message": err,
      "status": 400
    })
  }
});

// app.use("/users", usersRouter);
// app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
