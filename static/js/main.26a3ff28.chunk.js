(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(4),o=a.n(r),c=(a(14),a(1)),s=(a(16),a(2)),i=a.n(s);function m(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"/"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link","aria-current":"page",href:"/"},"Home"))),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable DarkMode")))))}function u(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),r=a[0],o=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h1",null,e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",value:r,onChange:function(e){o(e.target.value)},style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"black"},id:"myBox",rows:"8"})),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-primary mx-2 my-2",onClick:function(){var t=r.toUpperCase();o(t),e.showAlert("Converted to uppercase!","success")}},"Convert to Uppercase"),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-primary mx-2 my-2",onClick:function(){var t=r.toLowerCase();o(t),e.showAlert("Converted to lowercase!","success")}},"Convert to LowerCase"),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-primary mx-2 my-2",onClick:function(){o(""),e.showAlert("Text Cleared!","success")}},"Clear Text"),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-primary mx-2 my-2",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Copied to Clipboard!","success")}},"Copy Text"),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-primary mx-2 my-2",onClick:function(){var t=r.split(/[ ]+/);o(t.join(" ")),e.showAlert("Extra spaces removed!","success")}},"Remove Extra Spaces")),l.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#08156d"}},l.a.createElement("h2",null," Your Text Summary"),l.a.createElement("p",null,r.split(" ").filter(function(e){return 0!==e.length}).length," words and ",r.length,"characters"),l.a.createElement("p",null,.008*r.split(" ").length," Minutes Read"),l.a.createElement("h2",null," Preview"),l.a.createElement("p",null," ",r.length>0?r:"Enter something in the textbox above to preview here")))}m.prototype={title:i.a.string.isRequired,aboutText:i.a.string},m.defaultProps={title:"set title here",aboutText:"About Text here"};var d=function(e){return l.a.createElement("div",{style:{height:"50px"}},e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)),": ",e.alert.msg))};var b=function(){var e=Object(n.useState)("light"),t=Object(c.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(null),s=Object(c.a)(o,2),i=s[0],b=s[1],h=function(e,t){b({msg:e,type:t}),setTimeout(function(){b(null)},2e3)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,{title:"TextUtils",mode:a,toggleMode:function(){"light"===a?(r("dark"),document.body.style.backgroundColor="#08156d",h("Dark mode has been enabled","success")):(r("light"),document.body.style.backgroundColor="white",h("Light mode has been enabled","success"))},aboutText:"About TextUtils"}),l.a.createElement(d,{alert:i}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(u,{showAlert:h,heading:"Try TextUtils - word counter, character counter, remove extra spaces",mode:a})))},h=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,21)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),l(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null))),h()},5:function(e,t,a){e.exports=a(20)}},[[5,3,2]]]);
//# sourceMappingURL=main.26a3ff28.chunk.js.map