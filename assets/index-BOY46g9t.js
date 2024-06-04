var N=Object.defineProperty;var I=(e,t,n)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var _=(e,t,n)=>(I(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function u(){}function O(e){return e()}function P(){return Object.create(null)}function p(e){e.forEach(O)}function A(e){return typeof e=="function"}function z(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function B(e){return Object.keys(e).length===0}function q(e,t,n){e.insertBefore(t,n||null)}function L(e){e.parentNode&&e.parentNode.removeChild(e)}function D(e){return document.createElement(e)}function F(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function M(e){return Array.from(e.childNodes)}let $;function h(e){$=e}const f=[],j=[];let d=[];const k=[],G=Promise.resolve();let y=!1;function R(){y||(y=!0,G.then(S))}function b(e){d.push(e)}const g=new Set;let a=0;function S(){if(a!==0)return;const e=$;do{try{for(;a<f.length;){const t=f[a];a++,h(t),T(t.$$)}}catch(t){throw f.length=0,a=0,t}for(h(null),f.length=0,a=0;j.length;)j.pop()();for(let t=0;t<d.length;t+=1){const n=d[t];g.has(n)||(g.add(n),n())}d.length=0}while(f.length);for(;k.length;)k.pop()();y=!1,g.clear(),h(e)}function T(e){if(e.fragment!==null){e.update(),p(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(b)}}function V(e){const t=[],n=[];d.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),d=t}const W=new Set;function H(e,t){e&&e.i&&(W.delete(e),e.i(t))}function K(e,t,n){const{fragment:i,after_update:r}=e.$$;i&&i.m(t,n),b(()=>{const o=e.$$.on_mount.map(O).filter(A);e.$$.on_destroy?e.$$.on_destroy.push(...o):p(o),e.$$.on_mount=[]}),r.forEach(b)}function Q(e,t){const n=e.$$;n.fragment!==null&&(V(n.after_update),p(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function U(e,t){e.$$.dirty[0]===-1&&(f.push(e),R(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function J(e,t,n,i,r,o,s=null,C=[-1]){const m=$;h(e);const l=e.$$={fragment:null,ctx:[],props:o,update:u,not_equal:r,bound:P(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(m?m.$$.context:[])),callbacks:P(),dirty:C,skip_bound:!1,root:t.target||m.$$.root};s&&s(l.root);let w=!1;if(l.ctx=n?n(e,t.props||{},(c,x,...v)=>{const E=v.length?v[0]:x;return l.ctx&&r(l.ctx[c],l.ctx[c]=E)&&(!l.skip_bound&&l.bound[c]&&l.bound[c](E),w&&U(e,c)),x}):[],l.update(),w=!0,p(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){const c=M(t.target);l.fragment&&l.fragment.l(c),c.forEach(L)}else l.fragment&&l.fragment.c();t.intro&&H(e.$$.fragment),K(e,t.target,t.anchor),S()}h(m)}class X{constructor(){_(this,"$$");_(this,"$$set")}$destroy(){Q(this,1),this.$destroy=u}$on(t,n){if(!A(n))return u;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!B(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Y="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Y);function Z(e){let t;return{c(){t=D("html"),t.innerHTML='<head><meta name="viewport" content="width=device-width, initial-scale=1"/> <link rel="stylesheet" href="main.css"/> <link rel="icon" type="image/x-icon" href="favicon.ico"/> <title>Eli Gooch | Projects</title></head> <body><div class="container mx-auto"><h2 class="absolute ml-5 mt-5 float-left"><a class="websiteLink" href="https://www.eligooch.com/">Eli Gooch</a></h2> <br/> <div class="container-fluid projects" id="projects"><h1 class="float-none text-4xl">Projects</h1> <ul><li><a class="flex-none" href="CSC160_FinalProject/index.html">CSC 160 Final Project</a></li> <li><a href="react_blog/public/index.html">React Blog</a></li> <li><a href="3D-Engine/index.html">3D Engine</a></li> <li><a href="Web-API-Project/index.html">Web API</a></li> <li><a href="etrade-data/index.html">E-Trade Data Visualization</a></li> <li><a href="quizbowl.io/quizbowl-io/index.html">Quizbowl.io</a></li></ul></div></div></body>',F(t,"lang","en")},m(n,i){q(n,t,i)},p:u,i:u,o:u,d(n){n&&L(t)}}}class ee extends X{constructor(t){super(),J(this,t,null,Z,z,{})}}new ee({target:document.getElementById("app")});
