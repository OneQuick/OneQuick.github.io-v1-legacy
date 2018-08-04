---
title: Contribution | 贡献
lang: cn en
name: contribution
permalink: /contribution/
---

# How To

> 个人能力有限，文案、宣传、网站、英文翻译，作者并不精通，有想法愿意合作可邮件联系或微博私信。

## 网站翻译

本站代码地址：<https://github.com/OneQuick/OneQuick.github.io>

#### 0. 直接发给作者

最简单的方式，将翻译发给作者即可，作者来完成剩余的工作。

可以发邮件或提Issue：<https://github.com/OneQuick/OneQuick.github.io/issues>

对网站代码感兴趣请往下看。

### 源码说明

除主页 index.html 外，所有文档都在 /\_docs 文件夹中。

此文件夹中的文件均为md后缀，且指定permalink，所以这些文件的文件名和所属目录不会影响生成的URL。

页面翻译有两种方式：

#### 1. 创建一个新的 `-en.md` 文档

可以参考 Getting started 页面：在 /docs/1.getting-started/ 文件夹中，存在 index.md 和 index-en.md 两个文件。

在 Front Matter 中，为`lang`和`permalink`指定一个不同的值，系统会自动完成剩余工作。

两个文件的`name`属性要相同，这样系统会知道两个文件属于同一个页面的不同语言版本。

这种方式适合大段的 markdown 编写。


#### 2. 使用`<cn></cn>`, `<en></en>`标签

页面样式复杂时，上一种方式在同步两个页面的结构时会很麻烦，这时可以使用 cn 和 en 标签代替。

这部分由 js 代码控制，根据网站语言，cn 和 en 标签只会显示一个。

另外还有 `data-mlang-text-<lang>`、`data-mlang-href-<lang>`、`data-mlang-title-<lang>`属性来辅助标签的生成。

这部分可以参考主页 index.html 的代码。


## 应用界面翻译

等作者完成重构会开源多语言模块。


# Contributors

// 期待你的加入