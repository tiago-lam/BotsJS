function parseProjectFromServer(project)
{
	var projectObj = {};
	var projectArr = project.split("!!!!!!")
	if(projectArr[0].includes("not found:"))
	{
		alert("Project not found!"); return;
	}
	projectObj['project_id'] = projectArr[0]
	projectObj['project_title'] = projectArr[1]
	projectObj['user_name'] = projectArr[2]
	var projectJson = projectArr[3].split("~~~~~~~~")
	projectObj['project_json'] = projectJson[0]

	var projectScenes = []
	var sceneObj = {}
	sceneObj['scene_id'] = projectJson[1]
	sceneObj['scene_title'] = projectArr[4]
	var sceneAndNextId = projectArr[6].split("~~~~~~~~")
	sceneObj['scene_json'] = sceneAndNextId[0]
	projectScenes.push(sceneObj)
	
	for(var idx = 7; idx < projectArr.length; idx+=3)
	{
		sceneObj = {}
		sceneObj['scene_id'] = sceneAndNextId[1]
		sceneObj['scene_title'] = projectArr[idx]
		sceneAndNextId = projectArr[idx+2].split("~~~~~~~~")
		sceneObj['scene_json'] = sceneAndNextId[0]
		projectScenes.push(sceneObj)	
	}

	projectObj['scenes'] = projectScenes
	return projectObj;
}