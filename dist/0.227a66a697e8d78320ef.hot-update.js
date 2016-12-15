webpackHotUpdate(0,{

/***/ 2:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {function redraw(canvas, ctx) {
	    // ctx.fillStyle='rgb(200,0,0)';
	    // ctx.fillRect(10, 10, 50, 50);
	    // ctx.fillStyle='rgb(0,200,0)';
	    // ctx.fillRect(30, 30, 50, 50);
	}
	
	function loaded() {
	    var canvas = $('#canvas')[0];
	    console.log('hello world');
	    if (!canvas.getContext) {
	        console.log('use a real broswer bro');
	        return;
	    }
	    var ctx = canvas.getContext('2d');
	    var resizeCanvas = function() {
	        canvas.width  = window.innerWidth;
	        canvas.height = window.innerHeight;
	    };
	    window.addEventListener('resize', resizeCanvas, false);
	    resizeCanvas();
	    redraw(canvas, ctx);
	
	    var tick = 0;
	    var loop = function(){
	        window.requestAnimationFrame(loop);
	        redraw(canvas, ctx);
	        tick++;
	        tick++;
	    }
	
	    // window.requestAnimFrame(loop, canvas);
	    loop();
	}
	
	console.log('hello world again');
	$(document).ready(loaded);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }

})
//# sourceMappingURL=0.227a66a697e8d78320ef.hot-update.js.map