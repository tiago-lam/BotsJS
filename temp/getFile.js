var xmlhttp = new XMLHttpRequest();
var user = "user=" + "sepulveda.f"
var title = "title=" + "Playable Scenarios"
xmlhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {

    	console.log(this.responseText);
        var obj = this.responseText;
        console.log(obj);
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
