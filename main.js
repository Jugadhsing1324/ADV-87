
var canvas=new fabric.Canvas("myCanvas");
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:block_y,
            left:block_x
        });
        canvas.add(block_image_object);
    });
}



window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keypressed = e.keyCode;
console.log(keypressed);

if(keypressed=='38'){
	up();
	console.log("up");
}
if(keypressed=='40'){
	down();
	console.log("down");
}
if(keypressed=='37'){
	left();
	console.log("left");
}
if(keypressed=='39'){
	right();
	console.log("right");
}
if(keypressed=='72'){
	new_image("Capture6.PNG");
	console.log("h");
}
if(keypressed=='84'){
	block_x=200;
	new_image("Capture5.PNG");
	console.log("t");
}
if(keypressed=="73"){
	block_x=350;
	new_image("Capture3.PNG");
	console.log("i");
}
if(keypressed=='67'){
	block_x=600;
	new_image("Capture2.PNG");
	console.log("c");
}
if(keypressed=='83'){
	block_x=700;
	new_image("Capture4.PNG");
	console.log("s");
}
	
}

function up(){
    if(player_y>=0){
        player_y=player_y-block_height;
        console.log("block_height="+block_height);
        console.log("when up,x="+player_x+" ,y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_y<=500){
        player_y=player_y+block_height;
        console.log("block_height="+block_height);
        console.log("when down,x="+player_x+" ,y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_x>=0){
        player_x=player_x-block_width;
        console.log("block_width="+block_width);
        console.log("when left,x="+player_x+" ,y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x<=700){
        player_x=player_x+block_width;
        console.log("block_width="+block_width);
        console.log("when right,x="+player_x+" ,y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}