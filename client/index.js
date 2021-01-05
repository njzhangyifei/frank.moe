var RandomColorWaves = require('./randomColorWaves.js')
import Typed from 'typed.js';

var waves;

function loaded() {
    canvasInit();
    var typed = new Typed('#typed-caption', {
        stringsElement: '#typed-caption-strings',
        contentType: 'html',
        typeSpeed: 50,
        startDelay: 500,
        backDelay: 800,
    })
}

function redraw(canvas, context) {
    // context.globalCompositeOperation = 'source-over'
    waves.update();
    waves.draw(context);
    context.fillStyle = "rgba(255, 255, 255, 0.2)";
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function canvasInit() {
    var canvas = $('#canvas')[0];
    console.log('loaded');
    if (!canvas.getContext) {
        console.log('duuuude, use a real broswer!');
        return;
    }
    var context = canvas.getContext('2d');
    var resizeCanvas = function() {
        canvas.width  = window.innerWidth * window.devicePixelRatio;
        canvas.height = window.innerHeight * window.devicePixelRatio;
        canvas.style.width  = window.innerWidth;
        canvas.style.height = window.innerHeight;
        if (waves) {
            waves.resize(canvas.height, canvas.width, 100, 100);
        } else {
            waves = new RandomColorWaves(4, canvas.height, canvas.width, 100, 100);
        }
        waves.draw(context);
    };
    window.addEventListener('resize', resizeCanvas, false);
    resizeCanvas();
    redraw(canvas, context);
    var loop = function(){
        redraw(canvas, context);
        window.requestAnimFrame(loop);
    }
    loop();
}

window.requestAnimFrame = window.requestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.msRequestAnimationFrame
    || function(callback) { return setTimeout(callback, 1000 / 60);  };

$(document).ready(loaded);
