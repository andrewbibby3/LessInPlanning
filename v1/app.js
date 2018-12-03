var express        = require("express"),
    app            = express(),
    bodyParser     = require("body-parser"),
    mongoose       = require("mongoose"),
    passport       = require("passport"),
    session        = require("express-session"),
    LocalStrategy  = require("passport-local"),
    methodOverride = require("method-override"),
    Plan           = require("./models/plan"),
    User           = require("./models/user"),
    seedDB         = require("./seeds")
//  Standards      = require("./models/standard")

// Routes
var planRoutes = require("./routes/plans");
var indexRoutes = require("./routes/index")
// standardRoutes = require("./routes/standards")

    
mongoose.connect("mongodb://localhost/lessinplanning");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public")); //telling express to serve this public directory with our style sheets
app.use(methodOverride("_method"));
// seedDB();

app.use(require("express-session")({
    secret: "Tom Brady is GOAT",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});

app.use("/", indexRoutes);
app.use("/plans", planRoutes);
// app.use("/plans/:id/standards", standardRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server up");
})