(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./src/confirmButton/ConfirmButton.less":function(A,e,B){},"./src/confirmButton/ConfirmButton.mdx":function(A,e,B){"use strict";B.r(e),B.d(e,"default",(function(){return j}));var o=B("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),t=B("react"),g=B.n(t),n=B("./node_modules/@mdx-js/react/dist/esm.js"),s=B("./node_modules/father/node_modules/docz/dist/index.esm.js"),d=(B("./node_modules/antd/dist/antd.css"),B("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js")),r=B.n(d),a=B("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),l=B("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),c=B("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),i=B("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js"),C=B("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),m=B("./node_modules/antd/es/modal/index.js"),M=B("./node_modules/antd/es/button/index.js"),u=(B("./src/confirmButton/ConfirmButton.less"),B("./node_modules/classnames/index.js")),D=function(A){Object(C.a)(B,A);var e=Object(i.a)(B);function B(A){var o;return Object(l.a)(this,B),(o=e.call(this,A)).clickHandler=Object(a.a)(r.a.mark((function A(){var e,B;return r.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return e=o.props.onConfirm,B=!1,o.setState({loading:!0}),A.next=5,o.validate();case 5:B=A.sent,o.setState({loading:!1}),B&&e&&e();case 8:case"end":return A.stop()}}),A)}))),o.state={loading:!1},o}return Object(c.a)(B,[{key:"render",value:function(){var A=this.props,e=A.className,B=A.style;this.state.loading;return g.a.createElement("span",{className:u("ConfirmButton",e),style:B,onClick:this.clickHandler},this.getChildren())}},{key:"validate",value:function(){var A=this.props.validate;return A?A():this.defaultValidate()}},{key:"defaultValidate",value:function(){var A=this;return new Promise((function(e){var B=A.props.modalContent;m.a.confirm({title:B?B.title:"\u64cd\u4f5c\u4e0d\u53ef\u6062\u590d",content:B?B.content:"\u6b64\u64cd\u4f5c\u4e0d\u53ef\u6062\u590d\uff0c\u8bf7\u786e\u8ba4\u662f\u5426\u7ee7\u7eed",onOk:function(){e(!0)},onCancel:function(){e(!1)}})}))}},{key:"getChildren",value:function(){var A=this.state.loading,e=this.props,B=e.getElement,o=e.text;return B?B(A):g.a.createElement(M.a,{type:"danger",ghost:!0,loading:A},o||"\u5220\u9664")}}]),B}(t.Component),Q=D;"undefined"!==typeof D&&D&&D===Object(D)&&Object.isExtensible(D)&&Object.defineProperty(D,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ConfirmButton",filename:"src/confirmButton/ConfirmButton.tsx"}});var E={};function j(A){var e=A.components,B=Object(o.a)(A,["components"]);return Object(n.b)("wrapper",Object.assign({},E,B,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"confirmbutton"},"ConfirmButton"),Object(n.b)("p",null,"\u5e26\u786e\u8ba4\u8fc7\u7a0b\u7684\u6309\u94ae\uff0c\u786e\u8ba4\u6210\u529f\u65f6\uff0c\u624d\u89e6\u53d1\u64cd\u4f5c\u3002\u901a\u5e38\u7528\u4e8e\u5220\u9664\u7b49\u9700\u8981\u4e8c\u6b21\u786e\u8ba4\u7684\u64cd\u4f5c"),Object(n.b)("h3",{id:"\u4e3b\u8981\u505a\u4e86\u4ee5\u4e0b\u5de5\u4f5c"},"\u4e3b\u8981\u505a\u4e86\u4ee5\u4e0b\u5de5\u4f5c"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\u70b9\u51fb\u540e\u8c03\u7528\u786e\u8ba4\u65b9\u6cd5\uff0c\u786e\u8ba4\u901a\u8fc7\u540e\uff0c\u89e6\u53d1\u786e\u8ba4\u4e8b\u4ef6")),Object(n.b)("h3",{id:"\u4f60\u53ef\u4ee5"},"\u4f60\u53ef\u4ee5"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u6309\u94ae\u6587\u5b57"),Object(n.b)("li",{parentName:"ul"},"\u5982\u679c\u4e0d\u4f7f\u7528\u6309\u94ae\uff0c\u53ef\u81ea\u5b9a\u4e49\u663e\u793a\u5143\u7d20"),Object(n.b)("li",{parentName:"ul"},"\u53ef\u81ea\u5b9a\u4e49\u63d0\u793a\u6587\u5b57"),Object(n.b)("li",{parentName:"ul"},"\u53ef\u81ea\u5b9a\u4e49\u786e\u8ba4\u65b9\u6cd5\u3002\u5982\u679c\u786e\u8ba4\u8fc7\u7a0b\u662f\u5f02\u6b65\u7684\uff0c\u4f1a\u51fa\u73b0\u52a0\u8f7d\u52a8\u753b")),Object(n.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(n.b)("h3",{id:"\u9ed8\u8ba4"},"\u9ed8\u8ba4"),Object(n.b)(s.c,{__position:0,__code:"<ConfirmButton\n  onConfirm={() => {\n    alert('\u786e\u8ba4')\n  }}\n/>",__scope:{props:this?this.props:B,Playground:s.c,Props:s.d,ConfirmButton:Q},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKZ2ncAh0B3FFJFI9APjgOACIgh1UEgAQiGvcIInMI1ZXaD04AEcgAWYiBWPYm5qEkRxhNEjjqAYoj2EDSUsJ401FTBVBdBRY5Tlw5wCESLF2G4dhgHWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZxsgAWJz2AANiclz1jAYCADFvWgRIbP4ZxDgRB1MBgoR-CWIhqEoOB3IRYLq1CmhnAgXDLnYABGbzXPkDStKmABBOZjPYCMoPIGwoHQMN2HkDljLEJroxkdgUUMmBuGAPD9JGuB5C3GtgFa6AOuCAAyZbxkSeZKGaBb2s67h9rlMBkMlAZUHadgAH4NkWsMIx6q4dqW1AqurKQZCrN8zBhdVjhgMAwigKY7t6_rXvq5dqwTJSCBwMLMhSK8CFmmtV2oFi2Nk_1IZRvZUCk9GxuB7g-rM7GcZCWBhUfQA7D0AEujXxXFH5Be8nNxXKRodh-HEdmqRwY-swvxAfjBN0dGxM4yS0ZEjHxNQHACDgLBAN0ECDDAwifqgiXqCWPUnF7TDuLlaj5J-6GligtdqH0JZoYAOUBLqVJNTUzftBprYzAg0MoQdjd4j00FoAR_oROBJE9x0bZoX27nd4iPXxmWdflrF6JVLGap6OC6NQb14EaroAEdQhEmBH3IXO4Hzo96I_DTg4yMPuij6TZc4_SslM9YoEoDsCiuLxKHJVBM5epvQ4lVvk5kuW47sbAQPQOwo_TfQF576tjFMSGjHYOnAAQjQB8pUAOBVABh_wAzyMAReVABC3QBouUAN7l4x5Jk8el1iLquIm-tYSguEzusHeL92CAHozQAZCp01voATtNACrNufQAG3m00AFxygBOfUAOlegA3PUAIyugAKV0AOxGgBIBMAJdGgAgBhfiAwAV4GACztQAknKABiswAg9GAF_FQADqaAG8MwAK_GAD21ZKkRqSMGHqPMQ59kGogZIAN9Nz6AAsIwAXJ50xfryasrB4hcCyF_JqPViZ8KIAIoR4pUBiEAdvEwIDAB8ZrI2-gBhRUAAS-ij1ingvDARGGiIx9wHl5dg-j3BaL6g7QExiLDAL3uwQAkMaADqUwAUHK30AOGmgB1bXsdWWgWACAaJRNOFIgT2DBJrPvQAQZqABzzQA_vK4KQbfDBTDoGAHh9c-gAUOUAADpgBAyJobQ-J59AD3yiUwAJtaAD0dQA5AaJIsOldA8QpJqw0aTFGOSUb7wwYAcAtAAZGYzV-2MYgEFgFcdJBQslBNMWTWZ6DAChioATu1llKJRqrfQmzUTbPWPIceGkcn7zphEooKyq7-DsLPDuzIl50BXg6deNBGBt3FpjBeSxQUp0xl3WgJN1g1TRJKIUEZ-x-3uI0b5qcF49UmTWeksJUXoQbqsgkOAUTdxMnilG7jPIpCuP9KAcAYCuSZpnCwL11gzDeFAWIE5_mRg5FcfxSVqWFlQNpFq1d7YFyWMNWAzsTITFsDgNFdx2U1mzlBWlBRFX4hVRS2gGqLBdAIH0cwUYya1iymsK1FgPl0RlUeMaDqa4FzgI-LFmMXI50-U6mAHIWbkyGgZWAY15UwCDeTag9heU7DGsquAHw43bAABKVEplGmsyMcbAETSeUc9g2pPTulm7cNrDErhJRyjSFh-xsG7lXWIaaM0ZEav4RImlNEgzFVq3G3y9X5rVXAY17BYBjjgAOkyjLmU7P1Um5lBBYUV21f3OlVxxHdG6qO2wU6QgjFcOOfNKjeUjNoHdUd-bF3LuamOtdg9DTxGZV1atNYIDNAjLuj-spVr9u_bixmf724XpXEG-5ta-z9BUbQdgJ61HnoA9jPtcGz1bsakO9CO6P0oayIh8mprzWwdUahkD2NMLzmfWKk1o5CP5swP9UIgMABqxGsikaZnciD9boPdHowDAgLHT1saFTovRwhhFbxRgRgQ5hnRjF9ro5lEYuhwBHqwbo2iqPislewYZozgIukwkqslw7R0WH1iMqAHxv3NUAxYNZGzdMGygGMl0V09MuYMzQBWLwFU2UALMmgAdeUALBy7TABGBoAWE1crBvFWrK4HnXOZnc85xLMNLmZhsl0oLoXIvn0AO_RdMIGAHO_QAt37ReDdQHU2xv6-MkzF_lqmoDqYjJu195MlB2f7e4BEUAas9s69RxrzWZ0BrMzWDrVrt2gdfZytyUHu6niLTdOgwNe3UB0zqmcg6yWGpgKOvtjjLy23GEvbbKrTMrnfU1Q7zj9B4ZxtJ8wN3EZuPvTONrXUVyPdBuTRgqd1rzD4CAEZM5QQgFSMMbSm2UhjWhzNTrebTsAB8kdykAARKgATNPaGW2skhU45pm2YWb317R8cY1ML1ctM5CxFpISeLcI5r3XLHdCCstAUC8-rFQegp4JSZzHH26E6vTPYPvQA7BZVMALAqgzfWOoLmkm5M4ski_3ocwAKgES5lxGjRnN7DOGcHHDIMR4APKxiTqYZPAaYujt7Be1OlDCwEkJMFcspbt1TjgdOKtOcMEQJiSgHhex4pwJTzidWLAsCynBaKnBUC8udOaMAsAsAapei9IW2VtiuDSP-VTqBvd6FAiAPF_Ba6MiQOwfgPxizVAyOaH8ZJy-ssryAdTAh8jUH4FcfgtkcC99sqldY_ByjkH6DMbs_oK_8FqkNQiCqG8KswGSSgiRcx5F1WpC01e_ilkH9WfgUQ0Bd5b6obAue98WGHzAeY4ZNIQHgMfsVw_dLH_4AAPQAEw4C_wPkAzfL8gDUSv4gBv7eR9594X41j8Cb7AGlT-Q4BYCQEAGupl5wDAGf7f44D-RIEt6b6WiRCwHwGIEgCcbPQ04764BiwQApC57UAF5qwMBmQgC0A-hZBd5V6mi0Dmh4GzAzD8DyAKDMxAA",mdxType:"Playground"},Object(n.b)(Q,{onConfirm:function(){alert("\u786e\u8ba4")},mdxType:"ConfirmButton"})),Object(n.b)("h3",{id:"\u81ea\u5b9a\u4e49\u6309\u94ae\u6587\u5b57\uff0c\u5f39\u7a97\u6587\u5b57"},"\u81ea\u5b9a\u4e49\u6309\u94ae\u6587\u5b57\uff0c\u5f39\u7a97\u6587\u5b57"),Object(n.b)(s.c,{__position:1,__code:"<ConfirmButton\n  text=\"\u79fb\u5230\u56de\u6536\u7ad9\"\n  modalContent={{\n    title: '\u8fd9\u4e2a\u64cd\u4f5c\u53ef\u9006',\n    content: (\n      <span>\n        \u771f\u8981<span style={{ color: 'red' }}>\u5220\u9664</span>\u6211\uff1f\n      </span>\n    ),\n  }}\n  onConfirm={() => {\n    alert('\u786e\u8ba4')\n  }}\n/>",__scope:{props:this?this.props:B,Playground:s.c,Props:s.d,ConfirmButton:Q},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKZ2ncAh0B3FFJFI9APjgOACIgh1UEgAQiGvcIInMI1ZXaD04AEcgAWYiBWPYm5qEkRxhNEjjqAYoj2EDSUsJ401FTBVBdBRY5Tlw5wCESLF2G4dhgHWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZxsgAWJz2AANiclz1jAYCADFvWgRIbP4ZxDgRB1MBgoR-CWIhqEoOB3IRYLq1CmhnAgXDLnYABGbzXPkDStKmABBOZjPYCMoPIGwoHQMN2HkDljLEJroxkdgUUMmBuGAPD9JGuB5C3GtgFa6AOuCAAyZbxkSeZKGaBb2s67h9rlMBkMlAZUHadgAH4NkWsMIx6q4dqW1AqurKQZCrN8zBhdVjhgMAwigKY7t6_rXvq5dqwTJSCBwMLMhSK8CFmmtV2oFi2Nk_1IZR8ZsAIPgQEAb89AAYlQA9tUANlNAE2vfgVxR9L0HiKSQPx4AzOxnHxheWAbMATfjACo5QBZk0AHXlAHvlQAwBNyjmUd0ZmrijdmpcYLL3GRqWUcAfHdAEDIpX3PMYbYDGlrKCgIUbK6dBzvkGbAAIlQATNKkZXUDEQBEI0AfH_acVyRHdVjmOVctWrY9ixqCk9GxuB7g-rZtWLHiDICEfQA7D0AEujXyDrqXo5zcVykaHYfhxHZqkcGPrML8QH4wTdHRsTOMktGRIx8TUBwAg4CwQCZf0BhCJ-qDa-oJY9ScXtMO4uVqPkn7oaWKC12ofQlmhgA5QEupUk1NSn-0GnnjMCDQyhB3H3iPTQWgBH-hE4EkXfHQXmhD7ubfiI9UPG4HlusXolUsZqno4J0VQN6eAjUugAEdQgiRgI-cggC4DAKPPRD8Glz4ZCvt0O-0km6cX0lkUy6wTYdgKFcLwxtxSoF_i9NBl8JSYPfjJZuT87B4zoOgOwd90z6GYQQ6sxhTCQyMOwFOgAEI0APlKgA4FUADD_gAzyMAIvKgAQt0ANFygA3uXjDyJkqAGFEAunLHqkd2CsEoFwX-6x-HqPYIAejNABkKinBRgBO00AKs2UjAAbecnQAXHKAE59QA6V6ADc9QAjK6AApXQA7EaAEgEwAl0aACAGdRFjABXgYALO1ACScoAGKzACD0YAX8VAAOpoAbwzAAr8aTZKkRqSMDIeSJ2Uj3GogZIAN9MpGAAsIwAXJ4p3UbyasrB4hcCyLopq-i-qHyIMU0pFCxCmL4SYCxgA-MwaQowAwoqAAJfFp6xTwXhgIjbpEYiGeRSKQ4QZTemKU1KvTAoyLDmMEewQAkMaADqUwAUHIKMAOGmgB1bUWdWWgWACDdJRNOFIJz2BnJrEIwAQZqABzzQA_vKBLcQonxaT7GAHh9KRgAUOUAADpmsEmJKeVIkW4LAAm1oAPR1ADkBi8iw9NGbAX0N06ONZ_koyET4wA4BaAAyM2mGjsYxAINzIaqICi_NOeM9mtLvGAFDFQAndrMtadLMlNArhfO5eseQVCNL_KESna5RQWVwP8HYbRn9oTvLYVq---9GBYJrpjZhSwTUf0xng2gUd1g1TRJKIUEZ-xH3uI0bVZr0I9UpRYeksIXXet_ijCYtgcAonwSZX1NZNkkMNPEOAMB_Y1nlXKjSFgZhvCgLECcbDIwciuCvNe0b_4tXgcvEBSx9bdEwiZUNcAcCuruMGmspb2CxpnOvOtBJw0ECyC2iwXQCB9HMPLDmOs1gKwsBquiFajxjRnQgkBcBHyeubi5ABmq50wA5JnKW1axrVr3RzEO2adhjXrR8M92wAASlRYACGPTWH2c1L2nnsG1J6d0n3bm9iuFB1YXrrH7GwfBcDYi3vvRkRq_hEiaR6SDEt1BtJQRDg3ViXb8RhqbXAAd7bRycDgNoxq_0oCJp5VhhtiaCA2pgVBDt2zxhohrQBlGthiMmVcCMVw45L3tOzQzWgd08OXuo7R5q7bKDEK8vGsjLG8MQGaBGdj6HZSrT2Fo1TPqPZoewcJlce7U1Ywzf0dptBDEdMEzA7T2M238c6eZ2tlHG3oQU0p-zVmbMcyHSOizAmsj6exphecibeHedHL5y9mB_qhEBgANUswF1jKa03Gb7KZ_B0WAYEAS_5oTBbCkDMTSU3Zwyws1h8wIcwzoxj9OpBGLocBjasG6AY6N07kOQXYCSqATMXROcvThvDFhh4MygB8VTzV05so5T1vrmYrpzclTDGb3QbLC0ALByItABGBoAWE1JZSy7lK7rI9evLcuidsb82YZHamDZbFm2du7akYAd-iU42MAOd-gBbvwOye1AOpth6MQ-nQd8BmswKqTu4bKbk1_fsO4BEUAgdtZB7mprUAWsRlI4m5LHMlAe26nhwnqXgMZfM--z9t0vOts66ZST0nZwDZ7RG2geG23LMvIvXG7zMODdcyuRTTUOerP0NTlGlXzDC8RhsqTWzcddRXBL0G46dUGXmATBmM5QQgFSMMbSDGxoMZmunYAbypgAB9zdyjtu0H9tZJCf1Vsll6QHnRYAUll2LUw12cV_uXSukgaEYJvpw9cj90Kty0BQZbPc9C0ISqHh-B90LlepewIRgB2C1hYAWBUiWbtnSAz5XKZy_LT0IwVgAVAKz3n6t3S872GcM4J-8cIDwAVVjb69pPeAw9Ya7h_PUD-4EkJU1zd67YM_jgb-ncY9gUQJiSgHheyUpwD75k0aWBZTgtFTgqBs3OnNGAWAWAW0u7LkoEA2VtiuDSP-Jrg_tC3YYJS_giDGRIHYPwH4xZqgZHND-Mkd_ZNfgFrAQfIagfgK4fgWyHAGA2yVKdYfgcocgfoGYbsf0D_fgWqIaQiWAXVb0QA36MkSgRIXMPIAoXNM0c0b_P4UsBA6sfgKINASAz_FQcMDQOAegiwJAmAeYcMTSVvTgj_aNJA3SFg_gAAPQACYcAZD4CQBYdWDqJxCQAJDvJYDYCuCax-A1JRBMCQBSp_IcAsAtDuCdB4E38hCoDVCZCZD_JTDWDdDLRIgVDDDjCaZAMzB5B_daDcBq4IAUg79qAZ89BQIQAzIQBaAfQshICv9TRaBzQnDZgZh-BvCrZ5AgA",mdxType:"Playground"},Object(n.b)(Q,{text:"\u79fb\u5230\u56de\u6536\u7ad9",modalContent:{title:"\u8fd9\u4e2a\u64cd\u4f5c\u53ef\u9006",content:Object(n.b)("span",null,"\u771f\u8981",Object(n.b)("span",{style:{color:"red"}},"\u5220\u9664"),"\u6211\uff1f")},onConfirm:function(){alert("\u786e\u8ba4")},mdxType:"ConfirmButton"})),Object(n.b)("h3",{id:"\u81ea\u5b9a\u4e49\u663e\u793a\u5143\u7d20"},"\u81ea\u5b9a\u4e49\u663e\u793a\u5143\u7d20"),Object(n.b)(s.c,{__position:2,__code:"<ConfirmButton\n  onConfirm={() => {\n    alert('\u786e\u8ba4')\n  }}\n  getElement={loading => {\n    return <span>{loading ? '\u8bf7\u786e\u8ba4' : '\u4fdd\u5b58'}</span>\n  }}\n/>",__scope:{props:this?this.props:B,Playground:s.c,Props:s.d,ConfirmButton:Q},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKZ2ncAh0B3FFJFI9APjgOACIgh1UEgAQiGvcIInMI1ZXaD04AEcgAWYiBWPYm5qEkRxhNEjjqAYoj2EDSUsJ401FTBVBdBRY5Tlw5wCESLF2G4dhgHWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZxsgAWJz2AANiclz1jAYCADFvWgRIbP4ZxDgRB1MBgoR-CWIhqEoOB3IRYLq1CmhnAgXDLnYABGbzXPkDStKmABBOZjPYCMoPIGwoHQMN2HkDljLEJroxkdgUUMmBuGAPD9JGuB5C3GtgFa6AOuCAAyZbxkSeZKGaBb2s67h9rlMBkMlAZUHadgAH4NkWsMIx6q4dqW1AqurKQZCrN8zBhdVjhgMAwigKY7t6_rXvq5dqwTJSCBwMLMhSK8CFmmtV2oFi2Nk_1IZRvZUCk9GxuB7g-rM7GcZCWBhUfQA7D0AEujXxXFH5Be8mLFPC8YERsaoEoDsChB0nWZrLoCD6cxGCy9wxGAHm-ZnS65UAd-i6fOmzAF35QANbXaeQpEl1BkZx5nGfYTcVykaHYfhxHZqkcGPrML8QH4wTdHRsTOMktGRIx8TUBwAg4CwQDdBAgwwMIn6oPd6glj1Jxe0w7i5Wo-SfuhpYoLXah9CWaGADlAS6lSTU1VP7QaLOMwINDKEHJPeI9NBaAEf6ETgSQK8dbOaBru4y-Ij18e96O_axeiVSxmqejgujUG9eBGq6ABHUIRJgR9yBnuA56PeiPw0puMlb7pO-kn3OP0rJTPWWXPJSK4vEoclUAnl7D5biUT6HmTfd7uxsBAugOwnd0z6D_tfasxhTCQyMOwOmgAEI0APlKgA4FUADD_gAzyMAIvKgAQt0ANFygA3uXjDyJkeMvasQulcImfVWCUC4BPdYUCiHsEAPRmgAyFTptgwAnaaAFWbVBgANvNpoALjlACc-oAdK9ABueoARldAAUroAdiNACQCYAS6NABADEQphgArwMAFnagBJOUADFZgBB6MAL-KgAHU0AN4ZgAV-MAHtqyVIjUkYI_Z-YhUGCNRAyQAb6aoMABYRgAuTzpkQ3k1ZWDxC4FkChTUerExsUQOxDjxT63oZAkwTDAB8Zt47BgBhRUAAS-_j1js0vPoMJEZb4FAfsIZ-ES-r50BAkiwjCYHsEAJDGgA6lMAFBy2DADhpoAdW0cnVloFgAgYSUTThSDUk2ST6mACDNQAOeaAH95aRAjsFiIMZwwA8PqoMAChygAAdMAIGRWjtFdNQYAe-U5mABNrQAejqAHIDHpFh0roHiFJUOYTBY1jqTjWBYjADgFoADIzGbEOxjEAgsArhDIKKM2p4y3nsDEYAUMVACd2r8gJKMQ76GBaiUF6x5Cvw0q82BdNmlFD-Zvfwdhv7n2ZAAugQCHSgJoIwU-btMZ_yWPS4emNL60BJusGqaJJRCgjP2Wu9xGikpHn_HqzyLD0lhPy9C-9_kEhwCiK-JkJU1mKV5Q08Q4AwFckzCeFgXrrBmG8KAsQJyUsjByK4VSkqqqni1Leed55LGGrAIuJkJi2BwAKu4-qaz2vYOq2cmEPUKqVbQP1FgRZi1BuTCW7ksZCyJXRJ1R4xrJu3vPOAj4RWYxctPYlqaYAchZqzV1o1gDltLeTag9hTU7DGp6uAHx63bAABKVEptWmsBsUbACbSeUc9g2pPTut27cesDZyoNRpCw_Y2BX03rEdtnaMiNX8IkTS4SBYrgDbWshsoQ34i9T6uAkbA2jk4HAUljV_pQG1WC49zbtUEHZevKCQariuO6N1c9tgb0mVcCMVw44B1BNNXc2gd1z0DpfW-5qgbeZ3yuHe7VXVp01ggM0CM_6D3sFWrjUl4rjb7rPtBlcpbMWzr7P0IJtB2DgZCVB4j2MA2Mcgz-xqA7T1_uw-xrILHybRoEOYfjzHz2YXnGh1VUbRwxoHZgf6oRAYADVgkcfI9jSj1H510e6IpgGBA1MQayHdK4NdonavsWUuJnLsbCfMM6MYFnqQRi6HAJ-rBuiRJk4WVA2koK3PucBF0R7uPoXPRYOOdyoAfAPc1Y2FgAVAvYEFqADyXRXTSxlmg_sXhupsoAWZNAA68oAWDlDmACMDQAsJq5STSFmgVxsv1amFl-O6Xmtxb0JmGyJySvleq6g5WtM2GAHO_QAt361dZtQHU2xKEVIgULWTHmoBeYjN-jD5MlCJcI-4BEUA5s7rJjjdznn16oeLZFmsW2ju_ooxhw1blaNX1PMOm6dBgZ2uoAFxDctg1cbDQQLI56A15M5jncYAD3VPu9RFlcWGmqg8RoJ47cmRMjnPPkmgRSkMFA211FcDnY040YCPda8w-AgDuTOUEIBUjDG0kG7mOOZwzW2_2yHAAfDncpAAESoAEzTtbGykCPKdfqXoPe-vaAzympi5t9hPR2ztJDv2Pu3EB64e7oX9loCgzWGAq8_sKruVdwHPNeRYWBgB2CxWYAWBVrkFpTfPQZaKZyjPN-wWB0LAAqAdb-35awkW3sM4ZwvcMgxHgFirGkupjS8Bkbml1dYeoEVwJISDLfaezPiPHAY9g567AogTElAPC9meTgOXnEFs1hYFlOC0VOCoFNc6c0YBYBYDF2YF6jtsrbFcGkf8Hnk_aGRaBEAzz-A70ZEgdg_AfjFmqBkc0P4yRT91TPkAXmBD5GoPwK4_BbI4AP7ZVK6x-DlHIP0GY3Z_TT_4LVIahE3XL7dZgMklBEi5jyPzNSFo59_FLCftWPwFEGgLvuvqoNgAPoARYGfjAPMOGJpBAPAGAaqmfrpGAfwAAHoABMOAuBx-IAa-MBIA1EGBIAmB3kh-h-0BNY_AP-ZBpU_kOAWANBxBGak-cAZBOBeBOA_krB6-P-lokQDBTBLBIAGKneiu_-uArsEAKQA-1AeeXWYcY-_AtAPoWQu-s-potA5oghswMw_A8gCgzMQAA",mdxType:"Playground"},Object(n.b)(Q,{onConfirm:function(){alert("\u786e\u8ba4")},getElement:function(A){return Object(n.b)("span",null,A?"\u8bf7\u786e\u8ba4":"\u4fdd\u5b58")},mdxType:"ConfirmButton"})),Object(n.b)("h3",{id:"\u81ea\u5b9a\u4e49\u9a8c\u8bc1\u65b9\u6cd5"},"\u81ea\u5b9a\u4e49\u9a8c\u8bc1\u65b9\u6cd5"),Object(n.b)(s.c,{__position:3,__code:"<ConfirmButton\n  validate={() => {\n    if (Math.random() > 0.5) {\n      return true\n    }\n    return false\n  }}\n  onConfirm={() => {\n    alert('\u786e\u8ba4')\n  }}\n>\n  \u70b9\u6211\u4f1a\u53d1\u51fa\u4e00\u4e2a\u7f51\u7edc\u8bf7\u6c42\uff0c\u5e76\u968f\u673a\u901a\u8fc7\u548c\u62d2\u7edd\n</ConfirmButton>",__scope:{props:this?this.props:B,Playground:s.c,Props:s.d,ConfirmButton:Q},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtKZ2ncAh0B3FFJFI9APjgOACIgh1UEgAQiGvcIInMI1ZXaD04AEcgAWYiBWPYm5qEkRxhNEjjqAYoj2EDSUsJ401FTBVBdBRY5Tlw5wCESLF2G4dhgHWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZxsgAWJz2AANiclz1jAYCADFvWgRIbP4ZxDgRB1MBgoR-CWIhqEoOB3IRYLq1CmhnAgXDLnYABGbzXPkDStKmABBOZjPYCMoPIGwoHQMN2HkDljLEJroxkdgUUMmBuGAPD9JGuB5C3GtgFa6AOuCAAyZbxkSeZKGaBb2s67h9rlMBkMlAZUHadgAH4NkWsMIx6q4dqW1AqurKQZCrN8zBhdVjhgMAwigKY7t6_rXvq5dqwTJSCBwMLMhSK8CFmmtV2oFi2Nk_1IZR9hWHiLgsjG4HuD6szsZxzhmgjPVojwUNKkiYG-tsnAAFYerJimKa6Ag-nMVEGRXCmXq5mseb5w14jgRlyZreQRa56gpPRomepJ0yhZx-IMgIR9ADsPQAS6NfTWLHlzXkZxwBOh0ARCNACx5QBF5UAL8VAAA5QAqOUARX9AB2_QB36MAIRtABh_wA3PUAeLTAC5zQAsBMAcfjABiVQAlo0AXb9NakZWRIx8TUAtqRodh-HEdmqRwY-swvxAfjBN0dGxM4yS0dTqvqBwAg4CwQDdBAgwwMIn6oPr1Alj1Jxe0w7i5Wo-SfuhpYoLXah9CWaGADlAS6lSTU1cf7QaGeMwINDKEHEfeI9NBaAEf6ETgSQt8dWeaD3u4N-Ij0U5k9OcCxeiVSxmqejgujUG9PARqXQACOoQRIwEfOQP-cAAFHnoh-DSJ8Mjn26NfaSadOL6SyBrasUBKAdgKFcLwlBySoC_i9ZBZ8JRoJfpg6g987DYBAugOw190z6EYbgiwxhTCQyMOwQ2gAEI0APlKgA4FX9oAM8j7aABC3QA0XKADe5eMPImSoDoRdK4xM-qsEoFwL-6xeHKPYIAejNABkKobGRgBO00AKs2_tAAbeQbQAXHKAE59QA6V6B0AIyugAKV0AOxGgBIBMAJdGgAgBmUUYwAV4GACztQAknKABiswAg9GAF_FQADqaAG8MwAK_GAD21ZKkRqSMBIWQsQ_tHECxgIAN9N_aAAsIwAXJ6G2UbyaseMoAE1oBopqas-p7yILk_J4oM76OrIY_h7BAB8ZlUmRgBhRUAAS-dT1ingvDARGrSIz4MIV5dgPT3DtMUpqJemB-k8JMEYwAkMaADqUwAUHIyMAOGmgB1bRmdWWgWACCtJRNOFI-z2CDJrAIwAQZqABzzQA_vJeIcTItx8TLGAHh9f2gAUOUAADpgBAyMiVEm5_tAD3yoCwAJtaAD0dQA5AZ3IsOldA8QpLt1aZzGsnyUYCLcYAcAtAAZGULFR2MYgEFgFcF5BR3kHL4TjKlrjAChioATu0GX1JRm3fQbLUQcvWPIChGlPkCMNqcoojLoH-DsHQ3u0JHl0FYQ6DhNBGDoMrpjRhSwjV10xtg2gpN1g1TRJKIUEZ-z73uI0DVJr0IcxXPSWETrPVfxRhMWwOAUQ4JMmSlGKzPIpCuP9KA0tXIoxldKjSFgZhvCaeQCcOrIwciuIvZeEbCyoG0i1GBC9AFLGGrAFeJkg1wBwM6u4Aaaw_yglGgotb8TBtDbQFtFhxYCHMFGWWjAsprFlhYVVdEK1HjGtO2BgC4CPndenFyv81WzpgByBWFNq2jWAPu3dOMlaZu2GNetHwz0AAlKiwAEMeiwFsUbAEvaeewbUnp3UfbWSQ46M4rkQdWF66x-xsBwdA2I2xb0YHvY1fwiRNJtJBkWttew1G11Yl2y9Ta4D9vYLAMccA6GNTjdLTl3aG3SwIFayB7aCHRquCUrqQGUa2BIyZVwIxXDjkvY05pkDWM1kvdR2jzUCMMaIZLeN3Rur4YgFTdjmHZSrXQ3Qr1sslbKbuvhhWyasZpv6HjWguN8aEtoMDVD1BS2maaeZ2TjUcPoXk1Tfj9mNPc1HBLNzWQdMrkwvOaW3CcaDv5gSHAmB_qhEBgANTM75oTpsU0Gb7EZnBkWAYEDi3ZhLVxOndOEAU4LA6vNDvYM6MY-XpYRi6HAUhrBujqyLVO6zkF2AEqJcBF0mE63hdw_hiwA9CVQA-Np5rwmXisva4PKAxKXRXQ67NrrNBG6Te6DZQAsyaAB15QAsHIosAEYGgBYTVyqLMVNAriLbm5mBbM2rswzO1MGy6Ltt7aO_7b2hszGAHO_QAt34ncVqgHU2xNFbPGyjWr9XIElMSzjJQJs1PuARFAEHKH4clbq1ABrEYyPboG3LRNsOYdyeS6BtLJn32ftuh51trXTISdWbOHrlGQ0ECyPhtDczLxz3GMw7DfXnMrgU01TnCz9DU_B6V8wIvEbLMkzOInK5QugwpowTVBl5h8BAISmcoIQCpGGNpDtM4xpG5SDNeHr7ecAB8rdykAARKgATNPaD-qQvcLZCZeiB50WAFIZei1MVdnEv4lzLpIKhqDL7sPXHfdCjctAUGWx3FQehqEJSj7fXe6FgsUvYAIwA7BbgsALAqeKN0zsAc8yVM53k54EXywAKgEF5L_u1p2d7DOGcPfHWEB4Cyqxt9e0fvAZupvjvRhwelClwEkJY16ca4YN7u_eA8egJ6FAkgTElAPC9jJTgQPzIi0sCynBaKnBUBNOdOaMAsAsAts98XCf2VtiuDSP-OrqBW6J4YGS_gcDGRIHYPwD8MWNUBkOaD-GSH_gTvwA1gIPkNQPwFcPwCzMgalOsPwOUOQP0DMN2P6P_vwLVENIRDWuATWpgGSJQIkLmHkJ2mpBaEAX8KWKgdWPwFEGgAgQAcnmoK_kwRYOgTAPMOGJpN3nAOwUWugbpOwfwAAHoABMOAchtkPBNY_A1EkhIAUh3kOAKBIABOvBggmoahpU_kOAWAShehC6v-IheB6hchch_kZhHBtBlokQhhxhphIAyW8gIeDBuAFcEAKQr-1AH-q-SeZkIAtAPoWQCBgBpotA5oThswMw_AXh8s8gQAA",mdxType:"Playground"},Object(n.b)(Q,{validate:function(){return Math.random()>.5},onConfirm:function(){alert("\u786e\u8ba4")},mdxType:"ConfirmButton"},"\u70b9\u6211\u4f1a\u53d1\u51fa\u4e00\u4e2a\u7f51\u7edc\u8bf7\u6c42\uff0c\u5e76\u968f\u673a\u901a\u8fc7\u548c\u62d2\u7edd")),Object(n.b)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),Object(n.b)(s.d,{of:Q,mdxType:"Props"}))}j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/confirmButton/ConfirmButton.mdx"}}),j.isMDXComponent=!0}}]);