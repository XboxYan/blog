function Ripple(obj){
    this.timer = null;
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
          containers[i].addEventListener('click', function(){self.press(event,this)}, false);
          containers[i].appendChild(rp);
          var r = ( containers[i].clientWidth>containers[i].clientHeight ) ?containers[i].clientWidth:containers[i].clientHeight;
          rp.style.width  = r*3 + 'px';
          rp.style.height = r*3 + 'px';
          this.ripple.push(rp);
        }
    },
    press : function(event,self){
        clearTimeout(this.timer);
        self.classList.remove('active');
        var X = event.clientX-offset(self).left;
        var Y = event.clientY-offset(self).top;
        this.ripple[self.index].style.left = X + 'px';
        this.ripple[self.index].style.top = Y + 'px';
        self.classList.add('active');
        this.timer = setTimeout(function(){ 
            self.classList.remove('active');
        },1000)
    },
}

function offset( elements ){ 
    var top = elements.offsetTop - document.body.scrollTop; 
    var left = elements.offsetLeft; 
    var parent = elements.offsetParent; 
    while( parent != null ){ 
        top += parent.offsetTop; 
        left += parent.offsetLeft; 
        parent = parent.offsetParent; 
    }; 
    return {top:top,left:left}; 
}; 
