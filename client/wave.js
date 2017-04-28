var Perlin = require('./perlin.js');
var Spline = require('./spline.js');

function Wave(pointCount, resolution, width, amplitude, heightCenter, rgba) {
    this.width = width;
    this.amplitude = amplitude;
    this.heightCenter = heightCenter;
    this.pointCount = pointCount;
    this.resolution = resolution;
    var points = [];
    for (var i = 0; i < this.pointCount; i++) {
        points[i] = {x: (i/pointCount) * (this.width + 100), y:this.heightCenter};
        points[i].clean = {x: points[i].x, y: points[i].y};
    }
    this.perlin = new Perlin();
    this.points = points;
    this.rgba = rgba;
    this.seed = Math.random();
    this.spline = new Spline(this.points);
    this.xFactor = 0.003;
    this.xSeedFactor = 0.3;
    this.seedFactor = 0.2;
    this.seedIncrement = 0.05;
}

Wave.prototype.resize = function(pointCount, resolution, width, amplitude, heightCenter)
{
    this.width = width;
    this.amplitude = amplitude;
    this.heightCenter = heightCenter;
    this.resolution = resolution;
    this.pointCount = pointCount;
    var points = [];
    for (var i = 0; i < this.pointCount; i++) {
        points[i] = {x: (i/pointCount) * (this.width + 200), y:this.heightCenter};
        points[i].clean = {x: points[i].x, y: points[i].y};
    }
    this.points = points;
    this.spline = new Spline(this.points);
    this.update();
}

Wave.prototype.update = function() {
    this.seed += this.seedIncrement;
    for (var i = 0; i < this.pointCount; i++) {
        var p = this.points[i].clean;
        var noise = this.perlin.perlin2(
            p.x * this.xFactor + this.seed * this.xSeedFactor, 
            this.seed * this.seedFactor);
        this.points[i].x = this.points[i].clean.x;
        this.points[i].y = noise * this.amplitude;
    }
}

Wave.prototype.draw = function(context) {

    context.save();
    context.lineWidth = 1;
    context.translate(0, this.heightCenter);
    var interpolate = this.spline.interpolate(0);
    var previous = {x: interpolate.x, y: interpolate.y};
    var previousMidpoint = null;
    context.moveTo(previous.x, previous.y);
    context.beginPath();
    context.strokeStyle = this.rgba;
    for (var i = 0; i < this.resolution; i++) {
        interpolate = this.spline.interpolate(i/this.resolution);
        var midpoint = {
            x:previous.x + (interpolate.x - previous.x) * 0.5, 
            y:previous.y + (interpolate.y - previous.y) * 0.5, 
        }
        if (previousMidpoint) {
            context.quadraticCurveTo(previous.x, previous.y, midpoint.x, midpoint.y);
        }
        previousMidpoint = midpoint;
        previous.x = interpolate.x;
        previous.y = interpolate.y;
    }
    context.stroke()
    context.closePath();

    context.restore();
}

module.exports = Wave;
