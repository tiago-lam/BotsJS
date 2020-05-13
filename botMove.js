stack = [];
mapIndexes = {};

function getStartNode(allNodes)
{
	for(var i = 0; i < allNodes.length; i++)
		if(allNodes[i].type == "start")
			return allNodes[i];
	return allNodes[0];
}

function getMapIndexes()
{
	return mapNodeIndexToArrayIndex(nodes)
}

function botSteps()
{
	startNode = getStartNode(nodes)
	stack.push(startNode)

	while(stack.length > 0)
	{
		tempNode = stack.pop()
		drawNodeWithColor(tempNode, "#0000FE");
		if(tempNode.type == "end")
		{
			console.log("end found");	break;
		}
		else if(tempNode.type == "choice" || tempNode.type == "if")
		{
			choices = getChoiceAtrributes(tempNode.choices)
			for(var i = 0; i < choices.length; i++)
				stack.push(nodes[choices[i][0]])
		}
		else
			stack.push(nodes[parseInt(tempNode.idx)])
	}
	console.log("stack empty")
}

function getStack()
{
	if(stack.length == 0)
		stack.push(getStartNode(nodes));
	return stack;
}

function botStepsKeyboard()
{
	stack = getStack();
	mapIndexes = getMapIndexes()
	while(stack.length > 0)
	{
		tempNode = stack.pop()
		tempNode.visited = "true";
		update();
		if(tempNode.type == "end")
		{
			console.log("end found");	break;
		}
		else if(tempNode.type == "choice" || tempNode.type == "if")
		{
			choices = getChoiceAtrributes(tempNode.choices)
			//for(var i = 0; i < choices.length; i++)
				stack.push(nodes[parseInt(mapIndexes[choices[0][0]])])
		}
		else
			stack.push(nodes[parseInt(mapIndexes[tempNode.next])])
		console.log("end cycle");
		return;
	}
	console.log("stack empty")
}