class Player {
    constructor(x,y){
        this.x=x,
        this.y=y,
        this.spt=createSprite(this.x,this.y,50,50),
        this.spt.shapeColor="orange"
        this.spt.addAnimation("player",playerAnimation);
        this.spt.scale=0.05;
        if(this.y==height-250 || this.y==height-1050 || this.y==height-1850){
            speed=-speed;
            this.spt.addAnimation("car",carAnimation2);
        }
    }
    
    move(xdir,ydir){
        this.spt.x+=xdir*grid
        this.spt.y+=ydir*grid
    }
}