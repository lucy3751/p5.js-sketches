function setup(){

//THIS WEEK: ONLY BLACK AND WHITE (0 or 255), NO GREYSCALE

    
    var canvas = createCanvas(1000,1000);//width and height in pixels

    background(255);
    //to create a outline, draw a rectangle with an outline, or use inline css to add a border on the canvas div

    fill(255,0,0);
    stroke(0);

    ellipse(500,500,50,50); //ellipse coordinates are set from the center point
    rect(500,500,100,100);//rectangle coordinates are set from the top left

    ellipse(250,720,100,100);


    var i=0;
    while(i<10){
        //add our code here

        ellipse(random(1000),random(1000),100,100);

        i++;//i increase by i each time
    }

}

function draw(){//a loop that is running in 60fps
    ellipse(mouseX,mouseY,mouseX,mouseY);
    
}



function mousePressed(){
    saveCanvas("image-01","jpg")//(name, file extension)
}