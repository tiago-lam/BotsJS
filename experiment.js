function getValues()
{
	
	var pairs = []
	var q1 = document.getElementById("q1");
	var q1Text = q1.options[q1.selectedIndex].text;
	var q1Val = q1.options[q1.selectedIndex].value;
	var q1Num = document.getElementById("q1Prob");
	var q1Prob = q1Num.value;
	var totalChoices1 = 2;
	var othersQ1 = otherChoices(q1, q1Text);

	pairs.push(finalChoice(q1, q1Val, q1Text, othersQ1, q1Prob))

	var q2 = document.getElementById("q2");
	var q2Text = q2.options[q2.selectedIndex].text;
	var q2Val = q2.options[q2.selectedIndex].value;
	var q2Num = document.getElementById("q2Prob");
	var q2Prob = q2Num.value;
	var totalChoices2 = 2;
	var othersQ2 = otherChoices(q2, q2Text);
    
    pairs.push(finalChoice(q2, q2Val, q2Text, othersQ2, q2Prob))

	var q3 = document.getElementById("q3");
	var q3Text = q3.options[q3.selectedIndex].text;
	var q3Val = q3.options[q3.selectedIndex].value;
	var q3Num = document.getElementById("q3Prob");
	var q3Prob = q3Num.value;
	var totalChoices3 = 2;
	var othersQ3 = otherChoices(q3, q3Text);
	pairs.push(finalChoice(q3, q3Val, q3Text, othersQ3, q3Prob))

	var q4 = document.getElementById("q4");
	var q4Text = q4.options[q4.selectedIndex].text;
	var q4Val = q4.options[q4.selectedIndex].value;
	var q4Num = document.getElementById("q4Prob");
	var q4Prob = q4Num.value;
	var totalChoices4 = 4;
	var othersQ4 = otherChoices(q4, q4Text);
	pairs.push(finalChoice(q4, q4Val, q4Text, othersQ4, q4Prob))

	var q5 = document.getElementById("q5");
	var q5Text = q5.options[q5.selectedIndex].text; 
	var q5Val = q5.options[q5.selectedIndex].value;
	var q5Num = document.getElementById("q5Prob");
	var q5Prob = q5Num.value;
	var totalChoices5 = 3;
	var othersQ5 = otherChoices(q5, q5Text);
	pairs.push(finalChoice(q5, q5Val, q5Text, othersQ5, q5Prob))

	var q6 = document.getElementById("q6");
	var q6Text = q6.options[q6.selectedIndex].text;
	var q6Val = q6.options[q6.selectedIndex].value;
	var q6Num = document.getElementById("q6Prob");
	var q6Prob = q6Num.value;
	var totalChoices6 = 2;
	var othersQ6 = otherChoices(q6, q6Text);
	pairs.push(finalChoice(q6, q6Val, q6Text, othersQ6, q6Prob))

	//process here -> the idea is thst the choiceVector to go already done to botMove.howManyRuns
	return pairs;
}

function run()
{
	btnRun = document.getElementById("runValue");
	howManyRunsUserChoice(btnRun.value)
}

function otherChoices(q, excludeText)
{
	var others = []
	for(var i = 0; i < q.options.length; i++)
	{
		if(q.options[i].text != excludeText)
		{
			others.push(q.options[i].text)
		}
	}
	return others;
}

function finalChoice(q, choice, text, otherChoices, factor)
{
	rnd = Math.random();
	if(rnd <= factor)
		return [choice, text];
	oText = otherChoices[Math.trunc(Math.random()*10) % otherChoices.length]
	oChoice = findVal(q, oText)
	return [oChoice, oText]
}

function getOptionText(index, q)
{
	return q.options[i].text
}

function findVal(q, text)
{
	val = ""
	for(var i = 0; i < q.options.length; i++)
	{
		if(q.options[i].text == text)
		{
			val = q.options[i].value
			break;
		}
	}
	return val
}

function howManyRunsUserChoice(timesToRun)
{
	createVisitsKey()
	for(var i = 0; i < timesToRun; i++)
	{
		scene = numberOfScenes
		vectorTemp = getVectorChoice()
		console.log(vectorTemp)
		botStepsMultiple(vectorTemp)
	}
	visitedBackToFalse()
	regulateAlpha()
	update()
	reportResetEntries()
}

function getVectorChoice()
{
	pairs = getValues();
	userChoices = [];
	pairs.forEach(function(item) {
		userChoices.push(item[1])
	})
	userChoices.push(0)
	return userChoices
}

function copyVector(vec)
{
	vecCopy = []
	vec.forEach(function(item) {
		vecCopy.push(item)
	})
	console.log(vecCopy)
	return vecCopy
}


mapChoiceToBranch = {"083":0, "085":1,"047":0,"046":1,"048":0,"049":1,"054":0,"055":1,
	"058":0, "059":1, "064":0, "065":1}
