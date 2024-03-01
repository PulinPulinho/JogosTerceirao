

let game_id = 0

function CreateGame(team1, team2, team_color1, team_color2){
    var container = document.getElementById("container");
    var itemCount = container.getElementsByClassName("jogo").length;
    game_id = game_id + 1;

    if (itemCount >= 10){
        container.removeChild(container.lastElementChild);
    }

    var newJogo = document.createElement("div");
    newJogo.className = "jogo";
    newJogo.id = game_id;

    var newAppend = document.createElement("div");
    newAppend.className = "append";
    newAppend.textContent = team1 + "x" + team2;

    var newPlacarContainer = document.createElement("div");
    newPlacarContainer.className = "placar-container";

    var newTeam1 = document.createElement("div");
    newTeam1.className = "team1";
    newTeam1.style.backgroundColor = team_color1;
    newPlacarContainer.appendChild(newTeam1);

    var newPlacar = document.createElement("div");
    newPlacar.className = "placar";
    newPlacar.textContent = "0x0";
    newPlacarContainer.appendChild(newPlacar);

    var newTeam2 = document.createElement("div");
    newTeam2.className = "team2";
    newTeam2.style.backgroundColor = team_color2;
    newPlacarContainer.appendChild(newTeam2);

    

    newJogo.appendChild(newAppend);
    newJogo.appendChild(newPlacarContainer);
    container.appendChild(newJogo);

    
}

function DeleteGame(id){
    var game = document.getElementById(id);

    game.remove();
}

function ChangePlacar(id, new_placar){
    var game = document.getElementById(id);
    var PlacarContainer = game.children[1];
    var Placar = PlacarContainer.children[1];

    Placar.textContent = new_placar;
}