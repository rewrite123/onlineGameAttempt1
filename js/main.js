
var database = firebase.database();

document.getElementById("gameIdInput").value = localStorage.getItem("currentGame") || "";

var Game = function(){
	
	this.gameId = localStorage.getItem("currentGame") || "";
	
	this.myCharacter = 1;
	
	this.totalGames = 0;
	this.sideOneWins = 0;
	this.sideTwoWins = 0;
	
	this.resetGameId = function(){
		this.gameId = document.getElementById("gameIdInput").value || "";
		localStorage.setItem("currentGame", this.gameId);
	}
	
	this.resetGame = function(){
		
	}
	
	this.gameState = [
		[-1, -1, -1],
		[-1, -1, -1],
		[-1, -1, -1]
	];
	this.currentTurn = 0;
	
	this.claim = function(row, col){
		this.gameState[row][col] = this.myCharacter;
	}
	
	database.ref().on("value", function(snapshot) {
		if( snapshot.child("isInit").exists() ){
			
		}else{
			database.ref().set({
				isInit: true,
				playerOne: 1,
				playerTwo: 2,
				gameState: "c0c0c0rc0c0c0rc0c0c0",
				turn: 0,
				playerOneWins: 0,
				playerTwoWins: 0,
				totalGames: 0
			});
		}
	},
	function(errorObject) {
		console.log("The read failed: " + errorObject.code);
	});
	
}

var game = new Game();