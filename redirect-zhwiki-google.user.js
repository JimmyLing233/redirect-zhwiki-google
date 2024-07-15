// ==UserScript==
// @name         中文维百谷歌重定向
// @version      2.2
// @description  Redirects Wikipedia
// @updateURL    https://raw.githubusercontent.com/JimmyLing233/redirect-zhwiki-google/main/redirect-zhwiki-google.user.js
// @downloadURL  https://raw.githubusercontent.com/JimmyLing233/redirect-zhwiki-google/main/redirect-zhwiki-google.user.js
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
var hasRedirectedFromMobile = false;
var hasRedirectedFromLanguage = false;

// 第一个重定向条件：从移动版重定向到桌面版
var mobileRe = /^zh\.m\.wikipedia\.org$/;
if (mobileRe.test(url.hostname) && !hasRedirectedFromMobile) {
    url.hostname = 'zh.wikipedia.com';
    location.assign(url.href);
    hasRedirectedFromMobile = true;
}

// 第二个重定向条件：从特定语言版本重定向到默认版本，并添加/wiki/前缀
var languageRe = /^\/zh-[a-z]{2,4}\//;
if (languageRe.test(url.pathname) && !hasRedirectedFromLanguage) {
    url.pathname = '/wiki' + url.pathname.replace(languageRe, '/');
    location.assign(url.href);
    hasRedirectedFromLanguage = true;
}
