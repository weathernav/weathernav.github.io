(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{251:function(e,t,n){e.exports=n(644)},644:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(28),o=n.n(i),c=n(20),s=n(21),l=n(23),u=n(22),h=n(24),p=n(249),d=n.n(p),m=n(240),b=n(250),f=google.maps,g=parseInt("3600"),v=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={directions:null,weatherPoints:[],origin:null,destination:null,err:null},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=this,n=this.props,a=n.origin,r=n.destination,i=e.origin,o=e.destination;i&&o&&(a&&a.lat===i.lat&&a.lng===i.lng&&r&&r.lat===o.lat&&r.lng===o.lng||(new f.DirectionsService).route({origin:new f.LatLng(i.lat,i.lng),destination:new f.LatLng(o.lat,o.lng),travelMode:f.TravelMode.DRIVING},function(e,n){n===f.DirectionsStatus.OK?(t.setState({directions:e}),t.directionsToWeatherPoints(e)):t.setState({err:new Error("Unable to fetch driving directions.")})}))}},{key:"directionsToWeatherPoints",value:function(e){var t=e.routes[0].legs[0].steps,n=this.findWeatherPoints(t).map(function(e){return{timeElapsed:e.timeElapsed,lat:e.end_location.lat(),lng:e.end_location.lng()}});this.setState({weatherPoints:n})}},{key:"findWeatherPoints",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(e.length<=0)return t;var r=e[0],i=r.duration.value,o=e.slice(1),c=a+i;return i+n>g?this.findWeatherPoints(o,[Object(m.a)({timeElapsed:c},r)].concat(Object(b.a)(t)),0,c):this.findWeatherPoints(o,t,n+i,c)}},{key:"render",value:function(){var e=this.state,t=e.directions,n=e.weatherPoints,a=e.err;return this.props.children({err:a,directions:t,weatherPoints:n})}}]),t}(a.Component),O=n(147),j=n(60),E=n(146),y=n.n(E),w=n(242),S=n(243),k=n.n(S),P=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={err:null,weather:{}},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(w.a)(y.a.mark(function e(){var t,n,a,r,i,o,c;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.point,n=Date.now()/1e3+t.timeElapsed,e.prev=2,e.next=5,k.a.get("https://api.weatherbit.io/v2.0/forecast/hourly",{params:{key:"c30112cd09054ea4abaa7a93975228f2",lat:t.lat,lon:t.lng,units:"I"}});case 5:a=e.sent,r=a.data.data,i=r.map(function(e,t){return Math.abs(e.ts-n)}),o=i.indexOf(Math.min.apply(Math,i)),c={precipPct:r[o].pop,temp:r[o].temp,desc:r[o].weather.description,timestamp:new Date(1e3*r[o].ts)},this.setState({weather:c}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),this.setState({err:e.t0});case 16:case"end":return e.stop()}},e,this,[[2,13]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.err,n=e.weather,a=this.props.point;return this.props.children({err:t,weather:n,point:a})}}]),t}(a.Component),C=n(58),x=n(144),W=n.n(x),R=n(61),D=n.n(R),M=n(71),I=n.n(M),T=n(244),B=(google.maps,function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.point,n=e.weather,a=e.classes;return r.a.createElement(j.Marker,{position:t,defaultVisible:!1},r.a.createElement(T.InfoBox,{options:{closeBoxURL:"",enableEventPropagation:!0}},r.a.createElement("div",{className:a.container},r.a.createElement("div",{className:a.contents},r.a.createElement(W.a,null,r.a.createElement(D.a,null,r.a.createElement(I.a,{primary:"Temp: ".concat(n.temp,"\xb0")})),r.a.createElement(D.a,null,r.a.createElement(I.a,{primary:"Precipitation: ".concat(n.precipPct,"%")})),r.a.createElement(D.a,null,r.a.createElement(I.a,{primary:"Description: ".concat(n.desc)})),r.a.createElement(D.a,null,r.a.createElement(I.a,{primary:"Time: ".concat(n.timestamp)})))))))}}]),t}(a.Component)),L=Object(C.withStyles)(function(e){return{container:{backgroundColor:"white",opacity:.75,padding:"12px"},contents:{fontSize:"16px",fontColor:"#08233B"}}})(B),N=(google.maps,function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.props.points.map(function(e,t){return r.a.createElement(P,{key:t,point:e},function(e){var t=e.err,n=e.weather,a=e.point;return r.a.createElement(L,{err:t,weather:n,point:a})})})}}]),t}(a.Component)),G=(google.maps,Object(O.a)(Object(O.b)({loadingElement:r.a.createElement("div",{style:{height:"100%"}}),containerElement:r.a.createElement("div",{style:{height:"100vh"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}})}),j.withGoogleMap)(function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.weatherPoints,n=e.directions;return r.a.createElement(j.GoogleMap,{defaultZoom:8,defaultCenter:{lat:-34.397,lng:150.644}},n&&r.a.createElement(j.DirectionsRenderer,{directions:n}),t&&r.a.createElement(N,{points:t}))}}]),t}(a.Component))),z=n(98),J=n(245),U=n.n(J),V=n(246),_=n.n(V),q=n(248),F=n.n(q),K=n(145),Z=n.n(K),$=n(247),A=n.n($),H=n(100),Q=n.n(H),X=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={err:null},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"onSuggestionSelected",value:function(e){var t=this;Object(H.geocodeBySuggestion)(e).then(function(e){if(e.length<1)t.setState({err:new Error("Geocode request completed successfully but without any results")});else{var n=e[0].geometry,a={lat:n.location.lat(),lng:n.location.lng()};t.props.onCoords(a)}}).catch(function(e){t.setState({err:e})})}},{key:"render",value:function(){var e=this.props.label;return r.a.createElement("div",null,r.a.createElement(Q.a,{onSuggestionSelected:this.onSuggestionSelected.bind(this),renderTarget:function(){return r.a.createElement("div",null)},textFieldProps:{label:e}}))}}]),t}(a.Component),Y=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={origin:null,destination:null},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"onCoords",value:function(e,t){this.setState(Object(z.a)({},e,t));var n=this.state,a=n.origin,r=n.destination,i=this.props.onRouteSearch;a&&r&&i({origin:a,destination:r})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(U.a,{expanded:!0},r.a.createElement(_.a,{expandIcon:r.a.createElement(A.a,null)},r.a.createElement(Z.a,{className:e.heading},"Search Weathernav")),r.a.createElement(F.a,null,r.a.createElement(X,{label:"Search Origin",onCoords:this.onCoords.bind(this,"origin")}),r.a.createElement(X,{label:"Search Destination",onCoords:this.onCoords.bind(this,"destination")}))))}}]),t}(a.Component),ee=Object(C.withStyles)(function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular}}})(Y),te=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={locations:{}},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"onRouteSearch",value:function(e){this.setState({locations:e})}},{key:"render",value:function(){var e=this.state.locations;return r.a.createElement("div",null,r.a.createElement(ee,{onRouteSearch:this.onRouteSearch.bind(this)}),r.a.createElement(v,e,function(e){e.err;var t=e.directions,n=e.weatherPoints;return r.a.createElement(G,{weatherPoints:n,directions:t})}))}}]),t}(a.Component),ne=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(te,null),"}")}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[251,2,1]]]);
//# sourceMappingURL=main.b71af771.chunk.js.map