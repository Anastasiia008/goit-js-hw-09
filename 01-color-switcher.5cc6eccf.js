const t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),body:document.querySelector("body")};let e=null,n=!1;t.startBtn.addEventListener("click",(function(){n||(n=!0,e=setInterval((()=>{const e=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;t.body.style.backgroundColor=e}),1e3))})),t.stopBtn.addEventListener("click",(function(){clearInterval(e),n=!1}));
//# sourceMappingURL=01-color-switcher.5cc6eccf.js.map
