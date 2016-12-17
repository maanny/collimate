//a point
function Point(x, y) {
    this.x = x;
    this.y = y;
}

//a single flowchart symbol
function Node(pos, words) {
    this.pos = pos;
    this.words = words;
    this.width = 100;
    this.height = 60;
    this.leftAnchor = new Point();
    this.rightAnchor = new Point();

    this.geometry = function() {
        this.leftAnchor = new Point(this.pos.x - this.width/2, this.pos.y);
        this.rightAnchor = new Point(this.pos.x + this.width/2, this.pos.y);
    }

    this.draw = function() {
        this.geometry();

        push();
        translate(pos.x, pos.y);

        noStroke();
        fill(51);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height, 20);

        textAlign(CENTER, CENTER);
        textFont("Helvetica");
        fill(200);
        text(words, 0, 0, width, height);

        pop();
    }

    //connect to another node "-->"
    this.connectTo = function(toNode) {
        noFill();
        stroke(51);
        strokeWeight(5);
        fr = this.rightAnchor;
        // fl = this.leftAnchor;
        fw = this.width;

        // tr = toNode.rightAnchor;
        tl = toNode.leftAnchor;
        tw = toNode.width;

        bezier(fr.x, fr.y, fr.x+fw, fr.y, tl.x-tw, tl.y, tl.x, tl.y);
    }
}
