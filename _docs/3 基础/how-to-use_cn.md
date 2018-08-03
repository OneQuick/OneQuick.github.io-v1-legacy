---
title: 如何使用
lang: cn
name: how-to-use
permalink: /cn/basic/how-to-use
---

> 本篇讲解基础的使用，建议阅读{% include a.html name='how-to-use-deep' lang='cn' %}了解更多。

<style>
img {
	max-height: 20em;
}
</style>

## 屏幕边缘操作

<img src="/img/shot/cn1screenborder.png">

界面分左右两部分。左侧的九宫格代表了屏幕的八个边角（左上角，上边栏等），选中后，即可在右侧进行设置。

 *虚拟桌面指win10的虚拟桌面切换，通过模拟热键 Ctrl + Win + ←/→实现。

## 复制搜索

<img src="/img/shot/cn2copysearch.png">

按两下 Ctrl + C，再按下一个触发键来执行。  
触发键为左侧热键栏的内容时，对应的一条命令会启动。  
触发键为右侧分组热键栏的内容时，所有分组热键为触发键的命令都会启动。  

启动命令可以是任何值，其中`%s`代表了剪贴板的内容。  

### 如何添加其他搜索引擎

例如，想要添加Bing搜索的命令。先打开bing.com，随便搜索一个字符串，例如*SEARCHTEXT*，将链接复制下来，将其中的*SEARCHTEXT*替换为`%s`即可。

 *1.2.4版本中，两下 Ctrl + C 的Ctrl要一直按住。

 *热键冲突时由程序自己决定启动哪条命令。


## 短语替换

<img src="/img/shot/cn3rep.png">

键入必须为英文键盘可以打出的字符，且触发与输入法无关。