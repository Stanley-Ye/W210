
/* globals crossfiler */
var width = 800,
  height = 500,
  defaultOpacity = 0.4;

var svg = d3.select("#chart")
  .append("svg")
  .attr("width", width)
  .attr("height", height);
 
//=========================================================================
// Bar Chart
//=========================================================================

function createBarChart(myData, column, color, yTitle, ymax){

  //=========================================================================
  // Set Dimensions
  //=========================================================================

  var margin = { top: 30, right: 180, bottom: 50, left: 60 },
    iwidth = width - margin.left - margin.right,
    iheight = height - margin.top - margin.bottom
    axisLabelShift = 40;

  var barWidth = iwidth / myData.length,
    barSpace = 0.1 * barWidth;

  //=========================================================================
  // gDrawing
  //=========================================================================

  var gDrawing = svg
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  //=========================================================================
  // Define Scales
  //=========================================================================
  var x = d3
    .scaleLinear()
    .range([0, iwidth])
    .domain([-0.5, 0.5 + d3.max(myData, function(d){return d.index;})]);
  var y = d3
    .scaleLinear()
    .range([iheight, 0])
    .domain([0, ymax]);

  //=========================================================================
  // Set x and y-axes
  //=========================================================================
  
  // x-axis
  xAxis = d3
    .axisBottom(x)
    .ticks(myData.length)

  gDrawing
    .append("g")
    .attr("transform", `translate(0,${iheight})`)
    .call(xAxis)
    .append("text")
    .style("fill", "black")
    .style("font-size", "12pt")
    .text("Sentence Number")
    .attr("transform", function(){
      return "translate(" + (iwidth/2) + "," + axisLabelShift + ")";
    })

  // y-axis
  yAxis = d3.axisLeft(y)
  if(yTitle == "Metric"){
    yAxis.tickFormat(d3.format(".0%"));
  }

  gDrawing
    .append("g")
    .call(yAxis)
    .append("text")
    .style("fill", "black")
    .style("font-size", "12pt")
    .text(yTitle)
    .attr("transform", function(){
      var yShift = (iheight/2) - 50
      return "translate(" + (-axisLabelShift) + "," +  yShift + ")rotate(-90)";
    });

  //=========================================================================
  // Generate Bar Chart
  //=========================================================================
  var bars = gDrawing
    .selectAll("bar")
    .data(myData)
    .enter()
    .append("rect")
    .attr("x", function(d,i){return x(d.index -0.4);})
    .attr("width", barWidth-barSpace)
    .attr("y", function(d){
      if(isNaN(d[column])){return 0;}
      else{return y(d[column]);}})
    .attr("height", function(d){
      if(isNaN(d[column])){return iheight;}
      else{return iheight - y(d[column]);}})
    .attr("fill", function(d){
      //if(isNaN(d[column])){return "#d3d3d3";}
      //else{return color;

        if(d.Author == "User"){return "steelblue";}
        else {return "red";
      }})
    .style("stroke", function(d){
      if(isNaN(d[column])){return "#d3d3d3";}
      else{return "grey";}})
    .style("opacity", defaultOpacity);

  //=========================================================================
  // Add mouseover
  //=========================================================================
  bars
    .on("mouseover", function(d, i){

      // Get current Author
      var Author = d.Author;

      // Make all matching Authors more opaque
      d3.selectAll("rect")
        .filter(function(d){ return d.Author == Author;})
        .style("opacity", 0.9);

      // Add label showing which Author was selected
      svg
        .append("text")
        .attr("class", "Author")
        .attr("x", width - 240)
        .attr("y", 50)
        .style("font-size", 18)
        .text("Highlighting all " + weekday);
    })
    .on("mouseout", function(d, i){

      // return bars to default opacity
      d3.selectAll("rect")
        .style("opacity", defaultOpacity);

      // remove the labels
      svg
        .selectAll("text.Author")
        .remove();

    });

}

//=========================================================================
// Add legend
//=========================================================================

function addLegend(labels, colors, opacities){

  //=========================================================================
  // Set Constants
  //=========================================================================
  var spaceBetweenRows = 25;
  var yShift = (height/2) - 35;
  var xShift = width - 150;
  var fontSize = 12;
  var rectDim = 10
  var textPadding = 5;

  //=========================================================================
  // Define table and extract row
  //=========================================================================
  var row = svg
    .append("g")
    .attr("transform", function(){
      return "translate(" + xShift + "," + yShift + ")";
    })
    .selectAll("table")
    .data(colors)
    .enter()
    .append("g")
    .attr("class", "table")
    .attr("transform", function(d, i){
      return "translate(0," + (spaceBetweenRows * i) + ")";
    })

  //=========================================================================
  // Add color indicators
  //=========================================================================
  row
    .append("rect")
    .attr("width", rectDim)
    .attr("height", rectDim)
    .style("fill", function(d, i){return d;})
    .style("opacity", defaultOpacity)
    .style("stroke", "black")
    .style("stroke-width", 2);

  //=========================================================================
  // Add text
  //=========================================================================
  row
    .append("text")
    .attr("transform", function(){
      return "translate(" + (rectDim +textPadding) + "," + rectDim + ")";
    })
    .text(function(d, i){return labels[i]})
    .style("font-size", fontSize);

}

//=========================================================================
// Update Function
//=========================================================================

function update(myData) {

  //=========================================================================
  // Properly cast all incoming values
  //=========================================================================
  myData.forEach(function(d){
    d.index = +d.index;
    d.metric = +d.sentenceLengthByChar;
    d.value = +d.shannonEntropy;
  })

  //=========================================================================
  // Set function that reruns barchart when toggle is flipped
  //=========================================================================
  
  // removes axes, rectangles, and legend
  function reset(){
      d3.selectAll("g").remove();
      d3.selectAll("rect").remove();
  }

  // returns y-axis max value
  function getMaxY(myData, column){
    return d3.max(myData, function(d){return d[column]});
  }

  // renders appropriate graph
  function render(){
    reset();
    if(yLabel == "Sentence Lengths"){
      
      var ymax = getMaxY(myData, "sentenceLengthByChar"),
        labels = ["User", "Fitzgerald"],
        colors = ["steelblue", "red"];

      createBarChart(myData, "sentenceLengthByChar", "steelblue", yLabel, ymax);

    }else{
      var ymax = getMaxY(myData, "shannonEntropy"),
        labels = ["User", "Fitzgerald"],
        colors = ["steelblue", "red"];
      createBarChart(myData, "shannonEntropy", "red", yLabel, ymax);
    }
    addLegend(labels, colors);
  }

  //=========================================================================
  // Set default y-axis
  //=========================================================================

  // default value for y-axis label
  yLabel = "Sentence Lengths"

  // triggers change in y-axis given input from radio button
  d3.selectAll("input").on("change", function(){
      yLabel = this.value;
      render();
  });


  render();
}

//=========================================================================
// Create ScatterPlot
//=========================================================================

function createScatterPlot(myData, column, color, yTitle){


  // returns y-axis max value
  function getMaxY(myData, column){
    return d3.max(myData, function(d){return d[column]});
  }

  var ymax = getMaxY(myData, column);

  //=========================================================================
  // Set Dimensions
  //=========================================================================

  var margin = { top: 30, right: 180, bottom: 50, left: 60 },
    iwidth = width - margin.left - margin.right,
    iheight = height - margin.top - margin.bottom
    axisLabelShift = 40;

  var barWidth = iwidth / myData.length,
    barSpace = 0.1 * barWidth;

  //=========================================================================
  // gDrawing
  //=========================================================================

  var gDrawing = svg
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  //=========================================================================
  // Define Scales
  //=========================================================================
  var x = d3
    .scaleLinear()
    .range([0, iwidth])
    .domain([0, 100]);

  var y = d3
    .scaleLinear()
    .range([iheight, 0])
    .domain([0, ymax]);

  //=========================================================================
  // Set x and y-axes
  //=========================================================================
  
  // x-axis
  xAxis = d3
    .axisBottom(x)
    //.ticks()

  gDrawing
    .append("g")
    .attr("transform", `translate(0,${iheight})`)
    .call(xAxis)
    .append("text")
    .style("fill", "black")
    .style("font-size", "12pt")
    .text("Probability")
    .attr("transform", function(){
      return "translate(" + (iwidth/2) + "," + axisLabelShift + ")";
    })

  // y-axis
  yAxis = d3.axisLeft(y)


  gDrawing
    .append("g")
    .call(yAxis)
    .append("text")
    .style("fill", "black")
    .style("font-size", "12pt")
    .text(yTitle)
    .attr("transform", function(){
      var yShift = (iheight/2) - 50
      return "translate(" + (-axisLabelShift) + "," +  yShift + ")rotate(-90)";
    });

  //=========================================================================
  // Generate Scatterplot
  //=========================================================================

  var scatter = gDrawing.append('g')
    .selectAll("dot")
    .data(myData)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d.Probability);} )
      .attr("cy", function (d) { return y(d[column]); } )
      .attr("r", function (d) {
        if (d.Author == "User"){
          return 5;
        }else{
          return 1.5;
        }

      })
      .attr("fill", function(d){

        if(d.Author == "User"){
          return "steelblue";
        } else {return "red";
      }});
     // .style("fill", "#69b3a2");

  

  //=========================================================================
  // Add mouseover
  //=========================================================================
  
    scatter.on("mouseover", function(d, i){

      // Get current Author
      var Author = d.Author;

      // Make all matching Authors more opaque
      d3.selectAll("circle")
        .filter(function(d){ return d.Author == Author;})
        .style("opacity", 0.9);

      console.log(d.Text);

      // Add label showing which Author was selected
      svg
        .append("text")
        .attr("class", "Author")
        .attr("x", 0)
        .attr("y", 50)
        .style("font-size", 12)
        .text(d.Text);
    })
    .on("mouseout", function(d, i){

      // return circles to default opacity
      d3.selectAll("circle")
        .style("opacity", defaultOpacity);

      // remove the labels
      svg
        .selectAll("text.Author")
        .remove();

    });

}


function updateS(myData) {

  //=========================================================================
  // Properly cast all incoming values
  //=========================================================================
  myData.forEach(function(d){
    d.Author = d.Author;
    d.Text = d.Text;
    d.index =  +d.index;
    d.ProbabilityRank =  +d.ProbabilityRank;
    d.sentenceLengthByChar = +d.sentenceLengthByChar;
    d.shannonEntropy = +d.shannonEntropy;
    d.Probability = +d.Probability;
  })

//=========================================================================
// Set function that reruns barchart when toggle is flipped
//=========================================================================
  
  // removes axes, rectangles, and legend
  function reset(){
      d3.selectAll("g").remove();
      d3.selectAll("rect").remove();
  }


  var labels = ["User", "Fitzgerald"],
      colors = ["steelblue", "red"];

  // renders appropriate graph
  function render(){
    reset();
    if(yLabel == "Sentence Lengths"){
      var colname =  "sentenceLengthByChar";
    } else{
      var colname = "shannonEntropy"
    }
    
    createScatterPlot(myData, colname, "steelblue", yLabel);
    addLegend(labels, colors);
  }

  //=========================================================================
  // Set default y-axis
  //=========================================================================

  // default value for y-axis label
  yLabel = "Sentence Lengths"

  // triggers change in y-axis given input from radio button
  d3.selectAll("input").on("change", function(){
      yLabel = this.value;
      render();
  });


  render();


}



//=========================================================================
// Text Shuffling
//=========================================================================

/*

function updateText(myData){


  // returns y-axis max value
  function getMaxY(myData, column){
    return d3.max(myData, function(d){return d[column]});
  }

  var ymax = getMaxY(myData, "Probability");

  //=========================================================================
  // Set Dimensions
  //=========================================================================

  var margin = { top: 30, right: 180, bottom: 50, left: 60 },
    iwidth = width - margin.left - margin.right,
    iheight = height - margin.top - margin.bottom
    axisLabelShift = 40;

  //=========================================================================
  // gDrawing
  //=========================================================================

  var gDrawing = svg
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  //=========================================================================
  // Generate Scatterplot
  //=========================================================================

  var fontSize = 18;
  var spaceSize = 2;

  var colorScale = d3
      .scaleLinear()
      .domain([0, 100])
      .range(["red", "green"]);

  var scatter = gDrawing.append('g')
    .selectAll("text")
    .data(myData)
    .enter()
    .filter(function(d) { return d.Author == "User";})
    .append("text")
    .attr("class", "user_sentences")
    .text(function(d) {return d.Text; })
    .attr("x", 10) 
    .attr("y", function(d, i) {
      return (i * (fontSize + spaceSize));
    })
    .attr("fill", function(d, i){
      return colorScale(d.Probability);
    });

}


*/










//=========================================================================
// Load data
//=========================================================================

var fontSize = 18;
var spaceSize = 2;

function changeSentenceOrder(column){
  d3.selectAll(".user_sentences")
    .transition()
    .duration(800)
    .ease(d3.easeLinear)
    .attr("y", function(d, i){
        return (d[column]  * (fontSize + spaceSize));
    });
}


d3.json("static/data/scatter.json", function (myData) {

  //=========================================================================
  // Properly cast all incoming values
  //=========================================================================
  myData.forEach(function(d){
    d.Author = d.Author;
    d.Text = d.Text;
    d.index =  +d.index;
    d.ProbabilityRank =  +d.ProbabilityRank;
    d.sentenceLengthByChar = +d.sentenceLengthByChar;
    d.shannonEntropy = +d.shannonEntropy;
    d.Probability = +d.Probability;
  })

    //=========================================================================
  // Set Dimensions
  //=========================================================================

  var margin = { top: 30, right: 180, bottom: 50, left: 60 },
    iwidth = width - margin.left - margin.right,
    iheight = height - margin.top - margin.bottom
    axisLabelShift = 40;

  //=========================================================================
  // gDrawing
  //=========================================================================

  var gDrawing = svg
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  //=========================================================================
  // Generate Text List
  //=========================================================================

  var colorScale = d3
      .scaleLinear()
      .domain([0, 100])
      .range(["red", "green"]);

  var scatter = gDrawing.append('g')
    .selectAll("text")
    .data(myData)
    .enter()
    .filter(function(d) { return d.Author == "User";})
    .append("text")
    .attr("class", "user_sentences")
    .text(function(d) {return d.Text; })
    .attr("x", 10) 
    .attr("y", function(d, i) {
      return (i * (fontSize + spaceSize));
    })
    .attr("fill", function(d, i){
      return colorScale(d.Probability);
    });


});

//d3.json("./getData", update);

//d3.csv("static/data/comparison.csv", update);
