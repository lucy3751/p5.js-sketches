let day=21;

let canvasHeight =1000;
let canvasWidth =1000;

let zImage;
let myFont;

let randomLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];



function preload(){

    zImage = loadImage('assets/z.png');

    myFont = loadFont('assets/CutiveMono-Regular.ttf'); // load a font -https://p5js.org/reference/#/p5/loadFont



}

function setup(){


    
    createCanvas(canvasWidth,canvasHeight, WEBGL);
    angleMode(DEGREES);
    // stroke(0);
    // rect(0,0,canvasWidth,canvasHeight);

   



}


function draw(){

    clearCanvas();

    translate(-canvasWidth/2, - canvasHeight/2);

    rotateX(50);//rotate the plane

  


    // image(zImage,0,0);


    //get the color of the pixels of an image - https://canvascloud.ocadu.ca/courses/2345/pages/class-recording-friday-march-19-3-10pm?module_item_id=109806
    let imageData;


    
    for (var y=0; y<canvasHeight; y+=15){
        
            
       

        for (var x=0; x<canvasWidth + 10; x+=20){


            fill(0);
            textFont(myFont); // write text - https://p5js.org/reference/#/p5/text
            textSize(20);
            text('/', x, y);

            ///look through the array of pixels, and get the color value of the pixels (r,g,b,a)
            imageData = zImage.get(x,y);

            
            
            //console.log(imageData);

            if (JSON.stringify(imageData) == JSON.stringify([0,0,0, 255])){ //for the pixels that form the Z, draw letters on them

                fill(random(0,255),random(0,255),random(0,255));

                
                textFont(myFont);
                textSize(random(0,50));
                text(randomLetters[floor(random()*randomLetters.length)], x, y + random(0,100));
                //get random indexes from array - https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array
          
            }
           
        }

      



    }


}


function clearCanvas(){

    push();
        translate(-canvasWidth/2,-canvasHeight/2);
        fill(255);
        noStroke();
        rect(0,0,canvasWidth,canvasHeight);
    pop();

}



///PRESS S TO SAVE THE DRAWING - https://p5js.org/reference/#/p5/keyPressed
function keyPressed(){

    if(keyCode === 83){

        saveCanvas("z-day-"+day,"png")//(name, file extension)

    }
}



