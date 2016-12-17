//runs when the page loads
function setup() {
    createCanvas(windowWidth, windowHeight);

    pt1 = new Point(200,200);
    pt2 = new Point(400,400);

    nodey = new Node(pt1, "nodey");
    nodella = new Node(pt2, "nodella");
}

//main draw/screen refresh
function draw() {
    clear();
    background('rgba(0,255,0,0.25)');

    nodey.draw();
    nodella.draw();
    nodey.connectTo(nodella);
    // nodey.pos.y++;
    // nodella.pos.x++;

}

//called whenever the window gets resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
