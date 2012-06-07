   

function Genome(){

			

	var branchbias = 0;
	var spread;
	var spreadmult;
	var lengthmult;
	var length;
	var recursion;
	var recbias;
	var angle;
		
	
	this.loadDataFromURL = function(){
		
		this.spread = this.urlParam('spread');
		if(this.spread == undefined) this.spread = 35;
	
		this.spreadmult = this.urlParam('spreadmult');
		if(this.spreadmult == undefined) this.spreadmult = 1;
		
		this.lengthmult = this.urlParam('lengthmult');
		if(this.lengthmult == undefined) this.lengthmult = .7;
			
		this.length = this.urlParam('length');
		if(this.length == undefined) this.length = 80;
		
		this.recursion = this.urlParam('recursion');
		if(this.recursion == undefined) this.recursion = 4;
		if(this.recursion > 10) this.recursion = 10;
		if(this.recursion < 2) this.recursion = 2;
		
		this.recbias = this.urlParam('recbias');
		if(this.recbias == undefined) this.recbias = 1;
		
		this.angle = this.urlParam('angle');
		if(this.angle == undefined) this.angle = 1;
		
		
		
	
	}
	
	
	
	this.mutate = function(){
		
		this.spread +=  this.getMutation();
		this.spreadmult +=  this.getMutation()/5.0;
		this.lengthmult +=  (this.getMutation());
		this.length += this.getMutation();
		this.recursion +=  this.getMutation();
		this.recbias +=  this.getMutation();
		this.angle +=  this.getMutation();
			
	
	}
	
	this.toURL = function(){
	
		return "?spread=" + this.spread 
		+ "&spreadmult=" + this.spreadmult
		+ "&lengthmult=" + this.lengthmult
		+ "&length=" + this.length
		+ "&recursion=" + this.recursion
		+ "&recbias=" + this.recbias
		+ "&angle=" + this.angle;
		
	}
	
	this.getMutation = function(){
		var randVal = -1+(Math.random()*2);
		return randVal/2.0;
		
		//console.log(randVal);
	  	//return typeof floatVal=='undefined'?Math.round(randVal):randVal.toFixed(floatVal);


	}
	
	this.urlParam = function(name){
		var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
		if(results)
		return parseFloat(results[1]);
	}


	

}
