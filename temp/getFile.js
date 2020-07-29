var xmlhttp = new XMLHttpRequest();
var user = "user=" + "sepulveda.f"
var title = "title=" + "Playable%20Scenarios"
var project;
xmlhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {

        var obj = this.responseText;
        console.log(obj);
        project = obj;
    }
    //startSpriteListObserver();
};
/**
 * Prepare and send the GET request to the server
 */



xmlhttp.open("GET", "https://studycrafter.com/db/request.php?" + user + "&" + title, true);
xmlhttp.send();
