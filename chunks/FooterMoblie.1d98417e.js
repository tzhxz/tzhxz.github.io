import{C as l}from"./permission.623ab746.js";(function(){let e=function(){window.dataLayer.push(arguments)},o=()=>{window.dataLayer=window.dataLayer||[],e("js",new Date),e("config","UA-221138216-2")},n=t=>(console.log("==debug==KyGtagReport==:",t),e("event",t.eventName,t.eventParams),!1);window.KyGtagReport=n.bind(this),o()})();(function(e,o,n,t,g){e[t]=e[t]||[],e[t].push({"gtm.start":new Date().getTime(),event:"gtm.js"});var s=o.getElementsByTagName(n)[0],a=o.createElement(n),r=t!="dataLayer"?"&l="+t:"";a.async=!0,a.src="https://www.googletagmanager.com/gtm.js?id="+g+r,s.parentNode.insertBefore(a,s)})(window,document,"script","dataLayer","GTM-NGP65KD");function c(){let e=750;var o=window.screen.width;return o>e&&(o=e),o<320&&(o=320),o*2/(e/100)}function d(){let e=c();console.log("==debug==initFontSize==layout:"+e),document.documentElement.style.fontSize=e+"px"}/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?(d(),window.addEventListener("resize",()=>{console.log("==debug====resize"),d()})):(console.log("==debug==goPC==layout:"),window.location.href=window.origin);console.log("==debug==gadsConfig==layout:");const i={google_ads_version:1,google_client_id:"7458405397190061",google_ad_channel:"1873857516",google_ad_frequency_hint:"15s"};(function(){const e=document.createElement("script");e.setAttribute("async",!0),e.setAttribute("data-ad-frequency-hint",i.google_ad_frequency_hint),e.setAttribute("data-ad-channel",i.google_ad_channel),e.setAttribute("crossorigin","anonymous"),e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-"+i.google_client_id,document.getElementsByTagName("head")[0].appendChild(e),window.adsbygoogle=window.adsbygoogle||[],localStorage.getItem("cookieconsent_status")=="1"&&(console.log("adsense PersonalizedAds requestNonPersonalizedAds = 0"),(window.adsbygoogle=window.adsbygoogle||[]).requestNonPersonalizedAds=0),e.onabort=e.onerror=e.ontimeout=e.onload=e.onreadystatechange=()=>{(!e.readyState||e.readyState==="loaded"||e.readyState==="complete")&&(e.onabort=e.onerror=e.ontimeout=e.onload=e.onreadystatechange=null,console.log("google ads loaded"))}})();console.log("==debug==permission==layout:");let u=class{constructor(){this.init()}init(){console.log("==debug==Footer==pwaInstall"),l.initPwaInstall({btnId:"pwaInstall",isMove:1,position:1})}};new u;
