var cx = document.getElementById('canvas');
var ctx = cx.getContext('2d');
var St = new Starry(cx, ctx);
St.step();
window.onresize = function () {
    St.cx.width = St.cx.clientWidth;
    St.cx.height = St.cx.clientHeight;
    if (St.dots.length == 0) {
        St.construct();
    }
    St.render();
};
cx.onmousemove = function (e) {
    St.mousePos[0] = e.clientX - cx.offsetLeft;
    St.mousePos[1] = e.clientY - cx.offsetTop;
}
window.onresize();

var Rp = new Ripple('.ripple');
Rp.init();