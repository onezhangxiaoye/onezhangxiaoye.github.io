import{d as N,s as d,_ as G,o as u,c as E,j as a,n,I as D,w as R,a3 as z,a4 as B,a5 as A,a as t,F as O,E as J,P as U,t as H,p as K,l as M,a1 as T}from"./chunks/framework.DSzkhk7e.js";function q(){return[{key:"a",index:1,class:{"grid-item1":!0},style:{"background-color":"rgb(239,52,41)"}},{key:"b",index:2,class:{"grid-item2":!0},style:{"background-color":"rgb(246,143,37)"}},{key:"c",index:3,class:{"grid-item3":!0},style:{"background-color":"rgb(75,168,70)"}},{key:"d",index:4,class:{"grid-item4":!0},style:{"background-color":"rgb(4,118,194)"}},{key:"e",index:5,class:{"grid-item5":!0},style:{"background-color":"rgb(192,119,175)"}},{key:"f",index:6,class:{"grid-item6":!0},style:{"background-color":"rgb(248,210,157)"}},{key:"g",index:7,class:{"grid-item7":!0},style:{"background-color":"rgb(180,168,127)"}},{key:"h",index:8,class:{"grid-item8":!0},style:{"background-color":"rgb(208,228,168)"}},{key:"j",index:9,class:{"grid-item9":!0},style:{"background-color":"rgb(77,199,236)"}}]}let Q=100;function W(){return{key:Q+++"",class:{},style:{"background-color":"#fff"}}}const X=N({setup(){const s=d(0),i=d("css-grid-box-row-column"),p=d([]),k=d(void 0),m=d(!0),y=d(!1);function e(l){m.value=l==="rowColumnLinesActive",y.value=l==="gridTemplateColumnsActive"}function b(l){e("rowColumnLinesActive"),i.value="css-grid-box-row-column",k.value=l;let r=[],c=0,V=q();for(let C=1;C<8;C++)for(let F=1;F<8;F++)r.push(C%2|F%2?W():V[c++]);p.value=r,console.log(p.value)}b(void 0);function h(l){for(let r=0,c=0;r<p.value.length;r++)r!==0&&r%7===0&&c++,p.value[r].class["css-grid-high-light-animation"]=l(c,r%7)}const v=d(!1),f=d(!1),x=d(!1),w=d(!1);function g(l){v.value=l==="rowLinesActive",f.value=l==="columnLinesActive",x.value=l==="columnActive",w.value=l==="rowActive"}function j(){g("rowLinesActive"),h(()=>!1),setTimeout(()=>{h(l=>l%2===0)})}function P(){g("columnLinesActive"),h(()=>!1),setTimeout(()=>{h((l,r)=>r%2===0)})}function S(){g("rowActive"),h(()=>!1),setTimeout(()=>{h((l,r)=>l%2===1)})}function $(){g("columnActive"),h(()=>!1),setTimeout(()=>{h((l,r)=>r%2===1)})}function L(){h(()=>!1),p.value=q(),k.value=5,e("gridTemplateColumnsActive"),i.value="css-grid-box-grid-template-columns1",console.log(p.value)}function I(l){return k.value===l?"button-active":""}function _(l,r){k.value=l,typeof r=="string"?i.value=r:r()}return{rowColumnLinesActive:m,gridTemplateColumnsActive:y,activeIndex:k,count:s,arr:p,rowLinesActive:v,columnLinesActive:f,columnActive:x,rowActive:w,boxClass:i,rowColumnLinesTest:b,highlightRowLines:j,highlightColumnLines:P,highlightRows:S,highlightColumns:$,gridTemplateColumnsTest:L,isActive:I,itemClick:_}}}),o=s=>(K("data-v-707819d1"),s=s(),M(),s),Y={class:"grid-test"},Z={class:"css-grid-buttons"},ss=o(()=>a("br",null,null,-1)),is={class:"css-grid-buttons"},as=o(()=>a("strong",null,"点击下方样式进行切换",-1)),ts={style:{"max-height":"40vh",overflow:"auto"}},es=o(()=>a("strong",null,"/**  grid-template-columns: repeat(3, 90px);  **/ ",-1)),ls=o(()=>a("strong",null,"/**   grid-template-columns: repeat(auto-fill, 40px);  **/ ",-1)),ns=o(()=>a("strong",null,"/**   grid-template-columns:30px 1fr 2fr;  **/ ",-1)),rs=o(()=>a("strong",null,"/**    grid-template-columns:30% 30% 40%;  **/ ",-1)),os=o(()=>a("strong",null,"/**   grid-template-columns: repeat(3, auto);  **/ ",-1)),ds=o(()=>a("strong",null,"/**   justify-content: left; align-content: center;  **/ ",-1)),ps=o(()=>a("strong",null,"/**   grid-auto-flow: column;  **/",-1)),hs=o(()=>a("strong",null,"/**   grid-auto-flow: row dense;  **/",-1)),ks=o(()=>a("strong",null,"/**   grid-auto-flow: row;  **/",-1)),gs=o(()=>a("strong",null,"/**   justify-items: left;align-items 同理  **/",-1)),cs=o(()=>a("strong",null,"/**   grid-auto-rows: 45px;grid-auto-columns: 45px;  **/",-1)),us=o(()=>a("strong",null,"/**   grid-column-start: 5;grid-column-end: 6;  **/",-1)),Es=o(()=>a("strong",null,"/**   grid-row-start: 4;grid-row-end: 5;  **/",-1)),ms=o(()=>a("strong",null,"/**   grid-column: 1 / 3;grid-row: 1 / 3;  **/",-1)),ys=o(()=>a("strong",null,"/**   grid-column: 1 / 3;grid-row: 1 / 3;  **/",-1));function Cs(s,i,p,k,m,y){return u(),E("div",Y,[a("div",Z,[a("button",{class:n(s.rowColumnLinesActive?"button-active":""),onClick:i[0]||(i[0]=e=>s.rowColumnLinesTest(1))},"行列及网格线区分实验",2),a("button",{class:n(s.gridTemplateColumnsActive?"button-active":""),onClick:i[1]||(i[1]=(...e)=>s.gridTemplateColumnsTest&&s.gridTemplateColumnsTest(...e))},"grid-template-columns实验",2)]),ss,D(z,{class:n([s.boxClass,"css-grid-box"]),name:"flip-list",tag:"div"},{default:R(()=>[(u(!0),E(O,null,J(s.arr,e=>(u(),E("div",{key:e.key,style:U(e.style),class:n(e.class)},H(e.index||""),7))),128))]),_:1},8,["class"]),a("div",is,[as,B(a("div",null,[a("button",{class:n(s.isActive(0)),onClick:i[2]||(i[2]=e=>s.itemClick(0,s.highlightRows))},"高亮行",2),a("button",{class:n(s.isActive(1)),onClick:i[3]||(i[3]=e=>s.itemClick(1,s.highlightColumns))},"高亮列",2),a("button",{class:n(s.isActive(2)),onClick:i[4]||(i[4]=e=>s.itemClick(2,s.highlightRowLines))},"高亮行网格线",2),a("button",{class:n(s.isActive(3)),onClick:i[5]||(i[5]=e=>s.itemClick(3,s.highlightColumnLines))},"高亮列网格线",2)],512),[[A,s.rowColumnLinesActive]]),B(a("div",ts,[a("pre",{class:n(s.isActive(5)),onClick:i[6]||(i[6]=e=>s.itemClick(5,"css-grid-box-grid-template-columns1"))},[t("    "),es,t(`
    .css-grid-box-grid-template-columns1 {
        grid-template-columns: repeat(3, 90px);
        row-gap: 15px;
        column-gap: 15px;
    }
                `)],2),a("pre",{class:n(s.isActive(6)),onClick:i[7]||(i[7]=e=>s.itemClick(6,"css-grid-box-grid-template-columns2"))},[t("    "),ls,t(`
    .css-grid-box-grid-template-columns2 {
        grid-template-columns: repeat(auto-fill, 40px);
        row-gap: 15px;
        column-gap: 15px;
    }
                `)],2),a("pre",{class:n(s.isActive(7)),onClick:i[8]||(i[8]=e=>s.itemClick(7,"css-grid-box-grid-template-columns3"))},[t("    "),ns,t(`
    .css-grid-box-grid-template-columns3 {
        grid-template-columns:30px 1fr 2fr;
        row-gap: 15px;
        column-gap: 15px;
    }
                `)],2),a("pre",{class:n(s.isActive(8)),onClick:i[9]||(i[9]=e=>s.itemClick(8,"css-grid-box-grid-template-columns4"))},[t("    "),rs,t(`
    .css-grid-box-grid-template-columns4 {
        grid-template-columns:30% 30% 40%;
        row-gap: 15px;
    }
                `)],2),a("pre",{class:n(s.isActive(9)),onClick:i[10]||(i[10]=e=>s.itemClick(9,"css-grid-box-grid-template-columns5"))},[t("    "),os,t(`
    .css-grid-box-grid-template-columns5 {
        grid-template-columns: repeat(3, auto);
        row-gap: 15px;
        column-gap: 15px;
    }
                `)],2),a("pre",{class:n(s.isActive(10)),onClick:i[11]||(i[11]=e=>s.itemClick(10,"css-grid-box-grid-template-columns6"))},[t("    "),ds,t(`
    .css-grid-box-grid-template-columns6 {
        grid-template-columns: repeat(3, 60px);
        grid-template-rows: repeat(3, 60px);
        justify-content: left;
        align-content: center;
    }
                `)],2),a("pre",{class:n(s.isActive(11)),onClick:i[12]||(i[12]=e=>s.itemClick(11,"css-grid-box-grid-template-columns8"))},[t("    "),ps,t(`
    .css-grid-box-grid-template-columns8 {
        grid-template-columns: repeat(3, auto);
        grid-template-rows: repeat(3, auto);
        grid-auto-flow: column;
    }
                `)],2),a("pre",{class:n(s.isActive(12)),onClick:i[13]||(i[13]=e=>s.itemClick(12,"css-grid-box-grid-template-columns9"))},[t("    "),hs,t(`
    .css-grid-box-grid-template-columns9 {
        grid-template-columns: repeat(3, auto);
        grid-template-rows: repeat(3, auto);
        grid-auto-flow: row dense;
    }

    .css-grid-box-grid-template-columns9 .grid-item1,
    .css-grid-box-grid-template-columns9 .grid-item2{
        grid-row-start: 1;
        grid-row-end: 3;
    }
                `)],2),a("pre",{class:n(s.isActive(13)),onClick:i[14]||(i[14]=e=>s.itemClick(13,"css-grid-box-grid-template-columns10"))},[t("    "),ks,t(`
    .css-grid-box-grid-template-columns10 {
        grid-template-columns: repeat(3, auto);
        grid-template-rows: repeat(3, auto);
        grid-auto-flow: row;
    }

    .css-grid-box-grid-template-columns10 .grid-item1,
    .css-grid-box-grid-template-columns10 .grid-item2{
        grid-row-start: 1;
        grid-row-end: 3;
    }
                `)],2),a("pre",{class:n(s.isActive(14)),onClick:i[15]||(i[15]=e=>s.itemClick(14,"css-grid-box-grid-template-columns11"))},[t("    "),gs,t(`
    .css-grid-box-grid-template-columns11 {
        grid-template-columns: repeat(3, auto);
        grid-template-rows: repeat(3, auto);
        justify-items: left;
    }
                `)],2),a("pre",{class:n(s.isActive(15)),onClick:i[16]||(i[16]=e=>s.itemClick(15,"css-grid-box-grid-template-columns12"))},[t("    "),cs,t(`
    `),us,t(`
    `),Es,t(`
    .css-grid-box-grid-template-columns12 {
        grid-template-columns: repeat(3, 100px);
        grid-template-rows: repeat(3, 100px);
        grid-auto-rows: 45px;
        grid-auto-columns: 45px;
    }
    .css-grid-box-grid-template-columns12 .grid-item3 {
        grid-column-start: 5;
        grid-column-end: 6;
    }
    .css-grid-box-grid-template-columns12 .grid-item8 {
        grid-row-start: 4;
        grid-row-end: 5;
    }
                `)],2),a("pre",{class:n(s.isActive(16)),onClick:i[17]||(i[17]=e=>s.itemClick(16,"css-grid-box-grid-template-columns13"))},[t("    "),ms,t(`
    .css-grid-box-grid-template-columns13 {
        grid-template-columns: repeat(4, auto);
        grid-template-rows: repeat(4, auto);
    }
    .css-grid-box-grid-template-columns13 .grid-item1 {
        grid-column: 1 / 3;
        grid-row: 1 / 3;
    }
    .css-grid-box-grid-template-columns13 .grid-item2 {
        grid-column: 3 / span 2;
        grid-row: 1;
    }
                `)],2),a("pre",{class:n(s.isActive(17)),onClick:i[18]||(i[18]=e=>s.itemClick(17,"css-grid-box-grid-template-columns14"))},[t("    "),ys,t(`
    .css-grid-box-grid-template-columns14 {
        grid-template-columns: repeat(3, 60px);
        grid-template-rows: repeat(3, 60px);
        justify-content: center;
        align-content: center;
    }
    .css-grid-box-grid-template-columns14 .grid-item1 {
        justify-self: left;
    }
    .css-grid-box-grid-template-columns14 .grid-item3 {
        align-self: start;
    }
    .css-grid-box-grid-template-columns14 .grid-item9 {
        place-self:end right;
    }
                `)],2)],512),[[A,s.gridTemplateColumnsActive]])])])}const Fs=G(X,[["render",Cs],["__scopeId","data-v-707819d1"]]),bs=T("",6),vs=T("",40),ws=JSON.parse('{"title":"CSS-Grid-网格布局","description":"","frontmatter":{},"headers":[],"relativePath":"css/css-grid.md","filePath":"css/css-grid.md","lastUpdated":1716447218000}'),fs={name:"css/css-grid.md"},Bs=Object.assign(fs,{setup(s){return(i,p)=>(u(),E("div",null,[bs,D(Fs),vs]))}});export{ws as __pageData,Bs as default};
