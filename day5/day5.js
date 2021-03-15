const canvasHeight = 1000;
const canvasWidth =1000;  

let i=0;

function setup(){



 
    createCanvas(canvasWidth,canvasHeight);
    background(0);

    // stroke(0);
    // rect(0,0,canvasWidth,canvasHeight);

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






    
///////////////////// DRAWING SPINNING LINE - ROUGH ////////////////////
///////////////////////////////////////////////////////////////////////


// let height = 0.1;
// let width =200;
// let x= -1*width/2;
// let y= -1*height/2;


// let startX=canvasWidth/5;
// let endX=canvasWidth-canvasWidth/5;
// let startX=startX;


// translate(startX,canvasHeight/2);

// if(startX<endX){
//     for (var i=0; i<101;i+=0.5){
//         rotate(i)
//         stroke(0);
//         rect(x,y,width,height);

//         if(i>100){
//             translate(startX+10,canvasHeight/2);
            

//             console.log("i greater than 100")


//         }

//     }
// }else{
//     console.log("finished");
// }




















}

function draw(){
    // let height = 0.1;
    // let width =200;
    // let x= -1*width/2;
    // let y= -1*height/2;

       //translate(canvasWidth/2,canvasHeight/2);
        //translate(mouseX,mouseY);

        //TOP STROKE
        //translate(canvasWidth/5,canvasHeight/5);//starting
        //translate(canvasWidth-canvasWidth/5,canvasHeight/5);//ending



        //BOTTOM STROKE
       // translate(canvasWidth/5,canvasHeight-canvasHeight/5);//starting
        //translate(canvasWidth-canvasWidth/5,canvasHeight-canvasHeight/5);//ending

  

        // translate(mouseX,mouseY);  
        // i+=5;
        // rotate(i);
        // rect(x,y,width,height);




    ////////////////ACTUAL DRAWING //////////////////////////// ////////////////////////////   ////////////////////////////      
     //////////////////////////////////////////////////////// ////////////////////////////   ////////////////////////////  


    ///EACH RECTANGLE /////
    let height = 0.1;
    let width =200;
    let x= -1*width/2;
    let y= -1*height/2;


    ////POSITIONS////
    let startX=canvasWidth/5;
    let endX=canvasWidth-canvasWidth/5;
    let startY=canvasHeight/5;
    let endY=canvasHeight-canvasHeight/5;

    
    //LINES///
    let linesNumber=300;

    //DISTANCE BETWEEN CENTER POINT
    let offset=100;

    //DIAGONAL STROKE ANGLE//
    let bend=1;






    //GAPS BETWEEN THE LINES///
    i+=random(25);


///////////////////TOP HORIZONTAL STROKE////////////////////////

    if(i<linesNumber){//first cycle
        push();//start translate
      // translate(startX,canvasHeight/5);
   // console.log("first distance X",startX)
     //  rotate(i);
     //  rect(x,y,width,height);
     drawSpinningHorizontalTop(startX,i);
       pop();//stop translate
    }
    
    if(i>=linesNumber){//second cycle
        //shift the center point distance
        push();//start translte
        // translate(startX+100,canvasHeight/5);
        // rotate(i);
        // rect(x,y,width,height);
        drawSpinningHorizontalTop(startX+1*offset,i);
        pop();//stop translate
    }

    if(i>=2*linesNumber){
        //shift the center point distance
        push();
        // translate(startX+200,canvasHeight/5);
        // rotate(i);
        // rect(x,y,width,height);
        drawSpinningHorizontalTop(startX+2*offset,i);
        pop();
    }

    if(i>=3*linesNumber){
        push();
        drawSpinningHorizontalTop(startX+3*offset,i);
        pop();
    }

    if(i>=4*linesNumber){
        push();
        drawSpinningHorizontalTop(startX+4*offset,i);
        pop();
    }

    if(i>=5*linesNumber){
        push();
        drawSpinningHorizontalTop(startX+5*offset,i);
        pop();
    }

    if(i>=6*linesNumber){
        push();
        drawSpinningHorizontalTop(startX+6*offset,i);
        pop();
    }

///////////////////DIAGONAL STROKE////////////////////////

    if(i>=7*linesNumber){
        push();
        drawSpinningDiagonal(endX-1*offset/bend,startY+1*offset,i);
        pop();
    }

    if(i>=8*linesNumber){
        push();
        drawSpinningDiagonal(endX-2*offset/bend,startY+2*offset,i);
        pop();
    }

    if(i>=9*linesNumber){
        push();
        drawSpinningDiagonal(endX-3*offset/bend,startY+3*offset,i);
        pop();
    }

    if(i>=10*linesNumber){
        push();
        drawSpinningDiagonal(endX-4*offset/bend,startY+4*offset,i);
        pop();
    }

    if(i>=11*linesNumber){
        push();
        drawSpinningDiagonal(endX-5*offset/bend,startY+5*offset,i);
        pop();
    }

    if(i>=12*linesNumber){
        push();
        drawSpinningDiagonal(endX-6*offset/bend,startY+6*offset,i);
        pop();
    }
    


///////////////////BOTTOM HORIZONTAL STROKE////////////////////////

    if(i>=13*linesNumber){
        push();
        drawSpinningHorizontalBottom(startX+1*offset,i);
        pop();
    }

    if(i>=14*linesNumber){
        push();
        drawSpinningHorizontalBottom(startX+2*offset,i);
        pop();
    }

    if(i>=15*linesNumber){
        push();
        drawSpinningHorizontalBottom(startX+3*offset,i);
        pop();
    }

    if(i>=16*linesNumber){
        push();
        drawSpinningHorizontalBottom(startX+4*offset,i);
        pop();
    }

    if(i>=17*linesNumber){
        push();
        drawSpinningHorizontalBottom(startX+5*offset,i);
        pop();
    }

    if(i>=18*linesNumber){
        push();
        drawSpinningHorizontalBottom(startX+6*offset,i);
        pop();
    }


    if(i>=19*linesNumber){
            noLoop(); //stop animation - https://p5js.org/reference/#/p5/noLoop
            console.log("stop");

        }







    ///////////// DRAWING ONE SPINNING CYCLE FUNCTION //////////////
    //////////////////////////////////////////////////////////////
    function drawSpinningHorizontalTop(distance,angle){
        translate(distance,startY);
        rotate(angle);
        stroke(255);
        rect(x,y,width,height);
    }


    function drawSpinningHorizontalBottom(distance,angle){
        translate(distance,endY);
        rotate(angle);
        stroke(255);
        rect(x,y,width,height);
    }


    function drawSpinningDiagonal(distanceHorizontal,distanceVertical,angle){
        translate(distanceHorizontal,distanceVertical);
        rotate(angle);
        stroke(255);
        rect(x,y,width,height);
    }



    


///FAILED LESS-BRUTEFORCE APPROACH/////////////
////////////////////////////////////////
//    let totalCycles=6;

    // for (var cycle=0; cycle<totalCycles-1; cycle++){
    //     if(i<linesNumber){
    //         push();
    //         drawSpinningHorizontalTop(startX,i);
    //         pop()
    //     }

    //     if(i>=cycle*linesNumber){
    //         push();
    //         drawSpinningHorizontalTop(startX+cycle*offset,i);
    //         pop();
    //     }

    //     if(i>=totalCycles-1*linesNumber){
    //         noLoop();
    //         console.log("stop");
    //     }


    // }



        


}



function mousePressed(){
    saveCanvas("z-day5","png")//(name, file extension)
}




    









    
