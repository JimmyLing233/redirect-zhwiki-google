# redirect-zhwiki-google
## 介绍
因为在谷歌搜索结果的时候经常会出现域名为zh.m.wikipedia.org的手机端维基百科，并且其不会自动转为PC端网页。有时谷歌的结果默认为非用户常用变体，故写了一个十分简陋的重定向脚本使其重定向。

Redirects from zh.m.wikipedia.org to zh.wikipedia.org
Redirects from zh.wikipedia.org/zh-[a-z]{2,4}/ to zh.wikipedia.org/wiki/

## 使用方法
1. 安装 **油猴插件**(Tampermonkey/Greasemonkey/Violentmonkey等)，可以参考 [GreasyFork](https://greasyfork.org/zh-CN) 首页说明。
2. 安装插件，可从以下方式安装：
   + [安装脚本(Greasyfork)](https://greasyfork.org/zh-CN/scripts/457721) 
     + 如果没有出现脚本管理器的安装页面，则需要将代码复制下来。然后从脚本管理器中新建一个脚本，将自动生成的内容删除，粘贴复制的代码并保存。

## 声明
* 本脚本不保证后期的更新与维护。
* 本脚本原则上会重定向所有zh.m.wikipedia.org的网页至zh.wikipedia.org，此脚本在非条目空间可能并不好用（没测试过），介意的可以自行修改源代码或不使用此脚本。
* 本脚本原则上会重定向所有zh.wikipedia.org的不同中文变体（如zh-cn、zh-hk等）至zh.wikipedia.org/wiki/（用户默认语言页面），在使用时会有一个刷新的过程，介意的可以自行修改源代码或不使用此脚本。
* Github的代码版本会与Greasyfork保持一致同步更新。
