// add solution here
function theBeatlesPlay(players, instruments) {
    var allPlayers = [];
    for (var i=0; i < players.length; i++) {
        allPlayers.push(players[i] + " plays " + instruments[i]);
    }
    return allPlayers;
}

function johnLennonFacts(facts) {
    var newFacts = [];
    var i = 0;
    while (i < facts.length) {
        newFacts.push(facts[i] +"!!!");
        i++;
    }
    return newFacts;
}    


function iLoveTheBeatles(love) {
  var loveBeatles = ['I love the Beatles!'];
  var i = 8;
  do {
    i++                     
    console.log("i = " + i );   
} while (i < 17);
}
