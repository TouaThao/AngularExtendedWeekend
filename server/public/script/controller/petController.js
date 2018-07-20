app.controller ('petController',['petService', function(petService){

    let self = this;
    console.log('in pet controllers')

    self.getPets = petService.storePetData

    self.showPetfunction = petService.getPet

}]);