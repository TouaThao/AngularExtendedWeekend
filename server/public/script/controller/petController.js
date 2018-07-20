app.controller ('petController',['petService', function(petService){

    let self = this;
    console.log('in pet controllers')
    //All GET
    self.getPets = petService.storePetData
    self.showPetfunction = petService.getPet;

    // ALL Post
    self.showNewAddedPet = petService.storePetData;
    self.post = petService.showUpdatePost;

    //Delete button

    self.PetId = petService.deletePets;

    

}]);