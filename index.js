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
  
function iLoveTheBeatles() {
  var i = 1;
  do {                        
     i = 2;                     
    document.write(i + ", ");   
}
while (i < 100)
}