---
title: Basic | 基础
lang: cn
name: basic
permalink: /basic/
---

> 与繁琐说再见

<style>
img {
	max-height: 12em;
}
img.screenshot {
	max-height: 18em;
}
</style>

OneQuick 采用符合直觉的设计，操作融入系统自身的框架内，降低使用门槛。

但这仍需一点点时间熟悉。就好像熟悉`Ctrl C`为复制，`Ctrl Z`为撤销一样。

请相信这是值得的，略微熟悉后，这些新的操作会带给您不一样的体验。


# 屏幕边缘操作

改变鼠标按键在屏幕边缘时的功能

<img src="/img/shot/cn1screenborder.png" class="screenshot">

界面分左右两部分。左侧的九宫格代表了屏幕的八个边角（左上角，上边栏等），选中后，即可在右侧进行设置。


# 复制搜索

<img src="/img/shot/cn2copysearch.png" class="screenshot">

触发键为左侧热键栏的内容时，对应的一条命令会启动。  
触发键为右侧分组热键栏的内容时，所有分组热键为该触发键的命令都会启动。  

此功能中支持的命令和{% include a.html name='command-line' lang='cn' %}是一样的。  
唯一的区别在于，其中`%s`会自动替换为剪贴板的文本内容。  
因此：支持的命令并不局限于网址或必须包含`%s`。

## 添加其他搜索引擎

例如，想要添加Bing搜索。

先打开bing.com，随便搜索一个字符串，例如*SEARCHTEXT*，将链接复制下来，将其中的*SEARCHTEXT*替换为`%s`即可。


# 短语替换

<img src="/img/shot/cn3rep.png" class="screenshot">

- 键入必须为英文键盘可以打出且有显示的字符；输出则没有限制。
- 触发与输入法无关。
