///INSPIRATION: 
//https://twitter.com/MauriceMeilleur/status/1365763283182116866
//Armin Hofmann's Graphic Design Manual, pg. 70


let day=14;

let canvasHeight = 1000;
let canvasWidth = 1000;

let red = [255,0,0];



function setup(){

    //circle diameters
    let bigCircleDiameter = random(0,300);
    let smallCircleDiameter = random(0,200);
    let normalCircleDiameter = random(0,100);

    //boundaries
    let startX = canvasWidth / 5;
    let endX = canvasWidth - startX;
    let startY = canvasHeight / 6;
    let endY = canvasHeight - startY;


    //TYPES OF CIRCLES
    var circle1 = {

        centerX: startX,
        centerY: startY,
        centerX0: 0,
        centerY0: 0,
        diameter: bigCircleDiameter,
        radius: bigCircleDiameter / 2

    }

    var circle1B = {

        centerX: startX,
        centerY: startY,
        centerX0: 0,
        centerY0: 0,
        diameter: bigCircleDiameter,
        radius: bigCircleDiameter / 2

    }

    var circle2 = { 
    
        centerX: canvasWidth/2,
        centerY: startY,
        centerX0: 0,
        centerY0: 0,
        diameter: normalCircleDiameter,
        radius: normalCircleDiameter / 2

    }

    var circle2B = { 
    
        centerX: canvasWidth/2,
        centerY: startY,
        centerX0: 0,
        centerY0: 0,
        diameter: normalCircleDiameter,
        radius: normalCircleDiameter / 2

    }

    var circle3 = {

        centerX: endX,
        centerY: startY,
        centerX0: 0,
        centerY0: 0,
        diameter: smallCircleDiameter,
        radius: smallCircleDiameter / 2
    }



    let gapX = canvasWidth/2 - startX;
    let gapY = canvasHeight/2 - startY;



    createCanvas(canvasWidth, canvasHeight);
    background(255);

    //CANVAS BORDER
    // stroke(0);
    // noFill();
    // rect(0, 0, canvasWidth, canvasHeight);


    angleMode(DEGREES);

    

    //GUIDES
    //center point
    // line(0,canvasHeight/2,canvasWidth,canvasHeight/2);
    // line(canvasWidth/2,0,canvasWidth/2,canvasHeight);


    //circle center guides
    // line(startX, startY, startX+gapX, startY);
    // line(startX, startY, startX, startY + gapY);

    // line(endX, startY, endX-gapX, startY);
    // line(endX, startY, endX, startY + gapY);

    // line(startX, endY, startX+gapX, endY);
    // line(startX, endY, startX, endY - gapY);

    // line(endX, endY, endX  - gapX, endY);
    // line(endX, endY, endX, endY - gapY);




    //DRAWINGS
    noStroke();
    drawTopStroke();
    drawMiddleStroke();
    drawBottomStroke();





    //DRAW THE TOP PART OF THE Z
    function drawTopStroke(){

        //left to middle circle
        push();

            fill(red);
            
            //fill(255,0,0);
            drawCircle(circle1,circle2B);
            
            //get tangent points
            let storeTangentPoints = FindTangentPoint(circle1,circle2B);

            //fill(255,0,0);
            beginShape();

                //top tangent line
                vertex(storeTangentPoints.object1TangentX, storeTangentPoints.object1TangentY);
                vertex(storeTangentPoints.object2TangentX, storeTangentPoints.object2TangentY);

                //bottom tangent line
                vertex(storeTangentPoints.object2TangentX, storeTangentPoints.object2TangentY + circle2B.diameter);
                vertex(storeTangentPoints.object1TangentX, storeTangentPoints.object1TangentY + circle1.diameter);
                
                //connect back to starting point
                vertex(storeTangentPoints.object1TangentX, storeTangentPoints.object1TangentY);
            
                endShape();

        pop();

        //middle to right circle
        push();

            fill(red);

            drawCircle(circle2B,circle3);

            //get tangent points
            let storeTangentPoints2 = FindTangentPoint(circle2B,circle3);

            beginShape();

                //top tangent line
                vertex(storeTangentPoints2.object1TangentX, storeTangentPoints2.object1TangentY);
                vertex(storeTangentPoints2.object2TangentX, storeTangentPoints2.object2TangentY);

                //bottom tangent line
                vertex(storeTangentPoints2.object2TangentX, storeTangentPoints2.object2TangentY + circle3.diameter);
                vertex(storeTangentPoints2.object1TangentX, storeTangentPoints2.object1TangentY + circle2B.diameter);

                //connect back to starting point
                vertex(storeTangentPoints2.object1TangentX, storeTangentPoints2.object1TangentY);

            endShape();

        pop();


        // //left to second row left circle
        push();
            translate(circle1.centerX,circle1.centerY);
            rotate(90)
            fill(red);
            
            drawCircleAfterTransformation(circle1,circle2,gapY,0);

            let storeTangentPoints3 = FindTangentPointAfterTransformation(circle1,circle2,gapY,0);

            beginShape();

                //left tangent line (technically the bottom tangent line without rotation applied)
                vertex(storeTangentPoints3.object2TangentX, storeTangentPoints3.object2TangentY + circle2.diameter);
                vertex(storeTangentPoints3.object1TangentX, storeTangentPoints3.object1TangentY + circle1.diameter);

                //right tangent line (technically the top tangent line without rotation)
                vertex(storeTangentPoints3.object1TangentX, storeTangentPoints3.object1TangentY);
                vertex(storeTangentPoints3.object2TangentX, storeTangentPoints3.object2TangentY);

                //connect back to starting point
                vertex(storeTangentPoints3.object2TangentX, storeTangentPoints3.object2TangentY + circle2.diameter);

            endShape();

        pop();


        // //middle to second row first circle
        push();

            translate(circle2B.centerX,circle2B.centerY);
            rotate(90 + (atan(gapX/gapY)));


            fill(red);
            drawCircleAfterTransformation(circle2B, circle2, sqrt(gapX*gapX + gapY*gapY), 0);

            let storeTangentPoints4 = FindTangentPointAfterTransformation(circle2B,circle2, sqrt(gapX*gapX + gapY*gapY), 0);

            // console.log(storeTangentPoints4);

            beginShape();
                
                //top diagonal tangent line (technically the top tangent line without rotation)
                vertex(storeTangentPoints4.object1TangentX, storeTangentPoints4.object1TangentY);
                vertex(storeTangentPoints4.object2TangentX, storeTangentPoints4.object2TangentY);

                //bottom diagonal tangent line (bottom tangent line without rotation)
                vertex(storeTangentPoints4.object2TangentX, storeTangentPoints4.object2TangentY + circle2.diameter);
                vertex(storeTangentPoints4.object1TangentX, storeTangentPoints4.object1TangentY + circle2B.diameter);

                //connect back to starting point
                vertex(storeTangentPoints4.object1TangentX, storeTangentPoints4.object1TangentY);
        
            endShape();


        pop();


    }


    //DRAW THE MIDDLE DIAGONAL PART OF THE Z
    function drawMiddleStroke(){

        //top row right to middle row center circle
        push();

        translate(circle3.centerX,circle3.centerY);
        rotate(90 + (atan(gapX/gapY)));

        fill(red);
        drawCircleAfterTransformation(circle3,circle1,sqrt(gapX*gapX + gapY*gapY),0);

        let storeTangentPoints5 = FindTangentPointAfterTransformation(circle3,circle1,sqrt(gapX*gapX + gapY*gapY),0);

        beginShape();

            //top diagonal tangent line (technically the top tangent line without rotation)
            vertex(storeTangentPoints5.object1TangentX, storeTangentPoints5.object1TangentY);
            vertex(storeTangentPoints5.object2TangentX, storeTangentPoints5.object2TangentY);

            //bottom diagonal tangent line (bottom tangent line without rotation)
            vertex(storeTangentPoints5.object2TangentX, storeTangentPoints5.object2TangentY + circle1.diameter);
            vertex(storeTangentPoints5.object1TangentX, storeTangentPoints5.object1TangentY + circle3.diameter);

            //connect back to starting point
            vertex(storeTangentPoints5.object1TangentX, storeTangentPoints5.object1TangentY);

            
        endShape();


        pop();


        //middle row center circle to middle row bottom circle
        push();

            translate(canvasWidth/2,canvasHeight/2);
            rotate(90 + (atan(gapX/gapY)));

            fill(red);
            drawCircleAfterTransformation(circle1,circle1B, sqrt(gapX*gapX + gapY*gapY),0);

            let storeTangentPoints6 = FindTangentPointAfterTransformation(circle1,circle1B, sqrt(gapX*gapX + gapY*gapY),0);

            beginShape();

                //top diagonal tangent line (technically the top tangent line without rotation)
                vertex(storeTangentPoints6.object1TangentX, storeTangentPoints6.object1TangentY);
                vertex(storeTangentPoints6.object2TangentX, storeTangentPoints6.object2TangentY);

                //bottom diagonal tangent line (bottom tangent line without rotation)
                vertex(storeTangentPoints6.object2TangentX, storeTangentPoints6.object2TangentY + circle1B.diameter);
                vertex(storeTangentPoints6.object1TangentX, storeTangentPoints6.object1TangentY + circle1.diameter);

                //connect back to starting point
                vertex(storeTangentPoints6.object1TangentX, storeTangentPoints6.object1TangentY);

                
            endShape();


        pop();


    }

    
    //DRAW THE BOTTOM PART OF THE Z
    function drawBottomStroke(){

        //bototm row left circle to middle cricle horizontal stroke
        push();
            translate(startX, endY);
            rotate(0);

            fill(red);
            drawCircleAfterTransformation(circle1B, circle1, gapX, 0);

            let storeTangentPoints10 = FindTangentPointAfterTransformation(circle1B,circle1, gapX, 0);

            beginShape();

                //top tangent line
                vertex(storeTangentPoints10.object1TangentX, storeTangentPoints10.object1TangentY);
                vertex(storeTangentPoints10.object2TangentX, storeTangentPoints10.object2TangentY);

                //bottom tangent line
                vertex(storeTangentPoints10.object2TangentX, storeTangentPoints10.object2TangentY + circle1.diameter);
                vertex(storeTangentPoints10.object1TangentX,storeTangentPoints10.object2TangentY + circle1B.diameter);

                //back to starting point
                vertex(storeTangentPoints10.object1TangentX, storeTangentPoints10.object1TangentY);
            
            endShape();
        pop();

        //bottom row middle circle to right circle horizontal stroke
        push();

            translate(canvasWidth/2, endY);
            rotate(0);

            fill(red)
            drawCircleAfterTransformation(circle1, circle3, gapX, 0);

            let storeTangentPoints7 = FindTangentPointAfterTransformation(circle1,circle3, gapX, 0);
            
            beginShape();
                
                //top tangent line
                vertex(storeTangentPoints7.object1TangentX, storeTangentPoints7.object1TangentY);
                vertex(storeTangentPoints7.object2TangentX, storeTangentPoints7.object2TangentY);

                //bottom tangent line
                vertex(storeTangentPoints7.object2TangentX, storeTangentPoints7.object2TangentY + circle3.diameter);
                vertex(storeTangentPoints7.object1TangentX, storeTangentPoints7.object1TangentY + circle1.diameter);

                //connect back to starting point
                vertex(storeTangentPoints7.object1TangentX, storeTangentPoints7.object1TangentY);

            endShape();

        pop();

        

        //middle row right circle to bottom row middle circle diagonal stroke
        push();

            translate(endX,canvasHeight/2);
            rotate(90 + (atan(gapX/gapY)));

            fill(red);
            drawCircleAfterTransformation(circle2, circle1, sqrt(gapX*gapX + gapY*gapY), 0);

            let storeTangentPoints8 = FindTangentPointAfterTransformation(circle2, circle1, sqrt(gapX*gapX + gapY*gapY), 0);

            beginShape();

                //top diagonal tangent line (technically the top tangent line without rotation)
                vertex(storeTangentPoints8.object1TangentX, storeTangentPoints8.object1TangentY);
                vertex(storeTangentPoints8.object2TangentX, storeTangentPoints8.object2TangentY);

                //bottom diagonal tangent line (bottom tangent line without rotation)
                vertex(storeTangentPoints8.object2TangentX, storeTangentPoints8.object2TangentY + circle1.diameter);
                vertex(storeTangentPoints8.object1TangentX, storeTangentPoints8.object1TangentY + circle2.diameter);

                //connect back to starting point
                vertex(storeTangentPoints8.object1TangentX, storeTangentPoints8.object1TangentY);

            endShape();   

        pop();

        
        //middle row right circle to bottom row right circle vertical stroke
        push();
            translate(endX, canvasHeight/2);
            rotate(90);

            fill(red);
            drawCircleAfterTransformation(circle2, circle3, gapY, 0);

            let storeTangentPoints9 = FindTangentPointAfterTransformation(circle2,circle3, gapY, 0);

            beginShape();

                //left vertical line (technically the top line without rotation)
                vertex(storeTangentPoints9.object1TangentX,storeTangentPoints9.object1TangentY);
                vertex(storeTangentPoints9.object2TangentX, storeTangentPoints9.object2TangentY);

                //right vertical line (technically the bottom line without rotation);
                vertex(storeTangentPoints9.object2TangentX, storeTangentPoints9.object2TangentY + circle3.diameter);
                vertex(storeTangentPoints9.object1TangentX, storeTangentPoints9.object1TangentY + circle2.diameter);

                //connect back to starting point
                vertex(storeTangentPoints9.object1TangentX,storeTangentPoints9.object1TangentY);

            endShape();

        pop();


    }




    ////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////
    //DRAW CIRCLE USING OBJECTS 

    //no transformations version
    function drawCircle(object1,object2) {

        // console.log(object1, object2.centerX);
        if(object2 !== undefined){

            ellipse(object1.centerX, object1.centerY, object1.diameter, object1.diameter);
            ellipse(object2.centerX, object2.centerY, object2.diameter, object2.diameter);

        }else{

            ellipse(object1.centerX, object1.centerY, object1.diameter, object1.diameter);
        }


    }



    //use this draw function when transformations are applied
    function drawCircleAfterTransformation(object1,object2,distanceX,distanceY) {//distanceX and distanceY are the gap between the 2 circles

        // console.log(object1, object2.centerX);
        if(object2 !== undefined){

            ellipse(object1.centerX*0, object1.centerY*0, object1.diameter, object1.diameter);
            ellipse(object2.centerX*0 + distanceX, object2.centerY*0 + distanceY, object2.diameter, object2.diameter);

        }else{

            ellipse(object1.centerX*0, object1.centerY*0, object1.diameter, object1.diameter);
        }

    }



    ////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////
    ////DRAW THE TANGENT LINE BETWEEN TWO CIRCLES - USING OBJECTS - https://www.youtube.com/watch?v=wfB9Z8nOmqE&ab_channel=skoolplusplus
                                                                //- https://gieseanw.wordpress.com/2012/09/12/finding-external-tangent-points-for-two-circles/
    //** only works if both circles have different diameters, and same center point y - coordinate **

    //no transformations version
    function FindTangentPoint(object1, object2) {

        // console.log(object1, object2);
        //console.log("before",object1.radius);

        //set both object's radius to be a little different to avoid diving zero when finding alpha angle
        if (object1.radius === object2.radius) {

            object1.radius = object1.radius + 0.1;
        }



        //distance b/w the 2 circles
        let distance = object2.centerX - object1.centerX;


        //1. FIND TANGENT
        let tangent = sqrt((distance * distance) - ((object1.radius - object2.radius) * (object1.radius - object2.radius)));
        //console.log(tangent);


        //2. FIND ALPHA ANGLE
        let alphaAngle = acos(((distance * distance) + ((object1.radius - object2.radius) * (object1.radius - object2.radius)) - (tangent * tangent)) / (2 * distance * (object1.radius - object2.radius)));
        //console.log(alphaAngle);


        //3. FIND THETA ANGLE
        let thetaAngle = 90 - alphaAngle;
        //console.log(thetaAngle);


        //4. FIND CIRCLE 1 TANGENT POINT
        //get the x and y distance from the center point of the circle to the tangent point
        let tangentPointDistanceX1 = sin(thetaAngle) * object1.radius;
        let tangentPointDistanceY1 = cos(thetaAngle) * object1.radius;

        //get the tangent point
        let tangentPointX1 = object1.centerX + tangentPointDistanceX1;
        let tangentPointY1 = object1.centerY - tangentPointDistanceY1;


        //5. FIND CIRCLE 2 TANGENT POINT
        let tangentPointDistanceX2 = sin(thetaAngle) * object2.radius;
        let tangentPointDistanceY2 = cos(thetaAngle) * object2.radius;

        let tangentPointX2 = object2.centerX + tangentPointDistanceX2;
        let tangentPointY2 = object2.centerY - tangentPointDistanceY2;


        //draw the tangent line
        // noFill();
        // stroke(0);
        // line (tangentPointX1, tangentPointY1, tangentPointX2, tangentPointY2);



        //console.log(tangentPointX1,tangentPointY1,tangentPointX2,tangentPointY2);

        return {
            object1TangentX: tangentPointX1,
            object1TangentY: tangentPointY1,

            object2TangentX: tangentPointX2,
            object2TangentY: tangentPointY2

        }

    }

    //use this tangent function when transformations are applied
    function FindTangentPointAfterTransformation(object1, object2, distanceX, distanceY) {//distanceX and distanceY are the gap between the 2 circles

        // console.log(object1, object2);
        // console.log("before",object1.radius, object2.radius);

        //set both object's radius to be a little different to avoid diving zero when finding alpha angle
        if (object1.radius === object2.radius) {

            object1.radius = object1.radius + 0.1;
        }

        //console.log(object1.radius,object2.radius);

        //distance b/w the 2 circles
        let distance = (object2.centerX*0 + distanceX)


        //1. FIND TANGENT
        let tangent = sqrt((distance * distance) - ((object1.radius - object2.radius) * (object1.radius - object2.radius)));
        //console.log(tangent);


        //2. FIND ALPHA ANGLE
        let alphaAngle = acos(((distance * distance) + ((object1.radius - object2.radius) * (object1.radius - object2.radius)) - (tangent * tangent)) / (2 * distance * (object1.radius - object2.radius)));
        //console.log(alphaAngle);


        //3. FIND THETA ANGLE
        let thetaAngle = 90 - alphaAngle;
        //console.log(thetaAngle);


        //4. FIND CIRCLE 1 TANGENT POINT
        let tangentPointDistanceX1 = sin(thetaAngle) * object1.radius;
        let tangentPointDistanceY1 = cos(thetaAngle) * object1.radius;

        let tangentPointX1 = tangentPointDistanceX1;
        let tangentPointY1 = -tangentPointDistanceY1;


        //5. FIND CIRCLE 2 TANGENT POINT
        let tangentPointDistanceX2 = sin(thetaAngle) * object2.radius;
        let tangentPointDistanceY2 = cos(thetaAngle) * object2.radius;

        let tangentPointX2 = (object2.centerX*0 + distanceX) + tangentPointDistanceX2;
        let tangentPointY2 = (object2.centerY*0 + distanceY) - tangentPointDistanceY2;


        //draw the tangent line
        // noFill();
        // stroke(0);
        // line (tangentPointX1, tangentPointY1, tangentPointX2, tangentPointY2);



        //console.log(tangentPointX1,tangentPointY1,tangentPointX2,tangentPointY2);

        return {
            object1TangentX: tangentPointX1,
            object1TangentY: tangentPointY1,

            object2TangentX: tangentPointX2,
            object2TangentY: tangentPointY2

        }

    }


}


function mousePressed(){
    saveCanvas("z-day"+day,"png")//(name, file extension)
}







