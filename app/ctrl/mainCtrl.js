angular.module('trivia').controller('mainCtrl',function($scope, triviaSrvc){
    $scope.qs = 'this is not working'

    triviaSrvc.getProducts().then(res=> {

        res.map((e, i, array) =>{
            if(e.difficulty === 1){
                res[i].labelDifficulty = 'Easy';
            }
            if(e.difficulty === 2){
                res[i].labelDifficulty = 'Medium';
            }
            if(e.difficulty === 3){
                res[i].labelDifficulty = 'Hard';
            }
        })

        $scope.qs = res
    })
})