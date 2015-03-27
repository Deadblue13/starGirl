var starObj = function() {
	this.x;
	this.y;
	this.xSpe;
	this.ySpe;
	this.picNo;
	this.timer;
	this.beta;
}

starObj.prototype.init = function() {
	this.x = girlWidth * Math.random() + padLeft;
	this.y = girlHeight * Math.random() + padTop;
	this.xSpe = Math.random() * 0.2 - 0.1;
	this.ySpe = Math.random() * 0.6 - 0.3;
	this.picNo = Math.floor(Math.random() * 7);
	this.timer = 0;
	this.beta = Math.random() * Math.PI * 0.5;
}

starObj.prototype.drawStar = function() {
	/*ctx.save();
	ctx.globalAlpha = Math.sin(this.beta) * alive;
	ctx.drawImage(starPic, this.picNo * 7, 0, 7, 7, this.x, this.y , 7, 7);
	ctx.restore();
	// ctx.drawImage(girlPic, (this.x - padLeft) * xs, (this.y - padTop) * ys, 7 * xs, 7 * ys, this.x, this.y, 7, 7);*/
	ctxStars.globalAlpha = Math.sin(this.beta) * alive;
	ctxStars.drawImage(starPic, this.picNo * 7, 0, 7, 7, this.x, this.y , 7, 7);
}

starObj.prototype.update = function() {
	ctxStars.clearRect(this.x, this.y, 7, 7);
	this.x += this.xSpe;
	this.y += this.ySpe;
	if(this.x > padLeft + girlWidth || this.x < padLeft - 10||
	   this.y > padTop + girlHeight || this.y < padTop - 10){
			this.init();
	}
	this.beta += rTime * 0.003;
	this.timer += rTime;
	if(this.timer > 30){
		this.picNo += 1;
		this.picNo %= 7;
		this.timer = 0;
	}
}

starObj.prototype.draw = function() {
	this.update();
	this.drawStar();
}

var updateAlive = function() {
	if(switchy){
		if(alive >= 0.7){
			alive = 0.7;
		}else{
			alive += 0.03;
		}
	}else{
		if(alive <= 0){
			alive = 0;
		}else{
			alive -= 0.01;
		}
	}
}