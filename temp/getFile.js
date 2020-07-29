var xmlhttp = new XMLHttpRequest();
var project;

xmlhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {

    	console.log(this.responseText);
        var obj = this.responseText;
        console.log(obj);
        project = obj;
    }
};

// try{
//     xmlhttp.send();
// }catch(err){
//     if(e.toString().startsWith("NetworkError")){
//         console.log(e.toString())
//     }
// }
// 
// 

function sendRequest()
{
    var user = "user=" + document.getElementById("user").value//"sepulveda.f"
    var title = "title=" + document.getElementById("projectName").value
    xmlhttp.open("GET", "https://studycrafter.com/db/request.php?" + user + "&" + title, true);
    xmlhttp.send();
}
