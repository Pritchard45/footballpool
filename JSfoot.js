var foot = function(){
  var results = [];
  for (var i = 0; i < teams.length; i++) {
    var firstletter = teams[i].charAt(0);
    if (firstletter === "E") {
      results.push("Superbowl Champions for 2018 are the Philadelphia " + teams[i] + ' ! ');

    } else {
        results.push(team[i] + " did not win anything...");
    }
  }
  return results;
};
///object//
var choice = {
  Teams: [
    {

      winner: "Pick",
      isRequired: true,
      choices: [
          "Eagles",
          "Patriots"
      ]
    }
  ]
};





///nflteams///
var teams = ['Eagles',
             'Cowboys',
             'Giants',
             'Redskins',
             'Patriots',
             'Dolphins',
             'Jets',
             'Bills',
             'Chiefs',
             'Raiders',
             'Chargers',
             'Broncos',
             'Steelers',
             'Ravens',
             'Bengals',
             'Browns',
             'Jaguars',
             'Titans',
             'Colts',
             'Texans',
             'Rams',
             'Seahawks',
             'Cardinals',
             '49ers',
             'Vikings',
             'Packers',
             'Lions',
             'Bears',
             'Saints',
             'Panters',
             'Falcons',
             'Buccaneers',
             'Bye'
];

console.log(foot);
