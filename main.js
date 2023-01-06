// ==UserScript==
// @name         中文维百谷歌重定向
// @version      1.0
// @description  Redirects from zh.m.wikipedia.org to zh.wikipedia.org
// @namespace    https://github.com/JimmyLing233/redirect-zhwiki-google
// @author       Akari
// @include      *://zh.m.wikipedia.org/*
// @license      MIT
// @grant        none
// @inject-into  auto
// @run-at       document-start
// ==/UserScript==

var url = new URL(location.href);
var re = /zh.m.wikipedia\.org\/*/;
if(re.test(url.hostname))// 二次正则匹配，避免误判
{
    window.stop();// 停止加载当前页面
    url.hostname = url.hostname.replace(re, 'zh.wikipedia.com');// 替换域名
    location.assign(url.href);// 从当前页面会转为新页面
}
