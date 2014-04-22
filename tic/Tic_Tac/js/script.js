var X_score = []
var Y_score =[]
var tptApp = angular.module ('tptApp', []);
tptApp.controller('TptController', function ($scope) { 
	//Creates a 1D array
	$scope.cells = [' ',' ',' ',' ',' ',' ',' ',' ',' '];
	$scope.isXTurn = true;
	$scope.makeMove = function (clickedCellindex) {
		if($scope.cells[clickedCellindex] === ' ') {
		$scope.cells[clickedCellindex] = $scope.isXTurn?1:-1;
		$scope.isXTurn = !$scope.isXTurn;
		console.log($scope.cells);
		$scope.checkWin()
		$scope.tieGame()
		console.log($scope.isXTurn) ;
		}
	};
$scope.checkWin = function(){
	//this will go through all the winning array of X and O
	
	if ($scope.cells[0] + $scope.cells[1] + $scope.cells[2] == 3 ||
		$scope.cells[3] + $scope.cells[4] + $scope.cells[5] == 3 ||
		$scope.cells[6] + $scope.cells[7] + $scope.cells[8] == 3 ||
		$scope.cells[0] + $scope.cells[3] + $scope.cells[6] == 3 ||
		$scope.cells[1] + $scope.cells[4] + $scope.cells[7] == 3 ||
		$scope.cells[2] + $scope.cells[5] + $scope.cells[8] == 3 ||
		$scope.cells[0] + $scope.cells[4] + $scope.cells[8] == 3 ||
		$scope.cells[2] + $scope.cells[4] + $scope.cells[6] == 3){
			 alert ("X win");
			$scope.gameOver = true;
		}
	else if	($scope.cells[0] + $scope.cells[1] + $scope.cells[2] == -3 ||
			 $scope.cells[3] + $scope.cells[4] + $scope.cells[5] == -3 ||
			 $scope.cells[6] + $scope.cells[7] + $scope.cells[8] == -3 ||
			 $scope.cells[0] + $scope.cells[3] + $scope.cells[6] == -3 ||
			 $scope.cells[1] + $scope.cells[4] + $scope.cells[7] == -3 ||
			 $scope.cells[2] + $scope.cells[5] + $scope.cells[8] == -3 ||
			 $scope.cells[0] + $scope.cells[4] + $scope.cells[8] == -3 ||
			 $scope.cells[2] + $scope.cells[4] + $scope.cells[6] == -3){
			 alert ("O win");	
			$scope.gameOver = true;
			}	
	
		}
	//this function will reset the game when the win condition has been met!	
	if ($scope.gameOver == true){
		$scope.cells = [' ',' ',' ',' ',' ',' ',' ',' ',' '];
		$scope.isXTurn = true;
		$scope.gameOver = false;
	}
});

