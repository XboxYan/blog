---
layout: page_content
title: HTML中img的完美展示方式
categories: css技巧
---

## web中图片展示带来的问题

一般新闻展示类的图片，对上传的图片不经过裁剪等处理，图片的宽高，大小，比例可能均不相同。如果只是展示，在新闻中插入图片，依次摆放，只要限制一下maxwidth，加个居中，不用考虑图片比例是什么样，一般不会有很大问题，至少不会觉得很丑，一般新闻的插图可能是下面这个样子：

![img](http://chuantu.biz/t5/44/1481700710x3707329634.png)

这是一类图片，他们没什么限制，很自由，还有一类图片，一般是用在列表上，比如电影列表上，加个电影海报图片，新闻列表上，加个新闻图片，这类图片就有限制了，至少在页面上看着大小形状是一致的，下面给个例子：

![img](http://chuantu.biz/t5/44/1481701041x3707329634.png)

要达到这种效果，一般有**两种**处理方式，运营和前端：一种是运营人员就需要比较勤快了，每次发布新闻，需要把图片裁剪成统一大小，你可以先通过PS等工具把图片处理好再上传，或者在上传的过程中使用一些js库来完成裁剪工作，两者皆可，这也是最根本的解决方案;

另一种就是前端的处理了，也就是通过样式来控制了，介于一般公司运营人员不够充足，工作量大，这种事情一般就交给苦逼的前端了：“不就是一句代码就解决了吗？”

## 再来看一下问题现象

刚才说到的问题，如果是要求一类图片展示大小相同，我们一般给一个容器（比如100px*100px），把大小限定，然后再限定里面的图片。

```
<div>
    <img />
</div>
```

现在img的尺寸就可能会有三种情况：
* 第一种：img宽/img高>div宽/div高，比如 200px*100px
* 第二种：img宽/img高=div宽/div高，比如 200px*200px
* 第三种：img宽/img高<div宽/div高，比如 100px*200px

这里有三张图片分别对应上面三种情况：

### img宽/img高>div宽/div高

![img](http://chuantu.biz/t5/44/1481704887x3707329634.jpg)

### img宽/img高=div宽/div高

![img](http://chuantu.biz/t5/44/1481705132x3707329634.jpg)

### img宽/img高<div宽/div高

![img](http://chuantu.biz/t5/44/1481705162x3707329634.jpg)

*注意：这里是比较图片的宽高比的关系，与具体数字无关*

那么，这三种情况要怎么放在div中完美展示呢？我们可以参考windows系统中桌面壁纸的展示方式，**拉伸**、**平铺**、**居中**、**适应**、**填充**这几种，其中‘平铺’主要是针对背景图片的，这里暂时不讨论。

![img](http://chuantu.biz/t5/44/1481703041x3707329634.png)

### 方案一：拉伸

```
img{ width:100%; height:100%;}
```
[demo]({{site.baseurl}}/demo/2016-12-14/test01.html)

这段代码很简单，宽高都设为100%，很轻易的达到了宽高表现一致，但是问题也很大，如果图片**比例**不对，就会出现变形的情况，难以接受（貌似很多前端为了图方便都使用了这种方式，简单也不会出错）

![img](http://chuantu.biz/t5/44/1481705412x3707329634.png)

### 方案二：居中

```
div{ text-align:center;}
div>img{vertical-align:middle;width:50%;/*由于需要表现居中，所以把图片改小一点*/}
div:before{content:''; display:inline-block; width:0;height:100%;vertical-align:middle;}
```

[demo]({{site.baseurl}}/demo/2016-12-14/test02.html)

这个方式稍稍复杂，主要是实现垂直居中的方法，展现效果也还可以，至少图片没有变形

![img](http://chuantu.biz/t5/44/1481706483x3707329634.png)

### 方案三：适应

```
div{ text-align:center;font-size: 0;/*去除标签空格*/}
div>img{vertical-align:middle; max-width:100%; max-height:100%;}
div:before{content:''; display:inline-block; width:0;height:100%;vertical-align:middle;}
```

[demo]({{site.baseurl}}/demo/2016-12-14/test03.html)

这个原理与方案二基本一致，只是给图片限定了最大宽高，达到适应的效果，而且该方式兼容到IE7，可以满足绝大部分需求。

![img](http://chuantu.biz/t5/44/1481706980x3707329634.png)

### 方案四：填充

```
img{width:100%;height:100%;object-fit:cover;}
```

[demo]({{site.baseurl}}/demo/2016-12-14/test04.html)

这个方式简直就是完美了，图片也没有拉伸，而且居中显示，不留空白，代码也很简洁，只多了一行`object-fit:cover`，不足之处在于兼容性不行，IE全军覆没，如果你的项目是移动端的，大可以使用这种方式。

![img](http://chuantu.biz/t5/44/1481707321x3707329634.png)

### 其他方案

以上都是纯css方案，如果想达到最佳效果，可以通过js来处理，一般都会判断一下，支持`object-fit`的浏览器直接使用该css方案，其他则通过计算宽高比，用绝对定位的方式来实现，虽然计算量大了点，不过也能完美实现

这里推荐一个插件[jQthumb](http://www.dowebok.com/124.html),该插件也能完美实现图片展示，不过css用的是`background-size:cover`方法，也比较方便。