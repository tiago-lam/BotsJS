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

var scene = structure[2]
function botStepsKeyboard()
{
	stack = getStack();
	mapIndexes = getMapIndexes()
	while(stack.length > 0)
	{
		tempNode = stack.pop()
		tempNode.visited = "true";
		update();
		if(scene > 0 && tempNode.type == "end")
		{
			scene--;
			stack.push(nodes[parseInt(mapIndexes[tempNode.next])])
		}
		else if(scene == 0)
			{console.log("end found");	break;}
		else if(tempNode.type == "choice" || tempNode.type == "if")
		{
			choices = getChoiceAtrributes(tempNode.choices)
			//for(var i = 0; i < choices.length; i++)
				stack.push(nodes[parseInt(mapIndexes[choices[0][0]])])
				botChoiceReport(choices[0])
		}
		else
			stack.push(nodes[parseInt(mapIndexes[tempNode.next])])
		console.log("end cycle");
		return;
	}
	console.log("stack empty")
	file = produceReport()
	//s2ab(file)
	saveAs(new Blob([s2ab(file)],{type:"application/octet-stream"}), 'botReport.xlsx');
}

experimentVar = 0
function botStepsMultiple(opts)
{
	stack = getStack();
	mapIndexes = getMapIndexes()
	while(stack.length > 0)
	{
		tempNode = stack.pop()
		if(tempNode == undefined) break
		//console.log(tempNode)
		tempNode.visited = "true";
		
		
		var visits = parseInt(tempNode.visits)
		visits+=1
		tempNode.visits = visits.toString()
		
		
		//update();
		if(scene > 0 && tempNode.type == "end")
		{
			scene--;
			stack.push(nodes[parseInt(mapIndexes[tempNode.next])])
			experimentVar = 0
			registerEntry()
			botReportReset()
		}
		else if(scene == 0)
			{
			//	console.log("end found");	
				break;
			}
		else if(tempNode.type == "choice")
		{
			choices = getChoiceAtrributes(tempNode.choices)
			var content = opts.shift();
			for(var i = 0; i < choices.length; i++)
			{
				if(choices[i][1] == content)
				{
					stack.push(nodes[parseInt(mapIndexes[choices[i][0]])])	
					botChoiceReport(content)
				}
			}
		}
		else if(tempNode.type == 'variable')
		{
			experimentVar++
			stack.push(nodes[parseInt(mapIndexes[tempNode.next])])
		}
		else if(tempNode.type == 'if')
		{
			if(experimentVar > 3)
				stack.push(nodes[parseInt(mapIndexes["069"])])//hard code :(
			else	
				stack.push(nodes[parseInt(mapIndexes["070"])])//hard code :(
			botChoiceReport(experimentVar)
		}
		else
			stack.push(nodes[parseInt(mapIndexes[tempNode.next])])
		//console.log("end cycle");
	}
	console.log("stack empty")
	//file = produceReport()
	//s2ab(file)
	//saveAs(new Blob([s2ab(file)],{type:"application/octet-stream"}), 'botReport.xlsx');
}


function createVisitsKey()
{
	nodes.forEach(function(e)
	{
		e["visits"] = "0"
	})
}

function howManyChoices()
{
	var amount = 0
	nodes.forEach(function(e){
		if(e.type == "choice" || e.type == "if")
			amount++;
	})
	return amount;
}

function vectorChoice(factor)
{
	vec = []
	var entries = howManyChoices()
	for(var i = 0; i < entries; i++)
	{
		if(Math.random() > factor)
			vec.push(1)
		else
			vec.push(0)
	}
	return vec
}

function howManyRuns(timesToRun, factor)
{
	createVisitsKey()
	for(var i = 0; i < timesToRun; i++)
	{
		scene = numberOfScenes
		choiceVec = vectorChoice(factor)
		botStepsMultiple(choiceVec)
	}
	visitedBackToFalse()
	regulateAlpha()
	update()
}

function runMarathon()
{
	for(var i = 0; i < 1000; i++)
	{
		scene = structure[2]
		botMarathon()
		stack = []
	}
	visitedBackToFalse()
	regulateAlpha()
	update()
}

function botMarathon()
{
	mapVar = {}
	stack = getStack();
	mapIndexes = getMapIndexes()
	while(stack.length > 0)
	{
		tempNode = stack.pop()
		if(tempNode == undefined) break
		//console.log(tempNode)
		tempNode.visited = "true";
		
		if("visits" in tempNode)
		{
			var visits = parseInt(tempNode.visits)
			visits+=1
			tempNode.visits = visits.toString()
		}
		else
			tempNode["visits"] = 1
		
		//update();
		if(scene > 0 && tempNode.type == "end")
		{
			scene--;
			stack.push(nodes[parseInt(mapIndexes[tempNode.next])])
			//registerEntry()
			//botReportReset()
		}
		else if(scene == 0)
			{
			//	console.log("end found");	
				break;
			}
		else if(tempNode.type == "choice")
		{
			choices = getChoiceAtrributes(tempNode.choices)
			choiceToDo = randomValueFromArray(choices);
			stack.push(nodes[parseInt(mapIndexes[choiceToDo[0]])])	
			//botChoiceReport(content)
		}
		else if(tempNode.type == 'variable')
		{
			if(tempNode.owner in mapVar)
			{
				if(checkBooleanArithmeticValues(tempNode.newValue))
				{
					var exp = putMapValuesInExpression(mapVar, tempNode.newValue)
					mapVar[tempNode.owner] = eval(exp)
				}
			}
			else
				mapVar[tempNode.owner] = mapVar.newValue;

			stack.push(nodes[parseInt(mapIndexes[tempNode.next])])
		}
		else if(tempNode.type == 'if')
		{
			choices = getChoiceAtrributes(tempNode.choices)
			choiceToDo = randomValueFromArray(choices);
			// for(var i = 0; i < choices.length; i++)
			// {
			// 	if(choices[i][1] == content)
			// 	{
			stack.push(nodes[parseInt(mapIndexes[choiceToDo[0]])])	
					//botChoiceReport(content)
				// }
			//}
			// if(experimentVar > 3)
			// 	stack.push(nodes[parseInt(mapIndexes["069"])])//hard code :(
			// else	
			// 	stack.push(nodes[parseInt(mapIndexes["070"])])//hard code :(
			// botChoiceReport(experimentVar)
		}
		else
			stack.push(nodes[parseInt(mapIndexes[tempNode.next])])
		//console.log("end cycle");
	}
	console.log("stack empty")
	//console.log(mapVar)
	//file = produceReport()
	//s2ab(file)
	//saveAs(new Blob([s2ab(file)],{type:"application/octet-stream"}), 'botReport.xlsx');
}

function checkBooleanArithmeticValues(exp)
{
	return (exp.includes("-") || exp.includes("+") || exp.includes("*") || exp.includes("/")
	|| exp.includes("=") || exp.includes(">") || exp.includes("<") || exp.includes("!"))
}

 // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 



// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 

function visitedBackToFalse()
{
	nodes.forEach(function(e){
		if(e.visited == "true")
			e.visited = "false"
	})
}

function maxNumberOfVisits()
{
	max = 0;
	nodes.forEach(function(e){
		curr = parseInt(e.visits)
		if(curr > max)
			max = curr
	})
	return max
}

function regulateAlpha()
{
	max = maxNumberOfVisits()
	nodes.forEach(function(e){
		alpha = parseFloat(e.visits/max)
		e["alpha"] = alpha.toString()
	})
}


