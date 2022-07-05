

function StartClassification()
{
    navigator.mediaDevices.getUserMedia({audia:true});

    classifier = ml5.soundclassifier('https://teachablemachine.withgoogle.com/models/5rUeV6eRV/model.json',modelReady);

}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error,results)
{
    console.log('got result');
}