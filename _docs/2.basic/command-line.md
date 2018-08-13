---
title: 运行命令
lang: cn
name: command-line
permalink: /basic/command-line/
---

# 运行命令

在运行命令的输入框中，可以输入任何在Win+R或CMD中可执行的命令。

如`notepad`为打开记事本。

命令可以带参数，如`notepad c:\text.txt`为使用记事本打开特定文件。

OneQuick会以空格分隔来判断执行文件名和参数，若文件名带空格，可以使用引号将其括起来。

`"note pad.exe" c:\text.txt`

不仅限于可执行文件，系统注册的协议都可执行，如win10中，`ms-settings:`为打开设置。

在“复制搜索”功能中，`%s`会被替换为剪贴板内容，所以`bilibili://video/%s`代表使用UWP版哔哩哔哩打开AV号。


# 扩展

OneQuick目前无法直接识别替换系统变量（如运行`explorer %systemroot%`），但通过CMD可以做到这一点。

`cmd /c explorer %systemroot%`

有关cmd的资料可使用`cmd /?`查看。

除cmd外，`runas`，`powershell`也可以用于执行命令。

了解相关C#代码可参考博文[C# ProcessStartInfo参数及常见启动程序方式](https://xujinkai.net/posts/csharp-use-process-run-command)


# 常见命令举例

> 这里列举了常见的一些命令供参考，作者也会将其中使用频繁的命令加入自带设置中。

- 编辑HOSTS文件 `cmd /c powershell.exe (Start-Process notepad %systemroot%/system32/drivers/etc/hosts -Verb runAs -Wait) -and (ipconfig -flushdns)`