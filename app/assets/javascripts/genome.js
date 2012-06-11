   

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
		
		this.setData(this.urlParam('spread'),this.urlParam('spreadmult'),this.urlParam('lengthmult'),this.urlParam('length'),this.urlParam('recursion'),this.urlParam('recbias'),this.urlParam('angle'));
		
		
	
	}
	
	this.setData = function(spread,spreadmult,lengthmult,length,recursion,recbias,angle){
	
		this.spread = spread
		if(this.spread == undefined) this.spread = 35;
	
		this.spreadmult = spreadmult
		if(this.spreadmult == undefined) this.spreadmult = 1;
		
		this.lengthmult = lengthmult
		if(this.lengthmult == undefined) this.lengthmult = .7;
			
		this.length = length
		if(this.length == undefined) this.length = 80;
		
		this.recursion = recursion
		if(this.recursion == undefined) this.recursion = 4;
		if(this.recursion > 10) this.recursion = 10;
		if(this.recursion < 2) this.recursion = 2;
		
		this.recbias = recbias
		if(this.recbias == undefined) this.recbias = 1;
		
		this.angle = angle
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
