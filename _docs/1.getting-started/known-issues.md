---
title: Known Issues | 常见问题
lang: cn en
name: known-issues
permalink: /known-issues/
---

> 使用方面的问题可参考{% include a.html name='how-to-use' lang='cn' %}和{% include a.html name='command-line' lang='cn' %}页面

# Working

- 大重构，为2.0版本准备。[重构出的类库地址](https://github.com/XUJINKAI/XJKdotNetLibrary)

- 解决窗口弹出问题。


# 请先排查

- 据反馈，360会与OneQuick冲突。 [解决办法 #32](https://github.com/OneQuick/OneQuick.net/issues/32)

- 失效时：

  - 多媒体切换、窗口置顶及透明度、虚拟桌面无效。  
多媒体切换需要播放器监听对应按键；  
窗口操作并非OneQuick“独家”控制，对应应用是可以自己改回去的；  
虚拟桌面指win10系统的虚拟桌面，需要先新建多个桌面才能进行切换。

  - 由于系统限制，以管理员身份运行的程序和普通程序之间无法互通。  
排查方法：先退出程序，再以管理员身份运行OneQuick，测试效果。  
参考链接：<https://docs.microsoft.com/en-us/windows/uwp/porting/desktop-to-uwp-prepare>


# 已知Bug

- 程序窗口自动弹出。  
临时解决办法：为显示/隐藏界面的快捷键设置一个不常用的按键。

- 复制搜索中，两下 Ctrl + C 的Ctrl要一直按住。

- (自1.2之前升级而来) OneQuick Lite和OneQuick两个图标：由于OneQuick改名造成。  
不影响使用，可以把两个应用都卸载掉，然后去商店重新安装。


# 待优化改进

- 启动时卡顿

- 开机启动OneQuick界面会闪一下（先显示界面初始化资源再隐藏界面）。

## 屏幕边缘

- 短时间内滚轮只触发一次

- 设置区拖动互换

## 复制搜索

- 允许修改触发按键(e.g. cmd: ctrl_ins)


# 功能需求

> OneQuick 的定位是小而精的热键工具，会优先围绕这个目标设计。

## 计划中

- 自定义菜单，计划中。[#44](https://github.com/OneQuick/OneQuick.net/issues/44)

- 多步快捷键，计划中。[配置文件方式#35](https://github.com/OneQuick/OneQuick.net/issues/35)

## 难以实现

- 模拟/监听笔记本Fn键

- 屏幕亮度 [#16](https://github.com/OneQuick/OneQuick.net/issues/16)

## 暂不考虑

- 鼠标手势，暂不考虑。

- 剪贴板历史：此功能与热键工具定位不符，已独立作为一款开源小工具上架应用商店。  
商店链接[点此](https://www.microsoft.com/store/apps/9ND6WDNB4FW7)，源码地址：<https://github.com/XUJINKAI/Clipboards>。