// // Create an element to serve as the navigation bar for your application.

// // If there are no messages, then the clear messages button should be disabled (see example above).
// The navigation bar should remain at the top of the screen, even if the contents of the page start to scroll.





// GETS USER MESSAGE INTO MESSAGE BOX

var clearButton = document.getElementById("clear-button");
var messageBoard = document.getElementById("messages");



var radioButtons = document.getElementById("radioButtons");


var users = {
  names: ["Xavier", "Joanna", "Mackenzie", "Gunter", "Iveta", "Sven"]
};


function listButtons() {
	for (i = 0; i < users.length; i++) {
		console.log(users[i]);
		radioButtons.innerHTML = "<div>" + "users[i]" + "</div>";
		console.log(users[i]);
	}
console.log(users[i]);
}

console.log(users[i]);
listButtons();







var date = new Date;
var seconds = date.getSeconds();
var minutes = date.getMinutes();
var hour = date.getHours();

var year = date.getFullYear();
var month = date.getMonth(); // beware: January = 0; February = 1, etc.
var day = date.getDate();

var dayOfWeek = date.getDay(); // Sunday = 0, Monday = 1, etc.
var milliSeconds = date.getMilliseconds();

console.log(hour+":"+minutes+":"+seconds);



var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];



var messageField = document.getElementById("message-field");
messageField.addEventListener("keydown", function whenEnter  (keypress) {
  if (keypress.keyCode === 13) {
  	console.log("message", messageField.value);
  	var message = messageField.value;
  	printMessage(message);

  	function printMessage (message) {
  		if (message === "") {
  			messageBoard.innerHTML = "<div id='null-message' class='user-message'>You entered no message.<button id='delete'>Delete</button><hr></div>" + messageBoard.innerHTML;
  		} else {messageBoard.innerHTML = "<div class='user-message'>" + message + "<button id='delete'>Delete</button><hr></div>" + messageBoard.innerHTML;}

  	}


  	clearInput();

  	function clearInput() {
  		messageField.value = "";
  		console.log(messageField.value);
  	} 
  }
});

// CLEAR WHOLE MESSAGE BOX

clearButton.addEventListener("click", function () {
	messageBoard.innerHTML = "";
});

// DISABLED CLEAR MESSAGE BOARD BUTTON 

clearButton.setAttribute("disabled", true);

if (messageBoard.innerHTML !== "") {
	clearButton.setAttribute("disabled", false);
	console.log("legnth", messageBoard.innerHTML);
}

// if (messageBoard.innerHTML !== "") {
// 	clearButton.disabled = false;
// } else {clearButton.disabled = true;}






// NOW TO DELETE MESSAGE

document.querySelector("body").addEventListener("click", function (event) {
	if (event.target.id === "delete") {
		deletePost(event);

	}
});

var deletePost = function(localPost) {
	localPost.target.parentNode.remove(localPost);
}










var webpage = document.getElementById("everything");


// TO MAKE LARGE TEXT TOGGLE


var largeTextCheck = document.getElementById("large-text");
largeTextCheck.addEventListener("click", largify);

function largify () {
	webpage.classList.toggle("large-text");
}

// TO MAKE DARK THEME TOGGLE

var darkThemeCheck = document.getElementById("dark-theme");
darkThemeCheck.addEventListener("click", darkify);

function darkify () {
	webpage.classList.toggle("dark-theme");
}
