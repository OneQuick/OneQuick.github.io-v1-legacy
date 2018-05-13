---
title: OneQuick - 文档
layout: index2
active: docs
---
<style>
h2 {
	font-size: 2.5em;
	text-align: left;
}
ul {
	padding-left: 15px;
}
</style>

建设中，想知道什么快去找作者留言！

## 基本使用

- 修饰键：Ctrl、Alt、Shift、Win，除按键映射功能外，其他功能不区分修饰键的左右。

- 热键输入控件：点击后，边框变红，进入热键输入状态，按下一个合法的热键后退出输入状态。  
单独的鼠标左右键会退出热键输入，但配合修饰键的左右键是合法的。  
默认情况下，回车键会确认当前输入，退格键会清除已有输入。  
若要输入Ctrl + Shift这样的修饰键组合，可以在按下这两个按键的同时按下回车键确认。  
若要输入带回车和退格的热键，可以在控件的右键菜单中将确认/清除键改为F1/F2。  


## 功能原理

OneQuick的大部分功能都是通过模拟键盘按键实现的。  
Windows提供了丰富的热键组合，使用这些热键几乎可以完成所有操作。  
而在OneQuick的逻辑中，键盘和鼠标的任意组合都可以是热键。  
这就让OneQuick成为了Windows快捷键中心的角色，在OneQuick里可以轻易地改变系统热键，甚至用鼠标触发。

相关文章：  
[OneQuick开发日志 - 功能逻辑](https://zhuanlan.zhihu.com/p/35781215)  

## 启动参数

-h --hide 运行后隐藏窗口  
--exit 退出目前正在运行的实例  

商店版支持协议方式运行：  
onequick:  
onequick.exe（Alias，无需输入完整路径）

## Debug Mode

Alt + Shift + D

---
[隐私政策](/privacy-policy)