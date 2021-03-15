const canvasHeight = 1000;
const canvasWidth =1000;  

let i=0;

function setup(){



 
    createCanvas(canvasWidth,canvasHeight);
    background(255);

    stroke(0);
    rect(0,0,canvasWidth,canvasHeight);

    angleMode(DEGREES);
    // rectMode(CENTER);

    //CENTER POINT
    // stroke(200);
    // line(0,canvasHeight/2,canvasWidth,canvasHeight/2);
    // line(canvasWidth/2,0,canvasWidth/2,canvasHeight);





///////////////////// TRANSLATE AND ROTATE FUNCTION ////////////////////
///////////////////////////////////////////////////////////////////////

/*
FROM: https://www.youtube.com/watch?v=maTfm84mLbo&ab_channel=xinxin

    translate function 
        - p5 cartesian plane - the origin (0,0) is sitting on the top left
        - in order to shift that origin, we have to use translate()
        - translate shifts that whole cartesian plane to a different origin defined by x,y in the translate function


    rotate function 
        - have to use it in combination with translate()
        - once the angleMode is set to degrees, radians cannot be used

*/
        
    // translate(canvasWidth/2,canvasHeight/2);
    // stroke(0);
    //rect(-100,-100,200,200);//to offset the rectangle to the origin, subtract the x and y values by half of its width and height


}

function draw(){
    let height = 0.1;
    let width =200;
    let x= -1*width/2;
    let y= -1*height/2;

        translate(mouseX,mouseY);

       
        i+=5;
        rotate(i);
        stroke(0);
        rect(x,y,width,height);

}



function mousePressed(){
    saveCanvas("z-day4","png")//(name, file extension)
}




    









    
