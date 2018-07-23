app.controller ('petController',['petService', function(petService){

    let self = this;
    console.log('in pet controllers')
    //All GET
    self.getPets = petService.storePetData
    self.showPetfunction = petService.getPet;
    self.getOwner = petService.storeOwnerData;

    // ALL Post
    self.showNewAddedPet = petService.storePetData;
    self.post = petService.showUpdatePost;

    // Get owner info from service
    petService.getOwnerInfo()
    self.getOwnerName = petService.getOwnerName;


    // check in
    self.checkIn = function(pet){
        pet.checkIn = !pet.checkIn;
        petService.checkIn(pet)
    }

    //Delete button

    self.PetId = function(removePet){
        Swal({
            title: 'Are you sure?',
            text: 'You will not be able to recover this entry once deleted!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                petService.deletePet(removePet);
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal(
                    'Cancelled',
                    'Your entry is safe :)',
                    'error'
                )
            }
        });
    }

///// Edit

// self.editMode = petService.savePet;


self.edit = function(pet){
    pet.editMode = true;
}

self.cancelEditMode = function(pet){
    pet.editMode = false;
    petService.getPet();
}

self.savePet = function(pet){
    pet.editMode = false
    console.log(pet);
    petService.savePetData(pet);
}


}]);
