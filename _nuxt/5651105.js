(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{432:function(t,e,n){var content=n(534);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("c7cf2910",content,!0,{sourceMap:!1})},433:function(t,e,n){var content=n(536);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("cce1d1dc",content,!0,{sourceMap:!1})},467:function(t,e,n){"use strict";n.r(e);var o={props:{show:Boolean},methods:{getGeoAccess:function(){navigator.geolocation.getCurrentPosition((function(){console.log("Success")}))}}},r=n(45),c=n(50),l=n.n(c),m=n(357),d=n(370),h=n(367),v=n(568),f=n(405),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-overlay",{attrs:{value:t.show}},[n("v-card",{staticClass:"mx-auto my-12",attrs:{"max-width":"270"}},[n("div",{staticClass:"d-flex justify-center pa-4 primary"},[n("svg",{attrs:{width:"48",height:"48",fill:"none"}},[n("path",{attrs:{d:"M24 4c-7.74 0-14 6.26-14 14 0 3.48 1 6.74 2.82 9.68 1.9 3.08 4.4 5.72 6.32 8.8.94 1.5 1.62 2.9 2.34 4.52.52 1.1.94 3 2.52 3s2-1.9 2.5-3c.74-1.62 1.4-3.02 2.34-4.52 1.92-3.06 4.42-5.7 6.32-8.8C37 24.74 38 21.48 38 18c0-7.74-6.26-14-14-14zm0 19.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z",fill:"#fff"}})])]),t._v(" "),n("v-card-text",[n("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[t._v("\n        Для использования NextToMe, разрешите доступ к вашему местоположению.\n        Вы готовы это сделать?\n      ")])],1),t._v(" "),n("v-card-actions",{staticClass:"justify-end"},[n("v-btn",{attrs:{text:""},on:{click:function(e){return t.$emit("show-propmt")}}},[t._v("\n        Не сейчас\n      ")]),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:t.getGeoAccess}},[t._v("\n        Ок\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:m.a,VCard:d.a,VCardActions:h.a,VCardText:h.b,VOverlay:v.a,VRow:f.a})},530:function(t,e,n){t.exports=n.p+"img/geo.ed387e7.svg"},533:function(t,e,n){"use strict";var o=n(432);n.n(o).a},534:function(t,e,n){(e=n(24)(!1)).push([t.i,".permission-item[data-v-860ea050]{height:100%}.permission-item img[data-v-860ea050]{width:60%;height:auto}@media only screen and (max-height:600px) and (orientation:landscape){.permission-item img[data-v-860ea050]{width:20%}.permission-item[data-v-860ea050]{height:auto}}.permission-container[data-v-860ea050]{max-width:600px}",""]),t.exports=e},535:function(t,e,n){"use strict";var o=n(433);n.n(o).a},536:function(t,e,n){(e=n(24)(!1)).push([t.i,".permisson-page[data-v-3c783a9a]{position:fixed;top:0;height:100%}",""]),t.exports=e},574:function(t,e,n){"use strict";n.r(e);var o=n(530),r=n.n(o),c={data:function(){return{icon:r.a,showPropmt:!1}},methods:{promptShow:function(){this.showPropmt=!this.showPropmt},onGeoAttempt:function(){var t=this;navigator.permissions.query({name:"geolocation"}).then((function(e){e.onchange=function(e){t.showPropmt=!1,"granted"==e.target.state&&t.$router.push("/home")},"prompt"==e.state?t.showPropmt=!0:t.$router.push("/instructions")}))}},components:{GeoPrompt:n(467).default}},l=(n(533),n(45)),m=n(50),d=n.n(m),h=n(357),v=n(367),f=n(366),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"permission-container"},[n("v-container",{staticClass:"permission-item d-flex flex-column align-center justify-center"},[n("img",{attrs:{src:t.icon,alt:"slider-icon"}}),t._v(" "),n("v-card-text",{staticClass:"text-center desc"},[n("div",[t._v("\n        Next to me не может работать без геолокации. Включив геолокацию, вы\n        сможете просматривать чужие теги поблизости и публиковать свои\n      ")])]),t._v(" "),n("v-btn",{staticClass:"rounded-lg",attrs:{type:"submit",color:"primary","x-large":"",block:""},on:{click:t.onGeoAttempt}},[t._v("\n      Включить геолокацию\n    ")])],1),t._v(" "),n("geo-prompt",{attrs:{show:t.showPropmt},on:{"show-propmt":t.promptShow}})],1)}),[],!1,null,"860ea050",null),x=component.exports;d()(component,{GeoPrompt:n(467).default}),d()(component,{VBtn:h.a,VCardText:v.b,VContainer:f.a});var w={middleware:["auth","geoNotGranted"],layout:"auth",components:{geoAttemptForm:x}},_=(n(535),Object(l.a)(w,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"permisson-page d-flex align-center"},[e("geoAttemptForm")],1)}),[],!1,null,"3c783a9a",null));e.default=_.exports}}]);