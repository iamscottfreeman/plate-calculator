if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const d=e=>i(e,n),f={module:{uri:n},exports:t,require:d};s[n]=Promise.all(a.map((e=>f[e]||d(e)))).then((e=>(c(...e),t)))}}define(["./workbox-8cd95969"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"5f96b94da285eafc03b58a472bb42448"},{url:"/_next/static/EsvByE-nQdPugmGTGh6QX/_buildManifest.js",revision:"9262961651e0d7fa108aef74f09893fc"},{url:"/_next/static/EsvByE-nQdPugmGTGh6QX/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/2443530c-0a6f94e70d430d82.js",revision:"EsvByE-nQdPugmGTGh6QX"},{url:"/_next/static/chunks/965-9ee20fac6d41e09a.js",revision:"EsvByE-nQdPugmGTGh6QX"},{url:"/_next/static/chunks/app/layout-a7d194d3febdfd0b.js",revision:"EsvByE-nQdPugmGTGh6QX"},{url:"/_next/static/chunks/app/page-0614223d497769e8.js",revision:"EsvByE-nQdPugmGTGh6QX"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"EsvByE-nQdPugmGTGh6QX"},{url:"/_next/static/chunks/main-app-2f96f45dc8c75c30.js",revision:"EsvByE-nQdPugmGTGh6QX"},{url:"/_next/static/chunks/main-bdb2371cac8021b4.js",revision:"EsvByE-nQdPugmGTGh6QX"},{url:"/_next/static/chunks/pages/_app-b555d5e1eab47959.js",revision:"EsvByE-nQdPugmGTGh6QX"},{url:"/_next/static/chunks/pages/_error-d79168f986538ac0.js",revision:"EsvByE-nQdPugmGTGh6QX"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-c470e7e2b8432acb.js",revision:"EsvByE-nQdPugmGTGh6QX"},{url:"/_next/static/css/822e1dc8170a7422.css",revision:"822e1dc8170a7422"},{url:"/_next/static/css/dd4820d808ba435e.css",revision:"dd4820d808ba435e"},{url:"/_next/static/media/12d5676996b2b297-s.woff2",revision:"6f72ca8576d1b611d49780069fe31355"},{url:"/_next/static/media/1c57ca6f5208a29b-s.woff2",revision:"491a7a9678c3cfd4f86c092c68480f23"},{url:"/_next/static/media/3dbd163d3bb09d47-s.woff2",revision:"93dcb0c222437699e9dd591d8b5a6b85"},{url:"/_next/static/media/4520b46809e6da32-s.woff2",revision:"5c31ed48e2f5699a86c9031cc34b0f2c"},{url:"/_next/static/media/5647e4c23315a2d2-s.woff2",revision:"e64969a373d0acf2586d1fd4224abb90"},{url:"/_next/static/media/7be645d133f3ee22-s.woff2",revision:"3ba6fb27a0ea92c2f1513add6dbddf37"},{url:"/_next/static/media/7c53f7419436e04b-s.woff2",revision:"fd4ff709e3581e3f62e40e90260a1ad7"},{url:"/_next/static/media/8318231616718d62-s.woff2",revision:"5c81c82f76d8b4e18b8afd17bfcce9b1"},{url:"/_next/static/media/934c4b7cb736f2a3-s.p.woff2",revision:"1f6d3cf6d38f25d83d95f5a800b8cac3"},{url:"/_next/static/media/c16b1a6aa4e42d89-s.woff2",revision:"c789fd13761a6542e725fa97af29dfe1"},{url:"/_next/static/media/cff529cd86cc0276-s.woff2",revision:"c2b2c28b98016afb2cb7e029c23f1f9f"},{url:"/_next/static/media/dce1d182814ebb30-s.woff2",revision:"7ac1bfadd4f228b742b284b4e39de02d"},{url:"/_next/static/media/f749b8c88d712005-s.p.woff2",revision:"129ccea8086a991b4b979dc01e01e3a7"},{url:"/_next/static/media/fcfba115d03fd49c-s.woff2",revision:"5da629a86c5f28932e4cf6b84afa90a5"},{url:"/favicon.ico",revision:"73416909ba9acd60159078a4bb4fa3ed"},{url:"/icons/192.png",revision:"6d66044e7fe629dee9a460678d5fcb67"},{url:"/icons/512.png",revision:"3cec94983d939426f7bcaf1add7e8fbb"},{url:"/icons/favicon.ico",revision:"73416909ba9acd60159078a4bb4fa3ed"},{url:"/manifest.json",revision:"463f08a4d3443a8cc57b9d156e66a4b8"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/.*/gm,new e.StaleWhileRevalidate({cacheName:"assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:604800})]}),"GET")}));