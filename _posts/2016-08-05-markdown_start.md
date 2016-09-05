---
layout: page_content
title: Markdown 简易入门指南
categories: [markdown]
---

> Markdown 是一种轻量级的「标记语言」，它的优点很多，目前也被越来越多的写作爱好者，撰稿者广泛使用。看到这里请不要被「标记」、「语言」所迷惑，Markdown 的语法十分简单。常用的标记符号也不超过十个，这种相对于更为复杂的HTML 标记语言来说，Markdown 可谓是十分轻量的，学习成本也不需要太多，且一旦熟悉这种语法规则，会有一劳永逸的效果。

## 认识 Markdown

在刚才的导语里提到，Markdown 是一种用来写作的轻量级「标记语言」，它用简洁的语法代替排版，而不像一般我们用的字处理软件 Word 或 Pages 有大量的排版、字体设置。它使我们专心于码字，用「标记」语法，来代替常见的排版格式。

### Markdown 官方文档

> 这里可以看到官方的 Markdown 语法规则文档，当然，后文我也会用自己的方式，阐述这些语法在实际使用中的用法。

* [Markdown 中文版语法说明](http://www.markdown.cn/)

### Markdown 的优点

* 专注你的文字内容而不是排版样式。
* 轻松的导出 HTML、PDF 和本身的 .md 文件。
* 纯文本内容，兼容所有的文本编辑器与字处理软件。
* 可读，直观。适合所有人的写作语言。

### Markdown相关工具
> Windows平台

* [MarkdownPad](http://markdownpad.com/)
* [MarkPad](http://code52.org/DownmarkerWPF/)

> Mac平台

* [Mou](http://mouapp.com/)

> Linux平台

* [ReText](http://sourceforge.net/p/retext/home/ReText/)

还有本人常用的编辑工具

* [Cmd Markdown 编辑阅读器](https://www.zybuluo.com/mdeditor)
* [Visual Studio Code](https://www.visualstudio.com/products/code-vs) 也支持Markdown文档编辑与预览

![Visual Studio Code]({{ site.baseurl }}/image/2016-08-05/vscode.png)

## Markdown 基本语法

*注意：大部分符号后面和文字之间有空格，每条不同语法之间空一行*

### 标题

标题是每篇文章都需要也是最常用的格式，在 Markdown 中，如果一段文字被定义为标题，只要在这段文字前加 `#` 号即可。

```
# 一级标题
```

# 一级标题

```
## 二级标题
```

## 二级标题

```
### 三级标题
```

### 三级标题

依次类推,分别对应html中的h1~h6

### 列表

熟悉 HTML 的同学肯定知道有序列表与无序列表的区别，在 Markdown 下，列表的显示只需要在文字前加上 `-` 或 `*` 即可变为无序列表，有序列表则直接在文字前加 `1. 2. 3.` 符号要和文字之间加上一个字符的*空格*。

#### 无序列表

```
* 列表1
* 列表2
* 列表3
```

* 列表1
* 列表2
* 列表3

#### 有序列表

```
1. 列表1
2. 列表2
3. 列表3
```

1. 列表1
2. 列表2
3. 列表3

### 引用

如果你需要引用一小段别处的句子，那么就要用引用的格式，用`>`符号。

```
> 引用一段文字
```

> 引用一段文字

### 图片与链接

插入链接与插入图片的语法很像，区别在于图片前面要添加 `!`号

#### 插入连接

```
[百度一下](https://www.baidu.com/)
```

[百度一下](https://www.baidu.com/)

#### 插入图片

```
![百度一下](https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png)
```

![百度一下](https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png)

### 粗体与斜体

Markdown 的粗体和斜体也非常简单，用两个 `* `包含一段文本就是粗体的语法，用一个 `*` 包含一段文本就是斜体的语法。

```
例如：**这里是粗体** *这里是斜体* ***这里是斜粗体***
```

例如：**这里是粗体** *这里是斜体* ***这里是斜粗体***

### 高亮代码

如果你是个程序猿，需要在文章里优雅的引用代码框，在 Markdown 下实现也非常简单，只需要用两个重音符 （``） 把中间的代码包裹起来，如 `code`。

在插件的支持下，Markdown 还支持html\css\javascript等各种语言的高亮显示(***用三个`来引用，这里为了不引起冲突，只用了两个***)

#### 高亮一段html代码

```
``html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>测试</title>
    <link href="css/reset.css" type="text/css" rel="stylesheet">
</head>

<body class="ml30">
    <h1 class="h1">XYUI表单元素美化</h1>
</body>

</html>
``
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>测试</title>
    <link href="css/reset.css" type="text/css" rel="stylesheet">
</head>

<body class="ml30">
    <h1 class="h1">XYUI表单元素美化</h1>
</body>

</html>
```

#### 高亮一段javascript代码

```
``javascript
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
module.exports = Starry
``
```

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
module.exports = Starry
```

### 分割线
分割线的语法只需要另起一行，连续输入三个或以上星号 `*** `或者短横线`---`即可

```
****
---
* * *
```

***

---

* * *

### 表格

表格稍稍有点麻烦，直接看代码吧

```
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

## 小结
以上就是几种常见语法，到这里，Markdown 的基本语法在日常的使用中基本就没什么大问题了，只要多加练习，配合好用的工具，写起东西来肯定会行云流水。
