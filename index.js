// bread-room
// var values = [
//     {price: 700,sqft: 300,br: 3, pets: ["cats","dogs"]},
//     {price: 445,sqft: 1700,br: 2, pets: []},
//     {price: 421,sqft: 1455,br: 2, pets: ["cats","dogs"]},
//     {price: 411,sqft: 1314,br: 2, pets: ["dogs"]},
//     {price: 275,sqft: 1200,br: 1, pets: ["cats",]},
//     {price: 500,sqft: 650,br: 1, pets: []},
// ]
//  var svg = d3.select('svg');
// .style('fill',circle.fill);
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
// -------------------------------  part 2 -----------

