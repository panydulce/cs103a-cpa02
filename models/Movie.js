'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;

var movieSchema = Schema( {
    Release_Date: String,
    Title: String,
    Overview: String,
    Popularity: Number,
    Vote_Count: Mixed,
    Vote_Average: Mixed,
    Original_Language: String,
    Genre: String,
    Poster_Url: String,
} );

module.exports = mongoose.model( 'Movie', movieSchema );
