
// BASE SETUP
// =============================================================================

// call the packages we need
var express    	= require('express');
var bodyParser 	= require('body-parser');
var app        	= express();
var _			= require('underscore');
var env         = process.env.NODE_ENV || 'development'
//var config      = require('./config')[env];
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var port        = process.env.PORT || 8080; // set our port
var router      = express.Router();


// configure app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	//console.log('req:',req.body);
	next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'hmm' });
});
// REGISTER OUR ROUTES
app.use('/api', router);

// START THE SERVER
app.listen(port);
console.log("started on port: ", port);


// Functions
// =============================================================================

router.route('/apps').get(function(req, res){
    res.json({result:1,message:"diu"});
});
    

/**
 * This is a function to fire GET request to target address. 
 *
 * @param {String} req HTTP request;
 * @param {String} res HTTP response;
 * @param {String} forwardURL target server URL address;
 */
function ForwardRequest(req,res,forwardURL){
    var http = new XMLHttpRequest();
    //var postdata= "subid="+trClickId+"&amt=0.08";
    //var url = "http://takereasy.ru/track.php?subid="+trClickId+"&amt=0.08"
    http.open("GET", forwardURL, true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    http.onreadystatechange = function() {//Call a function when the state changes.
        console.log("state:",http.status)
        if(http.readyState == 4 && http.status == 200) {
            //store redirect in tracker, with response status. 
            // aTracker = new Tracker();
            // aTracker.content = "redirect status: "+ http.status +": " + forwardURL;
            // aTracker.save();
        }
    }
    http.send();
    res.json({"result":1, "redirect_to":forwardURL});
}

// Jobs
// =============================================================================
// var spanTime = 15;

// var CronJob = require('cron').CronJob;
// var job = new CronJob({
//     cronTime: '0 */10 * * * *',
//     onTick: function() {
//         reportService.generateReports();
//     },
//     start: true
// });

// job.start();

