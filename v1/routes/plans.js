var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");
var middleware = require("../middleware");
var Plan = require("../models/plan");

// index - show all
// router.get("/", function(req, res){
//     Plan.find({}, function(err, allPlans){
//         if(err){
//             console.log(err);
//         } else {
//             res.render("plans/dashboard", {plans: allPlans});
//         }
//     });
// });

// create - add new plan
router.post("/", middleware.isLoggedIn, function(req, res){
    // get form data and add to plan array
    var title = req.body.title;
    var type = req.body.type;
    var author = {
        id: req.user._id,
        username: String
    };
    var grade = req.body.grade;
    var subject = req.body.subject;
    var unit = req.body.unit;
    var parent = {
        id: req.parent._id,
        title: req.parent._title
    };
    var newPlan = {
        title: title,
        type: type,
        author: author,
        grade: grade,
        subject: subject,
        unit: unit,
        parent: parent
    };
    Plan.create(newPlan, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            console.log(newlyCreated);
            res.redirect("/");
        }
    });
});

// new 
router.get("/new", middleware.isLoggedIn, function(req, res){
    res.render("plans/new");
});

// show
router.get("/:id", function(req, res){
    Plan.findById(req.params.id, function(err, plan){
        if(err) {
            console.log(err);
        } else {
            res.render("plans/show", {plan: plan});
        }
    });
});

// edit
router.get("/:id/edit", middleware.checkPlanOwnership, function(req, res){
    Plan.findById(req.params.id, function(err, foundPlan){
        res.render("plans/edit", {plan: foundPlan});
    });
});

// update
router.put("/:id", middleware.checkPlanOwnership, function(req, res){
    Plan.findByIdAndUpdate(req.params.id, req.body.plan, function(err, updatedPlan){
        if(err){
           res.redirect("/");
        } else {
           //redirect somewhere(show page)
           res.redirect("/plans/" + req.params.id);
        }
    });
});

// DESTROY CAMPGROUND ROUTE
router.delete("/:id", middleware.checkPlanOwnership, function(req, res){
   Plan.findByIdAndRemove(req.params.id, function(err){
      if(err){
          res.redirect("/");
      } else {
          res.redirect("/");
      }
   });
});


module.exports = router;