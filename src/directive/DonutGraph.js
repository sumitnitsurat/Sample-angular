module.exports = function () {
       return {
           restrict: 'E',
           scope: {
               data: '=',
               severity:'='
           },
           link: function (scope, element,attrs) {

               var width = element[0].parentElement.offsetWidth,
                   height = width/1.5,
                   radius = Math.min(width/2, height) / 2;

               var legendRectSize = width/20;
               var legendSpacing = 4;
               var dataset =[];
               scope.$watch('data', function(data) {
                   if(data && scope.severity) {
                       dataset = scope.data;
               labelData = [{"label": "Previous Peak: " + dataset[0]},
                   {"label": "Last 30 days: "+ dataset[1]},
                   {"label": "Days to full: "+ dataset[2]}];
                       
                if(scope.severity === "critical") {
                    var color = d3.scale.ordinal()
                        .range(["#cc0000", "#ff6666", "#ffe5e5"]);   
                }
                 else  if(scope.severity === "warning") {
                    var color = d3.scale.ordinal()
                        .range(["#f6a91a", "#eec273", "#eedab5"]);
                }
                       else {
                    var color = d3.scale.ordinal()
                    .range(["#5e7e89", "#9eb1b8", "#dee5e7"]);
                     
                }

               var pie = d3.layout.pie()
                   .sort(null);

               var arc = d3.svg.arc()
                   .innerRadius(radius/2.6)
                   .outerRadius(radius/1.6);

               var svg = d3.select(element[0]).append("svg")
                   .attr("width", width)
                   .attr("height", height)
                   .append("g")
                   .attr("transform", "translate(" + width / 4.5 + "," + height / 3 + ")");

               var path = svg.selectAll("path")
                   .data(pie(dataset))
                   .enter().append("path")
                   .attr("fill", function (d, i) {
                       return color(i);
                   })
                   .attr("d", arc);

               svg.append("text")
                  .attr("dy", ".35em")
                  .style("text-anchor", "middle")
                  .attr("class", "inside")
                  .text(function(d) {
                      return parseInt(dataset.reduce(function(a, b) { return a + b } )/(dataset.length))+"%";
                  });


               var legend = svg.selectAll('.legend')
                   .data(color.domain())
                   .enter()
                   .append('g')
                   .attr('class', 'legend')
                   .attr('transform', function (d, i) {
                       var height = legendRectSize + legendSpacing;
                       var offset = height * color.domain().length / 2;
                       var horz = 4 * legendRectSize;
                       var vert = i * height - offset;
                       return 'translate(' + horz + ',' + vert + ')';
                   });

               legend.append('rect')
                   .attr('width', legendRectSize)
                   .attr('height', legendRectSize)
                   .style('fill', color)
                   .style('stroke', color);

               legend.append('text')
                   .attr('x', legendRectSize + legendSpacing)
                   .attr('y', legendRectSize - legendSpacing)
                    .style("font-size", legendRectSize/1.1+"px")
                   .text(function (d, i) {
                       return labelData[i].label;
                   });
                   }
               });
           }

       }

   };
