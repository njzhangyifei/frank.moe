var randomColor = require('randomcolor');
var Wave = require('./wave.js')

function RandomColorWaves(numWaves, canvasHeight, canvasWidth, pointCount, resolution){
    this.numWaves = numWaves;
    this.height = canvasHeight;
    this.width = canvasWidth;
    hue = ['red', 'orange', 'green', 'blue', 'purple', 'pink', 'monochrome']
    this.hue = hue[Math.floor(Math.random() * hue.length)]
    this.colors = randomColor({
        count: this.numWaves,
        hue: this.hue,
        luminosity: 'dark',
        format: 'rgba',
        alpha: 0
    });
    this.waves = [];
    for (var i = 0; i < numWaves; ++i) {
        var w = new Wave(
            pointCount, resolution,
            this.width, Math.max(this.height * 0.15, 150),
            this.height * 0.5, this.colors[i]
            );
        // console.log(this.height * 0.2);
        w.seedIncrement *= Math.max(0.5, 0.5*i/numWaves*2);
        this.waves.push(w);
    }
};

RandomColorWaves.prototype.resize = function(canvasHeight, canvasWidth, pointCount, resolution) {
    this.height = canvasHeight;
    this.width = canvasWidth;
    for (var i = 0; i < this.numWaves; ++i) {
        this.waves[i].resize(
            pointCount, resolution,
            this.width, Math.max(this.height * 0.2, 150),
            this.height * 0.5
        );
    }
}

RandomColorWaves.prototype.update = function() {
    for (var i = 0; i < this.numWaves; ++i) {
        this.waves[i].update();
    }
}

RandomColorWaves.prototype.draw = function(context) {
    for (var i = 0; i < this.numWaves; ++i) {
        this.waves[i].draw(context);
    }
}


module.exports = RandomColorWaves;
