angular.module('trivia').service('triviaSrvc', function($http){
    this.getProducts = function(){
        return $http.get('https://practiceapi.devmountain.com/api/trivia/questions/').then((res)=>{
            // console.log(res.data)
            return res.data
        })
    }
})