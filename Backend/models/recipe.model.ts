import { Schema, model } from "mongoose";

const ingredients = new Schema({
    name: {type: String, required: true},
    amount: {type: Number, required: true},
    notes: {type: String},
})

const directions = new Schema({
    step: {type: String, require: true},
    help: {type: String},
})

const recipe = new Schema({
    name: { type: String, required: true},
    ingredients: {type: [ingredients], required: true},
    directions: {type: [directions], required: true},
})