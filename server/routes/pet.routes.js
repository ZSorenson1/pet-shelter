const PetController = require('../controllers/pet.controller');

module.exports = function(app){
    app.get('/api' , PetController.index);
    app.get('/api/pets', PetController.allPets);
    app.get('/api/pets/:id', PetController.findPet);
    app.put('/api/pets/:id/edit', PetController.editPet);
    app.delete('/api/pets/:id/delete', PetController.deletePet);
    app.post('/api/pets/new', PetController.createPet);
}