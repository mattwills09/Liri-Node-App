# LIRI (Language Interpreting and Recognition Interface) Node Terminal App

In this project we were asked to create a language interpreting and recognition interface, or LIRI, that users could use to input a simple command to the terminal, along with some further search criteria, and be given clear and updated information for that artist or movie or whatever the user would be searching for.  The user is able to search for an artist/band, song, or movie, and then using API calls, be given either show locations and times for a band's next show using the Bands In Town API, or the rating, cast and synopsis for any movie through OMDb's API, or lastly through Spotify's API, search by any song name to find that release year, album, etc.

## Getting Started

To run the LIRI Node Application after cloning the repository, run 'npm install' to install required node modules (including FS, Axios, Spotify and Moment), then simply open a terminal to run a Node JS application, and then the four options users can run are:
-  Movies:  $ node liri.js movie-this <movie title>
-  Concerts:  $ node liri.js concert-this <artist name>
-  Songs:  $ node liri.js spotify-this-song <song title>
-  Do What It Says:  $ node liri.js do-what-it-says  (runs a preselected code that is in the random.txt file)
  
Throughout this project, the aspects that I found to go smoothy was finding, downloading and implementing the API keys, calling the query URLs, and setting variables to be used for the functions.  The bugs that I had encountered with this project was after writing the function code for the 'concert', 'song', and 'movie', and then figuring out how the code for those would be added to the 'doWhat' function.  Not wanting to copy and paste long lines of code over again, I worked with two associates to end up writing one 'querySearch' that can be added in each function (to shorten each), and then be able to call those functions in the 'doWhat' function without having to add excess code.  After that edit was made to the liri.js file, the project became much easier to understand through the code, and also with implementing each function.  In the future, the ability for all the information found through each search will be appended to a txt file for the users' records.

---
  
* Using the API keys, and requiring FS, Axios, Spotify and moment - and installing those node-modules through the terminal window - the user is able to use the correct query URL's to call upon their servers when the required code is entered.  Variables were also created for the process.argv string to be used in each function, for each Concert, Song, Movie, and a function named 'doWhat' that will take the entered string - separate it as the 'action' and 'value', and then run the correct search for the information.  There were also default values set for the 'movie' and 'song' searches as well when no term is used for the search.  Screenshots for each of those will be provided below:

---

![BandsInTown - 'concert-this' Request](images/Liri-ConcertThis.jpg)
![concert-this - Code](images/Liri-ConcertThis-Code.jpg)
![Spotify - 'song-this' Request](images/Liri-SpotifyThisSong.jpg)
![OMDb - 'movie-this' Request](images/Liri-MovieThis.jpg)
![do-what-it-says Song Requests](images/Liri-doWhat-song.jpg)
![do-what-it-says Movie Requests](images/Liri-doWhat-movie.jpg)
![do-what-it-says Concert Requests](images/Liri-doWhat-concert.jpg)

___

## Built With

* [JavaScript](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Node JS](https://maven.apache.org/) - Dependency Management
* [Spotify API](https://developer.spotify.com/documentation/web-api/) - Used to generate song information
* [Bands In Town API](https://www.artists.bandsintown.com/bandsintown-api) - Used to generate band concert information
* [OMDb API](http://www.omdbapi.com/) - Used to generate movie info and details

## Authors

* **Matthew Williams** - *Initial work* - [Portfolio Page](https://mattwills09.github.io/portfolio.html)
