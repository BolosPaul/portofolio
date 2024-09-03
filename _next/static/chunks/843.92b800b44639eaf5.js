"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[843],{9350:function(e,t,r){r.d(t,{w_:function(){return o}});var l=r(2265),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=l.createContext&&l.createContext(n),s=function(){return(s=Object.assign||function(e){for(var t,r=1,l=arguments.length;r<l;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},i=function(e,t){var r={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>t.indexOf(l)&&(r[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,l=Object.getOwnPropertySymbols(e);n<l.length;n++)0>t.indexOf(l[n])&&Object.prototype.propertyIsEnumerable.call(e,l[n])&&(r[l[n]]=e[l[n]]);return r};function o(e){return function(t){return l.createElement(c,s({attr:s({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return l.createElement(t.tag,s({key:r},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var r,n=e.attr,a=e.size,o=e.title,c=i(e,["attr","size","title"]),u=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),l.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,c,{className:r,style:s(s({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),o&&l.createElement("title",null,o),e.children)};return void 0!==a?l.createElement(a.Consumer,null,function(e){return t(e)}):t(n)}},3059:function(e,t,r){r.r(t),r.d(t,{default:function(){return o}});var l=r(7437),n=r(2265),a=r(7222),s=r(6648),i=r(8073);function o(e){let[t,r]=(0,n.useState)(!1),{loading:o,setLoading:c}=e,u=e=>{window.open(e,"_blank")};return(0,l.jsxs)("div",{className:"w-[330px] bg-accent/10 px-7 py-5 text-secondary transition-all hover:text-accent lg:w-[350px]",children:[(0,l.jsxs)("div",{className:"flex items-center justify-between",children:[(0,l.jsx)("a",{href:e.web?e.web:e.github,target:"_blank",rel:"noreferrer",className:"text-xl font-semibold tracking-wide",children:e.name}),(0,l.jsxs)("div",{className:"flex items-end gap-2 text-primary",children:[e.github&&(0,l.jsx)("a",{href:e.github,target:"_blank",rel:"noreferrer",title:"View github repository",className:"transition-all hover:text-accent",children:(0,l.jsx)(a.uOf,{size:16})}),e.web&&(0,l.jsx)("a",{href:e.web,target:"_blank",rel:"noreferrer",title:"View finished project",className:"transition-all hover:text-accent",children:(0,l.jsx)(a.AlO,{size:18})})]})]}),(0,l.jsxs)("div",{onClick:()=>{u(e.web?e.web:e.github)},onMouseEnter:()=>{r(!0)},onMouseLeave:()=>{r(!1)},className:"relative my-2 flex h-[180px] items-center justify-center",children:[(0,l.jsx)(s.default,{src:e.image,alt:e.name,className:"m-auto h-full w-full rounded-md object-cover"}),t?(0,l.jsxs)("div",{className:"absolute top-0 left-0 h-full w-full rounded-md ",children:[e.gif&&(0,l.jsx)(s.default,{src:e.gif,alt:e.name,onLoad:()=>c(!1),className:"m-auto h-full rounded-md object-cover"}),(0,l.jsxs)("p",{className:"absolute top-0 flex h-full w-full items-center justify-center bg-base_col_darker/60 text-white",children:[e.gif&&e.web&&"Live Demo",!e.gif&&e.web&&"Checkout Site",!e.web&&"Source Code"]}),o&&(0,l.jsx)("div",{className:"absolute top-0 left-0 flex h-full w-full items-center justify-center rounded-md bg-base_col_darker/60",children:(0,l.jsx)(i.TK,{})})]}):null]}),(0,l.jsx)("p",{className:"max-h-[130px] min-h-[130px] overflow-auto text-sm text-primary",children:e.desc}),(0,l.jsx)("div",{className:"mt-5 font-mono text-xs text-primary",children:e.stack})]})}}}]);