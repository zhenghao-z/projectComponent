(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./src/text/Text.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var l=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=n("react"),b=n.n(a),s=n("./node_modules/@mdx-js/react/dist/esm.js"),r=n("./node_modules/father/node_modules/docz/dist/index.esm.js"),c=(n("./node_modules/antd/dist/antd.css"),n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js")),i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js"),m=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),d=n("./node_modules/antd/es/tooltip/index.js"),u=function(){function e(){Object(c.a)(this,e)}return Object(i.a)(e,null,[{key:"plainHtml",value:function(e){if(!e)return"";var t=document.createElement("span");return t.innerHTML=e,t.innerText}}]),e}(),p=u;"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HtmlUtil",filename:"src/utils/HtmlUtil.ts"}});var j=function(e){Object(m.a)(n,e);var t=Object(o.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.text,n=e.maxLen,l=void 0===n?15:n,a=e.plainHtml,s=e.className,r=e.style,c=a?p.plainHtml(t):t,i=l&&l<c.length,o=i?(null===c||void 0===c?void 0:c.substr(0,l))+"...":c,m=b.a.createElement("span",{className:s,style:r},o);return i?b.a.createElement(d.a,{title:c},m):m}}]),n}(a.PureComponent),O=j;"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Text",filename:"src/text/Text.tsx"}});var x={};function f(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(s.b)("wrapper",Object.assign({},x,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"text"},"Text"),Object(s.b)("p",null,"\u6839\u636e\u6587\u5b57\u957f\u5ea6\uff0c\u81ea\u52a8\u5904\u7406\u6587\u5b57\u88c1\u5207\u53catooltip\u663e\u793a\u7684\u7ec4\u4ef6\u3002\n\u540c\u65f6\uff0c\u8fd8\u53ef\u8bbe\u7f6e\u5904\u7406\u5bcc\u6587\u672c"),Object(s.b)("h3",{id:"\u4e3b\u8981\u505a\u4e86\u4ee5\u4e0b\u5de5\u4f5c"},"\u4e3b\u8981\u505a\u4e86\u4ee5\u4e0b\u5de5\u4f5c"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u663e\u793a15\u4e2a\u5b57\u7b26\uff0c\u8d85\u51fa\u5219\u88c1\u5207"),Object(s.b)("li",{parentName:"ul"},"\u6587\u5b57\u88ab\u88c1\u5207\u65f6\uff0c\u663e\u793atooltip"),Object(s.b)("li",{parentName:"ul"},"\u5bcc\u6587\u672c\u5904\u7406")),Object(s.b)("h3",{id:"\u4f60\u53ef\u4ee5"},"\u4f60\u53ef\u4ee5"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u5141\u8bb8\u663e\u793a\u7684\u5b57\u7b26\u957f\u5ea6\uff0c\u4e5f\u53ef\u4ee5\u4e0d\u88c1\u5207"),Object(s.b)("li",{parentName:"ul"},"\u53ef\u5f00\u542f\u5bcc\u6587\u672c\u5904\u7406")),Object(s.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(s.b)("h3",{id:"\u57fa\u672c\u7528\u6cd5"},"\u57fa\u672c\u7528\u6cd5"),Object(s.b)(O,{text:"\u9f20\u6807\u79fb\u4e0a\u67e5\u770b\u6211\u5b8c\u6574\u7684\u6570\u636e,12,3,456789",mdxType:"Text"}),Object(s.b)("h3",{id:"\u81ea\u5b9a\u4e49\u6700\u5927\u957f\u5ea6"},"\u81ea\u5b9a\u4e49\u6700\u5927\u957f\u5ea6"),Object(s.b)(O,{text:"\u6700\u591a\u663e\u793a7\u4e2a\u6587\u5b57\uff0c123456789",maxLen:7,mdxType:"Text"}),Object(s.b)("br",null),Object(s.b)(O,{text:"\u4e0d\u622a\u53d6122134342354554646457567456756",maxLen:0,mdxType:"Text"}),Object(s.b)("h3",{id:"\u89e3\u6790\u5bcc\u6587\u672c"},"\u89e3\u6790\u5bcc\u6587\u672c"),Object(s.b)(O,{text:"<span>\u6211\u672a\u89e3\u6790\u5bcc\u6587\u672c</span>",maxLen:0,mdxType:"Text"}),Object(s.b)("br",null),Object(s.b)(O,{plainHtml:!0,text:"<span>\u6211\u89e3\u6790\u4e86\u5bcc\u6587\u672c</span>",mdxType:"Text"}),Object(s.b)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),Object(s.b)(r.d,{of:O,mdxType:"Props"}))}f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/text/Text.mdx"}}),f.isMDXComponent=!0}}]);