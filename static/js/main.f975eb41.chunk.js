(this["webpackJsonpWeather-tunes"]=this["webpackJsonpWeather-tunes"]||[]).push([[0],{40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(19),o=a.n(c),i=a(20),r=a(22),l=a(10),p=a(1);var d=function(e){return Object(p.jsx)("div",{className:"container-fluid nav_bg",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-12 mx-auto",children:Object(p.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light",children:Object(p.jsxs)("div",{className:"container-fluid",children:[Object(p.jsxs)(l.b,{exact:!0,className:"navbar-brand active",to:"/",children:[Object(p.jsx)("i",{children:"Weather-tunes "}),Object(p.jsx)(i.a,{className:"icon",icon:r.a})]}),Object(p.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(p.jsx)("span",{class:"navbar-toggler-icon"})}),Object(p.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(p.jsxs)("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:[Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(l.b,{exact:!0,activeClassName:"activeLink",className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(l.b,{exact:!0,activeClassName:"activeLink",className:"nav-link active","aria-current":"page",to:"/about",children:"About"})})]})})]})})})})})},b=a(3),m=a.n(b),h=a(8),u=a(24),j=a(4),x="",g="",O="";var v=function(){var e=Object(j.f)(),t=Object(u.a)(),a=t.register,n=t.handleSubmit;function s(){return(s=Object(h.a)(m.a.mark((function t(a){var n,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://api.openweathermap.org/data/2.5/weather?q="+a+"&appid=fc415071491901ce29041bd939ec4ec2");case 2:return n=t.sent,t.next=5,n.json();case 5:s=t.sent,O=s.weather[0].main,e.push({pathname:"/listen",weather:O});case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function c(){return(c=Object(h.a)(m.a.mark((function t(a,n){var s,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://api.openweathermap.org/data/2.5/weather?lat="+a+"&lon="+n+"&appid=fc415071491901ce29041bd939ec4ec2");case 2:return s=t.sent,t.next=5,s.json();case 5:c=t.sent,O=c.weather[0].main,e.push({pathname:"/listen",weather:O});case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(p.jsx)("div",{className:"home",children:Object(p.jsxs)("h1",{className:"mainContent",children:["Enter the city name :",Object(p.jsx)("div",{className:"form",children:Object(p.jsxs)("form",{onSubmit:n((function(e){!function(e){s.apply(this,arguments)}(e.cityName)})),className:"row g-3 d-flex justify-content-center",children:[Object(p.jsx)("div",{className:"col-auto",children:Object(p.jsx)("input",{name:"cityName",type:"text",className:"form-control",id:"inputPassword2",ref:a})}),Object(p.jsx)("div",{className:"col-auto d-flex justify-content-center",children:Object(p.jsx)("button",{type:"submit",className:"btn btn-primary mb-3",children:"Let's go"})})]})}),Object(p.jsx)("div",{children:Object(p.jsx)("h2",{children:"OR"})}),Object(p.jsx)("button",{onClick:function(){navigator.geolocation.getCurrentPosition((function(e){x=e.coords.latitude,g=e.coords.longitude,function(e,t){c.apply(this,arguments)}(x,g)}),(function(e){console.log("Error Code = "+e.code+" - "+e.message)}))},type:"submit",className:"btn btn-primary mb-3 gps",children:"Use GPS instead"})]})})};var f=function(){return Object(p.jsx)("div",{className:"home",children:Object(p.jsxs)("h1",{className:"mainContent",children:["Feel the atmosphere ",Object(p.jsx)("br",{}),Object(p.jsx)("span",{children:"Live the Music"}),Object(p.jsx)("br",{}),Object(p.jsx)(l.b,{exact:!0,to:"/form",class:"btn btn-primary",children:"Get started"})]})})},y=a(23),N={Drizzle:{song:"https://open.spotify.com/embed/playlist/2NyQKPgxZROmEkKfBpZOFM",background:"/production ID_3813820.mp4"},Rain:{song:"https://open.spotify.com/embed/playlist/2NyQKPgxZROmEkKfBpZOFM",background:"/production ID_3813820.mp4"},Thunderstorm:{song:"https://open.spotify.com/embed/playlist/2NyQKPgxZROmEkKfBpZOFM",background:"/production ID_3813820.mp4"},Snow:{song:"https://open.spotify.com/embed/playlist/5lAO7e3ZkEb3MKo3ZgZy6F",background:"/Snow Slowly Falling Down.mp4"},Mist:{song:"https://open.spotify.com/embed/playlist/5TF7jdNbCkrEcPRE34OquD",background:"/Pexels Videos 1779202.mp4"},Smoke:{song:"https://open.spotify.com/embed/playlist/5TF7jdNbCkrEcPRE34OquD",background:"/Pexels Videos 1779202.mp4"},Haze:{song:"https://open.spotify.com/embed/playlist/5TF7jdNbCkrEcPRE34OquD",background:"/Pexels Videos 1779202.mp4"},Fog:{song:"https://open.spotify.com/embed/playlist/5TF7jdNbCkrEcPRE34OquD",background:"/Pexels Videos 1779202.mp4"},Dust:{song:"https://open.spotify.com/embed/playlist/37i9dQZF1DWX1UA045EoPG",background:"/production ID_4361413.mp4"},Sand:{song:"https://open.spotify.com/embed/playlist/37i9dQZF1DWX1UA045EoPG",background:"/production ID_4361413.mp4"},Clear:{song:"https://open.spotify.com/embed/playlist/37i9dQZF1DWX1UA045EoPG",background:"/production ID_4361413.mp4"},Clouds:{song:"https://open.spotify.com/embed/playlist/6ch64c7EaRQPcQ1rgO5w9H",background:"/video.mp4"}};var k=function(e){var t=Object(j.g)(),a=N[t.weather].song,n="/Videos"+N[t.weather].background;return Object(p.jsxs)("div",{className:"video",children:[Object(p.jsx)("video",{className:"videoTag",autoPlay:!0,loop:!0,muted:!0,children:Object(p.jsx)("source",{src:n,type:"video/mp4"})}),console.log(n),Object(p.jsx)(y.a,{url:a,width:"350px",height:"350px",id:"myId",className:"myClassname",display:"initial",position:"relative"})]})};var w=function(){return Object(p.jsx)("div",{className:"about",children:Object(p.jsx)("h2",{className:"mainContent",children:"Hi there, welcome to weather-tunes. This application plays a Spotify playlist based on the current weather conditions at your location. The website is built in ReactJS. The application uses OpenWeatherMap API for getting the current weather. The user can either enter his/her location or can directly use the GPS technology. The background video also changes as per the weather conditions."})})};var P=function(e){return Object(p.jsxs)("h1",{children:["oops! Page not found. ",e.name]})};a(38),a(39),a(40);var E=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(d,{}),Object(p.jsxs)(j.c,{children:[Object(p.jsx)(j.a,{exact:!0,path:"/",component:f}),Object(p.jsx)(j.a,{exact:!0,path:"/form",component:v}),Object(p.jsx)(j.a,{exact:!0,path:"/listen",component:k}),Object(p.jsx)(j.a,{exact:!0,path:"/about",component:w}),Object(p.jsx)(j.a,{component:P})]})]})};o.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(l.a,{children:Object(p.jsx)(E,{})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.f975eb41.chunk.js.map