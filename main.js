
//Color Map

colorMap = {
   Anarchism: '#ff4500',
   canada: '#9a0000',
   Catholicism: '#ff5d00',
   college: '#EE4422',
   communism: '#550000',
   Conservative: '#ffca00',
   democrats: '#fbdf75',
   environment: '#ffb000',
   Full_news: '#ff8717',
   geopolitics: '#fffb7b',
   liberal: '#fefbcc',
   libertarian: '#f8ff00',
   moderatepolitics: '#0dd3bb',
   neutralnews: '#00a6a5',
   NeutralPolitics: '#00dabb',
   news:  '#b3f6f5',
   PoliticalDiscussion: '#84dede',
   politics: '#24a0ed',
   progressive: '#0048a6',
   qualitynews: '#00208f',
   Republican: '#0079d3',
   socialism: '#6ed1ff',
   technology: '#83a6de',
   TheNewRight: '#394e85',
   The_Donald: '#97d9ff',
   TrueReddit: '#00765b',
   unitedkingdom: '#004b2b',
   worldevents: '#004f53',
   worldnews: '#007676',
   worldpolitics: '#002d2f'
}

legendlocationMap_text = {
    Anarchism : "translate(10,40)",
    canada: "translate(135,40)",
    Catholicism: "translate(230,40)",
    college: "translate(355,40)",
    communism: "translate(448,40)",
    Conservative: "translate(570,40)",
    democrats: "translate(700,40)",
    environment: "translate(810,40)",
    Full_news: "translate(930,40)",
    geopolitics: "translate(1045,40)",
    liberal: "translate(1160,40)",
    libertarian: "translate(1250,40)",
    moderatepolitics: "translate(1355,40)",
    neutralnews: "translate(1505,40)",
    NeutralPolitics: "translate(1635,40)",
    news: "translate(28,110)",
    PoliticalDiscussion: "translate(100,110)",
    politics: "translate(243,110)",
    progressive: "translate(340,110)",
    qualitynews: "translate(450,110)",
    Republican: "translate(572,110)",
    socialism: "translate(700,110)",
    technology: "translate(814,110)",
    TheNewRight: "translate(917,110)",
    The_Donald: "translate(1038,110)",
    TrueReddit: "translate(1145,110)",
    unitedkingdom: "translate(1240,110)",
    worldevents: "translate(1367,110)",
    worldnews: "translate(1510,110)",
    worldpolitics: "translate(1640,110)"
}

legendlocationMap_square = {
    Anarchism : "translate(30,50)",
    canada: "translate(142,50)",
    Catholicism: "translate(254,50)",
    college: "translate(362,50)",
    communism: "translate(472,50)",
    Conservative: "translate(595,50)",
    democrats: "translate(718,50)",
    environment: "translate(835,50)",
    Full_news: "translate(945,50)",
    geopolitics: "translate(1065,50)",
    liberal: "translate(1167,50)",
    libertarian: "translate(1267,50)",
    moderatepolitics: "translate(1395,50)",
    neutralnews: "translate(1532,50)",
    NeutralPolitics: "translate(1670,50)",
    news: "translate(30,120)",
    PoliticalDiscussion: "translate(142,120)",
    politics: "translate(254,120)",
    progressive: "translate(362,120)",
    qualitynews: "translate(472,120)",
    Republican: "translate(595,120)",
    socialism: "translate(718,120)",
    technology: "translate(835,120)",
    TheNewRight: "translate(945,120)",
    The_Donald: "translate(1065,120)",
    TrueReddit: "translate(1167,120)",
    unitedkingdom: "translate(1267,120)",
    worldevents: "translate(1395,120)",
    worldnews: "translate(1532,120)",
    worldpolitics: "translate(1670,120)"
}


subreddit_names=["Anarchism","canada","Catholicism","college","communism","Conservative","democrats","environment","Full_news","geopolitics","liberal","libertarian",
                "moderatepolitics","neutralnews","NeutralPolitics","news","PoliticalDiscussion","politics","progressive","qualitynews","Republican","socialism","technology",
                "TheNewRight","The_Donald","TrueReddit","unitedkingdom","worldevents","worldnews","worldpolitics"];

colorRange =[colorMap["Anarchism"],colorMap["canada"],colorMap["Catholicism"],colorMap["college"],colorMap["communism"],colorMap["Conservative"],colorMap["democrats"],colorMap["environment"],
             colorMap["Full_news"],colorMap["geopolitics"],colorMap["liberal"],colorMap["libertarian"],colorMap["moderatepolitics"],colorMap["neutralnews"],colorMap["NeutralPolitics"],colorMap["news"],
             colorMap["PoliticalDiscussion"],colorMap["politics"],colorMap["progressive"],colorMap["qualitynews"],colorMap["Republican"],colorMap["socialism"],colorMap["technology"],
             colorMap["TheNewRight"],colorMap["The_Donald"],colorMap["TrueReddit"],colorMap["unitedkingdom"],colorMap["worldevents"],colorMap["worldnews"],colorMap["worldpolitics"] ];

//Things Required for ScatterPlot

        // Global functions called when select elements changed
        function onXScaleChanged() {
            var select = d3.select('#xScaleSelect').node();
            // Get current value of select element, save to global chartScales
            chartScales.x = select.options[select.selectedIndex].value;
            // Update chart
            scatter_updateChart();
        }

        function onYScaleChanged() {
            var select = d3.select('#yScaleSelect').node();
            // Get current value of select element, save to global chartScales
            chartScales.y = select.options[select.selectedIndex].value;
            // Update chart
            scatter_updateChart();
        }

        topicMap = {Parkland: 0 , NorthKorea: 1 , Florence: 2, Shutdown: 3, Kavanaugh: 4 }

        var divFirst = d3.select("#FirstRow");

        var zoom = d3.zoom()
                .on("zoom",zoomFunction);

        var svg = divFirst.select('svg#scatterplot');

        // Get layout parameters
        var svgWidth = +svg.attr('width');
        var svgHeight = +svg.attr('height');

        var padding = {t: 40, r: 40, b: 40, l: 70};

        // Compute chart dimensions
        var chartWidth = svgWidth - padding.l - padding.r;
        var chartHeight = svgHeight - padding.t - padding.b;


        // Create a group element for appending chart elements
        var chartG = svg.append('g')
            .attr('transform', 'translate('+[padding.l, padding.t]+')');

        // Create groups for the x- and y-axes
        var xAxisG = chartG.append('g')
            .attr('class', 'x axis')
            .attr('transform', 'translate('+[0, chartHeight]+')');

        var yAxisG = chartG.append('g')
            .attr('class', 'y axis');

        svg.call(zoom);


//Word Cloud
        WordCloudDiv = divFirst.select('#wordcloud');            
        
//Toolbar
        svgToolbar = d3.select("#toolbar")
                        .append("svg")
                        .attr("width",1850)
                        .attr("height",160)
                        .attr("class","svgTB");

        legendGraphic= svgToolbar.append("g")
                                .attr("id", "legendSubreddit")
                                .attr("transform", "translate(5,0)")
                                .attr("fill", "black")
                                .style("fill-opacity", "1");

        //console.log(svgToolbar.select("#legendSubreddit"));
        
        Lnames = legendGraphic.selectAll('.lnames').data(subreddit_names);

        Lnames.enter()
              .append('text')
              .text(function(d){
                    return d;
                  })
             .attr("transform",function(d){
                    return legendlocationMap_text[d];
            });

        Lnames.enter()
              .append('rect')
              .attr("fill", function(d){
                    //console.log(d);
                    return colorMap[d];
                  })
              .attr("width",30)
              .attr("height",30)
              .attr("rx",5)
              .attr("ry",5)
              .attr("transform",function(d,i){
                        return legendlocationMap_square[d];
                    });


//MetaInfo
        mouseclick = 0;
        svgMeta = d3.select("#metainfo");

        svgMeta.append('text')
                .attr("transform","translate(50,50)")
                .text("Topic Name: ");

        svgMeta.append('text')
                .attr("transform","translate(50,80)")
                .text("Subreddit Name:");

        svgMeta.append('text')
                .attr("id","topic_label")
                .attr("transform","translate(170,50)")
                .text("Sample");

        svgMeta.append('text')
                .attr("id","subreddit_label")
                .attr("transform","translate(170,80)")
                .text("Sample");


//SentenTree

d3.csv('./data.csv',
    // Load data and use this function to process each row
    function(row) {
        return {
            'topic_name': row['topic_name'],
            'subreddit_name': row['subreddit_name'],
            'avg_pos': +row['avg_pos'],
            'avg_neg': +row['avg_neg'],
            'avg_neu': +row['avg_neu'],
            'avg_compound': +row['avg_compound'],
            'subscribers_count': +row['subscribers_count'],
            'comments_count': +row['comments_count'],
            'submissions_count' : +row['submissions_count']
        };
    },
    function(error, dataset) {
        // Log and return from an error
        if(error) {
            console.error('Error while loading ./letter_freq.csv dataset.');
            console.error(error);
            return;
        }

        subreddits = dataset;
        // Create global object called chartScales to keep state
        subredditsByTopic = d3.nest()
                              .key(function(d) { return d.topic_name; })
                              .entries(subreddits);
        
        columns=dataset.columns;

        onTopicChange();
        
    });


function mouseclicked(d){

    mouseclick =1;
                        
    var source = "WordCloud/"+d.topic_name+"/"+d.subreddit_name+".png"
    
    WordCloudDiv.attr("src",source)
                .attr("style","opacity="+1);

    sentenTree(d);
    
    svgMeta.select('#topic_label')
            .text(function(){
                //console.log(d.topic_name);
                return d.topic_name;
            });

    svgMeta.select('#subreddit_label')
            .text(function(){
                return d.subreddit_name;
            });
}

function scatter_updateChart() {
    
    // Update the scales based on new data attributes
	yScale.domain(domainMap[chartScales.y]).nice();
	xScale.domain(domainMap[chartScales.x]).nice();

	//xAxisG.call(d3.axisBottom(xScale));
	//yAxisG.call(d3.axisLeft(yScale));

    xAxis = d3.axisBottom(xScale);
    yAxis = d3.axisLeft(yScale);

	xAxisG.transition()
            .duration(800)
            .call(xAxis);
	
	yAxisG.transition()
            .duration(800)
            .call(yAxis);

	dots = chartG.selectAll('.dot')
                .data(test);

    dotsEnter = dots.enter()
                    .append('g')
                    .attr('class', 'dot')
                    .attr('transform', function(d) {
                        var tx = xScale(d[chartScales.x]);
                        var ty = yScale(d[chartScales.y]);
                        return 'translate('+[tx, ty]+')';
                        })
                    .attr('fill',function(d){
                        return colorMap[d.subreddit_name];
                    })
                    .on('click', function(d){
                        mouseclicked(d);
                    })
                    .on('mouseover', function(d){
                        
                        svgMeta.select('#topic_label')
                                .text(function(){
                                    //console.log(d.topic_name);
                                    return d.topic_name;
                                });

                        svgMeta.select('#subreddit_label')
                                .text(function(){
                                    return d.subreddit_name;
                                });

                    })
                    .on('mouseout',function(d){

                        if(mouseclick!=1){

                            svgMeta.select('#topic_label')
                                .text('');

                            svgMeta.select('#subreddit_label')
                                .text('');
                        }
                    });
    
	dotsEnter.append('circle')
             .attr('r', 8);

    dots.merge(dotsEnter)
        .transition()
        .duration(800)
        .attr('transform', function(d) {
            var tx = xScale(d[chartScales.x]);
            var ty = yScale(d[chartScales.y]);
            return 'translate('+[tx, ty]+')';
        });

    dotsEnter.append('text')
                .attr('y', -10)
                .text(function(d) {
                    return d.subreddit_name;
                });
}

function zoomFunction(){

      // create new scale ojects based on event
      var new_xScale = d3.event.transform.rescaleX(xScale)
      var new_yScale = d3.event.transform.rescaleY(yScale)

      // update axes
      xAxisG.call(xAxis.scale(new_xScale));
      yAxisG.call(yAxis.scale(new_yScale));

      // update circles

      dotsEnter.attr('transform', function(d) {
            var tx = new_xScale(d[chartScales.x]);
            var ty = new_yScale(d[chartScales.y]);
            return 'translate('+[tx, ty]+')';
        });

      dots.attr("transform", function(d){
            var tx = new_xScale(d[chartScales.x]);
            var ty = new_yScale(d[chartScales.y]);
            return 'translate('+[tx, ty]+')';
      });
}

function onTopicChange(){
    
    var topic = d3.select('#TopicSelected').node();
    topic = topic.options[topic.selectedIndex].value;

    //console.log(topic);

    test = subredditsByTopic[topicMap[topic]].values;

    xScale = d3.scaleLinear()
    .range([0, chartWidth]);

    yScale = d3.scaleLinear()
    .range([chartHeight, 0]);

    domainMap = {};

    columns.forEach(function(column) {
        domainMap[column] = d3.extent(test, function(data_element){
        return data_element[column];
        });
    });

    chartScales = {x: 'avg_compound', y: 'avg_pos'};
    scatter_updateChart();  
}

function sentenTree(d){

      google.charts.load('current', {packages:['wordtree']});
      google.charts.setOnLoadCallback(drawChart);
      //console.log(d);
      text_data = [];
      split_text = [];
      //keywords = ['florence', 'kavanaugh', 'kim jong-un', 'border wall'];
      function readTextFile(file)
      {
         var rawFile = new XMLHttpRequest();
         rawFile.open("GET", file, false);
         rawFile.onreadystatechange = function ()
         {
             if(rawFile.readyState === 4)
             {
                 if(rawFile.status === 200 || rawFile.status == 0)
                 {
                     var allText = rawFile.responseText;
                     split_text = allText.split('\n')
                     for (i = 0; i <= split_text.length-1; i++){
                         text_data.push([split_text[i]])
                     }
                 }
             }
         }
         rawFile.send(null);
      }

      var source = "SentenTree/"+d.topic_name+"/"+d.subreddit_name+".txt";
      console.log(source);
      readTextFile(source);
      console.log(text_data);
      
      function drawChart() {
        var data = google.visualization.arrayToDataTable(
          text_data
        );

        var options = {
          colors: colorMap[d.subreddit_name],
          fontName: 'Arial',
          wordtree: {
                  format: 'implicit',
                  type: 'double',
                  word: 'florence'
                  }
        };

        var chart = new google.visualization.WordTree(document.getElementById('sententree'));
        chart.draw(data, options);
      }
}

