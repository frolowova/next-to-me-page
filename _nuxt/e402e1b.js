(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{409:function(t,e,n){var content=n(472);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("6310bd28",content,!0,{sourceMap:!1})},410:function(t,e,n){var content=n(474);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("6e8d36d5",content,!0,{sourceMap:!1})},414:function(t,e,n){var content=n(481);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("7935b496",content,!0,{sourceMap:!1})},450:function(t,e,n){"use strict";n.r(e);var r={props:{title:String,text:String,src:String}},l=(n(471),n(45)),c=n(50),o=n.n(c),d=n(367),f=n(582),h=n(366),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-carousel-item",[n("v-container",{staticClass:"slider-item d-flex flex-column align-center justify-center"},[n("img",{attrs:{src:t.src,alt:"slider-icon"}}),t._v(" "),n("v-card-title",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),n("v-card-text",{staticClass:"text-center desc"},[n("div",[t._v("\n        "+t._s(t.text)+"\n      ")])])],1)],1)}),[],!1,null,"7f5b4ea5",null),m=component.exports;o()(component,{VCardText:d.b,VCardTitle:d.c,VCarouselItem:f.a,VContainer:h.a});var v={data:function(){return{currentSlide:0}},props:{slides:Array},components:{sliderItem:m},methods:{prev:function(){if(0==this.currentSlide)return this.$router.push("/permissions"),void localStorage.setItem("firstSeenSlider",this.$store.state.auth.username);this.currentSlide--},next:function(){if(this.currentSlide==this.slides.length-1)return this.$router.push("/permissions"),void localStorage.setItem("firstSeenSlider",this.$store.state.auth.username);this.currentSlide++}}},x=(n(473),n(357)),S=n(559),_=Object(l.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slider-container"},[n("v-carousel",{staticClass:"carousel",attrs:{continuous:!1,"show-arrows":!1,"hide-delimiter-background":""},model:{value:t.currentSlide,callback:function(e){t.currentSlide=e},expression:"currentSlide"}},t._l(t.slides,(function(t,i){return n("sliderItem",{key:i,attrs:{title:t.title,text:t.text,src:t.image}})})),1),t._v(" "),n("v-card-actions",{staticClass:"d-flex justify-space-between"},[n("v-btn",{attrs:{text:""},on:{click:t.prev}},[t._v("\n      "+t._s(0==t.currentSlide?"Пропустить":"Назад")+"\n    ")]),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:t.next}},[t._v("\n      Далее\n    ")])],1)],1)}),[],!1,null,"bb3e33aa",null);e.default=_.exports;o()(_,{VBtn:x.a,VCardActions:d.a,VCarousel:S.a})},471:function(t,e,n){"use strict";var r=n(409);n.n(r).a},472:function(t,e,n){(e=n(24)(!1)).push([t.i,".slider-item[data-v-7f5b4ea5]{height:100%}.slider-item img[data-v-7f5b4ea5]{width:60%;height:auto}@media only screen and (max-height:600px) and (orientation:landscape){.slider-item img[data-v-7f5b4ea5]{width:20%}.slider-item[data-v-7f5b4ea5]{height:auto}}",""]),t.exports=e},473:function(t,e,n){"use strict";var r=n(410);n.n(r).a},474:function(t,e,n){(e=n(24)(!1)).push([t.i,".slider-container[data-v-bb3e33aa]{max-width:600px}@media only screen and (max-height:600px) and (orientation:landscape){.carousel[data-v-bb3e33aa]{max-height:250px}}",""]),t.exports=e},477:function(t,e,n){t.exports=n.p+"img/flame-success.86be988.svg"},478:function(t,e,n){t.exports=n.p+"img/flame-waiting.916c5a4.svg"},479:function(t,e,n){t.exports=n.p+"img/flame-no-messages.c00e701.svg"},480:function(t,e,n){"use strict";var r=n(414);n.n(r).a},481:function(t,e,n){(e=n(24)(!1)).push([t.i,".about-page[data-v-77165dc9]{position:fixed;top:0;height:100%}",""]),t.exports=e},572:function(t,e,n){"use strict";n.r(e);var r=n(450),l=n(477),c=n.n(l),o=n(478),d=n.n(o),f=n(479),h=n.n(f),m={middleware:["auth","about"],layout:"auth",data:function(){return{slides:[{image:c.a,title:"Будь в топе!",text:"Ставь теги в интересных местах, возможно, именно твой тег попадет в ТОП"},{image:d.a,title:"Успевай удивлять",text:"Тег существует 24 часа. Просматривай и комментриуй, продлевая жизнь тега"},{image:h.a,title:"Будь в курсе",text:"Включай push-уведомления и отслеживай коментарии к своему тегу"}]}},components:{slider:r.default}},v=(n(480),n(45)),component=Object(v.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"about-page d-flex align-center"},[e("slider",{staticClass:"slider",attrs:{slides:this.slides}})],1)}),[],!1,null,"77165dc9",null);e.default=component.exports;installComponents(component,{Slider:n(450).default})}}]);