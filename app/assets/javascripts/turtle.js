   

function Turtle(color,canvas,recur){


	this.context = canvas
	this.positionx = 0;
	this.positiony = 0;
	this.direction = 0;
	this.recursion = recur;
	this.color = color;
	
	
	this.setPosition = function(px,py){
	
		this.positionx = px;
		this.positiony = py;
		
	
	};
	
	this.getPositionX = function(){
	
		return Number(this.positionx);
		
	};
	
	this.getPositionY = function(){
	
		return Number(this.positiony);
		
	};
	
	this.setColor = function(color){
		this.color = color;
		
	};
	
	this.move = function(dis){
		
		
		movx = dis * Math.cos(this.direction);
		movy = dis * Math.sin(this.direction);
		
	
		this.context.beginPath();
		this.context.moveTo(this.positionx,this.positiony); // give the (x,y) coordinates
		this.context.lineTo(this.positionx+movx,this.positiony+movy);
	
		this.context.strokeStyle = color;//"rgb(" + Math.round(Math.random()*255) + "," + Math.round(Math.random()*255) + ","+ Math.round(Math.random()*255) + ")" ;
		this.context.lineWidth   = Math.floor(this.recursion)+1;
		this.context.stroke();
		this.context.closePath();
	
		this.positionx = this.positionx + movx;
		this.positiony = this.positiony + movy;
	
	};

	this.turn = function(dir){
		this.direction = this.direction + this.deg2rad(dir);
	
	};

	this.deg2rad = function(deg){
		return deg * (Math.PI/180);
	}
	this.rad2deg = function(rad){
		return rad * (180/Math.PI);
	}

}
