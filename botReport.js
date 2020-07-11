report = {}
botPointOfChoice = 0
choiceEntries = []
entry = 0;
function botChoiceReport(choice)
{
	console.log("L")
	choiceEntries.push(choice)
}

function registerEntry()
{
	report[entry++] = choiceEntries;
}

function botReportReset()
{
	choiceEntries = []
}

function reportResetEntries()
{
	entry = 0
}