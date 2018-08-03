---
title: 配置文件
lang: cn
name: config-file
permalink: /cn/basic/config-file
---

OneQuick 的设置是自动保存的，因此绝大部分时候，您无需关心配置文件的情况。

某些情况下，您可能需要手动备份配置文件（例如重置系统时）。

配置文件路径： 我的文档\OneQuick，您可以通过关于页面的链接快速打开此文件夹。

### OneQuick.config

OneQuick 的设置保存于此。

专业版可以设置此文件保存路径，例如保存到网盘中达到多机同步和备份的目的。

程序会监听此文件，当文件修改时OneQuick会自动加载，所以手动修改此文件后无需重启程序。


### preference.cfg

保存了一些额外的信息，例如程序启动次数，(专业版)OneQuick.config文件路径等。


### ConfigBackup

用作配置文件的备份，因为配置文件会自动加载与保存，所以出现冲突时，旧的文件备份于此。

此文件夹会定期清理。