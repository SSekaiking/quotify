(this.webpackJsonpquotify=this.webpackJsonpquotify||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/loading.27e2ef14.svg"},19:function(e,t,a){e.exports=a.p+"static/media/logo.f3c971f0.png"},24:function(e,t,a){e.exports=a(35)},29:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(14),l=a.n(r),c=(a(29),a(15)),i=a(16),u=a(22),m=a(17),s=a(23),h=a(5),f=a(6);function E(){return o.a.createElement("span",{className:"center"},"Welcome!")}var d=a(18),p=a.n(d);function g(){return o.a.createElement("div",{className:"center"},o.a.createElement("span",null,"We are looking for a quote..."),o.a.createElement("br",null),o.a.createElement("img",{className:"fadeIn",style:{margin:"20px auto",height:"100px"},src:p.a,alt:"loading"}))}function b(e){return o.a.createElement("div",{className:"center quote"},o.a.createElement("span",null,e.quote))}function v(e){var t=o.a.createElement(E,null);return t=e.loading||null==e.quote?o.a.createElement(g,null):o.a.createElement(b,{quote:e.quote}),t=e.welcome?o.a.createElement(E,null):t,o.a.createElement("div",null,t)}function y(){return o.a.createElement("div",null,o.a.createElement("span",null,"about"),o.a.createElement("p",{style:{fontSize:"1.2em",margin:"20px auto",maxWidth:"90%",textAlign:"left",lineHeight:"1.7em"}},"Welcome to Quotify, ",o.a.createElement("br",null),"Quotify is a client side application to diplay random tech quotes supplied by this",o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://quotes.stormconsultancy.co.uk/random.json"}," public api"),o.a.createElement("br",null),"This was made by ",o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/afaithraf"},"Ashraf"),o.a.createElement("br",null),o.a.createElement("br",null),"Feel free to use ",o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/afaithraf/quotify"},"Source code"),o.a.createElement("br",null),"MIT License | Copyright (c) 2019 Ashraf",o.a.createElement("br",null)))}function k(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("span",{className:"center",style:{fontSize:"80px",marginLeft:"-50px",marginTop:"-40px"}},"\ud83d\ude10 404"))}var q=a(19),w=a.n(q);function x(e){return o.a.createElement("div",{id:"navbar"},o.a.createElement("div",{className:"content"},o.a.createElement(h.b,{className:"logo",to:"/"},o.a.createElement("img",{src:w.a,height:"36px",alt:"Quotify logo"})),o.a.createElement("div",{className:"searchBar"},o.a.createElement(h.b,{to:"/"},o.a.createElement("button",{onClick:e.onGenerate},"Generate")))))}function N(){return o.a.createElement("footer",{id:"footer"},o.a.createElement("nav",{className:"links"},o.a.createElement(h.b,{to:"/"},"Home"),o.a.createElement(h.b,{to:"/about"},"About"),o.a.createElement(h.b,{to:"/404"},"404"),o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/afaithraf/Quotify"},"Github")),o.a.createElement("div",{className:"info"},"made by ",o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/afaithraf"},"Ashraf")," | Quotify 2020"))}var T=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={quote:null,loading:!1,welcome:!0},e}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timout1=setTimeout((function(){e.timout2=e.setState({welcome:!1,loading:!0}),setTimeout((function(){e.setState({welcome:!1,loading:null==e.state.quote})}),1600)}),1600),this.getQuote()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timout1),clearTimeout(this.timout2)}},{key:"render",value:function(){return o.a.createElement(h.a,null,o.a.createElement(x,{onGenerate:this.getQuote.bind(this)}),o.a.createElement("div",{id:"stars"}),o.a.createElement("div",{id:"stars2"}),o.a.createElement("div",{id:"stars3"}),o.a.createElement("div",{id:"title"},o.a.createElement(f.c,null,o.a.createElement(f.a,{exact:!0,path:"/"},o.a.createElement(v,{quote:this.state.quote,loading:this.state.loading,welcome:this.state.welcome})),o.a.createElement(f.a,{path:"/about"},o.a.createElement(y,null)),o.a.createElement(f.a,null,o.a.createElement(k,null)))),o.a.createElement(N,null))}},{key:"getQuote",value:function(){var e=this;this.setState({quote:null,loading:!0});fetch("https://cors-anywhere.herokuapp.com/http://quotes.stormconsultancy.co.uk/random.json",{header:{Authorization:"Token 9a916a23d7dceb5c5019cb24cc324551b483fc78"},method:"GET"}).then((function(e){return console.log(e),e.json()})).then((function(t){console.log(t),e.setState({quote:t.quote,loading:!1})})).catch((function(e){console.log(e)}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.05684a12.chunk.js.map