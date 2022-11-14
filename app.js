// Setup
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const postSchema = new mongoose.Schema({ body: String, blogNumber: Number });
const Post = mongoose.model("Post", postSchema); // Routes

//import style.css from public folder
app.use(express.static("public"));

mongoose
  .connect("mongodb://localhost:27017/node-blog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected...");
  })
  .catch((err) => {
    console.log(Error, err.message);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

// Routes for the app

app.get("/", (req, res) => {
  Post.find({}, (err, posts) => {
    res.render("index", { posts: posts });
  });
});

//route to get new blog entry and blog number and save them to the database
app.post("/new", (req, res) => {
  const post = new Post({
    body: req.body.body,
    blogNumber: req.body.blogNumber,
  });
  post.save((err) => {
    if (!err) {
      res.redirect("/");
    }
  });
});

//route to delete a blog entry from the database given blognumber
app.post("/delete", (req, res) => {
  console.log(req.body.blogNumber);

  Post.deleteOne({ blogNumber: req.body.blogNumber }, (err) => {
    if (!err) {
      res.redirect("/");
    }
  });
});

//route to update a blog entry from the database given blognumber
app.post("/update", (req, res) => {
  Post.updateOne(
    { blogNumber: req.body.blogNumber },
    { body: req.body.body },
    (err) => {
      if (!err) {
        res.redirect("/");
      }
    }
  );
});

//route to delete all blog entries from the database
app.post("/deleteAll", (req, res) => {
  Post.deleteMany({}, (err) => {
    if (!err) {
      res.redirect("/");
    }
  });
});

// Listen on port 3000
app.listen(3000, () => {
  console.log("Server listing on 3000..");
});
