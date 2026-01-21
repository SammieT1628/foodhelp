import { Schema, model } from "mongoose";

const ingredients = new Schema({
    name: {type: String, required: true},
    amount: {type: Number, required: true},
    notes: {type: String},
})

const instructions = new Schema({
    step: {type: String, required: true}
})

const recipe = new Schema({
    name: { type: String, required: true},
    ingredients: {type: [ingredients], required: true},

})