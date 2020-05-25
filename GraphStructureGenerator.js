function generateStructureFrom(scene) 
{
	nodes = getArrayNodeFrom(scene["dictNodes"])
	createVisitedAttribute(nodes)
	links = connectLinks(scene["dictNodes"])
	return [nodes, links]
}

function mapNodeIndexToArrayIndex(nodeCollection)
{
	map = {}
	nodeCollection.forEach(function(d, i) {
		map[d.idx] = i; 
	});
	return map
}

function createVisitedAttribute(nodeCollection)
{
	nodeCollection.forEach(function(d) 
	{
		d["visited"] = "false";
	});	
}

function getArrayNodeFrom(sceneNode)
{
	var nodeArray = [];
	Object.entries(sceneNode).forEach(([k,v]) => {
		nodeArray.push(v)
	})
	return nodeArray
}

function getChoiceAtrributes(choice)
{
	var arr = choice
	arr = arr.split("~-~")
	for(var i = 0; i < arr.length; i++) 
    	if(arr[i].includes("~~")) 
        	arr[i] = arr[i].split("~~")
	arr.pop()
	return arr;
}

function getNextNodesFromChoiceAttributes(att)
{
	arr = [];
	for(var i = 0; i < att.length; i++)
    	arr.push(att[i][0])
    return arr;
}

function connectLinks(vertices)
{
	sceneLinks = []
	Object.entries(vertices).forEach(([k,v]) => {
		if(v["type"] == "choice" || v["type"] == "if")
    		{
    			att = getChoiceAtrributes(v["choices"]);
    			nextNodes = getNextNodesFromChoiceAttributes(att);
    			for(var i = 0; i < nextNodes.length; i++)
    				sceneLinks.push({"source": v["idx"], "target": nextNodes[i]})
    			nextNodes = []
    				//console.log(v["index"] + " : " + nextNodes[i])
    		}
    	else
    		{
    			if(v["next"] != -1)
    				sceneLinks.push({"source": v["idx"], "target": v["next"]})
    				//console.log(v["index"] + " : " + v["next"])
    		}
	})
	return sceneLinks
}