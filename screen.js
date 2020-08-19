//structure = generateWholeProjectStructure(allScenes)
nodes = structure[0]
links = structure[1]
numberOfScenes = structure[2]
// document.getElementById("title").innerHTML = "Bots for " + title

drawControl = 0;

var transform = d3.zoomIdentity;	
var canvas = d3.select("#network"),
	width = canvas.attr("width"),
	height = canvas.attr("height"),
	r = 15
	color = d3.scaleOrdinal(d3.schemeCategory20),
	ctx = canvas.node().getContext("2d"),
	simulation = d3.forceSimulation()
		.force("x", d3.forceX(width/2))
		.force("y", d3.forceY(height/2))
		.force("collide", d3.forceCollide(r+15))//this is to point to put the nodes apart
		.force("collide", d3.forceCollide(r+30))//this is to point to put the nodes apart
		.force("charge", d3.forceManyBody()
			.strength(-300))
		.force("link", d3.forceLink()
			.id(function(d) { return d.idx;}))
		.on("tick", update);

	simulation.nodes(nodes);
	simulation.force("link")
		.links(links);

	canvas
      	.call(d3.drag()
          	.container(canvas.node())
          	.subject(dragsubject)
          	.on("start", dragstarted)
          	.on("drag", dragged)
          	.on("end", dragended))
      		.call(d3.zoom()
			.scaleExtent([1 / 10, 8])
			.on("zoom", zoomed));


scenePar = [];
alphaPar = 0.3;

function ctrlUpdate(scn, alpha)
{
	scenePar = scn; alphaPar = alpha;
	update();
}
var mapIdText = {"039" : "1", "043" : "2", "051" : "3", "053" : "4", "057" : "5", "063" : "6"}
function update()
{
	ctx.save();
	ctx.clearRect(0,0,width,height);
	ctx.translate(transform.x, transform.y);
	ctx.scale(transform.k, transform.k);
	
	ctx.globalAlpha = 0.5;
	for(var i = 0; i < links.length; i++)
	{
		ctx.beginPath();
		drawLink(links[i])
		ctx.stroke();
	}
	ctx.globalAlpha = 1.0;
	nodes.forEach(function(d){
		ctx.beginPath();
		if(d.visited == "true")
			ctx.fillStyle = "#0000FE";
		else if("alpha" in d)
		{
			ctx.fillStyle = "rgba(221, 23, 23," + parseFloat(d.alpha) + ")"
		}
		else if(!scenePar.includes(parseInt(d.sceneGroup)))
		{
			ctx.fillStyle = "rgba(23, 23, 23," + alphaPar + ")"
		}
		else
			ctx.fillStyle = hexToRGB(pickNodeColor(d), 1.0);

		if(d.type == 'choice')
		{
			drawDiamond(ctx, d.x, d.y, 30, 30);
		}
		else if(d.type == 'variable')
		{
			ctx.rect(d.x, d.y, 20, 20);
			ctx.fill()
		}
		else
		{
			ctx.moveTo(d.x, d.y);
			ctx.arc(d.x, d.y, r, 0, 2 * Math.PI);
			ctx.fill();
		}

		ctx.font = "12px Arial";
		ctx.fillStyle = 'black'
		if(d.idx in mapIdText)
			ctx.fillText(mapIdText[d.idx], d.x, d.y);
		else
			ctx.fillText(d.type, d.x, d.y); 
	});
	//botSteps()
	//drawNodeWithColor(nodes[2], "#0000FE");
	ctx.restore();
}

function zoomed() {
	transform = d3.event.transform;
	update();
}

function updateRadius(val) {
	rangeBar = document.querySelector('#radius')
	curr = document.querySelector('#currentScene')
	check = document.querySelector('#cont')
	rangeBar.max = numberOfScenes
	scns = []
	for(var i = 0; i < val; i++)
	{
		scns.push(i);
	}
	curr.innerHTML = "current scene: " + val
	if(check.checked)
		ctrlUpdate(scns, 0.0)
	else
		ctrlUpdate([val], 0.0)
	update()
}

function dragsubject() 
{
	// var i,
 //    x = transform.invertX(d3.event.x),
 //    y = transform.invertY(d3.event.y),
 //    dx,
 //    dy;
 //    for (i = nodes.length - 1; i >= 0; --i) {
 //      node = nodes[i];
 //      dx = x - node.x;
 //      dy = y - node.y;

 //      if (dx * dx + dy * dy < 20 * 20) {

 //        node.x = transform.applyX(node.x);
 //        node.y = transform.applyY(node.y);

 //        return node;
 //      }
	// }
    //return simulation.find(d3.event.x, d3.event.y);
}

function drawNodeBasedOnScene(d, sceneID, alpha)
{
	ctx.beginPath();
	if(d.idx[0] == scene)
	{
		ctx.fillStyle = "rgba(23, 23, 23," + alphaPar + ")"
	}
	else
		ctx.fillStyle = pickNodeColor(d);

	ctx.moveTo(d.x, d.y);
	ctx.arc(d.x, d.y, r, 0, 2 * Math.PI);
	ctx.fill();
}

function drawNode(d)
{
	ctx.beginPath();
	if(d.visited == "true")
		ctx.fillStyle = "#0000FE";
	else if("alpha" in d)
	{
		//console.log(d)
		ctx.fillStyle = "rgba(221, 23, 23," + parseFloat(d.alpha) + ")"
	}
	else
		ctx.fillStyle = pickNodeColor(d);

	ctx.moveTo(d.x, d.y);
	ctx.arc(d.x, d.y, r, 0, 2 * Math.PI);

	ctx.fill();
}

function drawNodeWithColor(d, c)
{
	//alert('hit')
	ctx.beginPath();
	ctx.fillStyle = color(c);
	ctx.moveTo(d.x, d.y);
	ctx.arc(d.x, d.y, r/2, 0, 2 * Math.PI);
	ctx.fill();
}

function drawLink(l)
{
	if(!scenePar.includes(parseInt(l.scene)))
	{
		ctx.strokeStyle = "rgba(23, 23, 23," + alphaPar + ")"
		ctx.lineWidth = 0;
		ctx.moveTo(l.source.x, l.source.y);
		ctx.lineTo(l.target.x, l.target.y);
	}
	else
	{
		ctx.strokeStyle = "rgba(127, 127, 193, 1.0)";
		ctx.lineWidth = 7;
		ctx.moveTo(l.source.x, l.source.y);
		ctx.lineTo(l.target.x, l.target.y);
	}
}

function pickNodeColor(node)
{
	return colorMap[node.type]
}

function dragstarted() {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d3.event.subject.fx = d3.event.subject.x;
  d3.event.subject.fy = d3.event.subject.y;
  console.log(d3.event.subject);
}

function dragged() {
  d3.event.subject.fx = d3.event.x;
  d3.event.subject.fy = d3.event.y;
}

function dragended() {
  if (!d3.event.active) simulation.alphaTarget(0);
  d3.event.subject.fx = null;
  d3.event.subject.fy = null;
}

var nxt = 0;
document.addEventListener('keydown', (event) => {

	// nodes[nxt].visited = "true";
	// nxt++; console.log(nxt);
	// update();
	//botStepsKeyboard();

}, false);


var dragScreen = true;
document.addEventListener("keypress", function(event) {
		console.log(event.keyCode)
		if (event.keyCode == 32) {
			dragScreen = false
		}
		
});

function getKey(e)
{
    if(e.keyCode == 32)
    	dragScreen = true;
}

document.onkeyup = getKey;