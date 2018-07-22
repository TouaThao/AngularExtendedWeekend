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

    //Delete button
    self.PetId = function(show){
        Swal({
            title: 'Are you sure?',
            text: 'You will not be able to recover this entry once deleted!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                petService.deletePets(show);
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

self.editMode = petService.savePet;

// self.editMode = function(show){
//     console.log(show)
//     show.edit = true;
// }
self.cancelEditMode = function(show){
    show.edit = false;
}

self.savePet = function(show){
    console.log(show);
    petService.savePet(show);
}

}]);
