
//------------------------------  part 1  ----------
var circle ={
    x: 60,
    y: 60,
    r: 55,
    stroke: 'blue',
    width: 4,
    fill: 'yellow'
};
var svg = d3.select('.part1 svg');
    svg.select("circle")
       .attr('cx',circle.x)
       .attr('cy',circle.y)
       .attr('r',circle.r)
       .style('stroke',circle.stroke)
       .style('stroke-width',circle.width)
       .style('fill',()=>{
            if(circle.r > 50) return 'red';
            else return 'cyan';
       })
// // -------------------------------  part 2 -----------
var numbers = [40, 130, 75, 170];
var svg = d3.select('.part2 svg');

var selection1 = svg.selectAll('g')
         .data(numbers)
         .enter().append('g')
         .attr('transform', (d,i)=>{
            return "translate("+ 40*i+","+(200-d) +")";
         })
selection1.append('rect')
         .attr('width',39)
         .attr('height',(d,i)=>{
             return d;
         })
selection1.append('text')
         .attr("x",0)
         .attr("y",0)
         .text((d)=>{
             return d/10;
         });
selection1.append('p');
// ----------------------------  part 3  ------------
// bread-room
var values = [
    {price: 700,sqft: 3000,br: 3, pets: ["cats","dogs"]},
    {price: 445,sqft: 1700,br: 2, pets: []},
    {price: 421,sqft: 1455,br: 2, pets: ["cats","dogs"]},
    {price: 411,sqft: 1314,br: 2, pets: ["dogs"]},
    {price: 275,sqft: 1200,br: 1, pets: ["cats",]},
    {price: 500,sqft: 650,br: 1, pets: []},
]



var svg = d3.select('.part3 svg');

svg.append('text')
    .attr("x",10)
    .attr('y',10)
    .text("hello world")

var selection = svg.selectAll("g")
                   .data(values)
                   .enter()
                   .append("g")
                   .attr("transform","translate(10,10)");
                   
    selection.append("circle")
             .attr('cx',(d,i)=>{
                 return d.price /2
             })
             .attr('cy',(d,i)=>{
                 return (4000-d.sqft) /( 4000 / 400)
             })
             .attr('r',(d,i)=>{
                 return d.br * 10;
             })
             .style('fill',(d,i)=>{
                 return color(d.pets);
             })
             .style('opacity','0.8')
             .append('svg:title').text((d,i)=>{
                 return print(d);
             })
var w = 400;
var h = 400;

var xScal = d3.scaleLinear()
              .domain([0,w*2])
              .range([0,w])
var xAxis = d3.axisBottom(xScal);
    svg.append("g")
    .attr('transform','translate(10,410)')
    .call(xAxis)

var yScal = d3.scaleLinear()
              .domain([h*2,0])
              .range([0,h])

var yAxis = d3.axisRight(yScal);
    svg.append("g")
    .attr('transform','translate(10,10)')
    .call(yAxis)

    


function print(d){
    return `$${d.price}K, ${d.sqft}sqft, ${d.br} BRs`
}
function color(pets){
    var dogs = pets.indexOf('dogs') != -1;
    var cats = pets.indexOf('cats') != -1;
    if(dogs){
        return cats ? 'purple': 'blue';
    }else{
        return cats ? 'red': 'gray'
    }
}
