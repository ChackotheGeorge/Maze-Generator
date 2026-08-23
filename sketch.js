var col, row, size = 50;
var cells = [];
var current;
var stack = [];

function setup(){
  createCanvas(500, 500);
  col = floor(width/size);
  row = floor(height/size);
  //frameRate(5);

  for(var y = 0; y < row; y++){
    for(var x = 0; x < col; x++){
      var cell = new Cell(x, y);
      cells.push(cell);
    }
  }
  current = cells[0];
}

function draw(){
  background(51);
  for(var i = 0; i < cells.length; i++){
    cells[i].show();
  }

  current.visited = true;
  current.highlight();
  var next = current.checkNeighbors();
  if(next){
    next.visited=true;

    stack.push(current);

    removeWall(current, next);

    current=next;
  }
  else if(stack.length > 0){
    current = stack.pop();
  }
}

