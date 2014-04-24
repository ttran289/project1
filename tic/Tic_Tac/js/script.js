var tptApp = angular.module ('tptApp', []);
tptApp.controller('TptController', function ($scope){ 
	//Creates a 1D array
	$scope.cells = [' ',' ',' ',' ',' ',' ',' ',' ',' '];
  $scope.counter = 0;
  $scope.incrementer = 0;
  $scope.firstGame = true;
  $scope.player1=3;
  $scope.player2=3;
  $scope.gameOver=false;
  var player;

$scope.newGame = function(softReset){
  $scope.incrementer <= 9;
  for (var i = 0; i < 9; i++){
    $scope.cells[i] = " "
    $scope.incrementer = 0;
    $scope.gameOver = false;
    $scope.counter = 0;
  }
  
};
$scope.newSet = function (hardreset){
  $scope.incrementer <=9;
  for (var i = 0; i < 9; i++){
    $scope.cells[i] = " "
    $scope.incrementer = 0;
    $scope.player1 = 3;
    $scope.player2 = 3;
    $scope.gameOver = false;
    $scope.counter = 0;
  }
};
$scope.makeMove = function (cellIndex){
          if($scope.gameOver){
            return;
          }
          if ($scope.cells[cellIndex] === " "){
               if ($scope.counter % 2 == 0){
                         $scope.cells[cellIndex]= "X";
                         player = "Sub Zero";
                         console.log($scope.cells[cellIndex]);
                    }
                  else {
                      $scope.cells[cellIndex]= "O";
                      player = "Scorpion";
                      console.log($scope.cells[cellIndex]);       
                        }
                      $scope.counter++
                      console.log(player);
                      $scope.incrementer++;
                 }  
          console.log($scope.incrementer);
        if ($scope.incrementer > 4){ 
          $scope.checkwin(); 
          } 
        }
$scope.checkwin = function (cellIndex){
    if (($scope.cells[0] == $scope.cells[1] && $scope.cells[1] == $scope.cells[2] && $scope.cells[0]) != ' ' ||
        ($scope.cells[3] == $scope.cells[4] && $scope.cells[4] == $scope.cells[5] && $scope.cells[3]) != ' ' ||
        ($scope.cells[6] == $scope.cells[7] && $scope.cells[7] == $scope.cells[8] && $scope.cells[6]) != ' ' ||
        ($scope.cells[0] == $scope.cells[3] && $scope.cells[3] == $scope.cells[6] && $scope.cells[0]) != ' ' ||
        ($scope.cells[1] == $scope.cells[4] && $scope.cells[4] == $scope.cells[7] && $scope.cells[1]) != ' ' ||
        ($scope.cells[2] == $scope.cells[5] && $scope.cells[5] == $scope.cells[8] && $scope.cells[2]) != ' ' ||
        ($scope.cells[0] == $scope.cells[4] && $scope.cells[4] == $scope.cells[8] && $scope.cells[0]) != ' ' ||
        ($scope.cells[2] == $scope.cells[4] && $scope.cells[4] == $scope.cells[6] && $scope.cells[2]) ){
          
          console.log(player + " Has Won!");
          $scope.gameOver=true;
        
        switch(player)
        {
          case "Sub Zero":
            $scope.player2--;
            break;
          case "Scorpion":
            $scope.player1--;
            break;
        }
               }  
               else if ($scope.cells[0] != " " && $scope.cells[1] != " " && $scope.cells[2] != " " && $scope.cells[3] != " " && $scope.cells[4] != " " && $scope.cells[5] != " " && $scope.cells[6] != " " && $scope.cells[7] != " " && $scope.cells[8] != " ") {
                    console.log("tie game yo!!!")
                    
               };  
      }

});




