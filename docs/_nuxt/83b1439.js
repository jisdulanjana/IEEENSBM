(window.webpackJsonp=window.webpackJsonp||[]).push([[11,3],{450:function(t,e,n){"use strict";n.r(e);var o={props:{user:Object},name:"ExComCard"},r=n(67),h=n(127),c=n.n(h),m=n(195),l=n(191),d=n(159),v=n(192),w=n(157),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"ma-4 rounded-lg",attrs:{hover:"",width:"320"}},[n("v-img",{attrs:{src:t.user.image_path}}),t._v(" "),n("v-card-subtitle",{staticClass:"pb-0"},[t._v(t._s(t.user.position))]),t._v(" "),n("v-card-title",{staticClass:"pt-0"},[t._v(t._s(t.user.name))]),t._v(" "),n("v-card-text",[n("v-btn",{attrs:{target:"_blank",href:t.user.github,icon:""}},[n("v-icon",{attrs:{color:"primary"}},[t._v("mdi-github")])],1),t._v(" "),n("v-btn",{attrs:{target:"_blank",href:t.user.linkedin,icon:""}},[n("v-icon",{attrs:{color:"primary"}},[t._v("mdi-linkedin")])],1),t._v(" "),n("v-btn",{attrs:{target:"_blank",href:t.user.facebook,icon:""}},[n("v-icon",{attrs:{color:"primary"}},[t._v("mdi-facebook")])],1)],1)],1)}),[],!1,null,"70e21f2b",null);e.default=component.exports;c()(component,{VBtn:m.a,VCard:l.a,VCardSubtitle:d.a,VCardText:d.b,VCardTitle:d.c,VIcon:v.a,VImg:w.a})},494:function(t,e,n){"use strict";n.r(e);var o={chairman:{name:"Srilal Sachintha Siriwardhane",position:"Chairman",image_path:"https://picsum.photos/512",facebook:"https://www.facebook.com/Srilal.Sachintha",linkedin:"https://www.linkedin.com/in/srilalsachintha/",github:"https://github.com/SrilalS"},assistant_secretary:{name:"Nirasha Herath",image_path:"https://picsum.photos/512",position:"Assistant Secretary",facebook:"https://www.facebook.com/nirasha.herath.14",linkedin:"https://www.linkedin.com/in/nirasha-herath",github:"https://github.com/kavindihmn"},assistant_treasurer:{name:"Senith Dilhan Edirisinghe",image_path:"https://picsum.photos/512",position:"Assistant Treasurer",facebook:"https://www.facebook.com/senith.edirisinghe.1",linkedin:"https://www.linkedin.com/in/senithedirisinghe/",github:"https://github.com/senithde-07"},event_coordinator:{name:"Rashenka Savindi",image_path:"https://picsum.photos/512",position:"Event Coordinator",facebook:"https://m.facebook.com/100071974562118/",linkedin:"https://www.linkedin.com/in/rashenka-savindi-84488519b",github:"https://github.com/BSRashi"}},r={chairman:{name:"Denver Shenal",position:"Chairman",image_path:"https://picsum.photos/512",facebook:"",linkedin:"",github:""},vice_chairman:{name:"Pubudu Rathnayake",position:"Vice Chairman",image_path:"https://picsum.photos/512",facebook:"https://www.facebook.com/pubudu.malshan",linkedin:"https://www.linkedin.com/in/pubudur/",github:"https://github.com/PubuduR"}},h={name:"excom",data:function(){return{exComs:[o,r]}}},c=n(67),m=n(127),l=n.n(m),d=n(424),v=n(434),w=n(425),component=Object(c.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"mt-4"},t._l(t.exComs,(function(e,i){return n("div",{key:i},[n("v-row",{attrs:{"no-gutters":"",justify:"center"}},[n("v-col",{attrs:{cols:"auto"}},[n("h1",[t._v("IEEE Student Branch Executive Committee 2021/22")])])],1),t._v(" "),n("v-row",{attrs:{"no-gutters":"",justify:"center"}},t._l(e,(function(t,e){return n("ExComCard",{key:e,attrs:{user:t}})})),1)],1)})),0)}),[],!1,null,"6ef83a29",null);e.default=component.exports;l()(component,{ExComCard:n(450).default}),l()(component,{VCol:d.a,VContainer:v.a,VRow:w.a})}}]);