var canvasWidth=1000;
var canvasHeight=1000;


function setup(){


    createCanvas(canvasWidth,canvasHeight);
    background(0);


    angleMode(DEGREES);






 


   
}


function draw(){

   //CREATING THE SERIF WITH TAN - https://p5js.org/reference/#/p5/tan
    /////////////////////////////////////////////////////////////////////

    //width - stays the same
    //height = increase, forms a tangent function shape
        //height = some value (a base height?) * tan( angles from 0-90 degrees (not including 90?) )
    //y-coordinate - stays the same
    //x - coordinate - increase by a certain ammount ("distance")


    var x=canvasWidth/5+50;
    var y=canvasHeight/5;
    var x2=canvasWidth-x-50;
    var y2=canvasHeight-y;
    var height;

    var baseHeight=10
    var distance=0;
   
    for (var degree=86; degree>=0; degree--){
        
        height=baseHeight*tan(degree);

        distance+=5;
        // console.log("tan value:",tan(degree), "degree:",degree);
        stroke(255);
        rect(x+distance,y,0.1,height);
        rect(x+distance+1,y,0.1,height);
        rect(x+distance+2,y,0.1,height);
        rect(x+distance-1,y,0.1,height);
        rect(x+distance-2,y,0.1,height);

        rect(x2-distance,y2,0.1,-height);
        rect(x2-distance+1,y2,0.1,-height);
        rect(x2-distance+2,y2,0.1,-height);
        rect(x2-distance-1,y2,0.1,-height);
        rect(x2-distance-2,y2,0.1,-height);
        
        
    }
    

    ////DIAGONAL LINE THAT CONNECTS THE TWO SERIFS /////
    /////////////////////////////////////////////////
    push(); //start a new drawing state 
    rectMode(CENTER);
    for (var i=0;i<601;i+=1){
        rect(canvasWidth/3.8+i/1.5,canvasHeight-(canvasHeight/5)-i,50,0.1);
    }
    pop();//restore original state

  



}




function mousePressed(){
    saveCanvas("z-day3","png")//(name, file extension)
}