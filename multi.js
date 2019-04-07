var canvas = document.getElementById("can");
var ctx = canvas.getContext("2d");
var width =canvas.width;
var height = canvas.height;
var dt = 1;

function Circle(x,y,vx,vy,radius,dt)
{
	this.x = x;
	this.y = y;
	this.vx = vx;
	this.vy = vy;
	this.radius = radius;
	this.dt = dt;
	
	this.draw = function()
	{
		ctx.beginPath();
		ctx.fillStyle = "aqua";
		ctx.arc( this.x , this.y , this.radius , 0 , Math.PI*2);
		ctx.strokeStyle = "aqua";
		ctx.fill();
		ctx.stroke();
		
	}
	
	this.update = function()
	{   
		if(this.x + this.radius > width || this.x - this.radius < 0 )
		{
			this.vx = - this.vx;
		}
		
		if(this.y + this.radius > height || this.y - this.radius < 0 )
		{
			this.vy = - this.vy;
		}
	
		this.x += this.vx * this.dt; 
		this.y += this.vy * this.dt;
	
	    this.draw();
	}
}



function animu()
{
	setInterval(kourada,100*dt);
}

var circleArray = [];
for (var i = 0; i < 200; i++)
{   var dt = 0.1;
	var radius = 10;
	var x = Math.random()*(canvas.width - radius*2)+radius;
	var y = Math.random()*(canvas.height - radius*2)+radius;
	var vx = (Math.random() - 0.5)*150;
	var vy = (Math.random() - 0.5)*150;
	circleArray.push( new Circle(x,y,vx,vy,radius,dt) );
}	

function kourada()
{
	    ctx.clearRect(0,0,width,height);
		for ( var i = 0; i < circleArray.length; i++ )
		{   
			circleArray[i].update();
		}
}

animu();