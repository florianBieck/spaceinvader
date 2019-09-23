(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56843396"],{"0798":function(t,e,s){"use strict";s("0c18");var i=s("10d2"),r=s("afdd"),a=s("9d26"),n=s("f2e7"),o=s("7560"),l=s("2b0e"),c=l["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),d=s("58df"),h=s("d9bd");e["a"]=Object(d["a"])(i["a"],n["a"],c).extend({name:"v-alert",props:{border:{type:String,validator(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,icon:{default:"",type:[Boolean,String],validator(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder(){if(!this.border)return null;let t={staticClass:"v-alert__border",class:{[`v-alert__border--${this.border}`]:!0}};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible(){if(!this.dismissible)return null;const t=this.iconColor;return this.$createElement(r["a"],{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:()=>this.isActive=!1}},[this.$createElement(a["a"],{props:{color:t}},"$vuetify.icons.cancel")])},__cachedIcon(){return this.computedIcon?this.$createElement(a["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes(){const t={...i["a"].options.computed.classes.call(this),"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text};return this.border&&(t[`v-alert--border-${this.border}`]=!0),t},computedColor(){return this.color||this.type},computedIcon(){if(!1===this.icon)return!1;if("string"===typeof this.icon&&this.icon)return this.icon;switch(this.type){case"info":return"$vuetify.icons.info";case"error":return"$vuetify.icons.error";case"success":return"$vuetify.icons.success";case"warning":return"$vuetify.icons.warning";default:return!1}},hasColoredIcon(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText(){return this.text||this.outlined},iconColor(){return this.hasColoredIcon?this.computedColor:void 0},isDark(){return!(!this.type||this.coloredBorder||this.outlined)||o["a"].options.computed.isDark.call(this)}},created(){this.$attrs.hasOwnProperty("outline")&&Object(h["a"])("outline","outlined",this)},methods:{genWrapper(){const t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert(){let t={staticClass:"v-alert",attrs:{role:"alert"},class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){const e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle(){this.isActive=!this.isActive}},render(t){const e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"0c18":function(t,e,s){},"0e8f":function(t,e,s){"use strict";s("20f6");var i=s("e8f2");e["a"]=Object(i["a"])("flex")},"0fd9":function(t,e,s){"use strict";s("4b85");var i=s("2b0e"),r=s("d9f7"),a=s("80d2");const n=["sm","md","lg","xl"],o=["start","end","center"];function l(t,e){return n.reduce((s,i)=>{return s[t+Object(a["B"])(i)]=e(),s},{})}const c=t=>[...o,"baseline","stretch"].includes(t),d=l("align",()=>({type:String,default:null,validator:c})),h=t=>[...o,"space-between","space-around"].includes(t),u=l("justify",()=>({type:String,default:null,validator:h})),p=t=>[...o,"space-between","space-around","stretch"].includes(t),f=l("alignContent",()=>({type:String,default:null,validator:p})),g={align:Object.keys(d),justify:Object.keys(u),alignContent:Object.keys(f)},v={align:"align",justify:"justify",alignContent:"align-content"};function m(t,e,s){let i=v[t];if(null!=s){if(e){const s=e.replace(t,"");i+=`-${s}`}return i+=`-${s}`,i.toLowerCase()}}const y=new Map;e["a"]=i["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:h},...u,alignContent:{type:String,default:null,validator:p},...f},render(t,{props:e,data:s,children:i}){let a="";for(const r in e)a+=String(e[r]);let n=y.get(a);if(!n){let t;for(t in n=[],g)g[t].forEach(s=>{const i=e[s],r=m(t,s,i);r&&n.push(r)});n.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),y.set(a,n)}return t(e.tag,Object(r["a"])(s,{staticClass:"row",class:n}),i)}})},"2fa4":function(t,e,s){"use strict";s("20f6");var i=s("80d2");e["a"]=Object(i["h"])("spacer","div","v-spacer")},6184:function(t,e,s){t.exports=s.p+"img/icons8-rocket.37c6bffa.svg"},"73cf":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"px-0 py-0 black",attrs:{fluid:"","fill-height":"","align-center":"","justify-center":""}},[i("v-parallax",{staticStyle:{"min-width":"100%","max-width":"100%","min-height":"100%","max-height":"100%"},attrs:{dark:"",src:s("6184")}},[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-container",{staticClass:"m-3 transparent"},[i("v-layout",{attrs:{"justify-center":""}},[i("v-flex",{attrs:{md8:"",sm8:"",xs12:""}},[i("v-card",[i("v-card-title",{staticClass:"black white--text"},[i("h4",{staticClass:"headline"},[t._v("Registrierung")])]),i("v-alert",{directives:[{name:"show",rawName:"v-show",value:t.error,expression:"error"}],attrs:{value:t.error,type:"error"}},[t._v(t._s(t.error))]),i("v-container",[i("v-text-field",{attrs:{label:"E-Mail Adresse",row:"",type:"email"},nativeOn:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.register(e)}},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),i("v-text-field",{attrs:{label:"Passwort",row:"",type:"password"},nativeOn:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.register(e)}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),i("v-text-field",{attrs:{label:"Passwort wiederholen",row:"",type:"password"},nativeOn:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.register(e)}},model:{value:t.passwordCheck,callback:function(e){t.passwordCheck=e},expression:"passwordCheck"}}),i("v-container",{staticClass:"text-right pt-1 pb-0"},[i("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/login"}},[t._v("Bereits einen Account? Jetzt anmelden!")])],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{staticClass:"black white--text",attrs:{block:"",loading:t.loading,disabled:t.loading},on:{click:t.register}},[t._v("Registrieren")]),i("v-spacer")],1)],1)],1)],1)],1)],1)],1)],1)},r=[],a=s("8aa5"),n=s.n(a),o={name:"Register",data:()=>({email:"",password:"",passwordCheck:"",error:"",loading:!1,remember:!1}),computed:{getPersistence(){return this.remember?n.a.auth.Auth.Persistence.LOCAL:n.a.auth.Auth.Persistence.SESSION}},methods:{register(){this.password===this.passwordCheck&&(this.loading=!0,n.a.auth().createUserWithEmailAndPassword(this.email,this.password).then(t=>{t.user.emailVerified||t.user.sendEmailVerification(),this.$router.push("/registerverify")}).catch(t=>{"auth/email-already-in-use"===t.code&&(this.error="Es ist bereits ein Konto mit dieser E-Mail Adresse vorhanden.")}).finally(()=>{this.loading=!1}))}}},l=o,c=s("2877"),d=s("6544"),h=s.n(d),u=s("0798"),p=s("8336"),f=s("b0af"),g=s("99d9"),v=s("a523"),m=s("0e8f"),y=s("a722"),w=s("8b9c"),b=s("0fd9"),x=s("2fa4"),C=s("8654"),k=Object(c["a"])(l,i,r,!1,null,null,null);e["default"]=k.exports;h()(k,{VAlert:u["a"],VBtn:p["a"],VCard:f["a"],VCardActions:g["a"],VCardTitle:g["b"],VContainer:v["a"],VFlex:m["a"],VLayout:y["a"],VParallax:w["a"],VRow:b["a"],VSpacer:x["a"],VTextField:C["a"]})},"8b9c":function(t,e,s){"use strict";s("94aa");var i=s("2b0e"),r=i["a"].extend({name:"translatable",props:{height:Number},data:()=>({elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}),computed:{imgHeight(){return this.objHeight()}},beforeDestroy(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions(){const t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight(){throw new Error("Not implemented !")},translate(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}}),a=s("58df");const n=Object(a["a"])(r);e["a"]=n.extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String},data:()=>({isBooted:!1}),computed:{styles(){return{display:"block",opacity:this.isBooted?1:0,transform:`translate(-50%, ${this.parallax}px)`}}},mounted(){this.init()},methods:{init(){const t=this.$refs.img;t&&(t.complete?(this.translate(),this.listeners()):t.addEventListener("load",()=>{this.translate(),this.listeners()},!1),this.isBooted=!0)},objHeight(){return this.$refs.img.naturalHeight}},render(t){const e={staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,alt:this.alt},ref:"img"},s=t("div",{staticClass:"v-parallax__image-container"},[t("img",e)]),i=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:`${this.height}px`},on:this.$listeners},[s,i])}})},"94aa":function(t,e,s){},a722:function(t,e,s){"use strict";s("20f6");var i=s("e8f2");e["a"]=Object(i["a"])("layout")},afdd:function(t,e,s){"use strict";var i=s("8336");e["a"]=i["a"]}}]);
//# sourceMappingURL=chunk-56843396.b3259f11.js.map