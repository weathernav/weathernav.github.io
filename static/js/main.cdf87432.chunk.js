(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{236:function(e,t,n){e.exports=n(617)},241:function(e,t,n){},617:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(22),r=n.n(i),s=(n(241),n(29)),l=n(30),c=n(32),u=n(31),d=n(33),h=n(235),g=n.n(h),m=n(141),p=n(101),b=Object(m.a)(Object(m.b)({loadingElement:o.a.createElement("div",{style:{height:"100%"}}),containerElement:o.a.createElement("div",{style:{height:"100vh"}}),mapElement:o.a.createElement("div",{style:{height:"100%"}})}),p.withGoogleMap)(function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={directions:null,origin:null,destination:null},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(){var e=this,t=google.maps,n=this.props,a=n.origin,o=n.destination;a&&o&&(new t.DirectionsService).route({origin:new t.LatLng(a.lat,a.lng),destination:new t.LatLng(o.lat,o.lng),travelMode:t.TravelMode.DRIVING},function(n,a){a===t.DirectionsStatus.OK&&e.setState({directions:n})})}},{key:"render",value:function(){var e=this.state.directions;return o.a.createElement(p.GoogleMap,{defaultZoom:8,defaultCenter:{lat:-34.397,lng:150.644}},e&&o.a.createElement(p.DirectionsRenderer,{directions:e}))}}]),t}(a.Component)),v=n(229),f=n(99),O=n(231),j=n.n(O),E=n(232),y=n.n(E),S=n(234),w=n.n(S),k=n(139),C=n.n(k),M=n(233),R=n.n(M),D=n(230),x=n.n(D),W=n(140),G=n.n(W),I=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={open:!1,coordinates:null,errorMessage:null},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"onClose",value:function(){this.setState({open:!1,coordinates:null,errorMessage:null})}},{key:"onSuggestionSelected",value:function(e){var t=this;Object(W.geocodeBySuggestion)(e).then(function(e){if(e.length<1)t.setState({open:!0,errorMessage:"Geocode request completed successfully but without any results"});else{var n=e[0].geometry,a={lat:n.location.lat(),lng:n.location.lng()};t.props.onCoords(a),t.setState({open:!0,coordinates:a})}}).catch(function(e){t.setState({open:!0,errorMessage:e.message})})}},{key:"renderMessage",value:function(){var e=this.state,t=e.coordinates,n=e.errorMessage;return t?"Selected suggestions geocoded latitude is ".concat(t.lat," and longitude is ").concat(t.lng):n?"Failed to geocode suggestion because: ".concat(n):null}},{key:"render",value:function(){var e=this.state.open,t=this.props.label;return o.a.createElement("div",null,o.a.createElement(G.a,{onSuggestionSelected:this.onSuggestionSelected.bind(this),renderTarget:function(){return o.a.createElement("div",null)},textFieldProps:{label:t}}),o.a.createElement(x.a,{onClose:this.onClose.bind(this),anchorOrigin:{vertical:"bottom",horizontal:"center"},autoHideDuration:5e3,open:e,message:o.a.createElement("span",null,this.renderMessage()),style:{width:"70vw"}}))}}]),t}(a.Component),L=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={origin:null,destination:null},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"onCoords",value:function(e,t){this.setState(Object(v.a)({},e,t));var n=this.state,a=n.origin,o=n.destination,i=this.props.onRouteSearch;a&&o&&i({origin:a,destination:o})}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:e.root},o.a.createElement(j.a,{expanded:!0},o.a.createElement(y.a,{expandIcon:o.a.createElement(R.a,null)},o.a.createElement(C.a,{className:e.heading},"Search Weathernav")),o.a.createElement(w.a,null,o.a.createElement(I,{label:"Search Origin",onCoords:this.onCoords.bind(this,"origin")}),o.a.createElement(I,{label:"Search Destination",onCoords:this.onCoords.bind(this,"destination")}))))}}]),t}(a.Component),B=Object(f.withStyles)(function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular}}})(L),N=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={locations:{}},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"onRouteSearch",value:function(e){this.setState({locations:e})}},{key:"render",value:function(){var e=this.state.locations;return o.a.createElement("div",null,o.a.createElement(B,{onRouteSearch:this.onRouteSearch.bind(this)}),o.a.createElement(b,e))}}]),t}(a.Component),T=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(g.a,null,o.a.createElement(N,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[236,2,1]]]);
//# sourceMappingURL=main.cdf87432.chunk.js.map