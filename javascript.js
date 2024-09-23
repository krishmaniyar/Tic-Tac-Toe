var Person = function (name, turn) {
    this.name = name;
    this.wins = 0;
    this.lost = 0;
    this.ties = 0;
    this.turn = turn;
}

var name1 = "";
var name2 = "";

const input1 = document.getElementById("input1");

document.getElementById("Submit").addEventListener("click",() =>
{
    name1 = document.getElementById("person_1_").value;
    name2 = document.getElementById("person_2_").value;
    document.getElementById("details").reset();
    input1.remove();
    content.append(container);
    player1 = new Person(name1,1);
    player2 = new Person(name2,0);
    showdetails();
});

var player1;
var player2;

// Displaying player1 details
function showdetails() {
    document.getElementById("player_1").innerHTML = "<h3>Name : " + player1.name + "</h3>" + "<h3>Wins : " + player1.wins + "</h3>";
    document.getElementById("player_1").innerHTML += "<h3>Ties : " + player1.ties + "</h3><h3>Symbol : X</h3>";
    document.getElementById("player_2").innerHTML = "<h3>Name : " + player2.name + "</h3>" + "<h3>Wins : " + player2.wins + "</h3>";
    document.getElementById("player_2").innerHTML += "<h3>Ties : " + player2.ties + "</h3><h3>Symbol : O</h3>";
}

//filling x and o on screen

let grid = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function reset1() {
    grid = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let i = 0;
    for (i = 0; i < 9; i++) {
        let grid = "grid" + Number(i + 1) + "";
        document.getElementById(grid).innerHTML = "";
        document.getElementById(grid).style.backgroundColor = "";
    }
    player1.turn = 1;
}

function fill(gridId, num) {
    if (player1.turn == 2) {
        alert("Game is Over! Restart to play again.");
    }
    else
    {
        if (grid[num - 1] != 0) {
            alert("Invalid!");
        }
        else {
            if (player1.turn == 1) {
                document.getElementById(gridId).innerHTML = "<h1>X</h1>";
                player1.turn = 0;
                grid[num - 1] = 1;
                logic(1);
            }
            else {
                document.getElementById(gridId).innerHTML = "<h1>O</h1>";
                player1.turn = 1;
                grid[num - 1] = 2;
                logic(2);
            }
            console.log(grid);
        }
    }
}

function logic(player) {
    if (grid[0] == player && grid[1] == player && grid[2] == player) {
        document.getElementById("grid1").style.backgroundColor = "green";
        document.getElementById("grid2").style.backgroundColor = "green";
        document.getElementById("grid3").style.backgroundColor = "green";
        if (player == 1) {
            player1.wins++;
            player2.lost++;
        }
        else {
            player2.wins++;
            player1.lost++;
        }
        player1.turn = 2;
    }
    else if (grid[3] == player && grid[4] == player && grid[5] == player) {
        document.getElementById("grid4").style.backgroundColor = "green";
        document.getElementById("grid5").style.backgroundColor = "green";
        document.getElementById("grid6").style.backgroundColor = "green";
        if (player == 1) {
            player1.wins++;
            player2.lost++;
        }
        else {
            player2.wins++;
            player1.lost++;
        }
        player1.turn = 2;
    }
    else if (grid[6] == player && grid[7] == player && grid[8] == player) {
        document.getElementById("grid7").style.backgroundColor = "green";
        document.getElementById("grid8").style.backgroundColor = "green";
        document.getElementById("grid9").style.backgroundColor = "green";
        if (player == 1) {
            player1.wins++;
            player2.lost++;
        }
        else {
            player2.wins++;
            player1.lost++;
        }
        player1.turn = 2;
    }
    else if (grid[0] == player && grid[3] == player && grid[6] == player) {
        document.getElementById("grid1").style.backgroundColor = "green";
        document.getElementById("grid4").style.backgroundColor = "green";
        document.getElementById("grid7").style.backgroundColor = "green";
        if (player == 1) {
            player1.wins++;
            player2.lost++;
        }
        else {
            player2.wins++;
            player1.lost++;
        }
        player1.turn = 2;
    }
    else if (grid[1] == player && grid[4] == player && grid[7] == player) {
        document.getElementById("grid2").style.backgroundColor = "green";
        document.getElementById("grid5").style.backgroundColor = "green";
        document.getElementById("grid8").style.backgroundColor = "green";
        if (player == 1) {
            player1.wins++;
            player2.lost++;
        }
        else {
            player2.wins++;
            player1.lost++;
        }
        player1.turn = 2;
    }
    else if (grid[2] == player && grid[5] == player && grid[8] == player) {
        document.getElementById("grid3").style.backgroundColor = "green";
        document.getElementById("grid6").style.backgroundColor = "green";
        document.getElementById("grid9").style.backgroundColor = "green";
        if (player == 1) {
            player1.wins++;
            player2.lost++;
        }
        else {
            player2.wins++;
            player1.lost++;
        }
        player1.turn = 2;
    }
    else if (grid[0] == player && grid[4] == player && grid[8] == player) {
        document.getElementById("grid1").style.backgroundColor = "green";
        document.getElementById("grid5").style.backgroundColor = "green";
        document.getElementById("grid9").style.backgroundColor = "green";
        if (player == 1) {
            player1.wins++;
            player2.lost++;
        }
        else {
            player2.wins++;
            player1.lost++;
        }
        player1.turn = 2;
    }
    else if (grid[2] == player && grid[4] == player && grid[6] == player) {
        document.getElementById("grid3").style.backgroundColor = "green";
        document.getElementById("grid5").style.backgroundColor = "green";
        document.getElementById("grid7").style.backgroundColor = "green";
        if (player == 1) {
            player1.wins++;
            player2.lost++;
        }
        else {
            player2.wins++;
            player1.lost++;
        }
        player1.turn = 2;
    }
    else if(grid[0]!=0 && grid[1]!=0 && grid[2]!=0 && grid[3]!=0 && grid[4]!=0 && grid[5]!=0 && grid[6]!=0 && grid[7]!=0 && grid[8]!=0)
    {
        player1.ties++;
        player2.ties++;
    }
    showdetails();
}

const container = document.getElementById("container");
const content = document.getElementById("content");

input();

function input()
{
    container.remove();
}