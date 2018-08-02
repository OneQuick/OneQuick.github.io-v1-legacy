---
title: 如何反馈
lang: 
name: feedback
permalink: /docs/cn/support/feedback
---

# 如何反馈

阅读下文及Issues里是否已有此问题，若没有再进行反馈。

请描述清楚**问题复现的方法**及**运行环境、版本信息**。

### 失效时请先排查

- 多媒体切换、窗口置顶及透明度、虚拟桌面无效。  
多媒体切换需要播放器监听对应按键；  
窗口操作并非OneQuick“独家”控制，对应应用是可以自己改回去的；  
虚拟桌面指win10系统的虚拟桌面，需要先新建多个桌面才能进行切换。

- 由于系统限制，以管理员身份运行的程序和普通程序之间无法互通。  
排查方法：先退出程序，再以管理员身份运行OneQuick，测试效果。  
参考链接：https://docs.microsoft.com/en-us/windows/uwp/porting/desktop-to-uwp-prepare

### 崩溃时需要的额外信息

崩溃时显示的信息非常重要，以及日志中会记录更详细的崩溃信息。  
日志位置：我的文档/OneQuick/OneQuick.log。在程序关于页面也有直接打开日志的链接。  
若日志中无记录，在事件查看器中也可查看。运行eventvwr.msc，左侧选择Windows日志/应用程序即可。  
事件查看器也正常时，更可能的原因是正常退出或被其他应用杀掉了。  

#### 反馈方式

Issues地址: [github.com/OneQuick/OneQuick.net/issues](https://github.com/OneQuick/OneQuick.net/issues)  

[其他联系方式](/go?contact)

