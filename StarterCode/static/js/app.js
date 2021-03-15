d3.json("samples.json").then((data) => {
    console.log(data);
});

// Function to build charts
function buildCharts(sample) {

    // Fetch sample data from file
    d3.json("samples.json").then((data) => {
        var sampleInfo = data.samples;
        console.log(sampleInfo)

        // Filter object by id
        var results = sampleInfo.filter(sampleObj => sampleObj.id == sample)[0];
        // var results = resultsList[0];
        console.log(results)

        // Set variables for horizantal bar chart values
        var sampleValues = results.sample_values.slice(0, 10).reverse();
        console.log(sampleValues);

        var otuIDs = results.otu_ids;
        console.log(otuIDs);

        var otuLabels = results.otu_labels.slice(0, 10).reverse();
        console.log(otuLabels);

        var yticks = otuIDs.map(sampleObj => "OTU " + sampleObj).slice(0,10).reverse();
        
        // Build bar chart
        var barData = [{
            x: sampleValues,
            y: yticks,
            text: otuLabels,
            type: "bar",
            orientation: "h"

        }];

        var barLayout = {
            title: "Top 10 OTU's found"
        };

        Plotly.newPlot("bar", barData, barLayout);

        
    });
}



// function buildMetadata(sample)

// function buildDropDown(sample)
function init() {
    var dropDown = d3.selectAll("#selDataset");

    d3.json("samples.json").then((data) => {
        var sampleNames = data.names;

        sampleNames.forEach((sample) => {
            dropDown
                .append("option")
                .text(sample)
                .property("value", sample);
        });

        var firstSample = sampleNames[0];
        buildCharts(firstSample);
        // buildMetadata(firstSample);

    });
   
}

function optionChanged(newSample) {
    buildCharts(newSample);
    // buildMetadata(newSample);
}

init();



