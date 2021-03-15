d3.json("samples.json").then((data) => {
    console.log(data);
});

function buildCharts(sample) {
    d3.json("samples.json").then((data) => {

        var samples = data.samples;
        var resultsList = samples.filter(sampleObj => sampleObj.id == sample);
        var results = resultsList[0];

        var sampleValues = results.sample_values;
        var otuIDs = results.otu_ids;
        var otuLabels = results.otu_labels;







    });
}












// function buildMetadata(sample)

// function buildDropDown(sample)


