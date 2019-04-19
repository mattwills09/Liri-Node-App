
var fs = require("fs");
var axios = require("axios");
var Spotify = require("node-spotify-api");
var moment = require("moment");
require("dotenv").config();

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
// var spotify = new Spotify({
//     id: "4bd1c135cdc3491383776bbe7040c2fc",
//     secret: "c5e57c9127ee438bac920c069b67a50b"
// });

var action = process.argv[2];
var value = process.argv[3];

//--------------------------------------

switch (action) {
case "concert-this":
    concert();
    break;

case "spotify-this-song":
    song();
    break;

case "movie-this":
    movie();
    break;

case "do-what-it-says":
    doWhat();
    break;
}

//--------------------------------------

function concert() {

    var nodeArgs = process.argv;
    var artistName = "";
    
    for (var i = 3; i < nodeArgs.length; i++) {
        if (i > 3 && i < nodeArgs.length) {
            artistName = artistName + "+" + nodeArgs[i];
    }
    else {
        artistName += nodeArgs[i];
    }}

    console.log(artistName);

    var queryUrl = "https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp";

    console.log(queryUrl);

    axios.get(queryUrl).then(
        function(response) {

            console.log("Next Show Venue: " + response.data[0].venue.name);
            console.log("Venue Location: " + response.data[0].venue.city + ", " + response.data[0].venue.region);

            var date = response.data[0].datetime;
            console.log(date);
            
            var showDate = moment(date).format("MM/DD/YYYY");
            console.log("Date: " + showDate);

    });
}

//--------------------------------------


function song() {

    var nodeSongs = process.argv;
    var songName = "";
    
    for (var i = 3; i < nodeSongs.length; i++) {
        if (i > 3 && i < nodeSongs.length) {
        songName = songName + "+" + nodeSongs[i];
    }
    else {
        songName += nodeSongs[i];
        }
    }

    console.log(songName);

    spotify.search({ type: 'track', query: songName }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
    console.log(data.tracks.items[0]);
    })
};

//-----------------------------------------

function movie() {

    var nodeMovies = process.argv;
    var movieName = "";
    
    for (var i = 3; i < nodeMovies.length; i++) {
        if (i > 3 && i < nodeMovies.length) {
        movieName = movieName + "+" + nodeMovies[i];
    }
    else {
        movieName += nodeMovies[i];
        }
    }

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

console.log(queryUrl);

axios.get(queryUrl)
    .then(function(response) {

        console.log(response.data.Title);
        console.log("Release Date: " + response.data.Released);
        console.log("IMDB Rating: " + response.data.Ratings[0].Value);
        console.log("Rotten Tomatoes Score: " + response.data.Ratings[1].Value);
        console.log("Country Produced In: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Cast: " + response.data.Actors);
});
}

//--------------------------------------

// function doWhat() {

// }