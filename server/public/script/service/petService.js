app.service('petService', ['$http', function ($http) {


    console.log('IN side App.service')
    let self = this;
    self.testing = 'testing Unit';
    self.storePetData = { list: [] };
    self.storeOwnerData = { list: [] };

    //////////////////////////
                    //{{Pets}}
                            ////////////////////////


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
        });
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
            });
    }
    self.getPet()

  
    self.deletePets = function (show) {
        console.log('Checking',show)
        return $http.delete('/petsDataBase/' + show_id).then(function (response) {
            Swal("Deleted!", "Your Pet entry has been deleted.", "success");
            self.getPet();
        }).catch(function (err) {
            console.log('Error deleting message', err)
        });
    }

    // self.deletePets = function(pet){
    //     console.log('In Delete')
    //     $http({
    //         method:'DELETE',
    //         url:`/petDataBase/${pet.id}`
    //     })
    //     .then(function(res){
    //         self.getPet();
    //     })
    //     .catch(function(error){
    //         console.log(error)
    //     })
    // }

    self.savePet = function(show){
        $http({
            url:'/petsDataBase/showEdit',
            method: 'PUT',
            data: show
        })
        .then(function(response){
            // response.config.data.edit = false
            console.log('Got to self.savePet',response);
            self.getPet()
        })
        .catch(function(error){
            console.log('Error in self.savePet',error)
        });
    }

    ////////////{GET OWNER INFO SO we could use it}
                                                    ////////////////
    
                                                    
    self.getOwnerInfo = function(){
        console.log('Get owner for pet info')
        $http({
            method: 'GET',
            url: '/ownerDataBase/showOwner'
        })
        .then(function(response){
            console.log('Got the owner info', response)
            self.storeOwnerData.list = response.data;
        })
        .catch(function(error){
            console.log('Error in getting owner info')
        })
    }

//////////////////////////
                    //{{OWNER }}
                            ////////////////////////
    self.showOwnerPost = function(owner){
        console.log('IN self.showUpdatePost', owner)
        $http({
            url:'/ownerDataBase/showNew',
            method:'POST',
            data: owner
        })
        .then(function(res){
            console.log('GOt to Update Post')
            self.getowner()
        })
        .catch(function(error){
            console.log('In Post Error',error)
        })
    }

    self.getowner = function(){
        console.log('IN get Owner')
        $http({
            url:'/ownerDataBase/showOwner',
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


    


}]);