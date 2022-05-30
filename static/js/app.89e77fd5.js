(function(){"use strict";var e={2852:function(e,t,n){var o=n(9242),r=n(3396),u=n(7718),a=n(9271);function i(e,t,n,o,i,l){const c=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(u.q,null,{default:(0,r.w5)((()=>[(0,r.Wm)(a.O,null,{default:(0,r.w5)((()=>[(0,r.Wm)(c)])),_:1})])),_:1})}var l={name:"App",components:{},data:()=>({})},c=n(89);const s=(0,c.Z)(l,[["render",i]]);var f=s,d=(n(9773),n(4402)),m=(0,d.Rd)();async function p(){const e=await n.e(461).then(n.t.bind(n,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}var h=n(678),w=n(3369),_=n(6824),g=n(8521);function v(e,t,n,o,u,a){const i=(0,r.up)("AppBar"),l=(0,r.up)("MachineCard");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(i),(0,r.Wm)(w.K,null,{default:(0,r.w5)((()=>[(0,r.Wm)(_.o,null,{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(u.machines,(e=>((0,r.wg)(),(0,r.j4)(g.D,{cols:"4",key:e.id},{default:(0,r.w5)((()=>[(0,r.Wm)(l,{machine:e},null,8,["machine"])])),_:2},1024)))),128))])),_:1})])),_:1})])}var y=n(7139),b=n(3435),W=n(5405),k=n(6572),U=n(1888),j=n(1332),O=n(1334),P=n(8961),z=n(8319),x=n(2127),M=n(2931);const E=(0,r.Uk)("基本信息"),G=(0,r.Uk)(" 状态统计 "),D=(0,r.Uk)(" 更多信息 ");function K(e,t,n,o,u,a){return(0,r.wg)(),(0,r.j4)(W._,{class:"mx-auto","max-width":"350",outlined:""},{default:(0,r.w5)((()=>[(0,r.Wm)(k.E,null,{default:(0,r.w5)((()=>[(0,r.Uk)((0,y.zw)(a.statistical_machine.name),1)])),_:1}),(0,r.Wm)(U.Z,null,{default:(0,r.w5)((()=>[(0,r.Wm)(j.Q,null,{default:(0,r.w5)((()=>[E])),_:1}),(0,r.Wm)(P.i,null,{default:(0,r.w5)((()=>[(0,r.Wm)(z.l,{title:"GPU_NUMS"},{default:(0,r.w5)((()=>[(0,r.Wm)(x.V,{class:"text-h5"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,y.zw)(a.statistical_machine.gpu_nums),1)])),_:1})])),_:1}),(0,r.Wm)(z.l,{title:"IP"},{default:(0,r.w5)((()=>[(0,r.Wm)(x.V,{class:"text-h5"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,y.zw)(a.statistical_machine.name),1)])),_:1})])),_:1})])),_:1})])),_:1}),(0,r.Wm)(U.Z,null,{default:(0,r.w5)((()=>[(0,r.Wm)(j.Q,null,{default:(0,r.w5)((()=>[G])),_:1}),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.statistical_gpus,((e,t)=>((0,r.wg)(),(0,r.j4)(P.i,{key:e["id"]},{default:(0,r.w5)((()=>[(0,r.Wm)(z.l,null,{default:(0,r.w5)((()=>[(0,r.Wm)(w.K,null,{default:(0,r.w5)((()=>[(0,r.Wm)(_.o,{justify:"center"},{default:(0,r.w5)((()=>[(0,r.Wm)(g.D,{cols:"3","align-self":"center"},{default:(0,r.w5)((()=>[(0,r.Uk)(" GPU"+(0,y.zw)(t),1)])),_:2},1024),(0,r.Wm)(g.D,{cols:"9","align-self":"center"},{default:(0,r.w5)((()=>[(0,r.Wm)(M.K,{"model-value":e["weighted_util%"],height:"15",color:"blue"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,y.zw)(e["weighted_util%"])+"% ",1)])),_:2},1032,["model-value"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1}),(0,r.Wm)(O.h,null,{default:(0,r.w5)((()=>[(0,r.Wm)(b.T,{to:"/gpu/"+this.machine.id},{default:(0,r.w5)((()=>[D])),_:1},8,["to"])])),_:1})])),_:1})}const T=n(4806);var Z={name:"MachineCard",data(){return{}},props:["machine"],computed:{statistical_machine(){return{name:this.machine.name,gpu_nums:Object.keys(this.machine["gpus"]).length.toString(),ip:this.machine.name}},statistical_gpus(){let e=[];return T.map(this.machine["gpus"],((t,n)=>{e.push({id:n,"weighted_util%":100*T.floor(t["memory_used"]/t["memory_total"]*.5+t["power_draw"]/t["power_limit"]*.5,2)})})),e}}};const A=(0,c.Z)(Z,[["render",K]]);var C=A,B=n(497),S=n(9156);const N=(0,r.Uk)("GPU Monitor");function q(e,t,n,o,u,a){return(0,r.wg)(),(0,r.j4)(B.L,null,{default:(0,r.w5)((()=>[(0,r.Wm)(S.g),(0,r.Wm)(b.T,{to:"/"},{default:(0,r.w5)((()=>[N])),_:1})])),_:1})}var H={name:"AppBar"};const I=(0,c.Z)(H,[["render",q]]);var Y=I,F=n(2066),L=n(4870);const Q=n(4806);var R={name:"GPUMachines",props:{},components:{AppBar:Y,MachineCard:C},data(){return{machines:[]}},mounted(){const e=(0,F.io)("ws://localhost:5000",{query:{space:"global"}});e.on("connect",(()=>{console.log("connect to GPU Monitor,ok!")})),e.on("global_state_initialize",((...e)=>{this.machines=e[0]})),e.on("gpu_state_update",((...e)=>{let t=e[0],n=Q.cloneDeep((0,L.IU)(this.machines));Q.forEach(n,(e=>{e["id"]===t["id"]&&Q.forEach(t["gpu_states"],(t=>{Q.assign(e["gpus"][t["id"]],t)}))})),this.machines=n}))}};const V=(0,c.Z)(R,[["render",v]]);var X=V;const J=(0,r.Uk)("GeForce RTX 2080TI"),$=(0,r._)("span",{class:"text-h6"},"GPU 显存使用",-1),ee=(0,r._)("span",{class:"text-h6"},"GPU 利用率",-1),te=(0,r._)("span",{class:"text-h6"},"GPU 功率",-1),ne=(0,r._)("span",{class:"text-h6"},"GPU 温度",-1);function oe(e,t,n,o,u,a){const i=(0,r.up)("AppBar");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(i),(0,r.Wm)(w.K,null,{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.stats_gpus,(e=>((0,r.wg)(),(0,r.j4)(_.o,{key:e.id},{default:(0,r.w5)((()=>[(0,r.Wm)(g.D,{cols:"12"},{default:(0,r.w5)((()=>[(0,r.Wm)(W._,null,{default:(0,r.w5)((()=>[(0,r.Wm)(k.E,{class:"text-h4"},{default:(0,r.w5)((()=>[J])),_:1}),(0,r.Wm)(j.Q,null,{default:(0,r.w5)((()=>[(0,r.Uk)((0,y.zw)(e.id),1)])),_:2},1024),(0,r.Wm)(U.Z,null,{default:(0,r.w5)((()=>[$,(0,r.Wm)(M.K,{"model-value":e["memory%"],color:"blue-grey",height:"30"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,y.zw)(e["memory_used"])+"/"+(0,y.zw)(e["memory_total"])+" MiB ",1)])),_:2},1032,["model-value"])])),_:2},1024),(0,r.Wm)(U.Z,null,{default:(0,r.w5)((()=>[ee,(0,r.Wm)(M.K,{"model-value":e["utilization"],color:"blue-grey",height:"30"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,y.zw)(e["utilization"])+"% ",1)])),_:2},1032,["model-value"])])),_:2},1024),(0,r.Wm)(U.Z,null,{default:(0,r.w5)((()=>[te,(0,r.Wm)(M.K,{"model-value":"{{gpu['power%']}}",color:"blue-grey",height:"30"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,y.zw)(e["power_draw"])+"/"+(0,y.zw)(e["power_limit"])+" W ",1)])),_:2},1024)])),_:2},1024),(0,r.Wm)(U.Z,null,{default:(0,r.w5)((()=>[ne,(0,r.Wm)(M.K,{"model-value":e["temperature"],color:"blue-grey",height:"30"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,y.zw)(e["temperature"])+" C ",1)])),_:2},1032,["model-value"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})],64)}var re=n(4806),ue={name:"GPU",components:{AppBar:Y},data(){return{name:void 0,gpus:{}}},props:["id"],mounted(){const e=(0,F.io)("ws://localhost:5000",{query:{space:"specific",host_id:this.id}});e.on("connect",(()=>{console.log("connect to GPU Monitor,ok!")})),e.on("specific_state_initialize",((...e)=>{let t=e[0];this.name=t["name"],this.gpus=t["gpus"]})),e.on("gpu_state_update",((...e)=>{let t=e[0];if(t["id"]!==this.id)return;let n=re.cloneDeep((0,L.IU)(this.gpus));re.forEach(t["gpu_states"],(e=>{re.assign(n[e["id"]],e)})),this.gpus=n}))},computed:{stats_gpus(){let e=[];return re.map(this.gpus,(t=>{e.push({...t,"memory%":100*re.floor(t["memory_used"]/t["memory_total"],2),"power%":100*re.floor(t["power_draw"]/t["power_limit"],2)})})),e}}};const ae=(0,c.Z)(ue,[["render",oe]]);var ie=ae;p();const le=[{path:"/",component:X},{path:"/gpu/:id",component:ie,props:!0}],ce=h.p7({history:h.r5(),routes:le});(0,o.ri)(f).use(m).use(ce).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var u=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(u.exports,u,u.exports,n),u.loaded=!0,u.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,u){if(!o){var a=1/0;for(s=0;s<e.length;s++){o=e[s][0],r=e[s][1],u=e[s][2];for(var i=!0,l=0;l<o.length;l++)(!1&u||a>=u)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(i=!1,u<a&&(a=u));if(i){e.splice(s--,1);var c=r();void 0!==c&&(t=c)}}return t}u=u||0;for(var s=e.length;s>0&&e[s-1][2]>u;s--)e[s]=e[s-1];e[s]=[o,r,u]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"===typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"===typeof o.then)return o}var u=Object.create(null);n.r(u);var a={};e=e||[null,t({}),t([]),t(t)];for(var i=2&r&&o;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((function(e){a[e]=function(){return o[e]}}));return a["default"]=function(){return o},n.d(u,a),u}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/webfontloader.b6f6e313.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="gpu_monitor:";n.l=function(o,r,u,a){if(e[o])e[o].push(r);else{var i,l;if(void 0!==u)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var f=c[s];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==t+u){i=f;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+u),i.src=o),e[o]=[r];var d=function(t,n){i.onerror=i.onload=null,clearTimeout(m);var r=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/"}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var u=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=u);var a=n.p+n.u(t),i=new Error,l=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var u=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;i.message="Loading chunk "+t+" failed.\n("+u+": "+a+")",i.name="ChunkLoadError",i.type=u,i.request=a,r[1](i)}};n.l(a,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,u,a=o[0],i=o[1],l=o[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(l)var s=l(n)}for(t&&t(o);c<a.length;c++)u=a[c],n.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return n.O(s)},o=self["webpackChunkgpu_monitor"]=self["webpackChunkgpu_monitor"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(2852)}));o=n.O(o)})();
//# sourceMappingURL=app.89e77fd5.js.map