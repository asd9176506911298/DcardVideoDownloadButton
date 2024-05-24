// ==UserScript==
// @name         Dcard下載文章影片
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  文章標題上方會有下載影片按鈕，點一下就可以進去下載影片，如果沒有出現下載影片按鈕請按F5重新整理。
// @author       Yuki.kaco
// @match        *://*.dcard.tw/*
// @icon         https://www.dcard.tw/_next/static/media/93a7e0749e4edfb00cf4ad4a6c1eb6c6-512.png
// @grant        none
// @license MIT
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener('load', setTimeout(setup, 2000));

    function acessLink(dataurl) {
        const a = document.createElement("a");
        a.href = dataurl;
        a.target = "_blank";
        a.click();
    }

    function setup(){
        if(document.head.querySelector("[property='og:image']").content.split('/')[3] != 'videos') return;
        let download =document.createElement("button");
        download.innerText="下載影片";
        download.style.background="#3397CF";
        download.style.color="#ffffff";
        download.onclick=function(){
            var url = document.head.querySelector("[property='og:image']").content.split('thumbnails');
            var videoLink = url[0].concat('orig')
            acessLink(videoLink)
        };

        let title=document.querySelector('.hayxipw');
        title.parentElement.insertBefore(download,title);
    }


})();