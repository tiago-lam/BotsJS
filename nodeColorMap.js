colorMap = {
	"start" : "#4981CF",
	"comment" : "#213170",
	"group" : "#E77AD3",
	"dialogue" : "#5BAA4C",
	"action" : "#D74547",
	"choice" : "#C17830",
	"if" : "#7953A5",
	"variable" : "#B9B007",
	"callfunction" : "#4C2EFF",
	"end" : "#4981CF",
	"event" : "#9B565E",
	"sound" : "#F7B509",
	"makefunction" : "#4F72FF",
	"customfunction" : "#4F72FF"
} 

function hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}