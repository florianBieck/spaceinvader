(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-778b0ebc"],{"132d":function(t,e,i){"use strict";i("4804");var s,r=i("a9ad"),o=i("af2b"),a=i("7560"),n=i("80d2"),l=i("2b0e"),c=i("58df");function h(t){return["fas","far","fal","fab"].some(e=>t.includes(e))}function d(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(s||(s={}));const u=Object(c["a"])(r["a"],o["a"],a["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium(){return!1}},methods:{getIcon(){let t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(n["y"])(this,t)},getSize(){const t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(n["w"])(t).find(e=>t[e]);return e&&s[e]||Object(n["f"])(this.size)},getDefaultData(){const t=Boolean(this.$listeners.click||this.$listeners["!click"]),e={staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":t,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:{"aria-hidden":!t,role:t?"button":null,...this.$attrs},on:this.$listeners};return e},applyColors(t){t.class={...t.class,...this.themeClasses},this.setTextColor(this.color,t)},renderFontIcon(t,e){const i=[],s=this.getDefaultData();let r="material-icons";const o=t.indexOf("-"),a=o<=-1;a?i.push(t):(r=t.slice(0,o),h(r)&&(r="")),s.class[r]=!0,s.class[t]=!a;const n=this.getSize();return n&&(s.style={fontSize:n}),this.applyColors(s),e(this.tag,s,i)},renderSvgIcon(t,e){const i=this.getDefaultData();i.class["v-icon--svg"]=!0,i.attrs={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:"24",width:"24",role:"img","aria-hidden":!this.$attrs["aria-label"],"aria-label":this.$attrs["aria-label"]};const s=this.getSize();return s&&(i.style={fontSize:s,height:s,width:s},i.attrs.height=s,i.attrs.width=s),this.applyColors(i),e("svg",i,[e("path",{attrs:{d:t}})])},renderSvgIconComponent(t,e){const i=this.getDefaultData();i.class["v-icon--is-component"]=!0;const s=this.getSize();s&&(i.style={fontSize:s,height:s}),this.applyColors(i);const r=t.component;return i.props=t.props,i.nativeOn=i.on,e(r,i)}},render(t){const e=this.getIcon();return"string"===typeof e?d(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e["a"]=l["a"].extend({name:"v-icon",$_wrapperFor:u,functional:!0,render(t,{data:e,children:i}){let s="";return e.domProps&&(s=e.domProps.textContent||e.domProps.innerHTML||s,delete e.domProps.textContent,delete e.domProps.innerHTML),t(u,e,s?[s]:i)}})},"1abc":function(t,e,i){"use strict";var s=i("a797");e["a"]=s["a"]},"2fa4":function(t,e,i){"use strict";i("20f6");var s=i("80d2");e["a"]=Object(s["h"])("spacer","div","v-spacer")},"36a7":function(t,e,i){},"3c93":function(t,e,i){},4804:function(t,e,i){},"5e23":function(t,e,i){},7958:function(t,e,i){},"7c64":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Toolbar"),t._t("default")],2)},r=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-navigation-drawer",{attrs:{absolute:"",temporary:"",dark:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-list",{staticClass:"pa-0"},[i("v-list-item",[i("v-list-item-avatar",{attrs:{color:"primary"}},[""!==t.profilePic?i("img",{attrs:{src:t.profilePic}}):t._e(),0===t.profilePic.length?i("v-icon",{attrs:{color:"white"}},[t._v("person")]):t._e()],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"white--text"},[t._v(t._s(t.displayName))])],1)],1)],1),i("v-divider"),i("v-list",{staticClass:"pt-0",attrs:{dense:""}},t._l(t.items,function(e){return i("v-list-item",{key:e.title,attrs:{to:e.href}},[i("v-list-item-action",[i("v-icon",{attrs:{color:"white"}},[t._v(t._s(e.icon))])],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"white--text"},[t._v(t._s(e.title))])],1)],1)}),1),i("v-divider"),i("v-list",{staticClass:"pt-0",attrs:{dense:""}},[i("v-list-item",{attrs:{to:"/profile"}},[i("v-list-item-action",[i("v-icon",{attrs:{color:"white"}},[t._v("person")])],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"white--text"},[t._v("Mein Profil")])],1)],1),i("v-list-item",{attrs:{to:"/logout"}},[i("v-list-item-action",[i("v-icon",{attrs:{color:"white"}},[t._v("input")])],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"white--text"},[t._v("Logout")])],1)],1)],1)],1),i("v-app-bar",{attrs:{dark:"",color:"black"}},[i("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),i("v-toolbar-title",{staticClass:"white--text"},[t._v("Space Invaders")]),i("v-spacer"),i("v-toolbar-title",{staticClass:"white--text"},[t._v(t._s(t.highscore))]),i("v-spacer"),i("v-btn",{staticClass:"red",attrs:{text:"",to:"/logout"}},[t._v("Abmelden")])],1)],1)},a=[],n=i("8aa5"),l=i.n(n),c={name:"Toolbar",data(){return{items:[{title:"Dashboard",icon:"dashboard",href:"/"},{title:"Highscore",icon:"format_list_numbered",href:"/highscore"},{title:"Spielen",icon:"videogame_asset",href:"/game"}],drawer:!1,displayName:"",profilePic:"",highscore:""}},mounted(){l.a.auth().currentUser&&(l.a.firestore().collection("users").doc(l.a.auth().currentUser.uid).onSnapshot(t=>{this.displayName=t.data().displayname}),l.a.firestore().collection("scores").where("iduser","==",l.a.auth().currentUser.uid).orderBy("score","desc").limit(1).onSnapshot(t=>{0===t.size?this.highscore="":this.highscore="Mein Highscore: "+t.docs[0].data().score}),l.a.storage().ref().child("images/users/"+l.a.auth().currentUser.uid).getDownloadURL().then(t=>{this.profilePic=t}).catch(()=>{}))}},h=c,d=i("2877"),u=i("6544"),p=i.n(u),v=(i("8b0d"),i("5e23"),i("8dd9")),m=i("adda"),g=i("80d2"),f=i("d9bd"),b=v["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"},tile:{type:Boolean,default:!0}},data:()=>({isExtended:!1}),computed:{computedHeight(){const t=this.computedContentHeight;if(!this.isExtended)return t;const e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes(){return{...v["a"].options.computed.classes.call(this),"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent}},isCollapsed(){return this.collapse},isProminent(){return this.prominent},styles(){return{...this.measurableStyles,height:Object(g["f"])(this.computedHeight)}}},created(){const t=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(f["a"])(t,e,this)})},methods:{genBackground(){const t={height:Object(g["f"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(m["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(g["f"])(this.computedContentHeight)}},Object(g["q"])(this))},genExtension(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(g["f"])(this.extensionHeight)}},Object(g["q"])(this,"extension"))}},render(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;const e=[this.genContent()],i=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,i,e)}});function S(t,e){const i=e.value,s=e.options||{passive:!0},r=e.arg?document.querySelector(e.arg):window;r&&(r.addEventListener("scroll",i,s),t._onScroll={callback:i,options:s,target:r})}function y(t){if(!t._onScroll)return;const{callback:e,options:i,target:s}=t._onScroll;s.removeEventListener("scroll",e,i),delete t._onScroll}const w={inserted:S,unbind:y};var O=w,_=i("3a66"),x=i("2b0e"),$=x["a"].extend({name:"scrollable",directives:{Scroll:w},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:()=>({currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}),computed:{canScroll(){return"undefined"!==typeof window},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp(){this.savedScroll=this.savedScroll||this.currentScroll},isActive(){this.savedScroll=0}},mounted(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(f["c"])(`Unable to locate element with identifier ${this.scrollTarget}`,this))},methods:{onScroll(){this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick(()=>{Math.abs(this.currentScroll-this.savedScroll)>this.computedScrollThreshold&&this.thresholdMet()}))},thresholdMet(){}}}),C=i("d10f"),T=i("f2e7"),A=i("58df");const B=Object(A["a"])(b,$,C["a"],T["a"],Object(_["a"])("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));var E=B.extend({name:"v-app-bar",directives:{Scroll:O},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data(){return{isActive:this.value}},computed:{applicationProperty(){return this.bottom?"bottom":"top"},canScroll(){return $.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes(){return{...b.options.computed.classes.call(this),"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll}},computedContentHeight(){if(!this.shrinkOnScroll)return b.options.computed.computedContentHeight.call(this);const t=this.computedOriginalHeight,e=this.dense?48:56,i=t,s=i-e,r=s/this.computedScrollThreshold,o=this.currentScroll*r;return Math.max(e,i-o)},computedFontSize(){if(!this.isProminent)return;const t=this.dense?96:128,e=t-this.computedContentHeight,i=.00347;return Number((1.5-e*i).toFixed(2))},computedLeft(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop(){return this.app?this.$vuetify.application.bar:0},computedOpacity(){if(!this.fadeImgOnScroll)return;const t=Math.max((this.computedScrollThreshold-this.currentScroll)/this.computedScrollThreshold,0);return Number(parseFloat(t).toFixed(2))},computedOriginalHeight(){let t=b.options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;const t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed(){return this.collapseOnScroll?this.currentScroll>0:b.options.computed.isCollapsed.call(this)},isProminent(){return b.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles(){return{...b.options.computed.styles.call(this),fontSize:Object(g["f"])(this.computedFontSize,"rem"),marginTop:Object(g["f"])(this.computedMarginTop),transform:`translateY(${Object(g["f"])(this.computedTransform)})`,left:Object(g["f"])(this.computedLeft),right:Object(g["f"])(this.computedRight)}}},watch:{canScroll:"onScroll",computedTransform(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll(t){this.isActive=!t}},created(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground(){const t=b.options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:this.currentThreshold<this.computedScrollThreshold||(this.hideOnScroll&&(this.isActive=this.isScrollingUp),this.savedScroll=this.currentScroll)}},render(t){const e=b.options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}}),k=i("9d26"),L=i("8336"),j=x["a"].extend({name:"v-app-bar-nav-icon",functional:!0,render(t,{slots:e,listeners:i,props:s,data:r}){const o=Object.assign(r,{staticClass:`v-app-bar__nav-icon ${r.staticClass||""}`.trim(),props:{...s,icon:!0},on:i}),a=e().default;return t(L["a"],o,a||[t(k["a"],"$vuetify.icons.menu")])}}),z=i("ce7e"),H=i("132d"),I=i("8860"),M=i("da13"),N=i("1800"),P=i("8270"),R=i("5d23"),D=(i("7958"),i("a9ad")),X=i("b848"),Y=i("1abc"),V=x["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean},data(){return{overlay:null}},watch:{hideOverlay(t){t?this.removeOverlay():this.genOverlay()}},beforeDestroy(){this.removeOverlay()},methods:{createOverlay(){const t=new Y["a"]({propsData:{absolute:this.absolute,value:!1}});t.$mount();const e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay(){if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),requestAnimationFrame(()=>{this.overlay&&(void 0!==this.activeZIndex?this.overlay.zIndex=String(this.activeZIndex-1):this.$el&&(this.overlay.zIndex=Object(g["s"])(this.$el)),this.overlay.value=!0)}),!0},removeOverlay(t=!0){this.overlay&&(Object(g["a"])(this.overlay.$el,"transitionend",()=>{this.overlay&&this.overlay.$el&&this.overlay.$el.parentNode&&!this.overlay.value&&(this.overlay.$el.parentNode.removeChild(this.overlay.$el),this.overlay.$destroy(),this.overlay=null)}),this.overlay.value=!1),t&&this.showScroll()},scrollListener(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;const e=[g["v"].up,g["v"].pageup],i=[g["v"].down,g["v"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!i.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;const e=window.getComputedStyle(t);return["auto","scroll"].includes(e.overflowY)&&t.scrollHeight>t.clientHeight},shouldScroll(t,e){return 0===t.scrollTop&&e<0||t.scrollTop+t.clientHeight===t.scrollHeight&&e>0},isInside(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath(t){const e=t.path||this.composedPath(t),i=t.deltaY;if("keydown"===t.type&&e[0]===document.body){const t=this.$refs.dialog,e=window.getSelection().anchorNode;return!(t&&this.hasScrollbar(t)&&this.isInside(e,t))||this.shouldScroll(t,i)}for(let s=0;s<e.length;s++){const t=e[s];if(t===document)return!0;if(t===document.documentElement)return!0;if(t===this.$refs.content)return!0;if(this.hasScrollbar(t))return this.shouldScroll(t,i)}return!0},composedPath(t){if(t.composedPath)return t.composedPath();const e=[];let i=t.target;while(i){if(e.push(i),"HTML"===i.tagName)return e.push(document),e.push(window),e;i=i.parentElement}return e},hideScroll(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(g["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}}),W=i("7560"),U=i("a293"),F=i("dc22");const q=t=>{const{touchstartX:e,touchendX:i,touchstartY:s,touchendY:r}=t,o=.5,a=16;t.offsetX=i-e,t.offsetY=r-s,Math.abs(t.offsetY)<o*Math.abs(t.offsetX)&&(t.left&&i<e-a&&t.left(t),t.right&&i>e+a&&t.right(t)),Math.abs(t.offsetX)<o*Math.abs(t.offsetY)&&(t.up&&r<s-a&&t.up(t),t.down&&r>s+a&&t.down(t))};function Z(t,e){const i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function J(t,e){const i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),q(e)}function G(t,e){const i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function K(t){const e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:t=>Z(t,e),touchend:t=>J(t,e),touchmove:t=>G(t,e)}}function Q(t,e,i){const s=e.value,r=s.parent?t.parentElement:t,o=s.options||{passive:!0};if(!r)return;const a=K(e.value);r._touchHandlers=Object(r._touchHandlers),r._touchHandlers[i.context._uid]=a,Object(g["w"])(a).forEach(t=>{r.addEventListener(t,a[t],o)})}function tt(t,e,i){const s=e.value.parent?t.parentElement:t;if(!s||!s._touchHandlers)return;const r=s._touchHandlers[i.context._uid];Object(g["w"])(r).forEach(t=>{s.removeEventListener(t,r[t])}),delete s._touchHandlers[i.context._uid]}const et={inserted:Q,unbind:tt};var it=et;const st=Object(A["a"])(Object(_["a"])("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),D["a"],X["a"],V,C["a"],W["a"]);var rt=st.extend({name:"v-navigation-drawer",provide(){return{isInNav:"nav"===this.tag}},directives:{ClickOutside:U["a"],Resize:F["a"],Touch:it},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:80},mobileBreakPoint:{type:[Number,String],default:1264},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:{required:!1}},data:()=>({isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}),computed:{applicationProperty(){return this.right?"right":"left"},classes(){return{"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.miniVariant||this.expandOnHover&&!this.isMouseover,"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary,...this.themeClasses}},computedMaxHeight(){if(!this.hasApp)return null;const t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},computedTop(){if(!this.hasApp)return 0;let t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},computedTransform(){return this.isActive?0:this.isBottom?100:this.right?100:-100},computedWidth(){return this.expandOnHover&&!this.isMouseover||this.miniVariant?this.miniVariantWidth:this.width},hasApp(){return this.app&&!this.isMobile&&!this.temporary},isBottom(){return this.bottom&&this.isMobile},isMobile(){return!this.stateless&&!this.permanent&&this.$vuetify.breakpoint.width<parseInt(this.mobileBreakPoint,10)},reactsToClick(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay(){return this.isActive&&(this.isMobile||this.temporary)},styles(){const t=this.isBottom?"translateY":"translateX",e={height:Object(g["f"])(this.height),top:this.isBottom?"auto":Object(g["f"])(this.computedTop),maxHeight:null!=this.computedMaxHeight?`calc(100% - ${Object(g["f"])(this.computedMaxHeight)})`:void 0,transform:`${t}(${Object(g["f"])(this.computedTransform,"%")})`,width:Object(g["f"])(this.computedWidth)};return e}},watch:{$route:"onRouteChange",isActive(t){this.$emit("input",t)},isMobile(t,e){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=e&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!t)},permanent(t){t&&(this.isActive=!0)},showOverlay(t){t?this.genOverlay():this.removeOverlay()},value(t){this.permanent||(null!=t?t!==this.isActive&&(this.isActive=t):this.init())}},beforeMount(){this.init()},methods:{calculateTouchArea(){const t=this.$el.parentNode;if(!t)return;const e=t.getBoundingClientRect();this.touchArea={left:e.left+50,right:e.right-50}},closeConditional(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend(){return this.genPosition("append")},genBackground(){const t={height:"100%",width:"100%",src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img(t):this.$createElement(m["a"],{props:t});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[e])},genDirectives(){const t=[{name:"click-outside",value:()=>this.isActive=!1,args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||t.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),t},genListeners(){const t={transitionend:t=>{if(t.target!==t.currentTarget)return;this.$emit("transitionend",t);const e=document.createEvent("UIEvents");e.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(e)}};return this.miniVariant&&(t.click=()=>this.$emit("update:mini-variant",!1)),this.expandOnHover&&(t.mouseenter=()=>this.isMouseover=!0,t.mouseleave=()=>this.isMouseover=!1),t},genPosition(t){const e=Object(g["q"])(this,t);return e?this.$createElement("div",{staticClass:`v-navigation-drawer__${t}`},e):e},genPrepend(){return this.genPosition("prepend")},genContent(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;const t=Number(this.computedWidth);return isNaN(t)?this.$el.clientWidth:t}},render(t){const e=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||Object(g["q"])(this,"img"))&&e.unshift(this.genBackground()),t(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),e)}}),ot=i("2fa4");const at=Object(g["h"])("v-toolbar__title");Object(g["h"])("v-toolbar__items");var nt=Object(d["a"])(h,o,a,!1,null,"796c3114",null),lt=nt.exports;p()(nt,{VAppBar:E,VAppBarNavIcon:j,VBtn:L["a"],VDivider:z["a"],VIcon:H["a"],VList:I["a"],VListItem:M["a"],VListItemAction:N["a"],VListItemAvatar:P["a"],VListItemContent:R["a"],VListItemTitle:R["b"],VNavigationDrawer:rt,VSpacer:ot["a"],VToolbarTitle:at});var ct={name:"LayoutDefault",components:{Toolbar:lt}},ht=ct,dt=Object(d["a"])(ht,s,r,!1,null,"f7be7dfa",null);e["default"]=dt.exports},"8b0d":function(t,e,i){},"8efc":function(t,e,i){},"9d26":function(t,e,i){"use strict";var s=i("132d");e["a"]=s["a"]},a797:function(t,e,i){"use strict";i("3c93");var s=i("a9ad"),r=i("7560"),o=i("f2e7"),a=i("58df");e["a"]=Object(a["a"])(s["a"],r["a"],o["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(t){const e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},e)}})},adda:function(t,e,i){"use strict";i("8efc"),i("36a7");var s=i("24b2"),r=i("58df"),o=Object(r["a"])(s["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),a=o,n=i("d9bd");e["a"]=a.extend({name:"v-img",props:{alt:String,contain:Boolean,gradient:String,lazySrc:String,position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return"string"===typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}},__cachedImage(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src(){this.isLoading?this.loadImage():this.init()},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError(){Object(n["b"])("Image load failed\n\n"+`src: ${this.normalisedSrc.src}`,this),this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch(t=>{Object(n["c"])("Failed to decode image, trying to render anyway\n\n"+`src: ${this.normalisedSrc.src}`+(t.message?`\nOriginal error: ${t.message}`:""),this)}).then(this.onLoad):this.onLoad()},t.onerror=this.onError,t.src=this.normalisedSrc.src,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const i=()=>{const{naturalHeight:s,naturalWidth:r}=t;s||r?(this.naturalWidth=r,this.calculatedAspectRatio=r/s):null!=e&&setTimeout(i,e)};i()},genContent(){const t=a.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:`${this.naturalWidth}px`}}),t},__genPlaceholder(){if(this.$slots.placeholder){const t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{attrs:{name:this.transition}},t):t[0]}}},render(t){const e=a.options.render.call(this,t);return e.data.staticClass+=" v-image",e.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,e.data,e.children)}})}}]);
//# sourceMappingURL=chunk-778b0ebc.cefa29e2.js.map