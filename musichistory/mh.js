var arrayOfArtists = [];
var arrayOfSongs = [];
var arrayOfAlbums = [];
var arrayOfDesc = [];

var storedSongs = [];


// Navigation
var navigation = document.getElementById("navigation");

navigation.addEventListener("click", function(event) {
  event.preventDefault();
  add-page.classList.add("hidden");
  list-page.classList.add("hidden");

  navigation.classList.add("visible");
  navigation.classList.remove("hidden");
});


/*var songs = [];
var replacement = [];
var newSongs = "";
var spellchecked = [];
var songElement = document.getElementById("songlist");
var array = [];

songs[songs.length] = " Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = " The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = " Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = " Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = " Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.splice(0, 0, "Looking at the World from the Bottom of a Well by Mike Doughty on the album Haughty Melodic");
songs.push(" Jesus etc by Wilco on the album Yankee Hotel Foxtrot");

function toStorage(){
// Count the array, then dump into spellcheck.
for (j=0;j<songs.length;j++){
//Spellcheck!	
	spellchecked = songs[j]
		.replace(/[*(!@]/g, "")
		.replace(/>/g, "-");
// Now we push it into a new array with some divs.
		array.push("<div>"+spellchecked+"</div>");	

	}
}

function toPrint(){
//Remove the commas
var masterstring = array.join(" ");

//Send to HTML
songElement.innerHTML = masterstring;
}


// New stuff
var artistInput = document.getElementById("artist-text");
artistInput.addEventListener("keypress", function (e){
		var key = e.keyCode;
		if (key === 13) {
			songs.push(artistInput.value)
			toStorage();	
			toPrint();
		}
	});



*/