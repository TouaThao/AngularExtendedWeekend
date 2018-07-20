app.controller('ownerController',['petService',function(petService){

    let self = this;
    console.log('In owner controllers')

    self.getOwners = petService.storeOwnerData
    self.showOwnersfunction = petService.getowner

    //post
    self.addOwnerData = petService.storeOwnerData
    self.postOwner = petService.showOwnerPost


}]);
