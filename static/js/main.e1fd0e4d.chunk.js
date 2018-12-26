(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{251:function(e,t,n){e.exports=n(646)},256:function(e,t,n){},646:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(28),o=n.n(i),c=(n(256),n(14)),s=n(15),l=n(17),u=n(16),h=n(18),p=n(249),d=n.n(p),m=n(240),b=n(250),g=parseInt("3600"),f=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={locations:{}},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"onRouteSearch",value:function(e){this.setState({locations:e})}},{key:"onDirections",value:function(e){var t=e.routes[0].legs[0].steps,n=this.findWeatherPoints(t).map(function(e){return{timeElapsed:e.timeElapsed,lat:e.end_location.lat(),lng:e.end_location.lng()}});this.setState({weatherPoints:n})}},{key:"findWeatherPoints",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(e.length<=0)return t;var r=e[0],i=r.duration.value,o=e.slice(1),c=a+i;return i+n>g?this.findWeatherPoints(o,[Object(m.a)({timeElapsed:c},r)].concat(Object(b.a)(t)),0,c):this.findWeatherPoints(o,t,n+i,c)}},{key:"render",value:function(){var e=this.state,t=e.locations,n=e.weatherPoints,a=this.onRouteSearch.bind(this),r=this.onDirections.bind(this);return this.props.children({locations:t,weatherPoints:n,onRouteSearch:a,onDirections:r})}}]),t}(a.Component),v=google.maps,O=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={directions:null,origin:null,destination:null},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=this,n=this.props,a=n.origin,r=n.destination,i=n.onDirections,o=e.origin,c=e.destination;o&&c&&(a&&a.lat===o.lat&&a.lng===o.lng&&r&&r.lat===c.lat&&r.lng===c.lng||(new v.DirectionsService).route({origin:new v.LatLng(o.lat,o.lng),destination:new v.LatLng(c.lat,c.lng),travelMode:v.TravelMode.DRIVING},function(e,n){n===v.DirectionsStatus.OK&&(t.setState({directions:e}),i(e))}))}},{key:"render",value:function(){var e=this.state.directions;return this.props.children({directions:e})}}]),t}(a.Component),j=n(147),E=n(60),y=n(146),S=n.n(y),w=n(242),k=n(243),C=n.n(k),P=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={err:null,weather:{}},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(w.a)(S.a.mark(function e(){var t,n,a,r,i,o,c;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.point,n=Date.now()/1e3+t.timeElapsed,e.prev=2,e.next=5,C.a.get("https://api.weatherbit.io/v2.0/forecast/hourly",{params:{key:"c30112cd09054ea4abaa7a93975228f2",lat:t.lat,lon:t.lng,units:"I"}});case 5:a=e.sent,r=a.data.data,i=r.map(function(e,t){return Math.abs(e.ts-n)}),o=i.indexOf(Math.min.apply(Math,i)),c={precipPct:r[o].pop,temp:r[o].temp,desc:r[o].weather.description,timestamp:new Date(1e3*r[o].ts)},this.setState({weather:c}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),this.setState({err:e.t0});case 16:case"end":return e.stop()}},e,this,[[2,13]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.err,n=e.weather,a=this.props.point;return this.props.children({err:t,weather:n,point:a})}}]),t}(a.Component),D=n(58),x=n(144),R=n.n(x),W=n(61),M=n.n(W),I=n(71),B=n.n(I),L=n(244),N=(google.maps,function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.point,n=e.weather,a=e.classes;return r.a.createElement(E.Marker,{position:t,defaultVisible:!1},r.a.createElement(L.InfoBox,{options:{closeBoxURL:"",enableEventPropagation:!0}},r.a.createElement("div",{className:a.container},r.a.createElement("div",{className:a.contents},r.a.createElement(R.a,null,r.a.createElement(M.a,null,r.a.createElement(B.a,{primary:"Temp: ".concat(n.temp,"\xb0")})),r.a.createElement(M.a,null,r.a.createElement(B.a,{primary:"Precipitation: ".concat(n.precipPct,"%")})),r.a.createElement(M.a,null,r.a.createElement(B.a,{primary:"Description: ".concat(n.desc)})),r.a.createElement(M.a,null,r.a.createElement(B.a,{primary:"Time: ".concat(n.timestamp)})))))))}}]),t}(a.Component)),T=Object(D.withStyles)(function(e){return{container:{backgroundColor:"white",opacity:.75,padding:"12px"},contents:{fontSize:"16px",fontColor:"#08233B"}}})(N),G=(google.maps,function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.props.points.map(function(e,t){return r.a.createElement(P,{key:t,point:e},function(e){var t=e.err,n=e.weather,a=e.point;return r.a.createElement(T,{err:t,weather:n,point:a})})})}}]),t}(a.Component)),z=(google.maps,Object(j.a)(Object(j.b)({loadingElement:r.a.createElement("div",{style:{height:"100%"}}),containerElement:r.a.createElement("div",{style:{height:"100vh"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}})}),E.withGoogleMap)(function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.weatherPoints,n=e.directions;return r.a.createElement(E.GoogleMap,{defaultZoom:8,defaultCenter:{lat:-34.397,lng:150.644}},n&&r.a.createElement(E.DirectionsRenderer,{directions:n}),t&&r.a.createElement(G,{points:t}))}}]),t}(a.Component))),J=n(98),V=n(245),_=n.n(V),q=n(246),F=n.n(q),K=n(248),U=n.n(K),Z=n(145),$=n.n(Z),A=n(247),H=n.n(A),Q=n(100),X=n.n(Q),Y=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.onSuggestionSelected;return r.a.createElement("div",null,r.a.createElement(X.a,{onSuggestionSelected:n,renderTarget:function(){return r.a.createElement("div",null)},textFieldProps:{label:t}}))}}]),t}(a.Component),ee=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={coordinates:null,err:null},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"onSuggestionSelected",value:function(e){var t=this;Object(Q.geocodeBySuggestion)(e).then(function(e){if(e.length<1)t.setState({err:new Error("Geocode request completed successfully but without any results")});else{var n=e[0].geometry,a={lat:n.location.lat(),lng:n.location.lng()};t.props.onCoords(a),t.setState({coordinates:a})}}).catch(function(e){t.setState({err:e})})}},{key:"render",value:function(){var e=this.state.err;return this.props.children({err:e,onSuggestionSelected:this.onSuggestionSelected.bind(this)})}}]),t}(a.Component),te=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={origin:null,destination:null},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"onCoords",value:function(e,t){this.setState(Object(J.a)({},e,t));var n=this.state,a=n.origin,r=n.destination,i=this.props.onRouteSearch;a&&r&&i({origin:a,destination:r})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(_.a,{expanded:!0},r.a.createElement(F.a,{expandIcon:r.a.createElement(H.a,null)},r.a.createElement($.a,{className:e.heading},"Search Weathernav")),r.a.createElement(U.a,null,r.a.createElement(ee,{onCoords:this.onCoords.bind(this,"origin")},function(e){var t=e.err,n=e.onSuggestionSelected;return r.a.createElement(Y,{label:"Search Origin",err:t,onSuggestionSelected:n})}),r.a.createElement(ee,{onCoords:this.onCoords.bind(this,"destination")},function(e){var t=e.err,n=e.onSuggestionSelected;return r.a.createElement(Y,{label:"Search Destination",err:t,onSuggestionSelected:n})}))))}}]),t}(a.Component),ne=Object(D.withStyles)(function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular}}})(te),ae=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.locations,n=e.weatherPoints,a=e.onRouteSearch,i=e.onDirections;return r.a.createElement("div",null,r.a.createElement(ne,{onRouteSearch:a}),r.a.createElement(O,Object.assign({onDirections:i},t),function(e){var t=e.directions;return r.a.createElement(z,{weatherPoints:n,directions:t})}))}}]),t}(a.Component),re=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(f,null,function(e){return r.a.createElement(ae,e)}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[251,2,1]]]);
//# sourceMappingURL=main.e1fd0e4d.chunk.js.map