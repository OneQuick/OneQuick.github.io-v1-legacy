---
title: 热键的触发及模拟
lang: cn
name: hotkey
permalink: /basic/hotkey/
---

# 按键表示

除短语替换只关心输入的字符外，其他地方的【热键】均区分具体的某一个按键。

例如，键盘英文区的数字1与小键盘的数字1是不同的两个按键。

为了做出区分，英文上方的1表示为`D1`，而小键盘的1表示为`NumPad1`。

OneQuick中的热键控件一概只表示一个按键，而非多个按键组合。

关于按键名称可以参考[Keys Enumeration](https://msdn.microsoft.com/zh-cn/library/system.windows.forms.keys(v=vs.110).aspx)

## 修饰键

OneQuick中的修饰键指Ctrl、Alt、Shift、Win。

修饰键区分左右时，会有L或R的前缀，例如`LWin`指左侧win键。

未显示L/R时，不区分左右，即左右侧按键均可。

## 合法的热键

由任意多个修饰键 + 一个其他按键组成。

例如`D1`, `Win_D`为一个合法按键，但`Ctrl_C_C`不是。



# 按键输入

选择【模拟热键】功能后，下方会出现按键输入框。

<img src="/img/shot/hotkey-control_cn.png" style="max-height: 10em;">  

输入：单击输入框，边框变红，按下任何一个合法的热键后退出输入状态。

在输入状态下（边框变红时）：鼠标左右键、回车键会退出输入状态，退格键会清空已有输入。

## 如何输入回车及退格

在控件的右键菜单中将确认/清除键改为F1/F2，就可以输入回车、退格及相关的组合热键了。

## 如何输入纯修饰键组合

例如要输入Ctrl + Shift这样的修饰键组合，可以在按下这两个按键的同时再按下回车键确认。

## 如何输入鼠标左右键

你可以输入配合修饰键的左右键，例如 Ctrl + 鼠标左键。

考虑到实际操作，无法单独输入鼠标左右键。


# 模拟按键

OneQuick 很多功能都是通过模拟按键实现的。  
Windows系统本身拥有丰富的热键，利用这点可以完成非常多的功能。

API参考: [SendInput](https://www.pinvoke.net/default.aspx/user32.SendInput)


## 内置功能

以下这些程序内置的功能都是通过模拟键盘按键实现的。

- 音量控制 VolumeDown, VolumeUp, VolumeMute
- 多媒体控制 MediaNextTrack, MediaPreviousTrack, MediaPlayPause
- 标签页 Ctrl + Tab, Ctrl + Shift + Tab
- 应用切换 Alt + Escape, Alt + Shift + Escape
- (win10)虚拟桌面 Ctrl + Win + Left/Right
- 翻页 PageDown/PageUp
- 页头/页尾 Home/End

查看Windows支持的热键可参考[Windows 中的键盘快捷方式](https://support.microsoft.com/zh-cn/help/12445/windows-keyboard-shortcuts)
