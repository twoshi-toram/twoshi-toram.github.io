(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3],{396:function(t,e,r){var content=r(398);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("f4921640",content,!0,{sourceMap:!1})},397:function(t,e,r){"use strict";r(396)},398:function(t,e,r){var n=r(21)(!1);n.push([t.i,'a.sub-content-text{text-decoration:none}a.sub-content-text:hover:after,a:focus:after{content:"#";color:#1976d2}h2{margin:45px 0 .8em;padding-bottom:.7em;border-bottom:1px solid #999;width:100%}.sub-content-text{color:#273849!important}',""]),t.exports=n},413:function(t,e,r){"use strict";r.r(e);var n={name:"SubContent",props:{title:String}},o=(r(397),r(75)),c=r(89),l=r.n(c),f=r(487),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-row",[r("h2",{attrs:{id:t.title}},[r("a",{staticClass:"sub-content-text",attrs:{href:"#"+t.title}},[t._v(t._s(t.title))])])]),t._v(" "),r("v-row",[t._t("default")],2)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VRow:f.a})},418:function(t,e,r){var content=r(432);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("326dab29",content,!0,{sourceMap:!1})},431:function(t,e,r){"use strict";r(418)},432:function(t,e,r){var n=r(21)(!1);n.push([t.i,".content[data-v-62f36c99]{max-width:1200px}",""]),t.exports=n},437:function(t,e,r){"use strict";r(15),r(12),r(17),r(18);var n=r(3),o=(r(6),r(30),r(14),r(25),r(65),r(399),r(51),r(400),r(401),r(402),r(403),r(404),r(405),r(406),r(407),r(408),r(409),r(410),r(411),r(412),r(52),r(58),r(13),r(66),r(275),r(1)),c=r(90),l=r(2);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],O=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=v.reduce((function(t,e){return t["offset"+Object(l.E)(e)]={type:[String,Number],default:null},t}),{}),j=v.reduce((function(t,e){return t["order"+Object(l.E)(e)]={type:[String,Number],default:null},t}),{}),y={col:Object.keys(O),offset:Object.keys(m),order:Object.keys(j)};function h(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var w=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},O),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},j),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in r)l+=String(r[f]);var d=w.get(l);return d||function(){var t,e;for(e in d=[],y)y[e].forEach((function(t){var n=r[t],o=h(e,t,n);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),w.set(l,d)}(),t(r.tag,Object(c.a)(data,{class:d}),o)}})},491:function(t,e,r){"use strict";r.r(e);var n={name:"GameScreenPage"},o=(r(431),r(75)),c=r(89),l=r.n(c),f=r(437),d=r(394),v=r(168),O=r(487),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"content"},[r("v-row",[r("h1",[t._v("\n      ゲーム画面について\n    ")])]),t._v(" "),r("SubContent",{attrs:{title:"画面構成"}},[r("v-row",[r("v-col",{attrs:{cols:"9"}},[r("v-img",{attrs:{src:"https://dl.dropboxusercontent.com/s/i4s18u3keiqj4p1/%E5%86%99%E7%9C%9F%202022-02-11%208%2003%2030.jpg"}})],1)],1),t._v("\n    テストテスト\n  ")],1)],1)}),[],!1,null,"62f36c99",null);e.default=component.exports;l()(component,{SubContent:r(413).default}),l()(component,{VCol:f.a,VContainer:d.a,VImg:v.a,VRow:O.a})}}]);