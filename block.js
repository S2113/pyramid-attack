class box

{
 constructor (x,y,c)
 {
    this.c=c;
    this.width=50;
    this.height=60;
    this.body=Bodies.rectangle(x,y,50,60,{friction:0.5});
    World.add (world,this.body);

 }

  display()
  {
      push ();
      fill (this.c);
      rectMode(CENTER);
      rotate(this.body.angle);
      rect (this.body.position.x,this.body.position.y,this.width,this.height);
      pop ();

  }




}