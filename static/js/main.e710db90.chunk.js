(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),l=n.n(o),c=(n(14),n(3)),i=n(4),s=n(6),u=n(5),m=n(7),h=function(e){var t=e.robot,n=t.name,a=t.email,o=t.username;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(o,"?200x200"),alt:"Pic of ".concat(n),height:200,width:200}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,a)))};n(15);function d(){return r.a.createElement("div",{className:"Spinner"},r.a.createElement("div",{className:"lds-roller"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}var v=function(e){var t=e.robots,n=e.isLoading;return r.a.createElement("div",null,n?r.a.createElement(d,null):r.a.createElement("div",null,0===t.length?r.a.createElement("h2",null,"No robots match"):null,t.map(function(e){return r.a.createElement(h,{robot:e,key:e.id})})))},E=function(e){e.searchField;var t=e.searchChange;return r.a.createElement("div",{className:"SearchBox p2"},r.a.createElement("input",{onChange:t,className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots"}))},f=(n(16),n(17),n(18),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={robots:[],searchField:"",isLoading:!0},n.onSearchChange=function(e){var t=e.target.value;n.setState({searchField:t})},n.componentDidMount=function(){fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(e){var t=e.map(function(e){return{id:e.id,name:e.name,username:e.username,email:e.email}});n.setState({robots:t,isLoading:!1})})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.robots.filter(function(t){return t.name.toLowerCase().includes(e.state.searchField.toLowerCase())});return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"f1"},"Robofriends"),r.a.createElement(E,{searchChange:this.onSearchChange}),r.a.createElement(v,{robots:t,isLoading:this.state.isLoading}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.e710db90.chunk.js.map