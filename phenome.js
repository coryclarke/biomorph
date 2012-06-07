   

function Phenome(genes,div){

			

	this.genome = genes;
	this.wrapper = div;
	
	
	this.tree = function(image,length,lengthmult,reclimit,x,y,angle,spread,spreadmult,recbias,branchbias,pen,recursion){ 
		
			//create a turtle to use to draw a trunk 
			var turt = new Turtle(pen,image,recursion); 
			
			//set its starting position 
			turt.setPosition(x,y); 
			//set its initial orientation 
			
			
			if((recursion % branchbias) == 1){
				thislength = length * -2;
			}else{
				thislength = length;
			}
			
			
			turt.setColor(recursion);
				
			turt.turn(angle); 
			//move to draw a line 
			turt.move(thislength); 
			
			//get the position 
			var positionx =  turt.getPositionX(); 
			var positiony =  turt.getPositionY(); 
			
			
			length *= lengthmult;
			
			spread *= spreadmult;
			 
			recursion++;
			
			thisspread = spread + ((recursion * recbias)/recursion);
			
			//var pencolor = "rgba(" + (thisspread%255) + "," + thisspread%15 + "," + thisspread%15 +"," + (1/recursion) + ")";
			var pencolor = "rgba(0,0,0," + (1/recursion) + ")";
				 
			if(recursion < reclimit){ 
			//call the tree function again to create a branch. Cut the $lenght in half so each branch is smaller than the last 
			//also, change the angle so that the branch splits from the trunk
				
				this.tree(image,length,lengthmult,reclimit,Number(positionx),Number(positiony),angle,spread,spreadmult,recbias,branchbias,pencolor,recursion); 
				this.tree(image,length,lengthmult,reclimit,Number(positionx),Number(positiony),(angle-thisspread),spread,spreadmult,recbias,branchbias,pencolor,recursion); 
				this.tree(image,length,lengthmult,reclimit,Number(positionx),Number(positiony),(angle+thisspread),spread,spreadmult,recbias,branchbias,pencolor,recursion); 
			
			} 
		
		
	} 
		
	this.render = function(width,height,callback) {
		
			
			var elem =	document.createElement('canvas');
			elem.width = width;
			elem.height = height;
			
			
			// Always check for properties and methods, to make sure your code doesn't break 
			// in other browsers.
			if (elem && elem.getContext) {
			  // Get the 2d context.
			  // Remember: you can only initialize one context per element.
			  var context = elem.getContext('2d');
		
			}
			
		
		 

			this.tree(context,this.genome.length,this.genome.lengthmult,this.genome.recursion,Math.round(width/2),Math.round(height/2)+100,-90,this.genome.spread,this.genome.spreadmult,this.genome.recbias,this.genome.branchbias,0,0);
			
			
		
			this.wrapper.append(elem);
			if(callback != undefined){
				callback();
			}	
			
			//context.closePath();
		
		
		
	}
		
	

}
