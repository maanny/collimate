//global variables (ew)
var nodes = [];
var grabbed = null;

//runs when the page loads
function setup() {
    createCanvas(windowWidth, windowHeight);

    for (i = 1; i <= 5; i++) {
        pt = new Point(i*200, i*100);
        node = new Node(pt, "amy node " + i);
        nodes.push(node);
    }
}

//main draw/screen refresh
function draw() {
    clear();
    background('rgba(0,255,0,0.25)');

    for (i = 0; i < nodes.length; i++) {
        if (grabbed != null) {
            grabbed.move(mouseX, mouseY);
        }

        nodes[i].draw();

        if (i < nodes.length - 1) {
            nodes[i].connectTo(nodes[i+1]);
        }
    }
}

function mousePressed() {
    for (i = 0; i < nodes.length; i++) {
        if (clipcheck(nodes[i], mouseX, mouseY)) {
            grabbed = nodes[i];
        }
    }
}

function mouseReleased() {
    grabbed = null;
}

function clipcheck(node, x, y) {
    xbool = (x >= node.pos.x-node.width/2) && (x <= node.pos.x+node.width/2);
    ybool = (y >= node.pos.y-node.height/2) && (y <= node.pos.y+node.height/2);
    return xbool && ybool;
}

//called whenever the window gets resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
