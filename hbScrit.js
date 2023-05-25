
var roomConfig = {
  roomName : "🎮👾2V2 POWERgaming👾🎮",
  playerName : "-ADMIN-",
  maxPlayers : 12,
  public : false,
  geo : {
    code: 'pl',
    lat: 52.234982,
    lon: 21.008490
  }

};

var playersName;

var commands = ["!clearbans ", "!afk ", "!jj ", "!lafk ", "!p ", "!goals [nazwa_gracza] ", "!top10 "];

var afklist = [];
var blacklist = [];
var whitelist = [["Hi","pl2"]];

var goalsObj = new Object();
var bannedtimesObj = new Object();

var paused = true;

var power = '{"name":"Power Finezja Classic fixed from HaxMaps","width":420,"height":200,"spawnDistance":170,"bg":{"type":"grass","width":370,"height":170,"kickOffRadius":75,"cornerRadius":0},"playerPhysics":{"bCoef":0.5,"invMass":0.5,"damping":0.96,"acceleration":0.12,"kickingAcceleration":0.12,"kickingDamping":0.96,"kickStrength":11},"vertexes":[{"x":-370,"y":170,"trait":"ballArea"},{"x":-370,"y":64,"trait":"ballArea"},{"x":-370,"y":-64,"trait":"ballArea"},{"x":-370,"y":-170,"trait":"ballArea"},{"x":370,"y":170,"trait":"ballArea"},{"x":370,"y":64,"trait":"ballArea"},{"x":370,"y":-64,"trait":"ballArea"},{"x":370,"y":-170,"trait":"ballArea"},{"x":0,"y":200,"trait":"kickOffBarrier"},{"x":0,"y":75,"trait":"kickOffBarrier"},{"x":0,"y":-75,"trait":"kickOffBarrier"},{"x":0,"y":-200,"trait":"kickOffBarrier"},{"x":-380,"y":-64,"trait":"goalNet"},{"x":-400,"y":-44,"trait":"goalNet"},{"x":-400,"y":44,"trait":"goalNet"},{"x":-380,"y":64,"trait":"goalNet"},{"x":380,"y":-64,"trait":"goalNet"},{"x":400,"y":-44,"trait":"goalNet"},{"x":400,"y":44,"trait":"goalNet"},{"x":380,"y":64,"trait":"goalNet"},{"bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-380,"y":-64},{"bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-380,"y":64},{"bCoef":1,"cMask":["ball"],"trait":"ballArea","x":380,"y":-64},{"bCoef":1,"cMask":["ball"],"trait":"ballArea","x":380,"y":64},{"bCoef":1,"trait":"ballArea","x":385,"y":64,"cMask":["ball"]},{"bCoef":1,"trait":"ballArea","x":385,"y":170,"cMask":["ball"]},{"bCoef":1,"trait":"ballArea","x":385,"y":-170,"cMask":["ball"]},{"bCoef":1,"trait":"ballArea","x":385,"y":-64,"cMask":["ball"]},{"bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-385,"y":64},{"bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-385,"y":170},{"bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-385,"y":-170},{"bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-385,"y":-64},{"bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-385,"y":-170},{"bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-385,"y":-64},{"bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-385,"y":-170},{"bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-385,"y":-64},{"bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-385,"y":64},{"bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-385,"y":170},{"bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-385,"y":64},{"bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-385,"y":170},{"bCoef":1,"trait":"ballArea","x":385,"y":-170,"cMask":["ball"]},{"bCoef":1,"trait":"ballArea","x":385,"y":-64,"cMask":["ball"]},{"bCoef":1,"trait":"ballArea","x":385,"y":-170,"cMask":["ball"]},{"bCoef":1,"trait":"ballArea","x":385,"y":-64,"cMask":["ball"]},{"bCoef":1,"trait":"ballArea","x":385,"y":64,"cMask":["ball"]},{"bCoef":1,"trait":"ballArea","x":385,"y":170,"cMask":["ball"]},{"bCoef":1,"trait":"ballArea","x":385,"y":64,"cMask":["ball"]},{"bCoef":1,"trait":"ballArea","x":385,"y":170,"cMask":["ball"]}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":12,"v1":13,"trait":"goalNet","curve":-90},{"v0":13,"v1":14,"trait":"goalNet"},{"v0":14,"v1":15,"trait":"goalNet","curve":-90},{"v0":16,"v1":17,"trait":"goalNet","curve":90},{"v0":17,"v1":18,"trait":"goalNet"},{"v0":18,"v1":19,"trait":"goalNet","curve":90},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"trait":"kickOffBarrier","curve":180,"cGroup":["blueKO"]},{"v0":9,"v1":10,"trait":"kickOffBarrier","curve":-180,"cGroup":["redKO"]},{"v0":10,"v1":11,"trait":"kickOffBarrier"},{"vis":false,"color":"FFCCCC","bCoef":1,"trait":"ballArea","v0":24,"v1":25,"cMask":["ball"],"x":385},{"vis":false,"color":"CCCCFF","bCoef":1,"trait":"ballArea","v0":26,"v1":27,"x":385,"cMask":["ball"]},{"vis":false,"color":"FFCCCC","bCoef":1,"cMask":["ball"],"trait":"ballArea","v0":28,"v1":29,"x":-385,"curve":0},{"vis":false,"color":"FFCCCC","bCoef":1,"cMask":["ball"],"trait":"ballArea","v0":30,"v1":31,"x":-385},{"vis":false,"color":"FFCCCC","bCoef":1,"cMask":["ball"],"trait":"ballArea","v0":31,"v1":31},{"vis":false,"color":"FFCCCC","bCoef":1,"cMask":["ball"],"trait":"ballArea","v0":32,"v1":33,"x":-385,"curve":-38.6025768017},{"vis":false,"color":"FFCCCC","bCoef":1,"cMask":["ball"],"trait":"ballArea","v0":34,"v1":35,"x":-385,"curve":31.9608748015},{"vis":false,"color":"FFCCCC","bCoef":1,"cMask":["ball"],"trait":"ballArea","v0":36,"v1":37,"x":-385,"curve":-55.0670963503},{"vis":false,"color":"FFCCCC","bCoef":1,"cMask":["ball"],"trait":"ballArea","v0":38,"v1":39,"x":-385,"curve":30.1056948262},{"vis":false,"color":"CCCCFF","bCoef":1,"trait":"ballArea","v0":40,"v1":41,"x":385,"cMask":["ball"],"curve":48.8016671394},{"vis":false,"color":"CCCCFF","bCoef":1,"trait":"ballArea","v0":42,"v1":43,"x":385,"cMask":["ball"],"curve":-34.5238570872},{"vis":false,"color":"FFCCCC","bCoef":1,"trait":"ballArea","v0":44,"v1":45,"cMask":["ball"],"x":385,"curve":43.4541918718},{"vis":false,"color":"FFCCCC","bCoef":1,"trait":"ballArea","v0":46,"v1":47,"cMask":["ball"],"x":385,"curve":-35.5522115092}],"goals":[{"p0":[-376,65],"p1":[-376,-63],"team":"red"},{"p0":[377,63],"p1":[377,-65],"team":"blue","_selected":true}],"discs":[{"pos":[-370,64],"trait":"goalPost","color":"FFCCCC","bCoef":0.5},{"pos":[-370,-64],"trait":"goalPost","color":"FFCCCC"},{"pos":[370,64],"trait":"goalPost","color":"CCCCFF"},{"pos":[370,-64],"trait":"goalPost","color":"CCCCFF"}],"planes":[{"normal":[0,1],"dist":-170,"trait":"ballArea"},{"normal":[0,-1],"dist":-170,"trait":"ballArea"},{"normal":[0,1],"dist":-200,"bCoef":0.1},{"normal":[0,-1],"dist":-200,"bCoef":0.1},{"normal":[1,0],"dist":-420,"bCoef":0.1},{"normal":[-1,0],"dist":-420,"bCoef":0.1}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}}}';

function updateAdmin(){
  var players = room.getPlayerList().filter((player) => player.id != 0 );
  if ( players.length == 0 ) return;
  if ( players.find((player) => player.admin) != null ) return;
  room.setPlayerAdmin(players[0].id, true);
}

function safetySystem(byPlayer,ban){
if(ban == true){
      bannedtimesObj[byPlayer.name]++;
      if(bannedtimesObj[byPlayer.name] >= 5) room.kickPlayer(byPlayer.id,"Za dużo zbanowanych graczy!", true);
  }
}

function wipe(){
  room.clearBans();
  room.sendChat("📋 Bany zostały wycofane ! 📋");
}

function goalSystem(player){
  playersName = player.name;
  goalsObj[playersName]++;
}

function writeGoals(name,bool){

  if(bool)
  room.sendChat("📋 Gracz " + name + " strzelił " + goalsObj[name] + " bramek ! 📋");
  else {
    room.sendChat("📋 Gracza " + name + " nie ma na liście ! 📋");
  }
}

function lockGame(){

  if(room.locked == false) room.setTeamsLock(true);

}

function helpShow(){
  room.sendChat("📋 KOMENDY PONIZEJ : ");
  var result = '';
  for(var i = 0; i < commands.length; i++){
    result += commands[i];

  }
  room.sendChat(result);
  room.sendChat("📋");
}

function limitControl(){

  var tl = room.getScores().timeLimit;
  var sl = room.getScores().scoreLimit;

  if((tl/60) != 2 || sl != 3){
    room.stopGame();
    room.setScoreLimit(3);
    room.setTimeLimit(2);
    room.sendChat("📋 Złe limity czasu lub punktów. (Wymagany-> czas: 2 , punkty: 3) 📋");
  }
}

function listaAFK(){
  if(afklist != 0)
  {
    room.sendChat("📋 ");
    var result = '';
    for(var i = 0; i < afklist.length; i++){
      result += afklist[i];

    }
    room.sendChat(result);
  room.sendChat("📋");
  }
}

function chatPausing(){
    room.pauseGame(!paused);
    }

function admit_admin(player){
  room.setPlayerAdmin(player.id,true);
}

function top10(){
  var maparr = new Array();

  for(var key in goalsObj)
  {
    maparr.push([key, goalsObj[key]]);
  }

  maparr.sort(function(a,b){return b[1] - a[1]});

  var result = '⚽️ ';
  room.sendChat("📋 TOP 10 : 📋");
  for(var i = 1; i <= 10; i++)
  {
    if(maparr[i-1] != undefined)
    result += i + ") " + maparr[i-1] + " bramek⚽️ ";
  }
  room.sendChat(result);
  room.sendChat("📋");
}

function goAFK(player){
  room.setPlayerTeam(player.id,0);
  afklist.push(player.name);
  room.sendChat("📋 Gracz "+player.name+" poszedł AFK 📋");

  if(player.team != 0) room.pauseGame(true);
}

function returnAFK(player){
  for(var i = 0; i < afklist.length; i++){
    if(afklist[i] == player.name)
      afklist.splice(i,i);
  }
  room.sendChat("📋 Gracz " + player.name + " wrócił! 📋")

}

var lastTouched;
var room = HBInit(roomConfig);


room.setTimeLimit(2);
room.setScoreLimit(3);

room.setTeamsLock(true);
room.setCustomStadium(power);

  setInterval(function(){ wipe(); }, 86400000);
room.onPlayerJoin = function(player){



  room.sendChat("📋 Witaj, " + player.name + " 📋");
  updateAdmin();

  bannedtimesObj[player.name] = 0;
  playersName = player.name;
  if(!(playersName in goalsObj)) goalsObj[playersName] = 0;
  if(whitelist.includes([player.name,player.conn])) admit_admin(player);
  if(blacklist.includes(player.name)) room.kickPlayer(player.id,"Jesteś na czarnej liście",true);
}

room.onPlayerLeave = function(player){
  updateAdmin();
}

room.onPlayerBallKick = function(player){
    lastTouched = player;
}

room.onTeamGoal = function(team){
  if(lastTouched.team != team)
    room.sendChat("📋 Gola samobójczego strzelił " + lastTouched.name + " 📋");
    else {
      room.sendChat("📋 Gola strzelił " + lastTouched.name + " 📋");
      goalSystem(lastTouched);
  }

}

room.onStadiumChange = function(newStadiumName,byPlayer){
  if(byPlayer.id != 0)
    room.setCustomStadium(power);
}

room.onPlayerChat = function(player,message){



  if(message == "!clearbans" && player.admin == true){
    room.clearBans();
    room.sendChat("📋 Bany zostały wycofane ! 📋");
  }
  if(message == "!afk") goAFK(player);
  if(message == "!jj") returnAFK(player);
  if(message == "!komendy") helpShow();
  if(message == "!lafk") listaAFK();
  if(message == "!p" && player.team != 0) chatPausing();
  if(message.substr(0,6) == "!goals"){
    if(message.substr(7) != ""){
      if(message.substr(7) in goalsObj)
      writeGoals(message.substr(7),true);
      else {
        writeGoals(message.substr(7),false);
      }
    }
    else{
        room.sendChat("📋 Strzeliłeś " + goalsObj[player.name] + " goli ! 📋",player.id);
    }
 }
  if(message == "!top10") top10();




}

room.onGamePause = function(byPlayer){
  paused = true;

}
room.onGameUnpause = function(byPlayer){
  paused = false;
}
room.onGameStart = function(byPlayer){
  paused = false;
  limitControl();
}
room.onGameStop = function(byPlayer){
  paused = true;
}

room.onPlayerTeamChange = function(changedPlayer){

  if(changedPlayer.id == 0) {
    room.setPlayerTeam(changedPlayer.id,0);
    room.sendChat("📋 -ADMIN- nie może grać! 📋");
  }
}
room.onPlayerKicked = function(kickedPlayer, reason, ban, byPlayer){
      safetySystem(byPlayer,ban);
}
