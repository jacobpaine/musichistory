var songs = [];
var newSongs = [];
var songElement = document.getElementById("songbox");


songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";


for (i = 0; i < songs.length; i++){
// # of characters in each array position
//	console.log(songs[i].length);

// Put the spelled out version into a single variable and replace those no good typos, globally.	
newSongs = songs[i].replace(/[()*>@!]/g, "");

// Need some breaks between songs.
songElement.innerHTML += "<div>" + newSongs + "</div>"; 
}

