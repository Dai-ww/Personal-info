import{d as p,u,a as h,c as d,b as f,t as g,e as v,r as y,_ as x,f as r,g as e,h as a,F as b,i as N,n as k,o as l,j as P,k as V,l as w}from"./index-BXX0078d.js";import{N as D}from"./NoteDisplay-BsQxhtjC.js";const S=p({__name:"PresenterPrint",setup(m,{expose:n}){n(),u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),h({title:`Notes - ${d.title}`});const t={slidesWithNote:f(()=>y.map(s=>{var i;return(i=s.meta)==null?void 0:i.slide}).filter(s=>s!==void 0&&s.noteHTML!=="")),get configs(){return d},get themeVars(){return g},get total(){return v},NoteDisplay:D};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}}),L={class:"m-4"},T={class:"mb-10"},W={class:"text-4xl font-bold mt-2"},j={class:"opacity-50"},B={class:"text-lg"},H={class:"font-bold flex gap-2"},z={class:"opacity-50"},C={key:0,class:"border-gray-400/50 mb-8"};function F(m,n,_,t,s,i){return l(),r("div",{id:"page-root",style:k(t.themeVars)},[e("div",L,[e("div",T,[e("h1",W,a(t.configs.title),1),e("div",j,a(new Date().toLocaleString()),1)]),(l(!0),r(b,null,N(t.slidesWithNote,(o,c)=>(l(),r("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[e("div",null,[e("h2",B,[e("div",H,[e("div",z,a(o==null?void 0:o.no)+"/"+a(t.total),1),P(" "+a(o==null?void 0:o.title)+" ",1),n[0]||(n[0]=e("div",{class:"flex-auto"},null,-1))])]),V(t.NoteDisplay,{"note-html":o.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<t.slidesWithNote.length-1?(l(),r("hr",C)):w("v-if",!0)]))),128))])],4)}const E=x(S,[["render",F],["__file","/Users/dai/Desktop/Document/Personal-info/node_modules/.pnpm/@slidev+client@0.47.5_t3d6mhygnv3saepawueym7dagm/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
