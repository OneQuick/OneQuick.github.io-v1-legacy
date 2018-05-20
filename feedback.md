---
title: 反馈
layout: index-toc
active: feedback
---

# 如何反馈

阅读下文及Issues里是否已有此问题，若没有再进行反馈。

请描述清楚**问题复现的方法**及**运行环境、版本信息**。

### 崩溃时需要的额外信息

崩溃时显示的信息非常重要，以及日志中会记录更详细的崩溃信息。  
日志位置：我的文档/OneQuick/OneQuick.log。在程序关于页面也有直接打开日志的链接。  
若日志中无记录，在事件查看器中也可查看。运行eventvwr.msc，左侧选择Windows日志/应用程序即可。  
事件查看器也正常时，更可能的原因是正常退出或被其他应用杀掉了。  

#### 反馈方式

Issues（推荐）: [github.com/OneQuick/OneQuick.net/issues](https://github.com/OneQuick/OneQuick.net/issues)  
微博：[weibo.com/onequick](https://weibo.com/onequick)  
邮箱：[support@onequick.org](mailto:support@onequick.org)  


# 功能需求

- 屏幕亮度：暂不考虑。 [#16](https://github.com/OneQuick/OneQuick.net/issues/16)

# 常见问题

- 开机OneQuick界面会闪一下。非bug，先显示界面初始化资源再隐藏界面，以后会优化掉。

- 据反馈，360会与OneQuick冲突。 [解决办法 #32](https://github.com/OneQuick/OneQuick.net/issues/32)


#### 失效

- 多媒体切换需要播放器监听对应事件；窗口透明度和当前窗口属性有关；win10中的虚拟桌面切换需要先创建多个桌面。这些功能无效果时不一定是bug。

- 以管理员身份运行的程序和普通程序之间，由于系统限制，是无法互通的。所以当OneQuick失效时，请首先检查当前激活窗口的运行身份，和OneQuick的运行身份。  
(https://docs.microsoft.com/en-us/windows/uwp/porting/desktop-to-uwp-prepare 参考UIAccess一节)


# 各版本bug列表

<h2 data-toc-text="从1.2前升级">从旧版(1.2之前)升级上来可能遇到的问题</h2>

- 程序窗口自动弹出。解决办法：为显示/隐藏界面的快捷键随便设置一个按键，再删除掉。

- OneQuick Lite和OneQuick两个图标：由于OneQuick改名造成。不影响使用，可以把两个应用都卸载掉，然后去商店重新安装。

- 此外，应用数据文件夹由 *我的文档/OneQuick Lite* 更改为 *我的文档/OneQuick* ，您可以将旧的目录删掉。

## 1.0.0

 - √ 闪退bug。

 - √ 短语替换遇到退格会混乱。


## 0.11.4

- √ 失效或错误触发。临时解决办法：重启程序或将修饰键（Shift、Alt、Ctrl、Win）都按一遍。#2 #7

- √ 启动时显示配置文件错误。临时解决办法：短语替换中的对勾不要处于取消状态，不用的直接删掉。#5

- √ 多显示器时边角操作错乱。暂无临时解决办法。#6

[返回顶部](#top)

<div style="height: 10px;"></div>