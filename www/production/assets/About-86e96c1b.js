import{x as _,u as C,o as b,f,h as t,p as e,t as d,a as u,w as l,j as n,F as h}from"./index-286c24e3.js";import{a as r}from"./VBtn-c6cd72bf.js";import"./tag-a66d9682.js";const m=_({id:"counter",state:()=>({count:10}),actions:{increaseCount(){this.count++},decreaseCount(){this.count--}},getters:{oddOrEven:a=>a.count%2===0?"even":"odd"}}),p={class:"about"},k=t("h1",null,"About",-1),S=t("br",null,null,-1),x=t("br",null,null,-1),g=t("br",null,null,-1),v=t("br",null,null,-1),B=t("br",null,null,-1),E=t("br",null,null,-1),A={__name:"About",setup(a){const o=m(),c=C();return(V,s)=>(b(),f(h,null,[t("div",p,[k,t("button",{onClick:s[0]||(s[0]=(...i)=>e(o).increaseCount&&e(o).increaseCount(...i)),class:"counter-button"},d(e(o).count),1),S,x,u(r,{onClick:e(o).decreaseCount},{default:l(()=>[n("--")]),_:1},8,["onClick"]),n(" "),u(r,{onClick:e(o).increaseCount},{default:l(()=>[n("++")]),_:1},8,["onClick"]),g,v,u(r,{onClick:s[1]||(s[1]=i=>e(c).setModule(5))},{default:l(()=>[n("SET MODULE")]),_:1})]),B,E,n(" "+d(e(c).dialog),1)],64))}};export{A as default};
