!function(){var t,e=document.querySelector("button[data-start]"),a=document.querySelector("button[data-stop]");a.disabled=!0,e.addEventListener("click",(function(){t=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),e.disabled=!0,a.disabled=!1})),a.addEventListener("click",(function(){clearInterval(t),a.disabled=!0,e.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.021ea4a6.js.map
