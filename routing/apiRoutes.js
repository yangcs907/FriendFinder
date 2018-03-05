var friends = require("../app/data/friends.js");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
  var newUser = req.body;
  console.log(newUser);
  friends.push(newUser);
  res.json(newUser);
  var newUserScore;
  var newUserName = newUser.nameInput;
  console.log(newUserName);
  var newUserScoreArray = [];
  newUserScoreArray.push(newUser.scores);
  parseScoreArray = [];

  console.log(newUserScoreArray);
  //for (var i = 0; i < newUserScoreArray[0].length; i ++) {
    //parseScoreArray = parseInt(newUserScoreArray[0][i]);
    //console.log(parseScoreArray);
  //}
  //randomNum = parseScoreArray[2] + parseScoreArray[4];
  //console.log(randomNum);
  });

  app.post("/api/clear", function() {
    friendsData = [];
    console.log(friends);
  });
};
