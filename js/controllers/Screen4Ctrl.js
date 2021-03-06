'use strict';
//The controller that displays team names and matchup for round one.

var module = angular.module('tabtracker');
module.controller('Screen4Ctrl', Screen4Ctrl);

function Screen4Ctrl($scope, $state){
	
	$scope.showTeams = function() {
		//var thisTournament = JSON.parse(localStorage.getItem('tournament'));
		this.name = tournament.name;
		this.round = tournament.roundNumber;
		this.pairings = window.pairings;
		//this.listAllTeams = JSON.parse(localStorage.getItem('listAllTeams'));
		//this.pairings = JSON.parse(localStorage.getItem('pairings'));
	}
	
	$scope.addPoints = function(team){
		team.button = false;
	};
	
	$scope.editPoints = function(team){
		team.button = true;
	};
	
	$scope.values = [0, 0.5, 1, 1.5, 2];
	
	$scope.saveRound = function() {
		tournament.roundNumber += 1;
		for (var i = 0; i < this.pairings.length; i++) {
			this.pairings[i].pTeam.record = pairings[i].pTeam.tempRecord + pairings[i].pTeam.record;
			this.pairings[i].pTeam.combinedStr = pairings[i].pTeam.combinedStr + pairings[i].pTeam.tempCS;
			this.pairings[i].pTeam.pointDiff = pairings[i].pTeam.temp1 + pairings[i].pTeam.temp2 + pairings[i].pTeam.pointDiff;
			this.pairings[i].dTeam.record = pairings[i].dTeam.tempRecord + pairings[i].dTeam.record;
			this.pairings[i].dTeam.combinedStr = pairings[i].dTeam.combinedStr + pairings[i].dTeam.tempCS;
			this.pairings[i].dTeam.pointDiff = pairings[i].dTeam.temp1 + pairings[i].dTeam.temp2 + pairings[i].dTeam.pointDiff;
		}
		//localStorage.setItem('listAllTeams', JSON.stringify(this.listAllTeams));
		//localStorage.setItem('pairings', JSON.stringify(this.pairings));
		//var thisTournament = JSON.parse(localStorage.getItem('tournament'));
		//thisTournament.roundNumber = thisTournament.roundNumber + 1;
		//localStorage.setItem('tournament', JSON.stringify(thisTournament));
	}
	
}