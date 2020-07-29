var xmlhttp = new XMLHttpRequest();
var user = "user=" + "sepulveda.f"
var title = "title=" + "Playable Scenarios"
var title = "title=" + "Playable%20Scenarios"
var project;

xmlhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {

    	console.log(this.responseText);
        var obj = this.responseText;
        console.log(obj);
        project = obj;
    }
    //startSpriteListObserver();
};

xmlhttp.open("GET", "https://studycrafter.com/db/request.php?" + user + "&" + title, true);

try{
    xmlhttp.send();
}catch(err){
    if(e.toString().startsWith("NetworkError")){
        console.log(e.toString())
    }
}
xmlhttp.open("GET", "https://studycrafter.com/db/request.php?" + user + "&" + title, true);
xmlhttp.send();
