import*as e from"dns";import s from"spf-parse";import i from"ip-regex";import{curry as r,path as a,defaultTo as o,compose as n,reject as t,either as l,isNil as m,isEmpty as p,pathOr as c,propEq as u,length as d,flatten as f,or as h,prop as v,equals as N,propOr as P}from"rambda";var O,T;!function(e){e.include="include",e.version="version",e.all="all",e.mx="mx",e.ip4="ip4",e.ip6="ip6",e.a="a"}(O||(O={})),function(e){e.UNKNWON="EUNKNWON",e.NOTFOUND="ENOTFOUND",e.IPS_NOT_MATCH="IPSMATCH",e.INC_NOT_MATCH="INCMATCH",e.DOM_NOT_MATCH="DOMMATCH"}(T||(T={}));var M=T;const y=r(((e,s)=>s.includes(e))),C=(r,M={},C=!0)=>{let w={found:!1,ips:[],includes:[],domains:[],match:!1,lookups:0};const x=r=>(e=>i.v4().test(e)||i.v6().test(e))(r)?Promise.reject(new Error(`Domain ${r} is a raw ip !`)):new Promise(((i,a)=>{e.resolveTxt(r,((e,r)=>{if(e)return a(e);i(r.reduce(((e,s)=>[...e,...s])).filter((e=>e.includes("v=spf1"))).map((e=>({record:e,detail:s(e||"")}))))}))})),D=async(e,s)=>{if((e=>{const s=c([],["detail","mechanisms"],e);0!==d(s)&&(s.filter(h(u("type",O.ip4),u("type",O.ip6))).map(v("value")).forEach((e=>{y(e,w.ips)||w.ips.push(e)})),s.filter(u("type",O.include)).map(v("value")).forEach((e=>{w.lookups+=1,y(e,w.includes)||w.includes.push(e)})),s.filter(u("type",O.a)).map(v("value")).forEach((e=>{w.lookups+=1,y(e,w.domains)||w.domains.push(e)})),w.match=[N(w.includes,P([],"includes",M)),N(w.ips,P([],"ips",M)),N(w.domains,P([],"domains",M))].every(N(!0))||w.match)})(e),w.match&&C)return Promise.resolve(e);if(s<0)return Promise.resolve(e);const i=c([],["detail","mechanisms"],e).filter(u("type",O.include));if(0===d(i))return Promise.resolve(e);const r=await Promise.all(i.map((e=>e.value)).map((e=>x(e))));return e.includes=await Promise.all(f(r).map((e=>new Promise((async i=>i(await D(e,s-1))))))),Promise.resolve(e)};return x(r).then((e=>Promise.all(e.map((e=>a(["detail","valid"],e)?D(e,Math.max(0,o(10,M.maxDepth))):Promise.resolve(e)))).then((e=>{const s=n(t(l(m,p)),o([]));return Promise.resolve({records:e||[],found:{ips:s(w.ips),includes:s(w.includes),domains:s(w.domains)},isMatch:w.match,reason:"",lookups:w.lookups})})).catch((e=>Promise.reject({records:[],found:{ips:[],includes:[],domains:[]},isMatch:!1,reason:T.NOTFOUND})))))};export{M as InspecterError,C as SpfInspector,O as SpfType,C as default};
