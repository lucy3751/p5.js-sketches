let day=20;

let canvasHeight =1000;
let canvasWidth =1000;

let zImage;



function preload(){

    zImage = loadImage('assets/z.png');



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

    rotateX(0);

  


    // image(zImage,0,0);


    //get the color of the pixels of an image - https://canvascloud.ocadu.ca/courses/2345/pages/class-recording-friday-march-19-3-10pm?module_item_id=109806
    let imageData;




    
    for (var y=0; y<canvasHeight; y+=10){
        strokeWeight(5);
        beginShape(POINTS)//draw points across the canvas

        for (var x=0; x<canvasWidth + 10; x+=10){

            ///look through the array of pixels, and get the color value of the pixels (r,g,b,a)
            imageData = zImage.get(x,y);

            vertex(x,y);
            
            //console.log(imageData);

            if (JSON.stringify(imageData) == JSON.stringify([0,0,0, 255])){ //make the Z pixels darker and moving to show the shape

                strokeWeight(5);
                // noStroke();
                // stroke(0);
                // fill(255,0,0)
                // rect(x,y,random(10,100),10);

                //extrude the z-values of the vertex points
                vertex(x,y, random(0,50));
              


          
            }

            // fill(imageData);
            // noStroke();
            // // stroke(255,0,0);
    
           
        }

        endShape();



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



