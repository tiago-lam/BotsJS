function generateStructureFrom(scene) 
{
	nodes = getArrayNodeFrom(scene["dictNodes"])
	createVisitedAttribute(nodes)
	links = connectLinks(nodes)
	return [nodes, links]
}

function generateSceneNodes(allScenes)
{
	allSceneNodes = [];
	allScenes.forEach(function(e)
	{
		allSceneNodes.push(getArrayNodeFrom(e["dictNodes"]))
	})
	return allSceneNodes
}

function generateWholeProjectStructure(allScenes)
{
	allNodeScenes = generateSceneNodes(allScenes)
	relabellingIndexForNodeConnection(allNodeScenes)
	var order = 0;
	allNodeScenes.forEach(function(e)
	{
		redefineSceneIndex(e, order++)
	})

	for(var i = 1; i < allNodeScenes.length; i++)
	{
		connectEndtoStart(allNodeScenes[i-1], allNodeScenes[i])
	}

	allNodes = []
	allNodeScenes.forEach(function(e)
	{
		nds = e
		nds.forEach(function(n){
			allNodes.push(n)
		})
	})
	createVisitedAttribute(allNodes)
	links = connectLinks(allNodes)
	return [allNodes, links, allNodeScenes.length]
}

function redefineSceneIndex(nodes, order)
{
	//nodes = getArrayNodeFrom(nodes['dictNodes'])
	for(var i = 0; i < nodes.length; i++)
  	{
  		if(nodes[i].type == "choice" || nodes[i].type == "if")
  		{
  			var choices = getChoiceAtrributes(nodes[i].choices)
  			for(var j = 0; j < choices.length; j++)
  			{
  				if(choices[j][0] != "-1")
  					choices[j][0] = order + choices[j][0];
  				else continue;
  			}
			nodes[i].choices = fromArrayChoiceToStringChoice(choices)
  		}
    	var temp = order + nodes[i]["idx"]
    	nodes[i].idx = temp
    	if(nodes[i]["next"] != "-1")
    		nodes[i]["next"] = order + nodes[i]["next"]
  	}
}

function findEndIdx(nodes)
{
	for(var i = 0; i < nodes.length; i++)
	{
		if(nodes[i].type == "end")
		{
			if(nodes[i].next == "-1")
				return nodes[i];
			else
				return "everything connected"
		}
	}
	return "not_found";
}

function findStartIdx(nodes)
{
	for(var i = 0; i < nodes.length; i++)
		if(nodes[i].type == "start")
			return nodes[i];
	return "not_found";
}

function connectEndtoStart(nodesA, nodesB)
{
	nodeEndA = findEndIdx(nodesA)
	nodeStartB = findStartIdx(nodesB)
	if(nodeEndA == "not_found" || nodeStartB == "not_found")
		return "can't connect"
	nodeEndA.next = nodeStartB.idx
	return "connected"
}

function connectNodesOfDifferentScenes(nodesA, nodesB)
{
	var message = connectEndtoStart(nodesA, nodesB)
	if(message == "connected")
		nodesB.forEach(function(e){
			nodesA.push(e)
		})
	return nodesA
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

function fromArrayChoiceToStringChoice(arrChoice)
{
	strChoice = ""
	for(var i = 0; i < arrChoice.length; i++)
	{
		for(var j = 0; j < arrChoice[i].length; j++)
		{
			if(j < arrChoice[i].length-1)
				strChoice += arrChoice[i][j] + "~~"
			else
				strChoice += arrChoice[i][j] + "~-~"
		}
		//strChoice += "~-~"
	}
	return strChoice
}

function getNextNodesFromChoiceAttributes(att)
{
	arr = [];
	for(var i = 0; i < att.length; i++)
    	arr.push(att[i][0])
    return arr;
}

//to be concluded
function parents(nodes, visited)
{
	for(var i = 0; i < nodes.length; i++)
	{
		if(nodes[i] in visited == false && nodes[i].next != "-1")
		{
			visited.push(nodes[i])
			temp = retrieveNodeByIndex(nodes, nodes[i].next)
			temp["parent"] = nodes[i].idx
		}

		if(nodes[i] in visited == false && nodes[i].type == "choice")
		{
			nextIndexes = []
			choices = getChoiceAtrributes(nodes[i].choices)
			choices.forEach(function(e){
				nextIndexes.push(e[0])
			})
			nextIndexes.forEach(function(e){
				temp = retrieveNodeByIndex(nodes, e)
				temp["parent"] = nodes[i].idx
			})
		}
	}
}

function retrieveNodeByIndex(idx, nodes)
{
	nodes.forEach(function(e){
		if(e.idx == idx)
			return e;
	})
	return -1;
}

function connectLinks(vertices)
{
	sceneLinks = []
	Object.entries(vertices).forEach(([k,v]) => {
		if(v["type"] == "choice" && v["choiceType"] == "open_response")
		{
			sceneLinks.push({"source": v["idx"], "target": v["next"]})
		}
		else if(v["type"] == "choice" && v["choiceType"] != "open_response" || v["type"] == "if")
    		{
    			att = getChoiceAtrributes(v["choices"]);
    			nextNodes = getNextNodesFromChoiceAttributes(att);
    			for(var i = 0; i < nextNodes.length; i++)
    				if(nextNodes[i] != "-1")
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

function retrieveAllChoices()
{
	var sceneChoicesMap = {}
	for(var i = 0; i < nodes.length; i++)
	{
	     var sceneIndex = nodes[i].idx[0];
	     if(nodes[i].type == "choice" || nodes[i].type == "if")
	     {
		    var chs = getChoiceAtrributes(nodes[i].choices)
		    if(nodes[i].type == "if") chs = [chs];
            if(sceneIndex in sceneChoicesMap)                
               sceneChoicesMap[sceneIndex].push(chs)
           else
             sceneChoicesMap[sceneIndex] = chs
	     }
	}
	return sceneChoicesMap
}

function relabellingIndexForNodeConnection(allNodeScenes)
{
	allNodeScenes.forEach(function(e) {
		sceneNodes = e;
		e.forEach(function(someNode) 
			someNode['idx'] = someNode['index']
	})
}