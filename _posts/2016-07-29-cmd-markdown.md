---
layout: default
title: Markdown
---
# 欢迎使用 Cmd Markdown 编辑阅读器
------
<h4>今天是 {{ page.date | date_to_string }}</h4>

------
我们理解您需要更便捷更高效的工具记录思想，整理笔记、知识，并将其中承载的价值传播给他人，**Cmd Markdown** 是我们给出的答案 —— 我们为记录思想和分享知识提供更专业的工具。 您可以使用 Cmd Markdown：

> * 整理知识，学习笔记
> * 发布日记，杂文，所见所想
> * 撰写发布技术文稿（代码支持）
> * 撰写发布学术论文（LaTeX 公式支持）

![cmd-markdown-logo](https://www.zybuluo.com/static/img/logo.png)

除了您现在看到的这个 Cmd Markdown 在线版本，您还可以前往以下网址下载：

### [Windows/Mac/Linux 全平台客户端](https://www.zybuluo.com/cmd/)

> 请保留此份 Cmd Markdown 的欢迎稿兼使用说明，如需撰写新稿件，点击顶部工具栏右侧的 <i class="icon-file"></i> **新文稿** 或者使用快捷键 `Ctrl+Alt+N`。

------

## 什么是 Markdown

Markdown 是一种方便记忆、书写的纯文本标记语言，用户可以使用这些标记符号以最小的输入代价生成极富表现力的文档：譬如您正在阅读的这份文档。它使用简单的符号标记不同的标题，分割不同的段落，**粗体** 或者 *斜体* 某些文字，更棒的是，它还可以

### 1. 制作一份待办事宜 [Todo 列表](https://www.zybuluo.com/mdeditor?url=https://www.zybuluo.com/static/editor/md-help.markdown#13-待办事宜-todo-列表)

- [ ] 支持以 PDF 格式导出文稿
- [ ] 改进 Cmd 渲染算法，使用局部渲染技术提高渲染效率
- [x] 新增 Todo 列表功能
- [x] 修复 LaTex 公式渲染问题
- [x] 新增 LaTex 公式编号功能

### 2. 书写一个质能守恒公式[^LaTeX]

$$E=mc^2$$

### 3. 高亮一段javascript代码
### 4. 高亮一段HTML代码
```javascript
function Starry(cx,ctx){
  this.cx = cx;
  this.ctx = ctx;
  this.len = 70;
  this.mousePos = [0, 0];
  this.easingFactor = 10;
  this.backgroundColor = 'rgba(0,0,0,0)';
  this.dotColor = '#fff';
  this.lineColor = '#fff';
  this.dots = [];//点
  this.lines = [];//线
}
Starry.prototype = {  
  construct:function(){
    var _this = this;
    for( var i = 0; i < this.len; i++ ){
        var dot = {          
          isMouse : i===0,
          x : Math.random()*this.cx.width,
          y : Math.random()*this.cx.height,
          r : i===0?0:Math.random()*4,
          v : 2,
          ra : (Math.random()-.5)*2*Math.PI,
          c : Math.random()*10,
          cv : Math.random()+1,
        }
        dot.v = dot.r===0?0:dot.v/(dot.r+1);
        this.dots.push(dot);
    }
    
    this.dots.forEach(function(dot,m){  
        _this.dots.forEach(function(_dot,n){
            if( n < m ){
                var line = {
                    from : dot,
                    to : _dot
                }
                _this.lines.push(line);
            } 
        })
    })  
  },
  step:function(){
    var _this = this;
    this.dots.forEach(function(dot){
        if(dot.isMouse){
          dot.x += (_this.mousePos[0] - dot.x);
          dot.y += (_this.mousePos[1] - dot.y) / _this.easingFactor;
        };
        
        if(dot.x<0){
          dot.x = 0;
          dot.ra = -dot.ra;
        }
        if(dot.x>_this.cx.width){
          dot.x = _this.cx.width;
          dot.ra *=-1;
        }
        if(dot.y<0){
          dot.y = 0;
          dot.ra = Math.PI - dot.ra;
        }
        if(dot.y>_this.cx.height){
          dot.y = _this.cx.height;
          dot.ra = Math.PI - dot.ra;
        }
        //随机运动   
        dot.c += dot.cv;
        if(dot.c > 50+Math.random()*10 ){
            dot.cv = 1+Math.random(); 
            dot.c = Math.random()*10;
            dot.ra += (Math.random()-.5)*Math.PI/3;
        }
        
        dot.x += dot.v*Math.sin(dot.ra);
        dot.y += dot.v*Math.cos(dot.ra);
        
    });
    this.render();
    window.requestAnimationFrame(this.step.bind(this));
  },
  render:function(){
    var _this = this;
    this.ctx.clearRect(0,0,this.cx.width,this.cx.height);//清除
    this.ctx.globalAlpha = .5;
    this.ctx.fillStyle = this.backgroundColor;
    this.ctx.fillRect(0,0,this.cx.width,this.cx.height);
    this.ctx.fillStyle = this.dotColor;
    this.dots.forEach(function(dot){
      _this.ctx.beginPath();
      _this.ctx.arc(dot.x,dot.y,dot.r,0,2*Math.PI);
      _this.ctx.fill();
    });
    this.ctx.save();
    this.lines.forEach(function(line){
      var l = Math.sqrt(Math.pow((line.from.x - line.to.x), 2) + Math.pow((line.from.y - line.to.y), 2));
      var maxl = _this.cx.width / 8;
      if( l > maxl) return;
      _this.ctx.strokeStyle = _this.lineColor;
      _this.ctx.lineWidth = (1.0 - l / maxl) * 2;
      _this.ctx.globalAlpha = (1.0 - l / maxl)*.5;
      _this.ctx.beginPath();
      _this.ctx.moveTo(line.from.x,line.from.y);
      _this.ctx.lineTo(line.to.x,line.to.y);
      _this.ctx.stroke();
    });
    this.ctx.restore();
  }
}

module.exports = Starry
```



