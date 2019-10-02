var categories = ["Cats", "Spongebob", "Space", "Memes", "Scooby-Doo", "Adventure Time", "Family Guy", "Money", "Computers", "Party", "Mad", "Dance", "Video Games", "Ninja", "Tired", "Sad", "Anime", "Avengers"];

var queryURL = "";
var results;

for (i = 0; i < categories.length; i++) {
    var button = $('<div class="gif-button" value=' + categories[i] + '>' + categories[i] + '</div>')
    $("#buttons-container").append(button);
}

$(".gif-button").on("click", function() {
    queryURL = "https://api.giphy.com/v1/gifs/search?q=" + $(this).attr("value") + "&api_key=c5Wbw9oqqavuvvx3yG0Fvi5j6X0IbsxH";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
        console.log(response);

        results = response.data;
        
        document.getElementById("gifs-container").innerHTML = "";

        for(i = 0; i < results.length; i++) {
            var topicDiv = $("<div>");
            var topicImg = $("<img>");
            topicDiv.attr("class", "gif");
            topicImg.attr("src", results[i].images.fixed_height.url);
            topicDiv.append(topicImg);
            $("#gifs-container").append(topicDiv);
        }
    })
})