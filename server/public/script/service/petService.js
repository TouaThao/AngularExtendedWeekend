app.service('petService', ['$http', function ($http) {


    console.log('IN side App.service')
    let self = this;
    self.testing = 'testing Unit';
    self.storePetData = { list: [] };
    self.storeOwnerData = { list: [] };


    //////////////////////////
    //{{Pets}}
    ////////////////////////


    /// Put for check in

    self.checkIn = function (pet) {
        $http({
            url: `/petsDataBase/checkIn`,
            method: 'PUT',
            data: pet,
        }).then(function (response) {
            console.log('PUT', response);   
            
        }).catch(function (error) {
            console.log('error in PUT', error);
        })
    }

    //post
    self.showUpdatePost = function (show) {
        console.log('IN self.showUpdatePost')
        $http({
            url: '/petsDataBase/post',
            method: 'POST',
            data: show
        })
            .then(function (res) {
                console.log('GOt to Update Post')
                self.getPet()
            })
            .catch(function (error) {
                console.log('In Post Error', error)
            });
    }
    //get
    self.getPet = function () {
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

    ///Delete

    self.deletePet = function (removePet) {
        console.log('Deleting from database: ', removePet);
        $http({
            method: 'DELETE',
            url: `/petsDataBase/${removePet.id}`,

        })
            .then(function (response) {
                console.log('Successful DELETE: ', response);
                self.getPet();
            })
            .catch(function (error) {
                console.log('Error with DELETE: ', error);
            })
    }

    // Editing

    self.savePet = function (pet) {
        $http({
            url: '/petsDataBase/showEdit',
            method: 'PUT',
            data: pet
        })
            .then(function (response) {
                console.log('Got to self.savePet', response);
                self.getPet();
            })
            .catch(function (error) {
                console.log('Error in self.savePet', error)
            });
    }

    // pet editing data

    self.savePetData = function(pets){
        $http({
            url:'/petsDataBase/save',
            method:'put',
            data: pets
        })
        .then(function(reponse){
            console.log('Got to savePetData PUT ')
            self.getpet()
        })
        .catch(function(error){
            console.log('error in savePetData', error)
        })
    }

    ////////////{GET OWNER INFO SO we could use it}
    ////////////////


    self.getOwnerInfo = function () {
        console.log('Get owner for pet info')
        $http({
            method: 'GET',
            url: '/ownerDataBase/showOwner'
        })
            .then(function (response) {
                console.log('Got the owner info', response)
                self.storeOwnerData.list = response.data;
            })
            .catch(function (error) {
                console.log('Error in getting owner info')
            })
    }

    //////////////////////////
    //{{OWNER }}
    ////////////////////////
    self.showOwnerPost = function (owner) {
        console.log('IN self.showUpdatePost', owner)
        $http({
            url: '/ownerDataBase/showNew',
            method: 'POST',
            data: owner
        })
            .then(function (res) {
                console.log('GOt to Update Post')
                self.getowner()
            })
            .catch(function (error) {
                console.log('In Post Error', error)
            })
    }

    self.getowner = function () {
        console.log('IN get Owner')
        $http({
            url: '/ownerDataBase/showOwner',
            method: 'GET'
        })
            .then(function (res) {
                console.log('In GET Owner', res)
                self.storeOwnerData.list = res.data
            })
            .catch(function (error) {
                console.log('in get Owner Error', error)
            });
    }
    self.getowner()

    /// Delete Owner

    self.deleteOwner = function(removeowner){

        $http({
            url:`/ownerDataBase/${removeowner}`,
            method: 'DELETE'

        })
        .then((response)=>{
            self.getowner();

        })
        .catch((error)=>{
            console.log('In Owner Delete error',error)
        })
    }



}]);