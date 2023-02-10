function setup() {
    // put setup code here
    createCanvas(400,400);
    background(120,24,128);

    x1=20;
    y1=350;

    x2=240;
    y2=37;

    x=164;
    y=189;
    rectwidth=70;
    rectheight=20;

    k=0



}



function draw() {
    // put drawing code here
    line(x1,y1,x2,y2)

    strokeWeight(2)
    fill(0,0,200)
    rect(x-rectwidth/2,y-rectheight/2,rectwidth,rectheight);
    fill(0,150,200)
    ellipse(x,y,rectheight + 30 * Math.sin(PI/10*k),rectheight);
    k+=1;
    strokeWeight(8)
    fill(122,234,100);
    arc(x,y-70,rectwidth,rectheight,0,270);

    strokeWeight(2);
    for (var j=10; j<=390;j++){
        xs = j
        ys = 350+ 30 * Math.sin(PI/10*xs)
        point(xs,ys)
    }
}