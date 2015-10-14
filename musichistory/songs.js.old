var songs = [];
var replacement = "";
var newSongs = "";
var spellchecked = "";
var songElement = document.getElementById("songlist");


songs[songs.length] = " Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = " The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = " Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = " Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = " Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.splice(0, 0, "Looking at the World from the Bottom of a Well by Mike Doughty on the album Haughty Melodic");
songs.push(" Jesus etc by Wilco on the album Yankee Hotel Foxtrot");


for (i=0;i<songs.length;i++){
	replacement = songs + songs[i];
	spellchecked = replacement
		.replace(/[*(!@]/g, "")
		.replace(/>/g, "-");

}

//console.log (spellchecked);
songElement.innerHTML = spellchecked;

