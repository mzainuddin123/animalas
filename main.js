function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/C7KlGvggS/model.json",modelReady);
}
function modelReady{
    classifier.classify(gotResults);
}
function gotResult(error,results){
    if(error){
        else{
            console.log(results)
            random_number_r=Math.floor(Math.random()*255)+1;
            random_number_g=Math.floor(Math.random()*255)+1;
            random_number_b=Math.floor(Math.random()*255)+1;
        }
        if(result[0].label_dog=="barking"){
            document.getElementById("cat1.jpg").style.visibility="hidden";
            document.getElementById("detected").innerHTML="I can Hear-"+result[0].label_dog;
        }
        else if(result[0].label_cat=="meowing"){
            document.getElementById("dog1.jfif").style.visibility="hidden";
            document.getElementById("detected").innerHTML="I can Hear-"+result[0].label_cat;
        }
    }
}
