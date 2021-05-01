class plane
{

   constructor (x,y)
   {
       this.x=x;
       this.y=y;
       this.width=350;
       this.height=25;
       this.body=Bodies.rectangle(x,y,440,25,{isStatic:true});
       World.add (world,this.body);
   }

   display ()
   {
       fill ("brown");
       rectMode(CENTER);
       rect (this.x,this.y,this.width,this.height);
   }

}