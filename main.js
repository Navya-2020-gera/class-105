Webcam.attach("camera")
camera=document.getElementById("camera")


Webcam.set({
    width:350,
    height:300,
    image_format:'jpeg',
    jpeg_quality:100

})

function take_snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img src="+data_uri+" id='my_selfie'>"
    })
}

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/O4eYTEirQ/model.json",modelloaded)

function modelloaded(){
    console.log("model is loaded")
}
function check (){
    img.document.getElementById("my_selfie").innerHTML
    classifier.classify(img,result)
}
function result(error,results){
    if(error)
    {console.error(error) 
    }
    else{
        console.log(results)
    }
}