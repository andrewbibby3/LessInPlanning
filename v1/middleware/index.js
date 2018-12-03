var Plan = require("../models/plan");

var middlewareObj = {};

middlewareObj.checkPlanOwnership = function(req, res, next) {
    if(req.isAuthenticated()){
        Plan.findById(req.params.id, function(err, foundPlan){
            if(err){
                res.redirect("back");
            } else {
                if(foundPlan.author.id.equals(req.user._id)){
                    next();
                } else {
                    res.redirect("back");
                }
            }
        });
    } else {
        res.redirect("back");
    }
}

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

module.exports = middlewareObj;