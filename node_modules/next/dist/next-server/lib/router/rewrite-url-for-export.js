"use strict";exports.__esModule=true;exports.rewriteUrlForNextExport=rewriteUrlForNextExport;function rewriteUrlForNextExport(url){const[pathname,hash]=url.split('#');// tslint:disable-next-line
let[path,qs]=pathname.split('?');if(path){path=path.replace(/\/$/,'');// Append a trailing slash if this path does not have an extension
if(!/\.[^/]+\/?$/.test(path))path+=`/`;}if(qs)path+='?'+qs;if(hash)path+='#'+hash;return path;}
//# sourceMappingURL=rewrite-url-for-export.js.map