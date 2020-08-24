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
    let dataStr = JSON.stringify(jsonData);
    let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

    let exportFileDefaultName = 'data.json';

    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('botReport', exportFileDefaultName);
    linkElement.click();
}