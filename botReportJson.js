var jsonFile = {}
var player = 0

function jsonReport(entry)
{
	var tempPlayer = player++
	jsonFile[tempPlayer] = entry;
}

function resetReport()
{
	jsonFile = {}
	player = 0
}

function exportToJsonFile(jsonData) {
    var json = jsonData;
	saveAs(new Blob([json],{type:"application/json;charset=utf-8"}), 'botReport.json');
}