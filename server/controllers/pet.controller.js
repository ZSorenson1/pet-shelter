const { request, response } = require('express');
const { Pet } = require('../models/pet.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.allPets = (request, response) => {
    Pet.find({})
    .then(allPets => response.json(allPets))
    .catch(err => response.json({message: "Something went wrong", error: err}))
}

module.exports.findPet = (request, response) => {
    Pet.findOne({_id: request.params.id})
    .then(pet => response.json(pet))
    .catch(err => response.json({message: "Something went wrong", error: err}))
}

module.exports.createPet = (request, response) => {
    const { name, type, desc, skill1, skill2, skill3 } = request.body;
    Pet.create({
        name,
        type,
        desc,
        skill1, skill2, skill3
    })
    .then(pet => response.json(pet))
    .catch(err => response.json(err));
}

module.exports.editPet = (request, response) => {
    Pet.findOneAndUpdate({_id: request.params.id}, request.body, {new: true})
    .then(pet => response.json(pet))
    .catch(err => response.json(err))
}

module.exports.deletePet = (request, response) => {
    Pet.deleteOne({_id: request.params.id})
    .then(res => response.json(res))
    .catch(err => response.json(err))
}