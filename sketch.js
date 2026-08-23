var col, row, size = 50;
var cells = [];

function setup(){
  createCanvas(500, 500);
  col = floor(width/size);
  row = floor(height/size);

  for(var x = 0; x < row; x++){
    for(var y = 0; y < col; y++){
      var cell = new Cell(x, y);
      cells.push(cell);
    }
  }
}

function draw(){
  background(51);
  for(var i = 0; i < cells.length; i++){
    cells[i].show();
  }
}

function Cell(x,y){
  this.x = x;
  this.y = y;
  this.walls = [true, true, true, true];

  this.show = function(){
    var i = this.x*size;
    var j = this.y*size;
    stroke(255);
    //top
    if(this.walls[0]){
      line(i, j, i+size, j);
    }
    //right
    if(this.walls[1]){
      line(i+size,j, i+size, j+size);
    }
    //bottom
    if(this.walls[2]){
      line(i+size, j+size, i, j+size);
    }
    //right
    if(this.walls[0]){
      line(i, j+size, i, j);
    }
    // noFill();
    // rect(i,j,size,size);
  }
}