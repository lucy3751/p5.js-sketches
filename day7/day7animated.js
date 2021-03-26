//Canvas dimensions
let canvasWidth = 1000;
let canvasHeight = 1000;

console.log("hi");






function setup(){

    createCanvas(canvasWidth,canvasHeight); 
    background(0);
    
    angleMode(DEGREES);


    //create gif animation - https://www.npmjs.com/package/p5.createloop
    frameRate(60);
    createLoop({


        duration:6,
        gif: true

    })





  
    

///MOIRE DIAGONAL LINE 
//////////////////////////

        //boundaries (the converging point moving back and forth)
            //startX - canvasWidth/5?
            //startY - canvasHeight/5
            //endX - canvasWidth - startX
            //endY - canvasHeight - startY

        //line 1 - converging point
            //starting point - (endX, startY)
            //ending point- (startX, endY)

        //line 2
            //starting point - same as converging point - (endX, startY)
            //ending point - converging point's ending point, but add some gap - (startX + increment , endY)

        //line 3
            //starting point - same as converging point
            //ending point - converging point's ending point, but add some gap - (startX + 2*increment, endY)




    //boundaries
    // let startX = canvasWidth/5;
    // let startY = canvasHeight/5;

    // let endX = canvasWidth - startX;
    // let endY = canvasHeight - startY;


    //line 1
    // line (endX,startY, startX, endY);

    
 
    // let increment = 10;  //gaps between the lines 
    // let amountLines = 15;//amount of lines to be drawn
    
    // for (var i=0; i<amountLines; i++){ //can use this to draw line 1 as well, since when i is 0, 0 multiply the increment would be no increment
    //     line (endX, startY, startX + i*increment, endY); 

    // }







//LINE ANIMATION
////////////////////////
    
        //since the converging point's X coordinate moves, use a variable to represent the moving X coordinate - movingX

        //the moving X coordinate moves back and forth - periodic motion
            //max - endX
            //min - startX 
        
        //cosine function - y = a*cos(k(x-c))+d 
            //amplitude - a = (max-min)/2
            //frequency - k = some speed?
            //horizontal shift - c - don't really need to worry about that
            //vertical shift - d = (max+min)/2 
            //angle - x (will input using a for loop)
            //cosine value - y - basically the moving X coordinate


    // let k = 1;//frequency/speed
    // let a = (endX - startX)/2; //amplitude 
    // let d = (endX + startX)/2 //vertical shift to get the crest and trough of the cosine wave to be the max and min value
        
    
    // let movingX//cosine function value


    //console.log("start:", startX, "end:",endX); 200,800

    // for(var angle=0 ; angle<=360; angle++){

    //     movingX = a*cos(k*angle)+d;
    //     console.log(movingX);


    // }
 

}



//boundaries
let startX = canvasWidth/5;
let startY = canvasHeight/5;

let endX = canvasWidth - startX;
let endY = canvasHeight - startY;

let increment = 10;  //gaps between the lines 
let amountLines = 15;//amount of lines to be drawn


//
let k = 2;//frequency/speed
let a = (endX - startX)/2; //amplitude 
let d = (endX + startX)/2 //vertical shift to get the crest and trough of the cosine wave to be the max and min value
    

//cosine function value - the moving X coordinate
let movingXStartMax
let movingXStartMin


//for loop and conditions stuff
let angle=0;
let cycleNumber=1;

//colors
let colorValue = [255,0,0]; //array storing a set of rgb values
let colorValue2 = [0,255,0];//array storing another set of rgb values 
let colorNumber = [255,100];//two values to be pick



//save pngs to create gif
let pngNumber = 0;
let duration = 6;



///PRESS S TO SAVE THE DRAWING - https://p5js.org/reference/#/p5/keyPressed
function keyPressed(){

    if(keyCode === 83){

        saveCanvas("z-day7","png")//(name, file extension)

    }

}


function draw(){

 

    clearCanvas();




    angle++;

    movingXStartMax = a*cos(k*angle)+d;//starting at endX - the maximum
    movingXStartMin = -a*cos(k*angle)+d;//starting at startX - the minimum
    
    // console.log(angle);


    //CHANGE COLOR AFTER 1 CYCLE
    if(angle>(cycleNumber*360/k)){
        // console.log("bigger than 1 cycle");
        let colorPlaceholder;
        let colorPlaceholder2;

        if(typeof colorPlaceholder && typeof colorPlaceholder2 !== 'undefined'){

            if(colorPlaceholder == colorValue || colorPlaceholder2 == colorValue2){//if current and previous color are the same, generate new set of colors
                colorValue = [random(colorNumber),random(colorNumber),random(colorNumber)];
                colorValue2 = [random(colorNumber),random(colorNumber),random(colorNumber)];
                //console.log("same color as previous")
            }

        }
        
        
        colorValue = [random(colorNumber),random(colorNumber),random(colorNumber)];
        colorValue2 = [random(colorNumber),random(colorNumber),random(colorNumber)];

        if(colorValue == colorValue2){//if both colors are the same, generate new set of colors
            colorValue = [random(colorNumber),random(colorNumber),random(colorNumber)];
            colorValue2 = [random(colorNumber),random(colorNumber),random(colorNumber)];
            //console.log("same color for both sets of lines");
        }
        
        // console.log("colorValue",colorValue);
        // console.log("colorValue2",colorValue2);

        //console.log(typeof colorPlaceholder2);

        colorPlaceholder = colorValue;
        colorPlaceholder2 = colorValue2;

        // console.log("colorPlaceholder",colorPlaceholder);
        // console.log("colorPlaceholder2",colorPlaceholder2);
 




        cycleNumber++;

    
    }


    //DRAWING THE LINES
    for(var i=0;i<amountLines;i++){


        //TOP CONVERGING POINT LINE 
            //stroke(255,255,0); 
            stroke(colorValue);
            line (movingXStartMin, startY, max(movingXStartMax - i*increment, startX), endY); 
            //use max() to avoid the lines going out of startX boundary - https://p5js.org/reference/#/p5/max
            //max() takes in the biggest value in the brackets, and use that as the second point x-coordinate, in this case

        //BOTTOM CONVERGING POINT LINE
            //stroke(255,0,0);
            stroke(colorValue2);
            line (movingXStartMin, endY, min(movingXStartMax + i*increment, endX), startY); 
            //min() to avoid the lines going out of the endX boundary - https://p5js.org/reference/#/p5/min

        

        
        //TOP HORIZONTAL LINE
            //if converging point is < center of canvas - colorValue2
            //if converging point is > center of canvas - colorValue
            if(movingXStartMin < canvasWidth/2){
                stroke(colorValue2)
            }else if (movingXStartMin> canvasWidth/2){
                stroke(colorValue);
            }
            //stroke(255,0,0);
            line(movingXStartMin, startY, min(movingXStartMax + i*increment, endX), startY);

        //BOTTOM HORIZONTAL LINE
            //stroke(0,0,255);
            line(movingXStartMin, endY, max(movingXStartMax - i*increment, startX), endY);


    }

      

    //SAVE PNG TO STICH INTO GIF
    // pngNumber++;

    // // console.log(pngNumber);
    
    // if(pngNumber<=360){
        
    //     saveCanvas("z-day7-"+pngNumber,"png")//(name, file extension)


    // }else if(pngNumber>360){
    //     noLoop();
    // }


    
  
  

       
        
    
    
 



}



    

    

  




//clear the Canvas
function clearCanvas(){
        fill(0);
        rect(0,0,canvasWidth,canvasHeight);
}