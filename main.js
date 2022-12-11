x = 0;
y = 0;

var screen_width = "";

var screen_height = "";

var draw_apple = "";

var speak_data = "";

var to_number = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) 
{

  to_number = Number(content)

  if(Number.isInteger(to_number) = true)
  {
    document.getElementById("status").innerHTML = "started drawing apple"
    draw_data = "set"
  }
  else
  {
    document.getElementById("status").innerHTML = "The speech has not recognized a number"
  }

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function preload()
{
  draw_apple = loadImage('apple.png');
}

function setup() 
{
  screen_width = window.innerWidth;
  screen_height = window.innerHeight;

  canvas = createCanvas(150, 150);

  canvas.position(0, 150)
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";

    for(var i = 1; i <= to_number; i++)
    {
      x = Math.floor(Math.random()*700);
      y = Math.floor(Math.random()*400);
      image(apple, x, y, 50, 50)
    }
  

    speak()
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
