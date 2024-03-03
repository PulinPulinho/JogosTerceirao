
let game_id = 0
const Password = "6198"

// Load existing games from localStorage on page load
window.onload = function() {
    const savedGames = JSON.parse(localStorage.getItem('games'));
    if (savedGames) {
        savedGames.forEach(game => {
            CreateGame(game.team1, game.team2, game.team_color1, game.team_color2, game.date, game.sport, game.place);
            game_id = Math.max(game_id, game.id);
        });
    }
}

function saveGamesToStorage() {
    const games = Array.from(document.querySelectorAll('.jogo')).map(game => ({
        id: parseInt(game.id),
        team1: game.classList[1],
        team2: game.classList[2],
        team_color1: game.querySelector('.team1').style.backgroundColor,
        team_color2: game.querySelector('.team2').style.backgroundColor,
        date: game.querySelector('.date').textContent
    }));
    localStorage.setItem('games', JSON.stringify(games));
}

function CreateGame(team1, team2, team_color1, team_color2, date){
    var container = document.getElementById("games_container");
    var itemCount = container.getElementsByClassName("jogo").length;
    game_id = game_id + 1;
    

    if (itemCount >= 10){
        let firstChild = container.firstElementChild;
        firstChild.style.display = "none";
    }

    var newJogo = document.createElement("div");
    newJogo.className = `jogo ${team1} ${team2}`;
    newJogo.id = game_id;

    var newAppend = document.createElement("div");
    newAppend.className = "append";
    newAppend.textContent = team1 + "x" + team2;

    var newDate = document.createElement("div");
    newDate.className = "date";
    newDate.textContent = date;
    newAppend.appendChild(newDate);

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

    /*var Sport = document.createElement("div")
    Sport.textContent = sport +"-"+ place;
    Sport.style.textAlign = "center";
    Sport.style.fontWeight = "bolder"
    Sport.style.fontSize = "1vw";
    Sport.style.marginLeft = "auto";
    Sport.style.marginRight = "auto";*/


    
    
    newJogo.appendChild(newAppend);
    newJogo.appendChild(newPlacarContainer);
    /*newJogo.appendChild(Sport);*/
    container.appendChild(newJogo);


    console.log('Game created with id: ' + game_id);
    // Save game to localStorage
    saveGamesToStorage();
}

function DeleteGame(...id){
    

    for (let i = 0; i < id.length; i++){
        var game = document.getElementById(id[i]);
        game.remove(id);
    }
    // Update localStorage after removing game
    saveGamesToStorage();
}

function ChangePlacar(id, time1, time2){
    var game = document.getElementById(id);
    var PlacarContainer = game.children[1];
    var Placar = PlacarContainer.children[1];

    Placar.textContent = time1 + "x" + time2;
    // Save game to localStorage after changing placar
    saveGamesToStorage();
}

function ChangePage(page){
const btn = document.getElementById(page);

btn.onclick = () => {
    const group = document.getElementsByClassName("jogo");

    // Iterate through all elements with class 'jogo'
    for (let i = 0; i < group.length; i++) {
        const div = group[i];
        // Check if the current element has class '31'
        if (div.classList.contains(page)) {
            // Show elements with class '31'
            div.style.display = "block";
        } else {
            // Hide elements without class '31'
            div.style.display = "none";
        }
    }
}
}

ChangePage("31");
ChangePage("32");
ChangePage("33");
ChangePage("34");
ChangePage("35");
ChangePage("36");

const main = document.getElementById('30');

main.onclick = () => {
    const group = document.getElementsByClassName("jogo");

    // Iterate through all elements with class 'jogo'
    for (let i = 0; i < group.length; i++) {
        const div = group[i];
        div.style.display = "block";
    }
}


const editbtn = document.getElementById("edit")

editbtn.onclick = () => {
    var clicked = true;


    var PopUp = document.createElement("div");
    PopUp.id = "popup";
    PopUp.textContent = "Escolha uma ação."

    var actionSelector = document.createElement("select");

    var Action0 = document.createElement("option");
    Action0.value = " ";
    Action0.textContent = " ";
    actionSelector.appendChild(Action0);

    var Action1 = document.createElement("option");
    Action1.value = "CreateGame";
    Action1.textContent = "Criar Jogo";
    actionSelector.appendChild(Action1);

    var Action2 = document.createElement("option");
    Action2.value = "DeleteGame";
    Action2.textContent = "Deletar Jogo";
    actionSelector.appendChild(Action2);

    var Action3 = document.createElement("option");
    Action3.value = "Change Placar";
    Action3.textContent = "Mudar Placar";
    actionSelector.appendChild(Action3);
    

    actionSelector.onchange = () => {
        if (actionSelector.value == 'CreateGame'){
            var var1Label = document.createElement("label");
            var1Label.for = "Time1";
            var1Label.textContent = "Time 1:";
            PopUp.appendChild(var1Label);

            var inputvar1 = document.createElement("input");
            inputvar1.type = "text";
            var1Label.appendChild(inputvar1);

            var var2Label = document.createElement("label");
            var2Label.for = "Time2";
            var2Label.textContent = "Time 2:";
            PopUp.appendChild(var2Label);

            var inputvar2 = document.createElement("input");
            inputvar2.type = "text";
            var2Label.appendChild(inputvar2);

            var var3Label = document.createElement("label");
            var3Label.for = "Time1-color";
            var3Label.textContent = "Cor do time 1:";
            PopUp.appendChild(var3Label);

            var inputvar3 = document.createElement("input");
            inputvar3.type = "text";
            var3Label.appendChild(inputvar3);

            var var4Label = document.createElement("label");
            var4Label.for = "Time2-color";
            var4Label.textContent = "Cor do time 2:";
            PopUp.appendChild(var4Label);

            var inputvar4 = document.createElement("input");
            inputvar4.type = "text";
            var4Label.appendChild(inputvar4);

            var var5Label = document.createElement("label");
            var5Label.for = "Date";
            var5Label.textContent = "Data do jogo:";
            PopUp.appendChild(var5Label);

            var inputvar5 = document.createElement("input");
            inputvar5.type = "date";
            var5Label.appendChild(inputvar5);

            var PassLabel = document.createElement("label");
            PassLabel.for = "Password";
            PassLabel.textContent = "Senha:";
            PopUp.appendChild(PassLabel);

            var password = document.createElement("input");
            password.type = "text";
            PassLabel.appendChild(password);

            var submit = document.createElement("input");
            submit.type = "submit";
            submit.textContent = "Mandar";
            PopUp.appendChild(submit);

            submit.onclick = () => {
                if(password.value == Password){
                CreateGame(inputvar1.value,inputvar2.value,inputvar3.value,inputvar4.value,inputvar5.value);
                alert("Jogo criado com o id: " + game_id);
                PopUp.remove();
            }else{alert("Senha Errada")}
            }
        }
        else if (actionSelector.value == 'DeleteGame'){
            var var1Label = document.createElement("label");
            var1Label.for = "id";
            var1Label.textContent = "ID:";
            PopUp.appendChild(var1Label);

            var inputvar1 = document.createElement("input");
            inputvar1.type = "text";
            var1Label.appendChild(inputvar1);

            var PassLabel = document.createElement("label");
            PassLabel.for = "Password";
            PassLabel.textContent = "Senha:";
            PopUp.appendChild(PassLabel);

            var password = document.createElement("input");
            password.type = "text";
            PassLabel.appendChild(password);

            var submit = document.createElement("input");
            submit.type = "submit";
            submit.textContent = "Mandar";
            PopUp.appendChild(submit);

            submit.onclick = () => {
                if(password.value == Password){
                DeleteGame(inputvar1.value);
                alert("Jogo de id " + inputvar1.value + " deletado");
                PopUp.remove();
            }else{alert("Senha Errada")}
            }
        }

        

    }
    var closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.style.position = "fixed";
    closeButton.style.top = "5%";
    closeButton.style.right = "15%";
    closeButton.onclick = function() {
        PopUp.remove();
    };

    PopUp.appendChild(actionSelector);
    document.body.appendChild(PopUp);
    PopUp.appendChild(closeButton);
}