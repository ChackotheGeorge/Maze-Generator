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

  this.show = function(){
    var i = this.x*size;
    var j = this.y*size;
    stroke(255);
    noFill();
    rect(i,j,size,size);
  }
}