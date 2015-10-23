var songs = [];
var newSongs = [];
var songElement = document.getElementById("songbox");


for (i = 0; i < songs.length; i++){
// # of characters in each array position
//	console.log(songs[i].length);

// Put the spelled out version into a single variable and replace those no good typos, globally.	
newSongs = songs[i].replace(/[()*>@!]/g, "");

// Need some breaks between songs.
songElement.innerHTML += "<div>" + newSongs + "</div>"; 
}

