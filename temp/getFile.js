var xmlhttp = new XMLHttpRequest();
var project;

xmlhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {

    	//console.log(this.responseText);
        var obj = this.responseText;
        //console.log(obj);
        project = obj;
        projectObj = parseProjectFromServer(project)
        scns = projectObj.scenes
        parseScenes(scns)
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



//scns = projectObj.scenes
//
//for(var i = 0; i < scns.length; i++)
//{
//    scns[i] = scns[i]["scene_json"]
//    scns[i] = scns[i].replace(/index":"/g,'idx":"')
//}
//
//t = temp.replace(/index":"/g,'idx":"')
//
//Object.entries(t["dictNodes"]).forEach(([k,v]) => {
//        if(t["dictNodes"][k]["type"] == "action" && t["dictNodes"][k]["name"] == null)
//        {
//            t["dictNodes"][k]["type"] = "start"; t["dictNodes"][k]["name"] = "Start"; break;
//        }
//    })
//
//
//
//
//
function parseScenes(scns)
{
    for(var i = 0; i < scns.length; i++)
    {
        var scene = scns[i]["scene_json"]
        scene = replace(/index":"/g,'idx":"')
        scene = JSON.parse(scene)
        createStartNodes(scene)
        scns[i] = scene
    }
}

function createStartNodes(scene)
{
    Object.entries(scene["dictNodes"]).forEach(([k,v]) => {
        if(scene["dictNodes"][k]["type"] == "action" && scene["dictNodes"][k]["name"] == null)
        {
            scene["dictNodes"][k]["type"] = "start"; scene["dictNodes"][k]["name"] = "Start"; return;
        }
    })
}