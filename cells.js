function index(x,y){
  if(x<0 || y<0 || x>col-1 || y>row-1){
    return -1;
  }
  return x+(y*col);
}

function removeWall(a, b){
  var x = a.x-b.x;
  var y = a.y-b.y;
  if(x==-1){
    a.walls[0]=false;
    b.walls[1]=false;
  }
  else if(x==1){
    a.walls[1]=false;
    b.walls[0]=false;
  }
  else if(y==1){
    a.walls[2]=false;
    b.walls[3]=false;
  }
  else if(y==-1){
    a.walls[3]=false;
    b.walls[2]=false;
  }
}

function Cell(x,y){
  this.x = x;
  this.y = y;
  this.walls = [true, true, true, true];
  this.visited = false;

  this.highlight = function(){
    var x = this.x*size;
    var y = this.y*size;

    noStroke();
    fill(0, 0, 255);
    rect(x, y, size, size);
  }

  this.show = function(){
    var i = this.x*size;
    var j = this.y*size;
    stroke(250);
    //right
    if(this.walls[0]){
      line(i+size,j, i+size, j+size);
    }
    //left
    if(this.walls[1]){
      line(i, j+size, i, j);
    }
    //up
    if(this.walls[2]){
      line(i, j, i+size, j);
    }
    //bottom
    if(this.walls[3]){
      line(i+size, j+size, i, j+size);
    }

    if(this.visited){
      noStroke();
      fill(255, 0, 255);
      rect(i,j,size,size);
    }

    // noStroke();
    // fill(200);
    // textSize(10);
    // textAlign(CENTER, CENTER);
    // // Center point of the cell: (i + size / 2, j + size / 2)
    // text(this.x + ',' + this.y, i + size / 2, j + size / 2);
  }

  this.checkNeighbors = function(){
    var neighbors = [];
    var right = cells[index(this.x+1,this.y)];
    var left = cells[index(this.x-1,this.y)];
    var up = cells[index(this.x,this.y-1)];
    var down = cells[index(this.x,this.y+1)];

    if (right && !right.visited){
      neighbors.push(right);
    }
    if (left && !left.visited){
      neighbors.push(left);
    }
    if (up && !up.visited){
      neighbors.push(up);
    }
    if (down && !down.visited){
      neighbors.push(down);
    }

    if(neighbors.length > 0){
      var r = floor(random(0, neighbors.length ));
      return neighbors[r];
    }
    else{ 
      return undefined;
    }
  }
}