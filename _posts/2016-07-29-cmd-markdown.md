---
layout: default
title: Markdown
---
# 欢迎使用 Cmd Markdown 编辑阅读器
<p>今天是{{ page.date | date_to_string }}</p>
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

Markdown 是一种方便记忆、书写的纯文本标记语言，用户可以使用这些标记符号以最小的输入代价生成极富表现力的文档：譬如您正在阅读的这份文档。它使用简单的符号标记不同的标题，分割不同的段落，**粗体** 或者 *斜体2* 某些文字，更棒的是，它还可以

### 1. 制作一份待办事宜 [Todo 列表](https://www.zybuluo.com/mdeditor?url=https://www.zybuluo.com/static/editor/md-help.markdown#13-待办事宜-todo-列表)

- [ ] 支持以 PDF 格式导出文稿
- [ ] 改进 Cmd 渲染算法，使用局部渲染技术提高渲染效率
- [x] 新增 Todo 列表功能
- [x] 修复 LaTex 公式渲染问题
- [x] 新增 LaTex 公式编号功能

### 2. 书写一个质能守恒公式[^LaTeX]

``E=mc^2``

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>测试</title>
    <link href="css/reset.css" type="text/css" rel="stylesheet">
    <link href="css/layout.css" type="text/css" rel="stylesheet">
    <link href="css/animate.css" type="text/css" rel="stylesheet">
    <link href="css/tips.css" type="text/css" rel="stylesheet">
    <link href="css/radio.css" type="text/css" rel="stylesheet">
    <link href="css/checkbox.css" type="text/css" rel="stylesheet">
    <link href="css/select.css" type="text/css" rel="stylesheet">
    <link href="css/input.css" type="text/css" rel="stylesheet">
    <style>
        html,body {
scrollbar-face-color:#FB4446; /*滚动条3D表面（ThreedFace）的颜色*/ 
scrollbar-highlight-color:#fff; /*滚动条3D界面的亮边（ThreedHighlight）颜色*/ 
scrollbar-shadow-color:#eeeeee; /*滚动条3D界面的暗边（ThreedShadow）颜色*/ 
scrollbar-3dlight-color:#eeeeee; /*滚动条亮边框颜色*/ 
scrollbar-arrow-color:#000; /*滚动条方向箭头的颜色 */ 
scrollbar-track-color:#fff; /*滚动条的拖动区域(TrackBar)颜色*/
scrollbar-darkshadow-color:#fff; /*滚动条暗边框（ThreedDarkShadow）颜色*/ }

        /*---滚动条默认显示样式--*/  
::-webkit-scrollbar-thumb{  
   background-color:#FB4446;  
   height:50px;  
   outline-offset:-2px;  
   outline:2px solid #fff;  
   -webkit-border-radius:4px;  
   border: 2px solid #fff;  
}  
/*---鼠标点击滚动条显示样式--*/  
::-webkit-scrollbar-thumb:hover{  
   background-color: #F01360;  
   height:50px;  
   -webkit-border-radius:4px;  
}  
/*---滚动条大小--*/  
::-webkit-scrollbar{  
   width:8px;  
   height:8px;  
}  
/*---滚动框背景样式--*/  
::-webkit-scrollbar-track-piece{  
   background-color:#eee;  
   -webkit-border-radius:0;  
}
        
        .p {
            display: inline-block;
            padding: 10px;
            background: royalblue;
            color: #fff;
        }
        .h1{
            padding:20px 0 10px;
            font-size:18px;
            color:#333;

        }
        .h2{
            font-size:16px;
            color:#333;
            padding:5px 0;
            border-left:5px solid #cecece;
            padding-left:10px;
            margin:15px 0;
        }
    </style>
</head>

<body class="ml30">
    <h1 class="h1">XYUI表单元素美化</h1>
    <h2 class="h2">#data-tip</h2>
    <span class="p ui_tips" data-tips="我是提示提示提示提示提示~~" onclick='alert(3)'>提示提示提示提示提示</span>
    <h2 class="h2">#ui_radio</h2>
    <label class="ui_radio mr10"><input type="radio" name="item" disabled><span>不可选</span></label>
    <label class="ui_radio mr10"><input type="radio" name="item"><span>单选1</span></label>
    <label class="ui_radio mr10"><input type="radio" name="item"><span>单选1</span></label>
    <label class="ui_radio mr10"><input type="radio" name="item"><span>单选1</span></label>
    <p><br></p>
    <label class="ui_radio mr10"><input type="radio" name="item2"><span>单选2</span></label>
    <label class="ui_radio mr10"><input type="radio" name="item2"><span>单选2</span></label>
    <label class="ui_radio mr10"><input type="radio" name="item2"><span>单选2</span></label>
    <label class="ui_radio mr10"><input type="radio" name="item2"><span>单选2</span></label>
    <h2 class="h2">#ui_checkbox</h2>
    <p id="check_form">
        <label class="ui_checkbox mr10"><input type="checkbox" disabled><span>不可选</span></label>
        <label class="ui_checkbox mr10"><input type="checkbox" class="check_item"><span>多选</span></label>
        <label class="ui_checkbox mr10"><input type="checkbox" class="check_item"><span>多选</span></label>
        <label class="ui_checkbox mr10"><input type="checkbox" class="check_item"><span>多选</span></label>
        <label class="ui_checkbox mr10"><input type="checkbox" class="check_all"><span>全选</span></label>
    </p>
    <h2 class="h2">#ui_select</h2>
    <div class="ui_select" >
        <select onchange="console.log('1111自带change')">
            <option>44444444444</option>
            <option value="5">555555555555</option>
            <option value="6" selected>66666666</option>
            <option value="7" >77777</option>
            <option value="8">888888888</option>
            <option value="9">99999</option>
        </select>
    </div>
    <label class="ui_select">
        <select onchange="console.log('2222自带change')">
            <option value="4">44444444444</option>
            <option value="5">555555555555</option>
            <option value="6">66666666</option>
            <option>77777</option>
            <option value="8" selected>888888888</option>
        </select>
    </label>
    <label class="ui_select" >
        <select onchange="console.log('1111自带change')" disabled>
            <option>44444444444</option>
            <option value="5" selected>555555555555</option>
            <option value="6" >66666666</option>
            <option value="7" >77777</option>
            <option value="8">888888888</option>
            <option value="9">99999</option>
        </select>
    </label>
    <h2 class="h2">#ui_input</h2>
    <label class="ui_input mr10">
        <input type="text" placeholder="请输入点什么吧...">
    </label>
    <label class="ui_input ui_search_input" placeholder>
        <input type="search" placeholder="请搜索点什么.."><a class="ui_icon_search" onclick="alert(2)"></a>
    </label>
    <label class="ui_input ui_search_right" placeholder>
        <input type="search" placeholder="请搜索点什么.."><a class="ui_icon_search" onclick="alert(2)"></a>
    </label>
    <div class="ui_input ui_search_right mt10" placeholder>
        <input type="search" placeholder="请搜索点什么.."><a class="ui_icon_search"></a>
    </div>
    <div class="ui_input mt10" placeholder>
        <textarea type="search" placeholder="请输入点什么吧.." rows='5'></textarea>
    </div>
    <h2 class="h2">#ui_input</h2>
</body>

</html>

<script src='./build/index.bundle.js'></script>

```

### 3. 高亮一段代码CSS[^code]

```css
body{font:14px/1.42858 'microsoft yahei', arial, sans-serif; -webkit-font-smoothing: antialiased; }
h1,h2,h3,h4,h5,h6{font-size:100%; margin:0; font-weight:400;}
body,form,ul,ol,dl,dd,p{margin:0;}
ul,ol{list-style-type:none; padding: 0;}
img{border:0 none;vertical-align:middle;}
button,input,select,textarea{font-size:1em; font-family: inherit; *font-family: 'microsoft yahei';}
a{text-decoration:none;outline: 0;star:expression(this.onFocus=this.blur()); }
article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}
textarea{ overflow:auto; resize: vertical;}
:active,:focus{ outline: 0;}
input::-ms-clear{display:none;}
@media (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 2dppx){ 
    /* Retina 下仍使用默认字体渲染 */
	body { -webkit-font-smoothing: subpixel-antialiased; }
}
```

### 3. 高亮一段代码[^code]

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

### 4. 高效绘制 [流程图](https://www.zybuluo.com/mdeditor?url=https://www.zybuluo.com/static/editor/md-help.markdown#7-流程图)

```flow
st=>start: Start
op=>operation: Your Operation
cond=>condition: Yes or No?
e=>end

st->op->cond
cond(yes)->e
cond(no)->op
```

### 5. 高效绘制 [序列图](https://www.zybuluo.com/mdeditor?url=https://www.zybuluo.com/static/editor/md-help.markdown#8-序列图)

```seq
Alice->Bob: Hello Bob, how are you?
Note right of Bob: Bob thinks
Bob-->Alice: I am good thanks!
```

### 6. 绘制表格

| 项目        | 价格   |  数量  |
| --------   | -----:  | :----:  |
| 计算机     | \$1600 |   5     |
| 手机        |   \$12   |   12   |
| 管线        |    \$1    |  234  |

### 7. 更详细语法说明

想要查看更详细的语法说明，可以参考我们准备的 [Cmd Markdown 简明语法手册][1]，进阶用户可以参考 [Cmd Markdown 高阶语法手册][2] 了解更多高级功能。

总而言之，不同于其它 *所见即所得* 的编辑器：你只需使用键盘专注于书写文本内容，就可以生成印刷级的排版格式，省却在键盘和工具栏之间来回切换，调整内容和格式的麻烦。**Markdown 在流畅的书写和印刷级的阅读体验之间找到了平衡。** 目前它已经成为世界上最大的技术分享网站 GitHub 和 技术问答网站 StackOverFlow 的御用书写格式。

---

## 什么是 Cmd Markdown

您可以使用很多工具书写 Markdown，但是 Cmd Markdown 是这个星球上我们已知的、最好的 Markdown 工具——没有之一 ：）因为深信文字的力量，所以我们和你一样，对流畅书写，分享思想和知识，以及阅读体验有极致的追求，我们把对于这些诉求的回应整合在 Cmd Markdown，并且一次，两次，三次，乃至无数次地提升这个工具的体验，最终将它演化成一个 **编辑/发布/阅读** Markdown 的在线平台——您可以在任何地方，任何系统/设备上管理这里的文字。

### 1. 实时同步预览

我们将 Cmd Markdown 的主界面一分为二，左边为**编辑区**，右边为**预览区**，在编辑区的操作会实时地渲染到预览区方便查看最终的版面效果，并且如果你在其中一个区拖动滚动条，我们有一个巧妙的算法把另一个区的滚动条同步到等价的位置，超酷！

### 2. 编辑工具栏

也许您还是一个 Markdown 语法的新手，在您完全熟悉它之前，我们在 **编辑区** 的顶部放置了一个如下图所示的工具栏，您可以使用鼠标在工具栏上调整格式，不过我们仍旧鼓励你使用键盘标记格式，提高书写的流畅度。

![tool-editor](https://www.zybuluo.com/static/img/toolbar-editor.png)

### 3. 编辑模式

完全心无旁骛的方式编辑文字：点击 **编辑工具栏** 最右测的拉伸按钮或者按下 `Ctrl + M`，将 Cmd Markdown 切换到独立的编辑模式，这是一个极度简洁的写作环境，所有可能会引起分心的元素都已经被挪除，超清爽！

### 4. 实时的云端文稿

为了保障数据安全，Cmd Markdown 会将您每一次击键的内容保存至云端，同时在 **编辑工具栏** 的最右侧提示 `已保存` 的字样。无需担心浏览器崩溃，机器掉电或者地震，海啸——在编辑的过程中随时关闭浏览器或者机器，下一次回到 Cmd Markdown 的时候继续写作。

### 5. 离线模式

在网络环境不稳定的情况下记录文字一样很安全！在您写作的时候，如果电脑突然失去网络连接，Cmd Markdown 会智能切换至离线模式，将您后续键入的文字保存在本地，直到网络恢复再将他们传送至云端，即使在网络恢复前关闭浏览器或者电脑，一样没有问题，等到下次开启 Cmd Markdown 的时候，她会提醒您将离线保存的文字传送至云端。简而言之，我们尽最大的努力保障您文字的安全。

### 6. 管理工具栏

为了便于管理您的文稿，在 **预览区** 的顶部放置了如下所示的 **管理工具栏**：

![tool-manager](https://www.zybuluo.com/static/img/toolbar-manager.jpg)

通过管理工具栏可以：

<i class="icon-share"></i> 发布：将当前的文稿生成固定链接，在网络上发布，分享
<i class="icon-file"></i> 新建：开始撰写一篇新的文稿
<i class="icon-trash"></i> 删除：删除当前的文稿
<i class="icon-cloud"></i> 导出：将当前的文稿转化为 Markdown 文本或者 Html 格式，并导出到本地
<i class="icon-reorder"></i> 列表：所有新增和过往的文稿都可以在这里查看、操作
<i class="icon-pencil"></i> 模式：切换 普通/Vim/Emacs 编辑模式

### 7. 阅读工具栏

![tool-manager](https://www.zybuluo.com/static/img/toolbar-reader.jpg)

通过 **预览区** 右上角的 **阅读工具栏**，可以查看当前文稿的目录并增强阅读体验。

工具栏上的五个图标依次为：

<i class="icon-list"></i> 目录：快速导航当前文稿的目录结构以跳转到感兴趣的段落
<i class="icon-chevron-sign-left"></i> 视图：互换左边编辑区和右边预览区的位置
<i class="icon-adjust"></i> 主题：内置了黑白两种模式的主题，试试 **黑色主题**，超炫！
<i class="icon-desktop"></i> 阅读：心无旁骛的阅读模式提供超一流的阅读体验
<i class="icon-fullscreen"></i> 全屏：简洁，简洁，再简洁，一个完全沉浸式的写作和阅读环境

### 8. 阅读模式

在 **阅读工具栏** 点击 <i class="icon-desktop"></i> 或者按下 `Ctrl+Alt+M` 随即进入独立的阅读模式界面，我们在版面渲染上的每一个细节：字体，字号，行间距，前背景色都倾注了大量的时间，努力提升阅读的体验和品质。

### 9. 标签、分类和搜索

在编辑区任意行首位置输入以下格式的文字可以标签当前文档：

标签： 未分类

标签以后的文稿在【文件列表】（Ctrl+Alt+F）里会按照标签分类，用户可以同时使用键盘或者鼠标浏览查看，或者在【文件列表】的搜索文本框内搜索标题关键字过滤文稿，如下图所示：

![file-list](https://www.zybuluo.com/static/img/file-list.png)

### 10. 文稿发布和分享

在您使用 Cmd Markdown 记录，创作，整理，阅读文稿的同时，我们不仅希望它是一个有力的工具，更希望您的思想和知识通过这个平台，连同优质的阅读体验，将他们分享给有相同志趣的人，进而鼓励更多的人来到这里记录分享他们的思想和知识，尝试点击 <i class="icon-share"></i> (Ctrl+Alt+P) 发布这份文档给好友吧！

------

再一次感谢您花费时间阅读这份欢迎稿，点击 <i class="icon-file"></i> (Ctrl+Alt+N) 开始撰写新的文稿吧！祝您在这里记录、阅读、分享愉快！

作者 [@ghosert][3]     
2015 年 06月 15日    

[^LaTeX]: 支持 **LaTeX** 编辑显示支持，例如：$\sum_{i=1}^n a_i=0$， 访问 [MathJax][4] 参考更多使用方法。

[^code]: 代码高亮功能支持包括 Java, Python, JavaScript 在内的，**四十一**种主流编程语言。

[1]: https://www.zybuluo.com/mdeditor?url=https://www.zybuluo.com/static/editor/md-help.markdown
[2]: https://www.zybuluo.com/mdeditor?url=https://www.zybuluo.com/static/editor/md-help.markdown#cmd-markdown-高阶语法手册
[3]: http://weibo.com/ghosert
[4]: http://meta.math.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference
