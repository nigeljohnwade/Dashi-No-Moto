var data = [5,6,2,7,4,9,7,2,1,4,5,6,8,5,4,3,5,7,3,7,5,4,8,5,2,3,1,8];
var MaterialColors = ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue',
    'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime',
    'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'blue-grey'];
var brewerColors = [
    '#1f78b4','#33a02c','#e31a1c','#ff7f00','#6a3d9a','#b15928',
    '#62a3d0','#72bf5b','#ef5a5a','#fe9f37','#9a77b8','#d8ac60',
    '#a6cee3','#b2df8a','#fb9a99','#fdbf6f','#cab2d6','#ffff99'
    ];  
var brewerShort = [
    '#1f78b4','#33a02c','#e31a1c','#ff7f00','#6a3d9a','#b15928'
    ]
var brewerPastel = [
    '#8dd3c7','#ffffb3','#bebada','#fb8072','#80b1d3','#fdb462',
    '#b3de69','#fccde5','#d9d9d9','#bc80bd','#ccebc5','#ffed6f']
var shuffledRandom = [
    ["#b2df8a", "#fb9a99", "#ffff99", "#cab2d6", "#a6cee3", "#fdbf6f", "#e31a1c", "#1f78b4", "#b15928", "#ff7f00", "#6a3d9a", "#33a02c"]
];
var brandColors = [
    '#48D5B5', '#21314d', '#FF585F', '#6e6e6e'
]

var colors = brewerColors;
drawColumnChart(data, "app-columnChart", "#line-chart-widget-1");
drawColumnChart(data, "app-columnChart", "#column-chart-widget-1");
