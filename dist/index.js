"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("dns"),r=require("spf-parse"),s=require("ip-regex"),t=require("rambda");function p(e){var r=Object.create(null);return e&&Object.keys(e).forEach((function(s){if("default"!==s){var t=Object.getOwnPropertyDescriptor(e,s);Object.defineProperty(r,s,t.get?t:{enumerable:!0,get:function(){return e[s]}})}})),r.default=e,Object.freeze(r)}var i,o,a=p(e);exports.SpfType=void 0,(i=exports.SpfType||(exports.SpfType={})).include="include",i.version="version",i.all="all",i.mx="mx",i.ip4="ip4",i.ip6="ip6",i.a="a",function(e){e.UNKNWON="EUNKNWON",e.NOTFOUND="ENOTFOUND",e.IPS_NOT_MATCH="IPSMATCH",e.INC_NOT_MATCH="INCMATCH",e.DOM_NOT_MATCH="DOMMATCH"}(o||(o={}));var n=o;const l=t.curry(((e,r)=>r.includes(e))),c=(e,p={},i=!0)=>{let n={found:!1,ips:[],includes:[],domains:[],match:!1};const c=e=>(e=>s.v4().test(e)||s.v6().test(e))(e)?Promise.reject(new Error(`Domain ${e} is a raw ip !`)):new Promise(((s,t)=>{a.resolveTxt(e,((e,p)=>{if(e)return t(e);s(p.reduce(((e,r)=>[...e,...r])).filter((e=>e.includes("v=spf1"))).map((e=>({record:e,detail:r(e||"")}))))}))})),u=async(e,r)=>{if((e=>{const r=t.pathOr([],["detail","mechanisms"],e);0!==t.length(r)&&(r.filter(t.or(t.propEq("type",exports.SpfType.ip4),t.propEq("type",exports.SpfType.ip6))).map(t.prop("value")).forEach((e=>{l(e,n.ips)||n.ips.push(e)})),r.filter(t.propEq("type",exports.SpfType.include)).map(t.prop("value")).forEach((e=>{l(e,n.includes)||n.includes.push(e)})),r.filter(t.propEq("type",exports.SpfType.a)).map(t.prop("value")).forEach((e=>{l(e,n.domains)||n.domains.push(e)})),n.match=[t.equals(n.includes,t.propOr([],"includes",p)),t.equals(n.ips,t.propOr([],"ips",p)),t.equals(n.domains,t.propOr([],"domains",p))].every(t.equals(!0))||n.match)})(e),n.match&&i)return Promise.resolve(e);if(r<0)return Promise.resolve(e);const s=t.pathOr([],["detail","mechanisms"],e).filter(t.propEq("type",exports.SpfType.include));if(0===t.length(s))return Promise.resolve(e);const o=await Promise.all(s.map((e=>e.value)).map((e=>c(e))));return e.includes=await Promise.all(t.flatten(o).map((e=>new Promise((async s=>s(await u(e,r-1))))))),Promise.resolve(e)};return c(e).then((e=>Promise.all(e.map((e=>t.path(["detail","valid"],e)?u(e,Math.max(0,t.defaultTo(10,p.maxDepth))):Promise.resolve(e)))).then((e=>{const r=t.compose(t.reject(t.either(t.isNil,t.isEmpty)),t.defaultTo([]));return Promise.resolve({records:e||[],found:{ips:r(n.ips),includes:r(n.includes),domains:r(n.domains)},isMatch:n.match,reason:""})})).catch((e=>Promise.reject({records:[],found:{ips:[],includes:[],domains:[]},isMatch:!1,reason:o.NOTFOUND})))))};exports.InspecterError=n,exports.SpfInspector=c,exports.default=c;
