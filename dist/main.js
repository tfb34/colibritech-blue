!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){function n(){let e=document.getElementById("list").children;for(let t=0;t<e.length;t++)e[t].classList.toggle("fadeUp")}window.onbeforeunload=function(){window.scrollTo(0,0)};let o=Array.from(document.getElementsByClassName("animate"));function l(e){let t=window.screen.height,n=e.getBoundingClientRect().top;return n>0&&n<t-t/5}window.onscroll=function(e){o[0]&&l(o[0])&&(o[0].classList.toggle("doSomething"),o.shift())},window.toggleMenu=function(){let e=document.getElementById("menu-btn"),t=document.getElementById("mobile-menu");e.classList.toggle("change"),t.classList.toggle("show"),setTimeout(n,100)},window.toggle=function(){let e=document.getElementsByClassName("sub-links");for(let t=0;t<e.length;t++)e[t].classList.toggle("show")},window.fadeUp=n,window.isVisible=l}]);