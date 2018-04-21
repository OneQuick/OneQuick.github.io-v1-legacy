---
title: 反馈
layout: index2
active: feedback
---

### 如何反馈：

请先阅读**已知问题**列表，并查找**Issues**里是否已有此问题，若没有再进行反馈。

请尽量描述清楚**问题复现的方法**、错误信息、日志，以及安装环境（系统，是否64位，是否商店版），这些都有助于作者定位问题。

- OneQuick日志：**关于**里点击日志链接即可打开。或在我的文档文件夹中，OneQuick目录里。  
日志请勿全部粘贴，仅粘贴出错时及往前几条即可。

- 系统日志位置：开始菜单搜索**事件查看器**或运行**eventvwr.msc**打开查看器，在左侧选择Windows日志-应用程序，右侧查看错误信息。请确认错误信息来自OneQuick。  
遇到莫名崩溃的bug时，系统日志尤为重要

您也可以阅读**支持**页面，了解更多OneQuick的使用方法和原理。

反馈地址（Issues）<a href="https://github.com/OneQuick/OneQuick.net/issues" target="_blank">在此</a>。

<span style="font-size: 12px; font-style: italic;">请不要在应用商店、微博、知乎反馈问题（提建议可以）。尤其是应用商店，作者只能回复一条，而且无法贴图，这样对解决问题没有任何帮助。微博知乎回复可能不及时，总之请尽量发 issue。</span>


### 已知问题：

- 以管理员身份运行的程序和普通程序之间，由于系统限制，是无法互通的。所以当OneQuick失效时，请首先检查当前激活窗口的运行身份，和OneQuick的运行身份。  
(https://docs.microsoft.com/en-us/windows/uwp/porting/desktop-to-uwp-prepare 参考UIAccess一节)

#### 0.11.4

- 失效或错误触发。临时解决办法：重启程序或将修饰键（Shift、Alt、Ctrl、Win）都按一遍。#2 #7

- 启动时显示配置文件错误。临时解决办法：短语替换中的对勾不要处于取消状态，不用的直接删掉。#5

- 多显示器时边角操作错乱。暂无临时解决办法。#6
