function Spline(pts) {
    this.points = pts;
}

Spline.prototype.interpolate = function(percentage) {
    var percentage = Math.min(Math.max(percentage, 0), 1);
    var pointPos = (this.points.length - 1) * percentage;
    var nPointIndex = Math.floor((this.points.length - 1) * percentage);
    var offset = pointPos - nPointIndex;

    var c0 = nPointIndex == 0 ? nPointIndex : nPointIndex - 1;
    var c1 = nPointIndex;
    var c2 = nPointIndex > this.points.length - 2 ? nPointIndex: nPointIndex + 1;
    var c3 = nPointIndex > this.points.length - 3 ? nPointIndex: nPointIndex + 2;

    var v = {x: 0, y: 0};
    v.x = this.catmullrom(this.points[c0].x, this.points[c1].x, this.points[c2].x, this.points[c3].x, offset);
    v.y = this.catmullrom(this.points[c0].y, this.points[c1].y, this.points[c2].y, this.points[c3].y, offset);

    return v;
}

// catmull rom
// https://www.mvps.org/directx/articles/catmull/
Spline.prototype.catmullrom = function(p0, p1, p2, p3, t) {
    var t_sq = t*t;
    var t_cube = t*t_sq;

    var t_res = 0.5 * (
        ( 2 * p1 )  +  (-p0 + p2) * t +
        (2 * p0 - 5 * p1 + 4 * p2 - p3) * t_sq +
        (-p0 + 3 * p1 - 3 * p2 + p3) * t_cube
    )

    return t_res;
}
module.exports = Spline;
