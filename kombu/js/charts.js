function drawColumnChart(data, target, container){
    var width = document.querySelector(container).clientWidth,
        height = document.querySelector(container).clientHeight - document.querySelector(container + " header").clientHeight;

    var y = d3.scale.linear()
        .range([height, 0]);
    y.domain([0, d3.max(data)]);

    var containerSelection = d3.select(container + " main");

    var chart = containerSelection.append("svg")
        .attr("width", width)
        .attr("height", height)
        .html("")
        .attr("class", target);
        
    var barWidth = width / data.length;
    var bar = chart.selectAll("g")
        .data(data)
        .enter().append("g")
        .attr("transform", function(d, i) {
            return "translate(" + i * barWidth + ",0)"; 
        });
        
    bar.append("rect")
        .attr("y", function(d) { 
            return y(d); 
            })
        .attr("height", function(d) {
            return height - y(d); 
            })
        .attr("width", barWidth - 1)
        .attr("fill", function(d,i){
            return colors[i];
            }
        );
}       
function drawLineChart(data){
    var width = 960,
        height = 500;

    var y = d3.scale.linear()
        .range([height, 0]);
    var x = d3.scale.linear()
        .range([0, width]);
        
    var chart = d3.select("svg.line-chart")
        .attr("width", width)
        .attr("height", height)
        .html("");
        
    y.domain([0, d3.max(data[0])]);
    x.domain([0, data[0].length])
    var line = d3.svg.line()
        .interpolate("basis")
        .x(function(d, i) {
            return x(i); 
        })
        .y(function(d, i) {
            return y(d); 
        });
     var city = chart.selectAll(".city")
        .data(data)
        .enter().append("g")
        .attr("class", "city");

    city.append("path")
        .attr("class", "line")
        .attr("d", function(d, i) { 
            return line(d); 
        })
        .attr("stroke-width", "1px")
        .attr("fill", "none")
        .style("stroke", function(d, i) {
            return colors[i]; 
        });
}
function drawPieChart(data){
    var width = 960,
        height = 500,
        radius = Math.min(width, height) / 2;
    var arc = d3.svg.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);
    var pie = d3.layout.pie()
        .sort(null)
        .value(function(d) { 
            return d;
        });
    var chart = d3.select("svg.pie-chart")
        .attr("width", width)
        .attr("height", height)
      .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    var g = chart.selectAll(".arc")
        .data(pie(data))
        .enter().append("g")
        .attr("class", "arc");
    g.append("path")
        .attr("d", arc)
        .style("fill", function(d,i) {
            return colors[i]; 
        });
}