var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");
var middleware = require("../middleware");
var Plan = require("../models/plan");

// root route
router.get("/", function(req, res){
    Plan.find({}, function(err, allPlans){
        if(err){
            console.log(err);
        } else {
            res.render("plans/dashboard", {plans: allPlans});
        }
    });
});

// sign up form
router.get("/register", function(req, res){
    res.render("register");
});

//signup logic
router.post("/register", function(req, res){
   var newUser = new User({username: req.body.username});
   User.register(newUser, req.body.password, function(err, user){
       if(err){
           return res.render("register");
       }
       passport.authenticate("local")(req, res, function(){
           res.redirect("/dashboard");
       });
   });
});

//log in form
router.get("/login", function(req, res) {
    res.render("login");
});

// login logic
router.post("/login", passport.authenticate("local",
    {
        successRedirect: "/dashboard",
        failureRedirect: "/login"
        }), function(req, res){
});

// logout route
router.get("logout", function(req, res){
    req.logout();
    res.redirect("/login");
});

module.exports = router;