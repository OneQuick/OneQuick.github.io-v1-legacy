---
title: 已知问题
lang: 
name: known-issues
permalink: /cn/support/known-issues
---

# 功能需求

- 屏幕亮度：暂不考虑。 [#16](https://github.com/OneQuick/OneQuick.net/issues/16)

- 剪贴板历史：此功能与热键工具定位不符，已独立作为一款开源小工具上架应用商店。  
商店链接[点此](https://www.microsoft.com/store/apps/9ND6WDNB4FW7)，源码地址：<https://github.com/XUJINKAI/Clipboards>。


# 常见问题

- 开机OneQuick界面会闪一下。非bug，先显示界面初始化资源再隐藏界面，以后会优化掉。

- 据反馈，360会与OneQuick冲突。 [解决办法 #32](https://github.com/OneQuick/OneQuick.net/issues/32)

- 失效请先排查

  - 多媒体切换、窗口置顶及透明度、虚拟桌面无效。  
多媒体切换需要播放器监听对应按键；  
窗口操作并非OneQuick“独家”控制，对应应用是可以自己改回去的；  
虚拟桌面指win10系统的虚拟桌面，需要先新建多个桌面才能进行切换。

  - 由于系统限制，以管理员身份运行的程序和普通程序之间无法互通。  
排查方法：先退出程序，再以管理员身份运行OneQuick，测试效果。  
参考链接：https://docs.microsoft.com/en-us/windows/uwp/porting/desktop-to-uwp-prepare


# 各版本已知问题列表


## 从1.2之前升级而来

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
