structure = generateWholeProjectStructure(allScenes)
nodes = structure[0]
links = structure[1]
numberOfScenes = structure[2]
document.getElementById("title").innerHTML = "Bots for " + title

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
		.force("collide", d3.forceCollide(r+1))
		.force("charge", d3.forceManyBody()
			.strength(-100))
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

function update()
{
	ctx.save();
	ctx.clearRect(0,0,width,height);
	ctx.translate(transform.x, transform.y);
	ctx.scale(transform.k, transform.k);
	ctx.beginPath();
	ctx.globalAlpha = 0.5;
	ctx.strokeStyle = "#0000FE";
	links.forEach(drawLink);
	ctx.stroke();
	ctx.globalAlpha = 1.0;
	nodes.forEach(drawNode);
	//botSteps()
	//drawNodeWithColor(nodes[2], "#0000FE");
	ctx.restore();
}

function updateRadius(val) {
	r = document.querySelector('#radius').value;
	update()
}

function zoomed() {
	transform = d3.event.transform;
	update();
}

function dragsubject() 
{
	var i,
    x = transform.invertX(d3.event.x),
    y = transform.invertY(d3.event.y),
    dx,
    dy;
    for (i = nodes.length - 1; i >= 0; --i) {
      node = nodes[i];
      dx = x - node.x;
      dy = y - node.y;

      if (dx * dx + dy * dy < 20 * 20) {

        node.x = transform.applyX(node.x);
        node.y = transform.applyY(node.y);

        return node;
      }
	}
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
	ctx.moveTo(l.source.x, l.source.y);
	ctx.lineTo(l.target.x, l.target.y);
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
	botStepsKeyboard();

}, false);