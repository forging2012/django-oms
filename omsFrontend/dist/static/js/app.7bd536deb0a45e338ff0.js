webpackJsonp([50],{"/7A/":function(e,t){},"1FsG":function(e,t){},"6k2e":function(e,t,n){"use strict";function o(e){n("OibT")}function r(e){n("prwc")}function a(e){n("hnqy")}Object.defineProperty(t,"__esModule",{value:!0});var i=n("Dd8w"),s=n.n(i),c=n("NYxO"),u={created:function(){this.getBreadcrumb()},data:function(){return{levelList:null}},watch:{$route:function(){this.getBreadcrumb()}},methods:{getBreadcrumb:function(){var e=this.$route.matched.filter(function(e){return e.name}),t=e[0];t&&"首页"!==t.name&&(e=[{path:"/dashboard",name:"首页"}].concat(e)),this.levelList=e}}},l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-breadcrumb",{staticClass:"app-breadcrumb",attrs:{separator:"/"}},[n("transition-group",{attrs:{name:"breadcrumb"}},e._l(e.levelList,function(t,o){return t.name?n("el-breadcrumb-item",{key:t.path},["noredirect"===t.redirect||o==e.levelList.length-1?n("span",{staticClass:"no-redirect"},[e._v("\n        "+e._s(t.name)+"\n      ")]):n("router-link",{attrs:{to:t.redirect||t.path}},[n("i",{directives:[{name:"show",rawName:"v-show",value:"dashboard"==t.name,expression:"item.name == 'dashboard'"}],staticClass:"fa fa-home"}),e._v("\n        "+e._s(t.name)+"\n      ")])],1):e._e()}))],1)},d=[],p={render:l,staticRenderFns:d},h=p,m=n("VU/8"),f=o,v=m(u,h,!1,f,"data-v-2b4feaed",null),g=v.exports,w={name:"hamburger",props:{isActive:{type:Boolean,default:!1},toggleClick:{type:Function,default:null}}},b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("svg",{staticClass:"wscn-icon hamburger",class:{"is-active":e.isActive},attrs:{t:"1492500959545",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1691","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"64",height:"64"},on:{click:e.toggleClick}},[n("path",{attrs:{d:"M966.8023 568.849776 57.196677 568.849776c-31.397081 0-56.850799-25.452695-56.850799-56.850799l0 0c0-31.397081 25.452695-56.849776 56.850799-56.849776l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.849776l0 0C1023.653099 543.397081 998.200404 568.849776 966.8023 568.849776z","p-id":"1692"}}),e._v(" "),n("path",{attrs:{d:"M966.8023 881.527125 57.196677 881.527125c-31.397081 0-56.850799-25.452695-56.850799-56.849776l0 0c0-31.397081 25.452695-56.849776 56.850799-56.849776l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.849776l0 0C1023.653099 856.07443 998.200404 881.527125 966.8023 881.527125z","p-id":"1693"}}),e._v(" "),n("path",{attrs:{d:"M966.8023 256.17345 57.196677 256.17345c-31.397081 0-56.850799-25.452695-56.850799-56.849776l0 0c0-31.397081 25.452695-56.850799 56.850799-56.850799l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.850799l0 0C1023.653099 230.720755 998.200404 256.17345 966.8023 256.17345z","p-id":"1694"}})])])},_=[],k={render:b,staticRenderFns:_},y=k,S=n("VU/8"),E=r,T=S(w,y,!1,E,"data-v-3ffa8678",null),x=T.exports,O={components:{Breadcrumb:g,Hamburger:x},data:function(){return{}},computed:s()({},Object(c.b)(["sidebar","username"])),methods:{toggleSideBar:function(){this.$store.dispatch("toggleSideBar")},logout:function(){this.$store.dispatch("LogOut").then(function(){location.reload()})}}},V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-menu",{staticClass:"navbar",attrs:{mode:"horizontal"}},[n("hamburger",{staticClass:"hamburger-container",attrs:{toggleClick:e.toggleSideBar,isActive:e.sidebar.opened}}),e._v(" "),n("breadcrumb",{staticClass:"breadcrumb-container"}),e._v(" "),n("div",{staticClass:"right-menu"},[n("el-dropdown",{staticClass:"avatar-container right-menu-item"},[n("div",{staticClass:"avatar-wrapper"},[n("el-button",{attrs:{type:"success",round:"",size:"mini"}},[e._v(e._s(e.username))]),e._v(" "),n("i",{staticClass:"el-icon-caret-bottom"})],1),e._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("router-link",{attrs:{to:"/"}},[n("el-dropdown-item",[n("i",{staticClass:"fa fa-home"}),e._v("\n            Home\n          ")])],1),e._v(" "),n("el-dropdown-item",{attrs:{divided:""}},[n("span",{staticStyle:{display:"block"},on:{click:e.logout}},[n("i",{staticClass:"fa fa-power-off"}),e._v("\n            Logout\n          ")])])],1)],1)],1)],1)},I=[],M={render:V,staticRenderFns:I},R=M,C=n("VU/8"),j=a,P=C(O,R,!1,j,"data-v-b31b36a4",null);t.default=P.exports},A66B:function(e,t,n){e.exports=function(e){return function(){return n("Opzk")("./"+e+".vue")}}},AkUR:function(e,t,n){"use strict";function o(e){n("TI3O")}Object.defineProperty(t,"__esModule",{value:!0});var r=n("6k2e"),a=n("WTox"),i=n("Vg/Y"),s=n("BoPo"),c={name:"layout",components:{Navbar:r.default,Sidebar:a.default,AppMain:s.default,TagsView:i.default},computed:{sidebar:function(){return this.$store.state.app.sidebar}}},u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-wrapper",class:{hideSidebar:!e.sidebar.opened}},[n("sidebar",{staticClass:"sidebar-container"}),e._v(" "),n("div",{staticClass:"main-container"},[n("navbar"),e._v(" "),n("tags-view"),e._v(" "),n("app-main")],1)],1)},l=[],d={render:u,staticRenderFns:l},p=d,h=n("VU/8"),m=o,f=h(c,p,!1,m,"data-v-289ec47c",null);t.default=f.exports},BoPo:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={name:"AppMain",computed:{cachedViews:function(){return this.$store.state.app.cachedViews}}},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"app-main",staticStyle:{"min-height":"100%"}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("keep-alive",{attrs:{include:e.cachedViews}},[n("router-view")],1)],1)],1)},a=[],i={render:r,staticRenderFns:a},s=i,c=n("VU/8"),u=c(o,s,!1,null,null,null);t.default=u.exports},D4uH:function(e,t,n){"use strict";function o(){return"fa-"+(s++).toString(16)}function r(e){n("cJIv")}var a={},i={name:"icon",props:{name:{type:String,validator:function(e){return e?e in a||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'+e+'".\nPlesase make sure you have imported this icon before using it.'),!1):(console.warn('Invalid prop: prop "name" is required.'),!1)}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(e){return"horizontal"===e||"vertical"===e}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var e=this.scale;return e=void 0===e?1:Number(e),isNaN(e)||e<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):e*this.outerScale},klass:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse}},icon:function(){return this.name?a[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var e=this.icon,t=e.width,n=e.height;return Math.max(t,n)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var e=this.icon.raw,t={};return e=e.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g,function(e,n){var r=o();return t[n]=r,' id="'+r+'"'}),e=e.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,function(e,n,o,r){var a=n||r;return a&&t[a]?"#"+t[a]:e}),e}},mounted:function(){var e=this;if(!this.icon){this.$children.forEach(function(t){t.outerScale=e.normalizedScale});var t=0,n=0;this.$children.forEach(function(e){t=Math.max(t,e.width),n=Math.max(n,e.height)}),this.childrenWidth=t,this.childrenHeight=n,this.$children.forEach(function(e){e.x=(t-e.width)/2,e.y=(n-e.height)/2})}},register:function(e){for(var t in e){var n=e[t];n.paths||(n.paths=[]),n.d&&n.paths.push({d:n.d}),n.polygons||(n.polygons=[]),n.points&&n.polygons.push({points:n.points}),a[t]=n}},icons:a},s=870711,c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{class:e.klass,style:e.style,attrs:{version:"1.1",role:e.label?"img":"presentation","aria-label":e.label,x:e.x,y:e.y,width:e.width,height:e.height,viewBox:e.box}},[e._t("default",[e.icon&&e.icon.paths?e._l(e.icon.paths,function(t,o){return n("path",e._b({key:"path-"+o},"path",t,!1))}):e._e(),e._v(" "),e.icon&&e.icon.polygons?e._l(e.icon.polygons,function(t,o){return n("polygon",e._b({key:"polygon-"+o},"polygon",t,!1))}):e._e(),e._v("\b\n    "),e.icon&&e.icon.raw?[n("g",{domProps:{innerHTML:e._s(e.raw)}})]:e._e()])],2)},u=[],l={render:c,staticRenderFns:u},d=l,p=n("VU/8"),h=r,m=p(i,d,!1,h,null,null);t.a=m.exports},EG2h:function(e,t){Array.prototype.indexItem=function(e){for(var t=0;t<this.length;t++)if(this[t]===e)return t;return-1},Array.prototype.remove=function(e){var t=this.indexItem(e);t>-1&&this.splice(t,1)}},IcnI:function(e,t,n){"use strict";function o(e){return Object(y.a)({url:E.a.login,method:"post",data:e})}function r(){return Object(y.a)({url:E.a.logout,method:"get"})}function a(e){var t={username:e};return Object(y.a)({url:E.a.users,method:"get",params:t})}function i(e,t){return!t.name||void 0!==e[t.name]&&e[t.name]}function s(e,t){return e.filter(function(e){return!!i(t,e)&&(e.children&&e.children.length&&(e.children=s(e.children,t)),!0)})}var c=n("7+uW"),u=n("NYxO"),l=n("Gu7T"),d=n.n(l),p=n("//Fk"),h=n.n(p),m=n("BO1k"),f=n.n(m),v=n("d7EF"),g=n.n(v),w=n("lbHh"),b=n.n(w),_={state:{sidebar:{opened:!+b.a.get("sidebarStatus")},visitedViews:[],cachedViews:[]},mutations:{TOGGLE_SIDEBAR:function(e){e.sidebar.opened?b.a.set("sidebarStatus",1):b.a.set("sidebarStatus",0),e.sidebar.opened=!e.sidebar.opened},ADD_VISITED_VIEWS:function(e,t){e.visitedViews.some(function(e){return e.path===t.path})||(e.visitedViews.push({name:t.name,hidden:t.hidden,path:t.path}),t.meta.noCache||e.cachedViews.push(t.name))},DEL_VISITED_VIEWS:function(e,t){var n=!0,o=!1,r=void 0;try{for(var a,i=f()(e.visitedViews.entries());!(n=(a=i.next()).done);n=!0){var s=a.value,c=g()(s,2),u=c[0];if(c[1].path===t.path){e.visitedViews.splice(u,1);break}}}catch(e){o=!0,r=e}finally{try{!n&&i.return&&i.return()}finally{if(o)throw r}}var l=!0,d=!1,p=void 0;try{for(var h,m=f()(e.cachedViews);!(l=(h=m.next()).done);l=!0){var v=h.value;if(v===t.name){var w=e.cachedViews.indexOf(v);e.cachedViews.splice(w,1);break}}}catch(e){d=!0,p=e}finally{try{!l&&m.return&&m.return()}finally{if(d)throw p}}}},actions:{toggleSideBar:function(e){(0,e.commit)("TOGGLE_SIDEBAR")},addVisitedViews:function(e,t){(0,e.commit)("ADD_VISITED_VIEWS",t)},delVisitedViews:function(e,t){var n=e.commit,o=e.state;return new h.a(function(e){n("DEL_VISITED_VIEWS",t),e([].concat(d()(o.visitedViews)))})}}},k=_,y=n("vLgD"),S=n("QmSG"),E=n.n(S),T=n("zp1X"),x={state:{token:localStorage.getItem("token"),username:localStorage.getItem("username"),groups:[],menus:void 0,eleemnts:void 0,permissionMenus:void 0,role:""},mutations:{SET_TOKEN:function(e,t){e.token=t},SET_USERNAME:function(e,t){e.username=t},SET_GROUPS:function(e,t){e.groups=t},SET_ROLE:function(e,t){e.role=t},SET_MENUS:function(e,t){e.menus=t},SET_ELEMENTS:function(e,t){e.elements=t},SET_PERMISSION_MENUS:function(e,t){e.permissionMenus=t}},actions:{Login:function(e,t){var n=e.commit;return new h.a(function(e,r){o(t).then(function(o){n("SET_TOKEN",o.data.token),n("SET_USERNAME",t.username),localStorage.setItem("username",t.username),localStorage.setItem("token",o.data.token),n("SET_MENUS",void 0),n("SET_ELEMENTS",void 0),e()}).catch(function(e){r(e)})})},GetUserInfo:function(e){var t=e.commit,n=e.state;return new h.a(function(e,o){Object(T.b)(n.username).then(function(n){var o=n.data,r=o.groups;t("SET_GROUPS",r),localStorage.setItem("groups",r),r.indexOf(S.super_group)>=0?t("SET_ROLE","super"):t("SET_ROLE","user");var a={},i=!0,s=!1,c=void 0;try{for(var u,l=f()(o.menus);!(i=(u=l.next()).done);i=!0){a[u.value]=!0}}catch(e){s=!0,c=e}finally{try{!i&&l.return&&l.return()}finally{if(s)throw c}}t("SET_MENUS",a);var d={},p=!0,h=!1,m=void 0;try{for(var v,g=f()(o.elements);!(p=(v=g.next()).done);p=!0){d[v.value]=!0}}catch(e){h=!0,m=e}finally{try{!p&&g.return&&g.return()}finally{if(h)throw m}}t("SET_ELEMENTS",d),e(n)}).catch(function(e){console.log(e),o(e)})})},LogOut:function(e){var t=e.commit,n=e.state;return new h.a(function(e,o){r(n.token).then(function(){t("SET_TOKEN",""),localStorage.removeItem("token"),t("SET_GROUPS",[]),localStorage.setItem("groups",[]),t("SET_MENUS",void 0),t("SET_ROLE",""),t("SET_ELEMENTS",void 0),t("SET_PERMISSION_MENUS",void 0),e()}).catch(function(e){o(e)})})},FedLogOut:function(e){var t=e.commit;return new h.a(function(e){t("SET_TOKEN",""),localStorage.removeItem("token"),t("SET_GROUPS",[]),localStorage.setItem("groups",[]),t("SET_MENUS",void 0),t("SET_ROLE",""),t("SET_ELEMENTS",void 0),t("SET_PERMISSION_MENUS",void 0),e()})},ChangeRole:function(e,t){var n=e.commit,o=e.state;return new h.a(function(e){n("SET_TOKEN",t),localStorage.setItem("groups",t),a(o.username).then(function(t){var o=t.data.results[0];n("SET_GROUPS",o.groups),localStorage.setItem("groups",o.groups),e()})})}}},O=x,V=n("YaEn"),I={state:{routers:V.b,addRouters:[]},mutations:{SET_ROUTERS:function(e,t){e.addRouters=t,e.routers=V.b.concat(t)}},actions:{GenerateRoutes:function(e,t){var n=e.commit,o=t.role,r=t.menus;return new h.a(function(e){var t=void 0;"super"===o?(n("SET_ROUTERS",t),t=V.a.concat(V.d)):t=s(V.a,r).concat(V.d),n("SET_ROUTERS",t),e()})}}},M=I,R={sidebar:function(e){return e.app.sidebar},language:function(e){return e.app.language},visitedViews:function(e){return e.app.visitedViews},cachedViews:function(e){return e.app.cachedViews},token:function(e){return e.user.token},username:function(e){return e.user.username},groups:function(e){return e.user.groups},role:function(e){return e.user.role},menus:function(e){return e.user.menus},elements:function(e){return e.user.elements},permission_routers:function(e){return e.permission.routers},addRouters:function(e){return e.permission.addRouters},permissionMenus:function(e){return e.user.permissionMenus}},C=R;c.default.use(u.a);var j=new u.a.Store({modules:{app:k,user:O,permission:M},getters:C});t.a=j},NHnr:function(e,t,n){"use strict";function o(e){n("/7A/")}function r(e,t){return 1===e?e+t:e+t+"s"}function a(e){var t=Date.now()/1e3-Number(e);return t<3600?r(~~(t/60)," minute"):t<86400?r(~~(t/3600)," hour"):r(~~(t/86400)," day")}function i(e,t){if(0===arguments.length)return null;10===(e+"").length&&(e=1e3*+e);var n=t||"{y}-{m}-{d} {h}:{i}:{s}",o=void 0;o="object"===(void 0===e?"undefined":O()(e))?e:new Date(parseInt(e));var r={y:o.getFullYear(),m:o.getMonth()+1,d:o.getDate(),h:o.getHours(),i:o.getMinutes(),s:o.getSeconds(),a:o.getDay()};return n.replace(/{(y|m|d|h|i|s|a)+}/g,function(e,t){var n=r[t];return"a"===t?["一","二","三","四","五","六","日"][n-1]:(e.length>0&&n<10&&(n="0"+n),n||0)})}function s(e,t){var n=new Date(e),o=Date.now(),r=(o-n)/1e3;return r<30?"刚刚":r<3600?Math.ceil(r/60)+"分钟前":r<86400?Math.ceil(r/3600)+"小时前":r<172800?"1天前":t?i(e,t):n.getMonth()+1+"月"+n.getDate()+"日"+n.getHours()+"时"+n.getMinutes()+"分"}function c(e,t){for(var n=[{value:1e18,symbol:"E"},{value:1e15,symbol:"P"},{value:1e12,symbol:"T"},{value:1e9,symbol:"G"},{value:1e6,symbol:"M"},{value:1e3,symbol:"k"}],o=0;o<n.length;o++)if(e>=n[o].value)return(e/n[o].value+.1).toFixed(t).replace(/\.0+$|(\.[0-9]*[1-9])0+$/,"$1")+n[o].symbol;return e.toString()}function u(e){if(void 0!==e){var t=e.split("T");return t[0]+" "+t[1].split(".")[0]}}function l(e,t){return e.indexOf("admin")>=0||(!t||e.some(function(e){return t.indexOf(e)>=0}))}Object.defineProperty(t,"__esModule",{value:!0});var d={};n.d(d,"timeAgo",function(){return a}),n.d(d,"parseTime",function(){return i}),n.d(d,"formatTime",function(){return s}),n.d(d,"nFormatter",function(){return c}),n.d(d,"parseDate",function(){return u});var p=n("fZjL"),h=n.n(p),m=n("7+uW"),f={name:"APP"},v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},g=[],w={render:v,staticRenderFns:g},b=w,_=n("VU/8"),k=o,y=_(f,b,!1,k,null,null),S=y.exports,E=n("YaEn"),T=n("IcnI"),x=n("pFYg"),O=n.n(x),V=n("Dd8w"),I=n.n(V),M=n("Y81h"),R=n.n(M),C=(n("UVIz"),n("zL8q")),j=n.n(C),P=["/login"];E.c.beforeEach(function(e,t,n){R.a.start(),localStorage.getItem("token")?"/login"===e.path?(n({path:"/"}),R.a.done()):0===T.a.getters.role.length?T.a.dispatch("GetUserInfo").then(function(t){var o=T.a.getters.role,r=T.a.getters.menus;T.a.dispatch("GenerateRoutes",{role:o,menus:r}).then(function(){E.c.addRoutes(T.a.getters.addRouters),n(I()({},e,{replace:!0}))})}).catch(function(){T.a.dispatch("FedLogOut").then(function(){C.Message.error("验证失败,请重新登录"),console.log("not found groups"),n({path:"/login"})})}):l(T.a.getters.groups,e.meta.group)?n():(n({path:"/403",query:{noGoBack:!0}}),R.a.done()):(console.log("haven't token"),-1!==P.indexOf(e.path)?n():(n({path:"/login",query:{redirect:e.fullPath}}),R.a.done()))}),E.c.afterEach(function(){R.a.done()});var N=(n("EG2h"),n("tvR6"),n("D/PP"),n("D4uH")),$=(n("e0XP"),n("OS1Z")),U=n.n($),D=(n("pw1w"),n("xzgZ")),L=n.n(D);m.default.use(j.a),m.default.component("icon",N.a),m.default.use(U.a),m.default.component("full-calendar",L.a),h()(d).forEach(function(e){m.default.filter(e,d[e])}),m.default.config.productionTip=!1,new m.default({el:"#app",router:E.c,store:T.a,template:"<App/>",components:{App:S}})},OPpm:function(e,t){},OibT:function(e,t){},Opzk:function(e,t,n){function o(e){var t=r[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var r={"./components/addgroup.vue":["zsKB",0],"./components/editgroup.vue":["4lE6",0],"./components/hosttransfer.vue":["8TIX",0],"./dashboard/components/BarChart.vue":["tRpm",1,0,48],"./dashboard/components/LineChart.vue":["M8F6",1,0,47],"./dashboard/components/PanelGroup.vue":["Nck9",16],"./dashboard/components/PieChart.vue":["w1Ih",1,0,46],"./dashboard/components/RaddarChart.vue":["7IYo",1,0,45],"./dashboard/index.vue":["ARoL",1,0,3],"./errorPage/403.vue":["6XGN",15],"./errorPage/404.vue":["AejC",11],"./hosts/components/addhost.vue":["3jMH",0,44],"./hosts/components/addidc.vue":["LK+4",43],"./hosts/components/edithost.vue":["EeTk",0,42],"./hosts/components/editidc.vue":["hfX5",41],"./hosts/hosts.vue":["QT8Y",0,10],"./hosts/idcs.vue":["9eVK",0,9],"./jobs/components/addjob.vue":["cjR3",0,34],"./jobs/components/editjob.vue":["yTcb",0,33],"./jobs/components/runjob.vue":["hB7h",0,32],"./jobs/jobs.vue":["RmA3",0,31],"./layout/Layout.vue":["AkUR"],"./layout/components/AppMain.vue":["BoPo"],"./layout/components/Navbar.vue":["6k2e"],"./layout/components/Sidebar/SidebarItem.vue":["tlvQ"],"./layout/components/Sidebar/index.vue":["WTox"],"./layout/components/TagsView.vue":["Vg/Y"],"./login/index.vue":["T+/8",30],"./menus/menuperm.vue":["4ZiJ",0,2],"./menus/menus.vue":["V309",14],"./threepays/components/addMerchant.vue":["b11G",0,40],"./threepays/components/addPaychannel.vue":["DQwc",0,39],"./threepays/components/editMerchant.vue":["KF07",0,38],"./threepays/components/editPaychannel.vue":["VPNs",0,37],"./threepays/merchant.vue":["0epf",0,8],"./threepays/paychannel.vue":["xYlS",0,7],"./threepays/paychannelname.vue":["rpgY",0,29],"./threepays/platform.vue":["y6sr",0,28],"./tools/cmdrun.vue":["YNe5",0,17],"./tools/test.vue":["z8an",27],"./tools/upload.vue":["6ohx",0,13],"./users/adduser.vue":["vadm",0,26],"./users/edituser.vue":["r1eV",0,25],"./users/roles.vue":["U+3Q",0,24],"./users/usergroups.vue":["URAK",0,6],"./users/users.vue":["Vt6Z",0,4],"./users/viewgroup.vue":["Aw+z",0,23],"./wikis/components/addwiki.vue":["3qKL",0,36],"./wikis/components/editwiki.vue":["5cvz",0,35],"./wikis/components/viewwiki.vue":["eNlX",0,22],"./wikis/wikiadmin.vue":["bkNQ",0,21],"./wikis/wikilist.vue":["fkPN",0,20],"./worktickets/components/addworkticket.vue":["Guws",0,19],"./worktickets/components/editworkticket.vue":["/pPl",0,12],"./worktickets/tickettype.vue":["rySo",0,18],"./worktickets/workticket.vue":["CH+q",0,5]};o.keys=function(){return Object.keys(r)},o.id="Opzk",e.exports=o},"PE+y":function(e,t){},QmSG:function(e,t,n){var o=void 0,r="https:"===window.location.protocol?"wss":"ws";o={apiUrl:"",super_group:"OMS_Super_Admin",wsurl:r+"://oms.tb-gaming.local/ws"};var a=o.apiUrl;e.exports={apiUrl:o.apiUrl,ws_url:o.wsurl,super_group:o.super_group,LIMIT:10,uploads:a+"/api/upload/",uploadurl:"https://httpbin.org/post",login:a+"/api/api-token-auth/",logout:a+"/api/api-auth/logout/",changePassword:a+"/api/changepasswd/",hosts:a+"/api/hosts/",idcs:a+"/api/idcs/",users:a+"/api/users/",groups:a+"/api/groups/",roles:a+"/api/roles/",worktickers:a+"/api/worktickers/",ticketcomments:a+"/api/ticketcomments/",ticketenclosures:a+"/api/ticketenclosures/",tickettypes:a+"/api/tickettypes/",platforms:a+"/api/platforms/",merchants:a+"/api/merchants/",threepayenclosures:a+"/api/threepayenclosures/",paychannels:a+"/api/paychannels/",paychannelnames:a+"/api/paychannelnames/",threepaycomments:a+"/api/threepaycomments/",platformpaychannels:a+"/api/platformpaychannels/",usermenuperms:a+"/api/usermenuperms/",routerinfo:a+"/api/routers/",firstmenus:a+"/api/firstmenus/",secondmenus:a+"/api/secondmenus/",menumetas:a+"/api/menumetas/",sendmail:a+"/api/sendmail/",sendmessage:a+"/api/sendmessage/",wikis:a+"/api/wikis/",jobs:a+"/api/jobs/",deployenvs:a+"/api/deployenvs/",deployjobs:a+"/api/deployjobs/",get_all_key:a+"/api/salts/get_all_key/",minions_status:a+"/api/salts/minions_status/",get_minion_info:a+"/api/salts/get_minion_info/",cmdrun:a+"/api/salts/cmdrun/",get_result:a+"/api/salts/get_result/"}},TI3O:function(e,t){},UVIz:function(e,t){},"Vg/Y":function(e,t,n){"use strict";function o(e){n("k1KJ")}function r(e){n("1FsG"),n("tMGF")}Object.defineProperty(t,"__esModule",{value:!0});var a=n("BO1k"),i=n.n(a),s={name:"scrollPane",data:function(){return{left:0}},methods:{handleScroll:function(e){e.preventDefault();var t=this.$refs.scrollContainer,n=t.offsetWidth,o=this.$refs.scrollWrapper,r=o.offsetWidth;e.wheelDelta>0?this.left=Math.min(0,this.left+e.wheelDelta):n-15<r?this.left<-(r-n+15)?this.left=this.left:this.left=Math.max(this.left+e.wheelDelta,n-r-15):this.left=0},moveToTarget:function(e){var t=this.$refs.scrollContainer,n=t.offsetWidth,o=e.offsetLeft,r=e.offsetWidth;o<-this.left?this.left=15-o:o+15>-this.left&&o+r<-this.left+n-15||(this.left=-(o-(n-r)+15))}}},c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"scrollContainer",staticClass:"scroll-container",on:{mousewheel:e.handleScroll}},[n("div",{ref:"scrollWrapper",staticClass:"scroll-wrapper",style:{left:e.left+"px"}},[e._t("default")],2)])},u=[],l={render:c,staticRenderFns:u},d=l,p=n("VU/8"),h=o,m=p(s,d,!1,h,"data-v-7ce31019",null),f=m.exports,v={components:{ScrollPane:f},computed:{visitedViews:function(){return this.$store.state.app.visitedViews}},mounted:function(){this.addViewTags()},methods:{closeViewTags:function(e,t){var n=this;this.$store.dispatch("delVisitedViews",e).then(function(t){if(n.isActive(e)){var o=t.slice(-1)[0];o?n.$router.push(o.path):n.$router.push("/")}}),t.preventDefault()},generateRoute:function(){return!!this.$route.name&&this.$route},addViewTags:function(){var e=this.generateRoute();if(!e)return!1;this.$store.dispatch("addVisitedViews",e)},isActive:function(e){return e.path===this.$route.path||e.name===this.$route.name},moveToCurrentTag:function(){var e=this,t=this.$refs.tag;this.$nextTick(function(){var n=!0,o=!1,r=void 0;try{for(var a,s=i()(t);!(n=(a=s.next()).done);n=!0){var c=a.value;if(c.to===e.$route.path){e.$refs.scrollPane.moveToTarget(c.$el);break}}}catch(e){o=!0,r=e}finally{try{!n&&s.return&&s.return()}finally{if(o)throw r}}})}},watch:{$route:function(){this.addViewTags(),this.moveToCurrentTag()}}},g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("scroll-pane",{ref:"scrollPane",staticClass:"tags-view-container"},e._l(Array.from(e.visitedViews),function(t){return n("router-link",{key:t.path,ref:"tag",refInFor:!0,staticClass:"tags-view-item",class:e.isActive(t)?"active":"",attrs:{to:t.path}},[e._v("\n    "+e._s(t.name)+"\n    "),n("span",{staticClass:"el-icon-close",on:{click:function(n){e.closeViewTags(t,n)}}})])}))},w=[],b={render:g,staticRenderFns:w},_=b,k=n("VU/8"),y=r,S=k(v,_,!1,y,"data-v-3444d911",null);t.default=S.exports},WTox:function(e,t,n){"use strict";function o(e){n("OPpm")}Object.defineProperty(t,"__esModule",{value:!0});var r=n("Dd8w"),a=n.n(r),i=n("NYxO"),s=n("tlvQ"),c={name:"scrollBar",data:function(){return{top:0}},methods:{handleScroll:function(e){e.preventDefault();var t=this.$refs.scrollContainer,n=t.offsetHeight,o=this.$refs.scrollWrapper,r=o.offsetHeight;e.wheelDelta>0?this.top=Math.min(0,this.top+e.wheelDelta):n-15<r?this.top<-(r-n+15)?this.top=this.top:this.top=Math.max(this.top+e.wheelDelta,n-r-15):this.top=0}}},u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"scrollContainer",staticClass:"scroll-container",on:{mousewheel:e.handleScroll}},[n("div",{ref:"scrollWrapper",staticClass:"scroll-wrapper",style:{top:e.top+"px"}},[e._t("default")],2)])},l=[],d={render:u,staticRenderFns:l},p=d,h=n("VU/8"),m=o,f=h(c,p,!1,m,"data-v-46ac4d68",null),v=f.exports,g={components:{SidebarItem:s.default,ScrollBar:v},computed:a()({},Object(i.b)(["permission_routers","sidebar"]),{isCollapse:function(){return!this.sidebar.opened}})},w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("scroll-bar",[n("el-menu",{attrs:{mode:"vertical","default-active":e.$route.path,collapse:e.isCollapse,"background-color":"#304156","text-color":"#fff","active-text-color":"#409EFF","unique-opened":!0}},[n("sidebar-item",{attrs:{routes:e.permission_routers}})],1)],1)},b=[],_={render:w,staticRenderFns:b},k=_,y=n("VU/8"),S=y(g,k,!1,null,null,null);t.default=S.exports},YaEn:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return c}),n.d(t,"d",function(){return u});var o=n("7+uW"),r=n("/ocq"),a=n("AkUR"),i=n("A66B");o.default.use(r.a);var s=[{path:"/login",component:i("login/index"),hidden:!0},{path:"/404",component:i("errorPage/404"),hidden:!0},{path:"/403",component:i("errorPage/403"),hidden:!0},{path:"",component:a.default,icon:"dashboard",redirect:"dashboard",children:[{path:"dashboard",component:i("dashboard/index"),name:"首页",icon:"dashboard",meta:{noCache:!0}}]},{name:"文档系统",path:"/wikis",component:a.default,icon:"paper-plane",redirect:"noredirect",children:[{path:"wikiadmin",component:i("wikis/wikiadmin"),name:"文档管理"},{path:"addwiki",hidden:!0,component:i("wikis/components/addwiki"),name:"添加文档"},{path:"editwiki/:wikiid",hidden:!0,component:i("wikis/components/editwiki"),name:"编辑文档"},{path:"viewwiki/:wikiid",hidden:!0,component:i("wikis/components/viewwiki"),name:"查看文档"},{path:"wikilist",component:i("wikis/wikilist"),name:"文档中心"}]}];t.c=new r.a({scrollBehavior:function(){return{y:0}},routes:s});var c=[{name:"工单系统",path:"/worktickets",component:a.default,icon:"leaf",redirect:"workticket",children:[{path:"workticket",component:i("worktickets/workticket"),name:"工单列表"},{path:"tickettype",component:i("worktickets/tickettype"),name:"工单类型"},{path:"addworkticket",hidden:!0,component:i("worktickets/components/addworkticket"),name:"添加工单"},{path:"editworkticket/:ticketid",hidden:!0,component:i("worktickets/components/editworkticket"),name:"编辑工单"}]},{name:"第三支付对接",path:"/threepays",component:a.default,icon:"bitcoin",redirect:"threepay",children:[{path:"paychannel",component:i("threepays/paychannel"),name:"支付通道列表"},{path:"merchant",component:i("threepays/merchant"),name:"商户列表"},{path:"paychannelname",component:i("threepays/paychannelname"),name:"通道类型"}]},{name:"用户管理",path:"/users",component:a.default,icon:"user",redirect:"users",children:[{path:"users",component:i("users/users"),name:"用户列表"},{path:"usergroups",component:i("users/usergroups"),name:"用户组列表"},{path:"roles",component:i("users/roles"),name:"角色列表"}]},{name:"菜单管理",path:"/menus",component:a.default,icon:"fire",redirect:"menus",children:[{path:"menus",component:i("menus/menus"),name:"菜单列表"},{path:"menuperm",component:i("menus/menuperm"),name:"菜单权限"}]},{name:"主机管理",path:"/hosts",component:a.default,icon:"desktop",redirect:"hosts",children:[{path:"hosts",component:i("hosts/hosts"),name:"主机列表"},{path:"idcs",component:i("hosts/idcs"),name:"机房列表"}]},{name:"发布管理",path:"/jobs",component:a.default,icon:"tasks",redirect:"jobs",children:[{path:"jobs",component:i("jobs/jobs"),name:"项目列表"},{path:"addjob",hidden:!0,component:i("jobs/components/addjob"),name:"新建项目"},{path:"editjob/:job_id",hidden:!0,component:i("jobs/components/editjob"),name:"编辑项目"},{path:"runjob/:job_id",hidden:!0,component:i("jobs/components/runjob"),name:"构建项目"}]},{name:"工具管理",path:"/tools",component:a.default,icon:"cogs",redirect:"upload",children:[{path:"cmdrun",component:i("tools/cmdrun"),name:"远程命令执行"},{path:"upload",component:i("tools/upload"),name:"上传列表"},{path:"test",component:i("tools/test"),name:"测试页面"}]}],u=[{path:"*",redirect:"/404",hidden:!0}]},cJIv:function(e,t){},e0XP:function(e,t){},hnqy:function(e,t){},k1KJ:function(e,t){},prwc:function(e,t){},pw1w:function(e,t){},tMGF:function(e,t){},tlvQ:function(e,t,n){"use strict";function o(e){n("PE+y")}Object.defineProperty(t,"__esModule",{value:!0});var r={name:"SidebarItem",props:{routes:{type:Array}},data:function(){return{iconsize:1.4}},methods:{}},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu-wrapper"},[e._l(e.routes,function(t){return!t.hidden&&t.children.length>0?[1!==t.children.length||t.children[0].children||"dashboard"!=t.children[0].icon?n("el-submenu",{key:t.name,attrs:{index:t.name||t.path}},[n("template",{slot:"title"},[t.icon?n("icon",{staticClass:"wscn-icon",attrs:{name:t.icon,scale:e.iconsize}}):e._e(),e._v(" "),t&&t.name?n("span",[e._v(e._s(t.name))]):e._e()],1),e._v(" "),e._l(t.children,function(o){return o.hidden?e._e():[o.children&&o.children.length>0?n("sidebar-item",{key:o.path,staticClass:"nest-menu",attrs:{routes:[o]}}):n("router-link",{key:o.name,attrs:{to:t.path+"/"+o.path}},[n("el-menu-item",{attrs:{index:t.path+"/"+o.path}},[n("icon",{staticClass:"child-icon",attrs:{name:"diamond",scale:"1"}}),e._v(" "),o&&o.name?n("span",[e._v(e._s(o.name))]):e._e()],1)],1)]})],2):n("router-link",{key:t.children[0].name,attrs:{to:t.path+"/"+t.children[0].path}},[n("el-menu-item",{staticClass:"submenu-title-noDropdown",attrs:{index:t.path+"/"+t.children[0].path}},[t.children[0].icon?n("icon",{staticClass:"wscn-icon",attrs:{name:t.children[0].icon,scale:e.iconsize}}):e._e(),e._v(" "),t.children[0]&&t.children[0].name?n("span",[e._v(e._s(t.children[0].name))]):e._e()],1)],1)]:e._e()})],2)},i=[],s={render:a,staticRenderFns:i},c=s,u=n("VU/8"),l=o,d=u(r,c,!1,l,"data-v-74a8b2ec",null);t.default=d.exports},tvR6:function(e,t){},vLgD:function(e,t,n){"use strict";var o=n("//Fk"),r=n.n(o),a=n("mtWM"),i=n.n(a),s=n("zL8q"),c=(n.n(s),n("IcnI"));i.a.defaults.xsrfCookieName="csrftoken",i.a.defaults.xsrfHeaderName="X-CSRFToken";var u=i.a.create({baseURL:"http://oms.tb-gaming.local",timeout:8e3});u.interceptors.request.use(function(e){if(c.a.getters.token){var t=c.a.getters.token;e.headers.Authorization="token "+t,e.headers["X-CSRFToken"]=t}return e.headers["Content-Type"]="application/json;charset=utf-8",e},function(e){console.log(e),r.a.reject(e)}),u.interceptors.response.use(function(e){return e},function(e){return console.log("err"+e),Object(s.Message)({message:e.message,type:"error",duration:5e3}),r.a.reject(e)}),t.a=u},zp1X:function(e,t,n){"use strict";function o(e){return Object(s.a)({url:u.a.usermenuperms,method:"post",data:e})}function r(e,t){return Object(s.a)({url:u.a.usermenuperms,method:"get",params:e})}function a(e,t){return Object(s.a)({url:u.a.usermenuperms+e+"/",method:"put",data:t})}function i(e){return Object(s.a)({url:u.a.routerinfo+e,method:"get"})}t.c=o,t.a=r,t.d=a,t.b=i;var s=n("vLgD"),c=n("QmSG"),u=n.n(c)}},["NHnr"]);