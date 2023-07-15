var camera = document.getElementById("Camera");
Webcam.set({
    width:350,
    height:300,
    image_format:'"png"',
    png_quality:90
});
Webcam.attach(camera);
function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("Display").innerHTML="<img src='"+data_uri+"'>";
    });
}
console.log("ml5 version is "+ml5.version);
ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/UxOlaEMsp/model.json");