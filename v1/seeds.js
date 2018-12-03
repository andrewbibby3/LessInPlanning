var mongoose = require("mongoose");
var Plan = require("./models/plan");

var data = [
    {
        title: "Selena Myer",
        type: "Lesson",
        author: {
            id: "5c044969622d8f26b6926ff7",
            username: "drew"
        },
        grade: "fourth",
        subject: "History",
        unit: "Thanksgiving",
        parent: {
            id: "5c044969622d8f26b6926ff7",
            title: "empty"
        },
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        title: "Selena Myer",
        type: "Lesson",
        author: {
            id: "5c044969622d8f26b6926ff7",
            username: "drew"
        },
        grade: "fourth",
        subject: "History",
        unit: "Thanksgiving",
        parent: {
            id: "5c044969622d8f26b6926ff7",
            title: "empty",
        },
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        title: "Selena Myer",
        type: "Lesson",
        author: {
            id: "5c044969622d8f26b6926ff7",
            username: "drew"
        },
        grade: "fourth",
        subject: "History",
        unit: "Thanksgiving",
        parent: {
            id: "5c044969622d8f26b6926ff7",
            title: "empty",
        },
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
];


    

function seedDB(){
    Plan.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed the preexisting");
            data.forEach(function(seed){
                Plan.create(seed, function(err, plan){
                    if(err){
                        console.log(err)
                    } else {
                    plan.save();
                }
            })
        });
    });
}

module.exports = seedDB;