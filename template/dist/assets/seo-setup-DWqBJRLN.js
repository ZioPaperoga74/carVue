import{c as u,o as c,b as i,r as _,dM as H,aQ as A,J as w,F as $,e as D,dw as S,dN as P,dL as R,t as G,M,dO as U,aR as W,n as C,f as J,dP as Q,_ as X,a as k,d as O,G as Y,I as E}from"./index-LMFVUyQs.js";var Z=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ee(e,t,n){return n={path:t,exports:{},require:function(l,s){return te(l,s??n.path)}},e(n,n.exports),n.exports}function te(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var ne=ee(function(e,t){(function(n,l){e.exports=l()})(Z,function(){var n="__v-click-outside",l=typeof window<"u",s=typeof navigator<"u",o=l&&("ontouchstart"in window||s&&navigator.msMaxTouchPoints>0)?["touchstart"]:["click"],x=function(a){var p=a.event,f=a.handler;(0,a.middleware)(p)&&f(p)},b=function(a,p){var f=function(r){var v=typeof r=="function";if(!v&&typeof r!="object")throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:v?r:r.handler,middleware:r.middleware||function(h){return h},events:r.events||o,isActive:r.isActive!==!1,detectIframe:r.detectIframe!==!1,capture:!!r.capture}}(p.value),I=f.handler,j=f.middleware,q=f.detectIframe,N=f.capture;if(f.isActive){if(a[n]=f.events.map(function(r){return{event:r,srcTarget:document.documentElement,handler:function(v){return function(h){var y=h.el,g=h.event,B=h.handler,T=h.middleware,V=g.path||g.composedPath&&g.composedPath();(V?V.indexOf(y)<0:!y.contains(g.target))&&x({event:g,handler:B,middleware:T})}({el:a,event:v,handler:I,middleware:j})},capture:N}}),q){var z={event:"blur",srcTarget:window,handler:function(r){return function(v){var h=v.el,y=v.event,g=v.handler,B=v.middleware;setTimeout(function(){var T=document.activeElement;T&&T.tagName==="IFRAME"&&!h.contains(T)&&x({event:y,handler:g,middleware:B})},0)}({el:a,event:r,handler:I,middleware:j})},capture:N};a[n]=[].concat(a[n],[z])}a[n].forEach(function(r){var v=r.event,h=r.srcTarget,y=r.handler;return setTimeout(function(){a[n]&&h.addEventListener(v,y,N)},0)})}},d=function(a){(a[n]||[]).forEach(function(p){return p.srcTarget.removeEventListener(p.event,p.handler,p.capture)}),delete a[n]},m=l?{beforeMount:b,updated:function(a,p){var f=p.value,I=p.oldValue;JSON.stringify(f)!==JSON.stringify(I)&&(d(a),b(a,{value:f}))},unmounted:d}:{};return{install:function(a){a.directive("click-outside",m)},directive:m}})}),ie=ne;const ae={class:"v3ti-loader-wrapper"},se=i("div",{class:"v3ti-loader"},null,-1),oe=i("span",null,"Loading",-1),re=[se,oe];function le(e,t){return c(),u("div",ae,re)}function F(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var l=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&l.firstChild?l.insertBefore(s,l.firstChild):l.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}var de=`.v3ti-loader-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #112B3C;
}
.v3ti-loader-wrapper .v3ti-loader {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: inline-block;
  border-top: 2px solid #112B3C;
  border-right: 2px solid transparent;
  box-sizing: border-box;
  animation: rotation 0.8s linear infinite;
  margin-right: 8px;
}
@keyframes rotation {
0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(360deg);
}
}`;F(de);const L={};L.render=le;var ce=L,K={name:"Vue3TagsInput",emits:["update:modelValue","update:tags","on-limit","on-tags-changed","on-remove","on-error","on-focus","on-blur","on-select","on-select-duplicate-tag","on-new-tag"],props:{readOnly:{type:Boolean,default:!1},modelValue:{type:String,default:""},validate:{type:[String,Function,Object],default:""},addTagOnKeys:{type:Array,default:function(){return[13,",",32]}},placeholder:{type:String,default:""},tags:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1},limit:{type:Number,default:-1},allowDuplicates:{type:Boolean,default:!1},addTagOnBlur:{type:Boolean,default:!1},selectItems:{type:Array,default:()=>[]},select:{type:Boolean,default:!1},duplicateSelectItem:{type:Boolean,default:!0},uniqueSelectField:{type:String,default:"id"},addTagOnKeysWhenSelect:{type:Boolean,default:!1},isShowNoData:{type:Boolean,default:!0}},components:{Loading:ce},directives:{clickOutside:ie.directive},data(){return{isInputActive:!1,isError:!1,newTag:"",innerTags:[],multiple:!1}},computed:{isLimit(){const e=this.limit>0&&Number(this.limit)===this.innerTags.length;return e&&this.$emit("on-limit"),e},selectedItemsIds(){return this.duplicateSelectItem?[]:this.tags.map(e=>e[this.uniqueSelectField]||"")}},watch:{error(){this.isError=this.error},modelValue:{immediate:!0,handler(e){this.newTag=e}},tags:{deep:!0,immediate:!0,handler(e){this.innerTags=[...e]}}},methods:{isShot(e){return!!this.$slots[e]},makeItNormal(e){this.$emit("update:modelValue",e.target.value),this.$refs.inputTag.className="v3ti-new-tag",this.$refs.inputTag.style.textDecoration="none"},resetData(){this.innerTags=[]},resetInputValue(){this.newTag="",this.$emit("update:modelValue","")},setPosition(){const e=this.$refs.inputBox,t=this.$refs.contextMenu;if(e&&t){t.style.display="block";const n=e.clientHeight||32,l=3;t.style.top=n+l+"px"}},closeContextMenu(){this.$refs.contextMenu&&(this.$refs.contextMenu.style={display:"none"})},handleSelect(e){if(this.isShowCheckmark(e)){const t=this.tags.filter(n=>e.id!==n.id);this.$emit("update:tags",t),this.$emit("on-select-duplicate-tag",e),this.resetInputValue()}else this.$emit("on-select",e);this.$nextTick(()=>{this.closeContextMenu()})},isShowCheckmark(e){return this.duplicateSelectItem?!1:this.selectedItemsIds.includes(e[this.uniqueSelectField])},focusNewTag(){this.select&&!this.disabled&&this.setPosition(),!(this.readOnly||!this.$el.querySelector(".v3ti-new-tag"))&&this.$el.querySelector(".v3ti-new-tag").focus()},handleInputFocus(e){this.isInputActive=!0,this.$emit("on-focus",e)},handleInputBlur(e){this.isInputActive=!1,this.addNew(e),this.$emit("on-blur",e)},addNew(e){if(this.select&&!this.addTagOnKeysWhenSelect)return;const t=e?this.addTagOnKeys.indexOf(e.keyCode)!==-1||this.addTagOnKeys.indexOf(e.key)!==-1:!0,n=e&&e.type!=="blur";!t&&(n||!this.addTagOnBlur)||this.isLimit||(this.newTag&&(this.allowDuplicates||this.innerTags.indexOf(this.newTag)===-1)&&this.validateIfNeeded(this.newTag)?(this.innerTags.push(this.newTag),this.addTagOnKeysWhenSelect&&(this.$emit("on-new-tag",this.newTag),this.updatePositionContextMenu()),this.resetInputValue(),this.tagChange(),e&&e.preventDefault()):(this.validateIfNeeded(this.newTag)?this.makeItError(!0):this.makeItError(!1),e&&e.preventDefault()))},updatePositionContextMenu(){this.$nextTick(()=>{this.setPosition()})},makeItError(e){this.newTag!==""&&(this.$refs.inputTag.className="v3ti-new-tag v3ti-new-tag--error",this.$refs.inputTag.style.textDecoration="underline",this.$emit("on-error",e))},validateIfNeeded(e){return this.validate===""||this.validate===void 0?!0:typeof this.validate=="function"?this.validate(e):!0},removeLastTag(){this.newTag||(this.innerTags.pop(),this.tagChange(),this.updatePositionContextMenu())},remove(e){this.innerTags.splice(e,1),this.tagChange(),this.$emit("on-remove",e),this.updatePositionContextMenu()},tagChange(){this.$emit("on-tags-changed",this.innerTags)}}};const ue={key:1,class:"v3ti-tag-content"},pe=["onClick"],me=["placeholder","disabled"],fe={key:0,class:"v3ti-loading"},ve={key:1,class:"v3ti-no-data"},he={key:1},ge={key:2},xe=["onClick"],be={class:"v3ti-context-item--label"},ye={key:0,class:"v3ti-icon-selected-tag",width:"44",height:"44",viewBox:"0 0 24 24","stroke-width":"1.5",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},we=i("path",{stroke:"none",d:"M0 0h24v24H0z"},null,-1),ke=i("path",{d:"M5 12l5 5l10 -10"},null,-1),_e=[we,ke];function Te(e,t,n,l,s,o){const x=_("Loading"),b=H("click-outside");return A((c(),u("div",{onClick:t[6]||(t[6]=d=>o.focusNewTag()),class:C([{"v3ti--focus":s.isInputActive,"v3ti--error":s.isError},"v3ti"])},[i("div",{class:C(["v3ti-content",{"v3ti-content--select":n.select}]),ref:"inputBox"},[(c(!0),u($,null,D(s.innerTags,(d,m)=>(c(),u("span",{key:m,class:"v3ti-tag"},[o.isShot("item")?S(e.$slots,"item",P(R({key:0},{name:d,index:m,tag:d}))):(c(),u("span",ue,G(d),1)),n.readOnly?w("",!0):(c(),u("a",{key:2,onClick:M(a=>o.remove(m),["prevent","stop"]),class:"v3ti-remove-tag"},null,8,pe))]))),128)),A(i("input",{ref:"inputTag",placeholder:n.placeholder,"onUpdate:modelValue":t[0]||(t[0]=d=>s.newTag=d),onKeydown:[t[1]||(t[1]=U(M(function(){return o.removeLastTag&&o.removeLastTag(...arguments)},["stop"]),["delete"])),t[2]||(t[2]=function(){return o.addNew&&o.addNew(...arguments)})],onBlur:t[3]||(t[3]=function(){return o.handleInputBlur&&o.handleInputBlur(...arguments)}),onFocus:t[4]||(t[4]=function(){return o.handleInputFocus&&o.handleInputFocus(...arguments)}),onInput:t[5]||(t[5]=function(){return o.makeItNormal&&o.makeItNormal(...arguments)}),class:"v3ti-new-tag",disabled:n.readOnly},null,40,me),[[W,s.newTag]])],2),n.select?(c(),u("section",{key:0,class:C(["v3ti-context-menu",{"v3ti-context-menu-no-data":!n.isShowNoData&&n.selectItems.length===0}]),ref:"contextMenu"},[n.loading?(c(),u("div",fe,[o.isShot("loading")?S(e.$slots,"default",{key:0}):(c(),J(x,{key:1}))])):w("",!0),!n.loading&&n.selectItems.length===0&&n.isShowNoData?(c(),u("div",ve,[o.isShot("no-data")?S(e.$slots,"no-data",{key:0}):(c(),u("span",he," No data "))])):w("",!0),!n.loading&&n.selectItems.length>0?(c(),u("div",ge,[(c(!0),u($,null,D(n.selectItems,(d,m)=>(c(),u("div",{key:m,class:C(["v3ti-context-item",{"v3ti-context-item--active":o.isShowCheckmark(d)}]),onClick:M(a=>o.handleSelect(d,m),["stop"])},[i("div",be,[S(e.$slots,"select-item",P(Q(d)))]),o.isShowCheckmark(d)?(c(),u("svg",ye,_e)):w("",!0)],10,xe))),128))])):w("",!0)],2)):w("",!0)],2)),[[b,o.closeContextMenu]])}var Ie=`.v3ti {
  border-radius: 5px;
  min-height: 32px;
  line-height: 1.4;
  background-color: #fff;
  border: 1px solid #9ca3af;
  cursor: text;
  text-align: left;
  -webkit-appearance: textfield;
  display: flex;
  flex-wrap: wrap;
  position: relative;
}
.v3ti .v3ti-icon-selected-tag {
  stroke: #19be6b;
  width: 1rem;
  height: 1rem;
  margin-left: 4px;
}
.v3ti--focus {
  outline: 0;
  border-color: #000000;
  box-shadow: 0 0 0 1px #000000;
}
.v3ti--error {
  border-color: #F56C6C;
}
.v3ti .v3ti-no-data {
  color: #d8d8d8;
  text-align: center;
  padding: 4px 7px;
}
.v3ti .v3ti-loading {
  padding: 4px 7px;
  text-align: center;
}
.v3ti .v3ti-context-menu {
  max-height: 150px;
  min-width: 150px;
  overflow: auto;
  display: none;
  outline: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0;
  padding: 5px 0;
  background: #ffffff;
  z-index: 1050;
  color: #475569;
  box-shadow: 0 3px 8px 2px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 6px 6px;
}
.v3ti .v3ti-context-menu .v3ti-context-item {
  padding: 4px 7px;
  display: flex;
  align-items: center;
}
.v3ti .v3ti-context-menu .v3ti-context-item:hover {
  background: #e8e8e8;
  cursor: pointer;
}
.v3ti .v3ti-context-menu .v3ti-context-item--label {
  flex: 1;
  min-width: 1px;
}
.v3ti .v3ti-context-menu .v3ti-context-item--active {
  color: #317CAF;
}
.v3ti .v3ti-context-menu-no-data {
  padding: 0;
}
.v3ti .v3ti-content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.v3ti .v3ti-content--select {
  padding-right: 30px;
}
.v3ti .v3ti-tag {
  display: flex;
  font-weight: 400;
  margin: 3px;
  padding: 0 5px;
  background: #317CAF;
  color: #ffffff;
  height: 27px;
  border-radius: 5px;
  align-items: center;
  max-width: calc(100% - 16px);
}
.v3ti .v3ti-tag .v3ti-tag-content {
  flex: 1;
  min-width: 1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.v3ti .v3ti-tag .v3ti-remove-tag {
  color: #ffffff;
  transition: opacity 0.3s ease;
  opacity: 0.5;
  cursor: pointer;
  padding: 0 5px 0 7px;
}
.v3ti .v3ti-tag .v3ti-remove-tag::before {
  content: "x";
}
.v3ti .v3ti-tag .v3ti-remove-tag:hover {
  opacity: 1;
}
.v3ti .v3ti-new-tag {
  background: transparent;
  border: 0;
  font-weight: 400;
  margin: 3px;
  outline: none;
  padding: 0 4px;
  flex: 1;
  min-width: 60px;
  height: 27px;
}
.v3ti .v3ti-new-tag--error {
  color: #F56C6C;
}`;F(Ie);K.render=Te;var Se=(()=>{const e=K;return e.install=t=>{t.component("Vue3TagsInput",e)},e})();const Ce={data(){return{tags:["Test"]}},components:{Vue3TagsInput:Se}},Ne={class:"page-wrapper"},Be={class:"content me-0 me-lg-4 pb-0"},Me={class:"d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3"},Oe={class:"my-auto mb-2"},Ee={class:"breadcrumb mb-0"},$e={class:"breadcrumb-item"},je={class:"row"},Ve={class:"col-lg-3"},Ae={class:"col-lg-9"},De={class:"card"},Pe={action:"#"},Fe={class:"card-body"},Le={class:"mb-3 pb-3 border-bottom"},Ke={class:"mb-0"};function qe(e,t,n,l,s,o){const x=_("admin-header"),b=_("admin-sidebar"),d=_("router-link"),m=_("adminsettings-sidebar"),a=_("vue3-tags-input");return c(),u($,null,[k(x),k(b),i("div",Ne,[i("div",Be,[i("div",Me,[i("div",Oe,[t[2]||(t[2]=i("h4",{class:"mb-1"},"Settings",-1)),i("nav",null,[i("ol",Ee,[i("li",$e,[k(d,{to:"/admin-template/index"},{default:Y(()=>t[0]||(t[0]=[E("Home")])),_:1,__:[0]})]),t[1]||(t[1]=i("li",{class:"breadcrumb-item active","aria-current":"page"},"Settings",-1))])])])]),i("div",je,[i("div",Ve,[k(m)]),i("div",Ae,[i("div",De,[t[8]||(t[8]=i("div",{class:"card-header"},[i("h5",{class:"fw-bold"},"Website Settings")],-1)),i("form",Pe,[i("div",Fe,[t[5]||(t[5]=O('<h6 class="fw-bold mb-3">SEO Setup - Site Meta</h6><div class="mb-3"><label class="form-label">Meta Title<span class="text-danger ms-1">*</span></label><input type="text" class="form-control"></div><div class="mb-3"><label class="form-label">Site Description<span class="text-danger ms-1">*</span></label><textarea class="form-control" rows="3"></textarea></div>',3)),i("div",Le,[t[3]||(t[3]=i("label",{class:"form-label"},[E("Keywords"),i("span",{class:"text-danger ms-1"},"*")],-1)),k(a,{class:"input-tags form-control",type:"text","data-role":"tagsinput",name:"specialist",id:"specialist",tags:s.tags},null,8,["tags"])]),t[6]||(t[6]=O('<h6 class="fw-bold mb-3">SEO Setup - OG Meta</h6><div class="mb-3"><label class="form-label">Meta Image <span class="text-danger">*</span></label><div class="d-flex align-items-center flex-wrap row-gap-3 mb-3"><div class="d-flex align-items-center justify-content-center avatar avatar-xxl border me-3 flex-shrink-0 text-dark frames"><i class="ti ti-photo-up text-gray-4 fs-24"></i></div><div class="profile-upload"><div class="profile-uploader d-flex align-items-center"><div class="drag-upload-btn btn btn-md btn-dark"><i class="ti ti-photo-up fs-14"></i> Upload <input type="file" class="form-control image-sign" multiple></div></div><div class="mt-2"><p class="fs-14">Upload Image size 180*180, within 5MB</p></div></div></div></div><div class="mb-3"><label class="form-label">Meta Title<span class="text-danger ms-1">*</span></label><input type="text" class="form-control"></div><div class="mb-3"><label class="form-label">Site Description<span class="text-danger ms-1">*</span></label><textarea class="form-control" rows="3"></textarea></div>',4)),i("div",Ke,[t[4]||(t[4]=i("label",{class:"form-label"},[E("Keywords"),i("span",{class:"text-danger ms-1"},"*")],-1)),k(a,{class:"input-tags form-control",type:"text","data-role":"tagsinput",name:"specialist",id:"specialist",tags:s.tags},null,8,["tags"])])]),t[7]||(t[7]=i("div",{class:"card-footer"},[i("div",{class:"d-flex justify-content-end"},[i("a",{href:"javascript:void(0);",class:"btn btn-light me-3","data-bs-dismiss":"modal"},"Cancel"),i("button",{type:"submit",class:"btn btn-primary"},"Save Changes")])],-1))])])])])]),t[9]||(t[9]=O('<div class="footer d-sm-flex align-items-center justify-content-between bg-white p-3"><p class="mb-0"><a href="javascript:void(0);">Privacy Policy</a><a href="javascript:void(0);" class="ms-4">Terms of Use</a></p><p> © 2025 Dreamsrent, Made with <span class="text-danger">❤</span> by <a href="javascript:void(0);" class="text-secondary">Dreams</a></p></div>',1))])],64)}const He=X(Ce,[["render",qe]]);export{He as default};
