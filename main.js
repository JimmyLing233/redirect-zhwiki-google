// ==UserScript==
// @name         中文维百谷歌重定向
// @version      2.1
// @description  Redirects Wikipedia
// @namespace    https://github.com/JimmyLing233/redirect-zhwiki-google
// @author       Akari
// @include      *://zh.m.wikipedia.org/*
// @include      *://zh.wikipedia.org/*
// @license      MIT
// @grant        none
// @inject-into  auto
// @run-at       document-start
// ==/UserScript==

var url = new URL(location.href);
var hasRedirected = false; // 添加一个标志来检查是否已经进行了重定向

// 第一个重定向条件
var re = /zh\.m\.wikipedia\.org\/*/;
if (re.test(url.hostname) && !hasRedirected) {
    url.hostname = url.hostname.replace(re, 'zh.wikipedia.com');
    location.assign(url.href);
    hasRedirected = true; // 设置重定向标志为true
}

var newUrl = new URL(location.href);
// 第二个重定向条件
var newRe = /zh\.wikipedia\.org\/zh-[a-z]{2,4}\/*/;
if (newRe.test(newUrl.hostname) && !hasRedirected) {
    newUrl.hostname = newUrl.hostname.replace(newRe, 'zh.wikipedia.com');
    newUrl.pathname = '/wiki' + newUrl.pathname; // 添加/wiki/到路径前面
    location.assign(newUrl.href);
    hasRedirected = true; // 设置重定向标志为true
}
