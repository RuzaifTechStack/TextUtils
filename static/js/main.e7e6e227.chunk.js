(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){e.exports=t(36)},25:function(e,a,t){},27:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),o=t(13),c=t.n(o),r=(t(25),t(7)),s=(t(27),t(6)),i=t.n(s),d=t(10);function m(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement(d.Link,{className:"navbar-brand",to:"/"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.Link,{className:"nav-link","aria-current":"page",to:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.Link,{className:"nav-link",to:"/about"},e.aboutText))),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable DarkMode")))))}function u(e){var a=Object(n.useState)(""),t=Object(r.a)(a,2),o=t[0],c=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h1",null,e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",value:o,onChange:function(e){c(e.target.value)},style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"black"},id:"myBox",rows:"8"})),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){var a=o.toUpperCase();c(a),e.showAlert("Converted to uppercase!","success")}},"Convert to Uppercase"),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){var a=o.toLowerCase();c(a),e.showAlert("Converted to lowercase!","success")}},"Convert to LowerCase"),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){c(""),e.showAlert("Text Cleared!","success")}},"Clear Text"),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){var a=document.getElementById("myBox");a.select(),navigator.clipboard.writeText(a.value),e.showAlert("Copied to Clipboard!","success")}},"Copy Text"),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){var a=o.split(/[ ]+/);c(a.join(" ")),e.showAlert("Extra spaces removed!","success")}},"Remove Extra Spaces")),l.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#08156d"}},l.a.createElement("h2",null," Your Text Summary"),l.a.createElement("p",null,o.split(" ").length," words and ",o.length,"characters"),l.a.createElement("p",null,.008*o.split(" ").length," Minutes Read"),l.a.createElement("h2",null," Preview"),l.a.createElement("p",null," ",o.length>0?o:"Enter something in the textbox above to preview here")))}function h(){var e=Object(n.useState)({color:"black",backgroundColor:"white"}),a=Object(r.a)(e,2),t=a[0],o=a[1],c=Object(n.useState)("Enable Dark Mode"),s=Object(r.a)(c,2),i=s[0],d=s[1];return l.a.createElement("div",{className:"container",style:t},l.a.createElement("h2",{className:"my-3"},"About TextUtils"),l.a.createElement("div",{className:"accordion",id:"accordionExample",style:t},l.a.createElement("div",{className:"accordion-item"},l.a.createElement("h2",{className:"accordion-header",id:"headingOne"},l.a.createElement("button",{className:"accordion-button",type:"button",style:t,"data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},"Accordion Item #1")),l.a.createElement("div",{id:"collapseOne",class:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},l.a.createElement("div",{className:"accordion-body",style:t},l.a.createElement("strong",null,"This is the first item's accordion body.")," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",l.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),l.a.createElement("div",{className:"accordion-item"},l.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},l.a.createElement("button",{className:"accordion-button collapsed",type:"button",style:t,"data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},"Accordion Item #2")),l.a.createElement("div",{id:"collapseTwo",class:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},l.a.createElement("div",{className:"accordion-body",style:t},l.a.createElement("strong",null,"This is the second item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",l.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),l.a.createElement("div",{className:"accordion-item"},l.a.createElement("h2",{className:"accordion-header",id:"headingThree"},l.a.createElement("button",{className:"accordion-button collapsed",type:"button",style:t,"data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"},"Accordion Item #3")),l.a.createElement("div",{id:"collapseThree",class:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},l.a.createElement("div",{className:"accordion-body",style:t},l.a.createElement("strong",null,"This is the third item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",l.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow.")))),l.a.createElement("div",{className:"container my-3"},l.a.createElement("button",{onClick:function(){"black"===t.color?(o({color:"white",backgroundColor:"black",border:"1px solid white "}),d("Enable light Mode")):(o({color:"black",backgroundColor:"white"}),d("Enable Dark Mode"))},type:"button",className:"btn btn-primary"},i)))}m.prototype={title:i.a.string.isRequired,aboutText:i.a.string},m.defaultProps={title:"set title here",aboutText:"About Text here"};var b=function(e){return l.a.createElement("div",{style:{height:"50px"}},e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,function(e){var a=e.toLowerCase();return a.charAt(0).toUpperCase()+a.slice(1)}(e.alert.type)),": ",e.alert.msg))},p=t(15),g=t(0);var E=function(){var e=Object(n.useState)("light"),a=Object(r.a)(e,2),t=a[0],o=a[1],c=Object(n.useState)(null),s=Object(r.a)(c,2),i=s[0],d=s[1],E=function(e,a){d({msg:e,type:a}),setTimeout(function(){d(null)},2e3)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,null,l.a.createElement(m,{title:"TextUtils",mode:t,toggleMode:function(){"light"===t?(o("dark"),document.body.style.backgroundColor="#08156d",E("Dark mode has been enabled","success")):(o("light"),document.body.style.backgroundColor="white",E("Light mode has been enabled","success"))},aboutText:"About TextUtils"}),l.a.createElement(b,{alert:i}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(g.Switch,null,l.a.createElement(g.Route,{exact:!0,path:"/about"},l.a.createElement(h,{mode:t})),l.a.createElement(g.Route,{exact:!0,path:"/"},l.a.createElement(u,{showAlert:E,heading:"Try TextUtils - word counter, character counter, remove extra spaces",mode:t}))))))},v=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,37)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,o=a.getLCP,c=a.getTTFB;t(e),n(e),l(e),o(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null))),v()}},[[16,3,2]]]);
//# sourceMappingURL=main.e7e6e227.chunk.js.map