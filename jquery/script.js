

$(document).onready(function() {
  // All the JavaScript that depends on jQuery will be written here

  // Select the article DOM element by its id attribute
  var article = $("#top-article");
  console.log(article.html());
});

$(document).onready(function() {
  // All the JavaScript that depends on jQuery will be written here

  // Select the article DOM element by its class attribute
  var article = $(".article--main");
  console.log("article", article);
});