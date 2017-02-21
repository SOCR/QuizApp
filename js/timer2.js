/* ----------------Visual Timer ----------------*/
radius = 150 / 2;
var interTracker;
var endTime;
var timerLength;

var vis = d3.select("#timerzone").append("svg")
    .attr("width", radius*2)
    .attr("height", radius*2)
    .append("g")
    .attr("transform", "translate(" + radius + "," + radius+ ")");
var field = vis.selectAll("g")
    .data(fields)
    .enter().append("g");
var arc = d3.svg.arc()
    .startAngle(0)
    .endAngle(function(d) {return 2*Math.PI * d.value})
    .innerRadius(function(d) { return (d.index-.1) * radius; })
    .outerRadius(function(d) { return (d.index +.1) * radius; });

field.append("path");

function tick() {
    field
        .data(fields);

    field.select("path")
        .transition()
        .duration(0)
        .attrTween("d", arcTween)
        .style("fill", function(d) { return ("hsl(" + (180 * (d.value)) + ", 50%, 50%)") });
}

function arcTween(d) {
    return function(t) {  return arc(d); };
}


function startTimer(num1)
{
    timerLength=num1;
    var tempStart=new Date();
    endTime=tempStart.getSeconds()+tempStart.getMilliseconds()/1000+tempStart.getMinutes()*60+tempStart.getHours()*60*60;
    endTime+=timerLength;
    interTracker=setInterval(function(){tick()}, 5);
}

function fields()
{
    var d = new Date();
    var curTime=d.getMinutes()*60+d.getHours()*60*60+d.getSeconds() + d.getMilliseconds() / 1000;
    var second = (endTime-curTime )/timerLength;

    if(second<=0)
    {
        window.clearTimeout(interTracker);
        //$("#timerzone").remove();
        //endRound();
    }
    return [{ value: second,  index: .9}];
}

$("#timeStart").click(function() {
    window.clearTimeout(interTracker);
    startTimer(300);
});
