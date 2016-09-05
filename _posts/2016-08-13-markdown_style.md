---
layout: markdown
title: Markdown 自定义样式
categories: [markdown]
---
# Markdown 自定义样式
Post by {{ page.date | date_to_string }}

*****

## Markdown 在不同环境下的区别

<!--excerpt-->

前面一篇 [*Markdown 简易入门指南*]({{site.baseurl}}/2016-08-05/markdown_start.html) 已经简单介绍了常见`Markdown`的语法，我们可以用这几种语法很轻松的实现文章中的各种布局和样式，但是你会发现，在不同的编辑器中，Markdown所展现的页面是有区别的，比如*github*和*Cmd Markdown*:

#### github

![github](https://d17oy1vhnax1f7.cloudfront.net/items/3q102503283x0H2v3s3G/QQ%E5%9B%BE%E7%89%8720160824212644.png?v=5cfb2188)

#### Cmd Markdown

![cmd Markdown](https://d17oy1vhnax1f7.cloudfront.net/items/3I3O3o2m3d463J1Q050f/QQ%E5%9B%BE%E7%89%8720160824213111.png?v=a3b16420)

可以看出整体上内容差不多，格式也比较接近，只是颜色样式方面有点区别，在浏览器上开发者工具查看，可以看到，所有的md语法标记全部转换成了`html标签`：

![谷歌浏览器开发者工具](https://d17oy1vhnax1f7.cloudfront.net/items/0p0H0T1M3U0e1E424633/QQ%E5%9B%BE%E7%89%8720160824213700.png?v=12b6a2c3)

还有一个现象就是所有的标签都是单独的，没有`class`之类，少数存在`id` 标识，整个容器外层有个`class`类，方便定义样式。

## Markdown 语法的解析

`Markdown` 语法语法最终能在浏览器正常的显示出来，是因为经过了解析，这里我们不关注是如何解析的，只用关注解析的结果。

### 标题

标题最终会转换成`h1~h6`标签，由`#`的个数决定

```
# 这是H1标题  -------->  <h1>这是H6标题</h1>
## 这是H2标题  ------->  <h2>这是H6标题</h2>
#### 这是H3标题  ----->  <h3>这是H6标题</h3>
...
###### 这是H6标题  --->  <h6>这是H6标题</h6>
```

### 列表

列表最终会转换成`ol>li ul>li`标签

#### 无序列表

```
* 列表1
* 列表2
* 列表3

---------------->

<ul>
    <li>列表1</li>
    <li>列表2</li>
    <li>列表3</li>
</ul>
```

#### 有序列表

```
1. 列表1
2. 列表2
3. 列表3

---------------->

<ol>
    <li>列表1</li>
    <li>列表2</li>
    <li>列表3</li>
</ol>
```

### 文本

无任何标记的文本会直接转换成`p`标签

```
一段文字

-------------->

<p>一段文字</p>
```

### 引用

引用一段文字会转换成`blockquote`标签，如果是纯文本，通常会包含一层`p`标签

```
> 引用一段文字

-------------->

<blockquote>
    <p>引用一段文字</p>
</blockquote>
```

### 图片与链接

链接会转换成`a`标签，图片会转换成`img`标签，方括号`[]`里面的文字会转换成图片的`alt`属性

#### 链接

```
[百度一下](https://www.baidu.com/)

---------->

<a href='https://www.baidu.com/'>百度一下</a>
```

#### 图片

```
![百度一下](https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png)

------------>

<img alt='百度一下' src='https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png' />
```


> Markdown 不是想要取代 HTML，甚至也没有要和它相近，它的语法种类很少，只对应 HTML 标记的一小部分。Markdown 的构想不是要使得 HTML 文档更容易书写。在我看来， HTML 已经很容易写了。Markdown 的理念是，能让文档更容易读、写和随意改。HTML 是一种发布的格式，Markdown 是一种书写的格式。就这样，Markdown 的格式语法只涵盖纯文本可以涵盖的范围。