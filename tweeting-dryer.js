// setup twitter
var twitter = require("twitter");
var twitt = new twitter(require(__dirname + "/twitter-creds.json"));

// setup the green bean
var greenBean = require("green-bean");
greenBean.connect("laundry", function(laundry){

    // subscribe to the end of cycle
    console.log("Subscribing to the end of cycle notification.");
    laundry.endOfCycle.subscribe(function (value) {

        // get the push for end of cycle
        console.log("endOfCycle:", value);
        if(value){

            // when the cycle is complete, send a tweet
            var message = "#DryerOfTheFuture Here! Your laundry is ready at " +
                 (new Date()).toLocaleTimeString().slice(0, -3) +
                ". Meet my family of future #cocreations at http://bit.ly/S9Gxh3 #greenbean";

            // tweet!
            twitt.updateStatus(message, function(data) {
                if(data){
                    console.log("tweet sent");
                }
            });
        }
    });
});
