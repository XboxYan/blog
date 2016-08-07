function Ripple(obj){
    this.ripple = [];
    this.containers = document.querySelectorAll(obj);
}
Ripple.prototype = {
    init : function(){
        var self = this;
        containers = Array.prototype.slice.call(this.containers);
        for (var i = 0; i < this.containers.length; i += 1) {
          var rp = document.createElement('span');
          rp.className = 'ripple_effect'
          containers[i].index = i;
          containers[i].addEventListener('click', function(){self.press(event)}, false);
          containers[i].appendChild(rp);
          var r = ( containers[i].clientWidth>containers[i].clientHeight ) ?containers[i].clientWidth:containers[i].clientHeight;
          rp.style.width  = r*2 + 'px';
          rp.style.height = r*2 + 'px';
          rp.style.marginTop = -r + 'px';
          rp.style.marginLeft = -r + 'px';
          this.ripple.push(rp)
        }
        console.log(this.ripple)
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
