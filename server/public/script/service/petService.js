app.service('petService', ['$http', function ($http) {


    console.log('IN side App.service')
    let self = this;
    self.testing = 'testing Unit';
    self.storePetData = { list: [] };

    self.showUpdatePost = function(show){
        console.log('IN self.showUpdatePost')
        $http({
            url:'/petsDataBase/post',
            method:'POST',
            data: show
        })
        .then(function(res){
            console.log('GOt to Update Post')
            self.getPet()
        })
        .catch(function(error){
            console.log('In Post Error',error)
        })
    }

    self.getPet = function () {
        console.log('In self.getPet', self.testing)
        $http({
            url: '/petsDataBase/showPets',
            // url need to match what server use on app.use
            // There for app.use /petsDataBase so we need to put it in
            // to make this work
            method: 'GET'
        })
            .then(function (res) {
                console.log('In GET Pet ', res)
                self.storePetData.list = res.data
            })
            .catch(function (error) {
                console.log('In getPet error', error)
            })
    }
    self.getPet()



}]);