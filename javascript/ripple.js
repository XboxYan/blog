function Ripple(obj){
    this.centerX = 0;
    this.centerY = 0;
    this.color = '';
    this.containers = document.querySelectorAll(obj);
    this.context = {};
    this.element = {};
    this.radius = 0;
}
Ripple.prototype = {
    init : function(){
        var self = this;
        containers = Array.prototype.slice.call(this.containers);
        for (var i = 0; i < this.containers.length; i += 1) {
          var canvas = document.createElement('canvas');
          canvas.addEventListener('click', function(){self.press(event)}, false);
          containers[i].appendChild(canvas);
          canvas.width  = canvas.clientWidth;
          canvas.height = canvas.clientHeight;
        }
    },
    press : function(event){
        this.color = '#333';
        this.element = event.toElement;
        this.context = this.element.getContext('2d');
        this.radius = 0;
        this.centerX = event.offsetX;
        this.centerY = event.offsetY;
        this.context.clearRect(0, 0, this.element.width, this.element.height);
        this.draw();
    },
    draw : function(){
        this.context.beginPath();
        this.context.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI, false);
        this.context.fillStyle = this.color;
        this.context.fill();
        this.radius += 2;
        if (this.radius < this.element.width) {
            requestAnimationFrame(this.draw.bind(this));
        }else{
            this.context.clearRect(0, 0, this.element.width, this.element.height);
        }
      }
}
