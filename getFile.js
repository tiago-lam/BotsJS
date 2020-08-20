var xmlhttp = new XMLHttpRequest();
var project;
var structure;

xmlhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {

    	//console.log(this.responseText);
        var obj = this.responseText;
        //console.log(obj);
        project = obj;
        projectObj = parseProjectFromServer(project)
        scns = projectObj.scenes
        parseScenes(scns)
        structure = generateWholeProjectStructure(scns)
        
        var screenScript = document.createElement("script");
        screenScript.setAttribute("type", "text/javascript");
        screenScript.setAttribute("src", "screen.js");
        document.getElementsByTagName("body")[0].appendChild(screenScript);

        var botMoveScript = document.createElement("script");
        botMoveScript.setAttribute("type", "text/javascript");
        botMoveScript.setAttribute("src", "botMove.js");
        document.getElementsByTagName("body")[0].appendChild(botMoveScript);
    }
};


function sendRequest()
{
    var user = "user=" + document.getElementById("user").value//"sepulveda.f"
    var title = "title=" + document.getElementById("projectName").value
    xmlhttp.open("GET", "https://studycrafter.com/db/request.php?" + user + "&" + title, true);
    xmlhttp.send();
}

function parseScenes(scns)
{
    for(var i = 0; i < scns.length; i++)
    {
        var scene = scns[i]["scene_json"]
        //scene = scene.replace(/index":"/g,'idx":"')
        scene = JSON.parse(scene)
        createStartNodes(scene)
        scns[i] = scene
    }
}

function createStartNodes(scene)
{
    Object.entries(scene["dictNodes"]).forEach(([k,v]) => {
        if(scene["dictNodes"][k]["type"] == "action" && 
            (scene["dictNodes"][k]["actionTarget"] == null || scene["dictNodes"][k]["actionTarget"] == "None")
        {
            console.log(scene["dictNodes"][k]["type"]);
            console.log(scene["dictNodes"][k]["name"]);
            scene["dictNodes"][k]["type"] = "start";
            scene["dictNodes"][k]["name"] = "Start"; 
            return;
        }
    })
}