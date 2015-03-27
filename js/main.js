var w,
	h,
	can,
	ctx,
	girlPic = new Image(),
	starPic = new Image(),
	stars = new Array(),
	num = 30;

var padLeft = 100,
	padTop = 150,
	girlWidth = 600,
	girlHeight = 300;
var rTime,
	beginTime,
	lastTime,
	alive = 0,
	switchy = false;

var init = function() {
	can = document.getElementById('canvas');
	ctx = can.getContext('2d');
	canStars = document.getElementById('stars');
	ctxStars = canStars.getContext("2d");

	w = can.width;
	h = can.height;

	girlPic.src = 'src/girl.jpg';
	starPic.src = 'src/star.png';
	
	document.addEventListener('mousemove', mousemove, false);

	for (var i = 0; i < num; i++) {
		var s = new starObj();
		s.init();
		stars.push(s);
	};
	beginTime = Date.now();
	fillCanvas();
	drawGirl();
	drawLoop();
}

document.body.onload = init;

var fillCanvas = function() {
	ctx.fillStyle = '#3A216D';
	ctx.fillRect(0, 0, w, h);
}

var drawGirl = function() {
	girlPic.onload = function() {
		ctx.drawImage(girlPic,padLeft,padTop,girlWidth,girlHeight);
	}
}

var drawStar = function() {
	for(s in stars){
		stars[s].draw();
	}
}

var drawLoop = function() {
	window.requestAnimFrame(drawLoop);
	lastTime = Date.now();
	rTime = lastTime - beginTime;
	beginTime = lastTime;
	// fillCanvas();
	// drawGirl();
	if(alive > 0){
		drawStar();
	}
	updateAlive();
}

var mousemove = function(e) {
	if(e.offsetX || e.layerX){
		var px = e.offsetX == undefined ? e.layerX : e.offsetX;
		var py = e.offsetY == undefined ? e.layerY : e.offsetY;
		if(px > padLeft && px < padLeft + girlWidth && py > padTop && py < padTop + girlHeight){
			switchy = true;
		}else{
			switchy = false;
		}
	}
}
