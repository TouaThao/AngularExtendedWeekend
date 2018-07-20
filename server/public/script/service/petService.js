app.service('petService', ['$http', function ($http) {


    console.log('IN side App.service')
    let self = this;
    self.testing = 'testing Unit';
    self.storePetData = { list: [] };
    self.storeOwnerData = { list: [] };
    //post
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
    //get
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

    self.deletePets = function(id){
        console.log('IN Delte Pets')
        return $http({
            url:`/petsDataBase/removePets/${id}`,
            method:'DELETE'
        })
        .then(function(res){
            console.log('delete', res)
            self.getPet()
        })
        .catch(function(error){
            console.log('IN delete Error',error)
        })
    }


    self.getowner = function(){
        console.log('IN get Owner')
        $http({
            url:'/petsDataBase/showOwner',
            method: 'GET'
        })
        .then(function(res){
            console.log('In GET Owner', res)
            self.storeOwnerData.list = res.data
        })
        .catch(function(error){
            console.log('in get Owner Error',error)
        });
    }
    self.getowner()

    // self.getOwnerPost = function(show){
    //     $http({
    //         url:'/petsDataBase/ownerpost',
    //         method: 'POST',
    //         data: show
    //     })
    //     .then(function(res){
    //         console.log('IN Post Owner', res)
    //         self.getowner()
    //     })
    //     .catch(function(error){
    //         console.log('IN post owner error',error)
    //     });
    // }

    self.showOwnerPost = function(view){
        console.log('IN self.showUpdatePost')
        $http({
            url:'/petsDataBase/showNew',
            method:'POST',
            data: view
        })
        .then(function(res){
            console.log('GOt to Update Post')
            self.getowner()
        })
        .catch(function(error){
            console.log('In Post Error',error)
        })
    }
    


}]);