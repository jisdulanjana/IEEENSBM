(window.webpackJsonp=window.webpackJsonp||[]).push([[18,3,8],{448:function(e,t,n){var content=n(451);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("618dc740",content,!0,{sourceMap:!1})},449:function(e,t,n){"use strict";n.r(t);var o={name:"JoinUs"},r=(n(450),n(67)),d=n(129),l=n.n(d),c=n(201),h=n(83),v=n(437),m=n(438),f=n(160),E=n(439),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",{staticClass:"DontBreakWords py-8 mb-5",attrs:{align:"center","no-gutters":""}},[n("v-col",[n("v-img",{attrs:{quality:"98",format:"webp",fit:"contain","mx-auto":"",width:"600",alt:"Brand Logo",src:"/Assets/Other/JoinUs.png"}})],1),e._v(" "),n("v-col",{staticClass:"px-sm-10 px-5"},[n("v-card-title",{staticClass:"pa-0 pb-2 JoinUs hidden-md-and-up"},[e._v("Be part of our "),n("br"),e._v(" creative community")]),e._v(" "),n("v-card-title",{staticClass:"pa-0 pb-2 JoinUs hidden-sm-and-down"},[e._v("Be part of our creative community")]),e._v(" "),n("v-card-text",{staticClass:"pa-0 pb-2 text-justify JoinUsPara"},[e._v("\n        We love what we do and we do it with passion. We value the\n        experimentation of the message and smart incentives.\n      ")]),e._v(" "),n("nuxt-link",{staticClass:"link",attrs:{to:"/volunteer"}},[n("v-btn",{staticClass:"JoinUsButton px-10 py-5",attrs:{outlined:"",justify:"center"}},[e._v("\n          Join Us\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VBtn:c.a,VCardText:h.c,VCardTitle:h.d,VCol:v.a,VContainer:m.a,VImg:f.a,VRow:E.a})},450:function(e,t,n){"use strict";n(448)},451:function(e,t,n){var o=n(17)(!1);o.push([e.i,".JoinUs{font-size:42px;font-weight:700;line-height:40px}@media only screen and (max-width:600px){.JoinUs{margin-top:10px;font-size:30px;line-height:40px}}.JoinUsPara{margin-top:10px;font-size:18px;font-weight:400;line-height:25px}.link{text-decoration:none!important}.JoinUsButton,.link{color:#fff!important}.JoinUsButton{background-color:#00609c;border-radius:10px;text-align:center;text-decoration:none;width:40%;font-weight:350;margin-top:10px}",""]),e.exports=o},457:function(e,t,n){var content=n(469);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("58f4abc3",content,!0,{sourceMap:!1})},467:function(e,t,n){"use strict";var o=n(213),r=n(93),d=n(100),l=n(1),c=n(9),h=Object(c.a)(o.a,Object(r.a)("windowGroup","v-window-item","v-window"));t.a=h.extend().extend().extend({name:"v-window-item",directives:{Touch:d.a},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?void 0!==this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:void 0!==this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(l.f)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(e){var t=this;this.inTransition&&this.$nextTick((function(){t.computedTransition&&t.inTransition&&(t.windowGroup.transitionHeight=Object(l.f)(e.clientHeight))}))}},render:function(e){var t=this;return e("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[t.genWindowItem()]})))}})},468:function(e,t,n){"use strict";n(457)},469:function(e,t,n){var o=n(17)(!1);o.push([e.i,".DontBreakWords[data-v-395191a9]{word-break:keep-all!important;line-height:25px}",""]),e.exports=o},472:function(e,t,n){"use strict";n.r(t);var o={name:"AllEvents",props:{event:Object}},r=(n(468),n(67)),d=n(129),l=n.n(d),c=n(201),h=n(83),v=n(160),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-img",{attrs:{href:e.event.link,target:"_blank",src:e.event.image,"lazy-src":e.event.image,"aspect-ratio":"2",hover:"",ripple:""}}),e._v(" "),n("v-card-title",{staticClass:"font-weight-bold DontBreakWords"},[e._v("\n    "+e._s(e.event.title)+"\n  ")]),e._v(" "),n("v-card-subtitle",[e._v(" "+e._s(e.event.date)+" ")]),e._v(" "),n("v-card-text",[e._v("\n    "+e._s(e.event.description)+"\n  ")]),e._v(" "),n("v-card-actions",{attrs:{justify:"center"}},[n("a",{attrs:{href:e.event.link,target:"_blank",justify:"center"}},[n("v-btn",{staticClass:"moreButton center",attrs:{outlined:"",justify:"center"}},[e._v("\n        View More\n      ")])],1)])],1)}),[],!1,null,"395191a9",null);t.default=component.exports;l()(component,{VBtn:c.a,VCardActions:h.a,VCardSubtitle:h.b,VCardText:h.c,VCardTitle:h.d,VImg:v.a})},479:function(e,t,n){var content=n(513);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("36120eb3",content,!0,{sourceMap:!1})},512:function(e,t,n){"use strict";n(479)},513:function(e,t,n){var o=n(17)(!1);o.push([e.i,".heading-event[data-v-04f0133e]{font-size:96px;font-weight:300;margin-bottom:50px!important;margin-top:50px!important}.eventCardContainer[data-v-04f0133e]{margin-bottom:20px}.moreButton[data-v-04f0133e]{background-color:#fff;border-radius:10px;border:1px solid #00629b;color:#00629b;text-align:center;text-decoration:none}.cardSection[data-v-04f0133e]{background-color:transparent!important;border:none!important;box-shadow:none!important}.cardSection:hover .moreButton[data-v-04f0133e]{background-color:#00629b;border-radius:10px;color:#fff;text-align:center;text-decoration:none}@media only screen and (max-width:768px){.heading-event[data-v-04f0133e]{font-size:50px;font-weight:500;margin-bottom:50px!important;margin-top:50px!important}}",""]),e.exports=o},549:function(e,t,n){"use strict";n.r(t);var o=[{id:1,title:"GIT  & GitHub",image:"/events/2018/GIT _ GitHub.jpg",date:"4th April, 2018",description:"A GIT Workshop conducted by Isuru Abeywardana who is a GitHub campus expert studies at Sabaragamuwa University of Sri Lanka.",link:"https://fb.me/e/p8MrLFFVe"},{id:2,title:"Build Your Professionalism with IEEE Community",image:"/events/2018/Build Your Professionalism with IEEE Community.jpg",date:"14th May, 2018",description:'Build Your Professionalism with IEEE"  is an awareness session by IEEE Sri Lanka Section.',link:"https://fb.me/e/2INeBuKNt"},{id:3,title:"Cloud Infrastructures and DevOps",image:"/events/2018/IEEE DAY NSBM.jpg",date:"15th August, 2018",description:"Guest speaker is Mr.Ruwan Ranganath ,Senior DevOps Engineer @ WSO2Telco",link:"https://fb.me/e/1Gm80Bbq1"},{id:4,title:"IEEE DAY NSBM 2018",image:"/events/2018/IEEE DAY NSBM.jpg",date:"22nd October, 2018",description:"NSBM IEEE DAY will be an attractive event, We have planned to have 500+ audience of undergraduates",link:"https://fb.me/e/3eKHsJCHJ"},{id:5,title:"Serverless 1.0",image:"/events/2018/Serverless.jpg",date:"28th November, 2018",description:'Talked About Everything You Need To Know About "Serverless Architecture". Our Speaker Mr.Manoj Fernando From 99X Technology (Pvt) Ltd',link:"https://fb.me/e/3xh1bCpx7"}],r=[{id:1,title:"IEEE Humanitarian Activities Awareness Day",image:"/events/2019/IEEE Humanitarian Activities Awareness Day.jpg",date:"13th February, 2019",description:"The IEEE R8 Humanitarian Activities Committee (HAC) is tasked with supporting the Board-endorsed vision of IEEE volunteers around the world carrying out and/or supporting impactful humanitarian activities at the local level.",link:"https://fb.me/e/3D55UD6KW"},{id:2,title:"Lets Begin with Iconic Framework",image:"/events/2019/Lets Begin with Iconic Framework.jpg",date:"27th February, 2019",description:"Ionic Framework is the free, open source mobile UI toolkit for developing high-quality cross-platform apps for native iOS, Android, and the web—all from a single codebase.",link:"https://fb.me/e/3k2QaDrle"},{id:3,title:"Learn Angular from zero to hero",image:"/events/2019/Learn Angular From Zero to Hero.jpg",date:"26th June, 2019",description:"Speaker for the Angular will be Azkar Moulana who is an undergraduate at NSBM Green University and a working trainee at 99X Technology and the former treasurer at IEEE Student Branch of NSBM.",link:"https://fb.me/e/2E1EHWPhU"},{id:4,title:"Serverless 2.0",image:"/events/2019/Serverless 2.0.jpg",date:"4th September, 2019",description:"This Serverless 2.0 workshop and hands on session will be conducted by IEEE Student Branch of NSBM.",link:"https://fb.me/e/3g57LYot6"},{id:5,title:"IEEE DAY NSBM 2019",image:"/events/2019/IEEE DAY NSBM 2019.jpg",date:"16th October, 2019",description:"The IEEE DAY 2019, the 10th edition of this global event, is celebrated in all over the world with the participation of thousands of IEEE members.",link:"https://fb.me/e/2KnkuVyAH"}],d=[{id:1,title:"Django Unchained",image:"/events/2020/Django Unchained.jpg",date:"29st January, 2020",description:'"Explore yourself in the language of a serpent." Django Unchained is about a Python-based free and open-source web framework workshop where you can learn the creation of complex and database-driven websites. Django Unchained workshop and hands on session will be conducted by IEEE Student Branch of NSBM.',link:"https://fb.me/e/8L2wKMsaC"},{id:2,title:"ආයුබෝවන් 20.1 from IEEE NSBM",image:"/events/2020/20.1 from IEEE NSBM.jpg",date:"1st June, 2020",description:"Well-experienced members from IEEE, Mr. Pasan Pethiyagoda who is an Electro-Mechanical Engineer at CEYLEX Engineering (Pvt) Ltd and Ms. Nuwani Chamindi who is a Project Manager at Virtusa and Co-Lead at Women Techmakers Sri Lanka will share their experiences to make your career a success.",link:"https://fb.me/e/fZlOGhtgw"},{id:3,title:"Women can be Entrepreneurs too",image:"/events/2020/Women can be Entrepreneurs.jpg",date:"1st July, 2020",description:"IEEE NSBM Women in Engineering Student Branch Affinity Group awaits to organize an online session for young women of the university to improve their leadership skills and to motivate on becoming an Entrepreneur.",link:"https://fb.me/e/1DflPOP8z"},{id:4,title:"IEEE DAY NSBM 2020",image:"/events/2020/IEEE DAY NSBM 2020.jpg",date:"17th October, 2020",description:"IEEE Day celebrations are around the corner and we are ready to virtually celebrate this years Day with a few exciting new experiences!",link:"https://fb.me/e/85PRAH1o9"},{id:5,title:"Arduino Workshop",image:"/events/2020/adruino.png",date:"27th November, 2020",description:"Arduino Workshop is organized for anyone who enjoys creating interesting stuff by using their imagination and problem-solving skills.",link:"https://fb.me/e/2vTb61rMt"}],l=[{id:1,title:"Duothan 1.0",image:"/events/2021/duothon.png",date:"13th February, 2021",description:"Duothan 1.0 brings you a precious opportunity to test your coding skills with your loved ones. These 12 hours of programming and problem solving as a duo, would surely model you to face even harder challenges in the future.",link:"https://fb.me/e/3QxaWyJSo"},{id:2,title:"Git Session: Day 1 E02",image:"/events/2021/Git Session Day 1 E02.jpg",date:"19th March, 2021",description:"This introductory workshop will educate you about Git and managed version control system which helps you track modifications in projects. Lets build confidence, enhance practical skills and tackle any projects in the future.",link:"https://fb.me/e/1Zhrj5O96"},{id:3,title:"Git Session: Day 2 E02",image:"/events/2021/Git Session Day 2 E02.jpg",date:"26th March, 2021",description:"We are excited to announce that we are hosting the Git session on Day 2! The audience of the previous session voted for Git Hub as the most preferable platform to practice to manage Git repositories and cloud-based service.",link:"https://fb.me/e/2zPRVVNN3"},{id:4,title:"IEEE PES Day 2021",image:"/events/2021/IEEE PES Day 2021.jpg",date:"24th April, 2021",description:"Join to celebrate the IEEE PES Day 2021 which PES (Power & Energy Society) is named to be the worlds largest forum for sharing the latest in technological developments in the electric power industry.",link:"https://fb.me/e/dEfTfpGV0"},{id:5,title:"ආයුබෝවන් IEEE NSBM 2021",image:"/events/2021/ayubowan_ieee.png",date:"3rd July, 2021",description:"IEEE NSBM is eagerly waiting to welcome new members to our family",link:"https://fb.me/e/5zvSGXvia"},{id:6,title:"Professional Guide to CV Writing",image:"/events/2021/CV writing.jpg",date:"24th July, 2021",description:"Professional Guide to CV writing session organized by the IEEE Student Branch of NSBM will guide you through writing a CV.",link:"https://fb.watch/dOtq5MltnW"},{id:7,title:"IEEE අඬහැරය",image:"/events/2021/IEEE_adaheraya.jpg",date:"7th August, 2021",description:'මේ මහා ලංකාද්වීපයේ වෙසෙන හරිත විශ්ව විද්‍යාලීය සියලු ශිෂ්‍ය ප්‍රජාව උදෙසා සිරි ලංකා පුරය නියෝජනය කරනු ලබන, IEEE ශ්‍රී ලංකා ශිෂ්‍ය ක්‍රියාකාරකම් කමිටුව සහ හරිත විශ්වවිද්‍යාලයීය IEEE කමිටු සාමාජිකයන් එකතු වී ප්‍රථම වරට සංවිධානය කරන්නා වූ, "IEEE අඬහැරය" කිරල් නද මධ්‍යයේ මෙසේ ගෙනහැර පෑමට නියමිතයි වගයි.',link:"https://fb.watch/dOtU6Dnz8I/"},{id:8,title:"Road To Full Stack",image:"/events/2021/Road To Full Stack.jpg",date:"15th August, 2021",description:'"Road To Full Stack" organized by IEEE WIE Student Branch Affinity Group of NSBM is a huge opportunity for you to enhance your knowledge in Front-end, Back-end Development, and related applications.',link:"https://fb.me/e/2Up6NMiD8"},{id:9,title:"WriterSpace 1.0",image:"/events/2021/WriterSpace 1.0.jpg",date:"17th September, 2021",description:'IEEE Student Branch of NSBM presents "WriterSpace 1.0", the article writing competition for IEEE Day 2021. Get ready to start a new chapter of IEEE Day NSBM History in this year with an outstanding impression.',link:"https://fb.me/e/1Gx8a6YYB"},{id:10,title:"IEEE DAY 2021",image:"/events/2021/IEEE DAY 2021.jpg",date:"5th October, 2021",description:'IEEE Day is the biggest celebration of the year, where Engineers and IEEE Members gather and share the experiences worldwide. "IEEE Day NSBM 2021" is organized by the IEEE Student Branch of NSBM Green University by following the thematic of “Leveraging Technology for a Better Tomorrow”',link:"https://fb.watch/dOvaeArtLG/"},{id:11,title:"Road to Full Stack - Mobile",image:"/events/2021/Road To Full Stack - Mobile.jpg",date:"8th December, 2021",description:'Road To Full Stack - Mobile" organized by IEEE WIE Student Branch Affinity Group of NSBM is a great opportunity for you to begin the strategy of Mobile Application Development.',link:"https://fb.watch/dOwdlS_FrO/"}],c=[{id:1,title:"Duothan 2.0",image:"/events/2022/Duothan 2.0..jpg",date:"23rd February, 2022",description:"Duothan 2.0 is a hackathon that is organized by the IEEE Student Branch of NSBM which is competed by groups of two. Each group gets 7 hours for completion and participants will get a break time of about one hour. This hackathon is organized with the explicit purpose of enhancing the coding skills of undergraduates.",link:"https://fb.me/e/1PLtr1COV"},{id:2,title:"International Arduino Day Celebration 2022 at NSBM",image:"/events/2022/International Arduino Day Celebration 2022 at NSBM.jpg",date:"23rd March, 2022",description:"Arduino Day is a celebration of the Arduino Community and its achievements. Creativity is the fuel that motivates our users to experiment, build amazing projects, push the boundaries of open-source hardware and software and have a positive impact on people’s lives.",link:"https://fb.me/e/2IoDYeRY3"},{id:3,title:"MAD Fest",image:"/events/2022/MADFest.jpg",date:"25th May, 2022",description:"MAD-Fest is a platform which opens for passionate Mobile Application Developers",link:"https://fb.me/e/1K1q66kF3"},{id:4,title:"ආයුබෝවන් IEEE",image:"/events/2022/ayubovn_2022.jpg",date:"30th July, 2022",description:"The 'AYUBOWAN IEEE 2022' is a session that raises awareness among the university students on Introduction to IEEE Student Branch of NSBM, Advantages of IEEE Membership, and How to Become an IEEE Recognized individual.",link:"https://www.facebook.com/events/755989028936782?acontext=%7B%22event_action_history%22%3A[%7B%22surface%22%3A%22page%22%7D]%7D"}],h={name:"events",data:function(){return{PrevEvents_2018:[],PrevEvents_2019:[],PrevEvents_2020:[],PrevEvents_2021:[],PrevEvents_2022:[],tabs:null}},mounted:function(){this.PrevEvents_2018=o,this.PrevEvents_2019=r,this.PrevEvents_2020=d,this.PrevEvents_2021=l,this.PrevEvents_2022=c},components:{AllEvents:n(472).default}},v=(n(512),n(67)),m=n(129),f=n.n(m),E=n(83),w=n(437),y=n(438),k=n(439),S=n(444),I=n(467),_=I.a.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem:function(){var e=I.a.options.methods.genWindowItem.call(this);return e.data.domProps=e.data.domProps||{},e.data.domProps.id=this.id||this.value,e}}}),x=n(447),B=n(290),component=Object(v.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-container",{staticClass:"eventCardContainer"},[n("v-row",{attrs:{justify:"center","no-gutters":""}},[n("v-card-title",{staticClass:"heading-event"},[e._v("Events")])],1),e._v(" "),n("v-tabs",{staticClass:"mb-4",attrs:{centered:""},model:{value:e.tabs,callback:function(t){e.tabs=t},expression:"tabs"}},[n("v-tab",[e._v("2022")]),e._v(" "),n("v-tab",[e._v("2021")]),e._v(" "),n("v-tab",[e._v("2020")]),e._v(" "),n("v-tab",[e._v("2019")]),e._v(" "),n("v-tab",[e._v("2018")])],1),e._v(" "),n("v-tabs-items",{model:{value:e.tabs,callback:function(t){e.tabs=t},expression:"tabs"}},[n("v-tab-item",[n("v-container",{attrs:{fluid:""}},[n("v-row",e._l(e.PrevEvents_2022,(function(e,i){return n("v-col",{key:i,attrs:{cols:"12",md:"4"}},[n("AllEvents",{attrs:{event:e}})],1)})),1)],1)],1),e._v(" "),n("v-tab-item",[n("v-container",{attrs:{fluid:""}},[n("v-row",e._l(e.PrevEvents_2021,(function(e,i){return n("v-col",{key:i,attrs:{cols:"12",md:"4"}},[n("AllEvents",{attrs:{event:e}})],1)})),1)],1)],1),e._v(" "),n("v-tab-item",[n("v-container",{attrs:{fluid:""}},[n("v-row",e._l(e.PrevEvents_2020,(function(e,i){return n("v-col",{key:i,attrs:{cols:"12",md:"4"}},[n("AllEvents",{attrs:{event:e}})],1)})),1)],1)],1),e._v(" "),n("v-tab-item",[n("v-container",{attrs:{fluid:""}},[n("v-row",e._l(e.PrevEvents_2019,(function(e,i){return n("v-col",{key:i,attrs:{cols:"12",md:"4"}},[n("AllEvents",{attrs:{event:e}})],1)})),1)],1)],1),e._v(" "),n("v-tab-item",[n("v-container",{attrs:{fluid:""}},[n("v-row",e._l(e.PrevEvents_2018,(function(e,i){return n("v-col",{key:i,attrs:{cols:"12",md:"4"}},[n("AllEvents",{attrs:{event:e}})],1)})),1)],1)],1)],1)],1),e._v(" "),n("JoinUs")],1)}),[],!1,null,"04f0133e",null);t.default=component.exports;f()(component,{AllEvents:n(472).default,JoinUs:n(449).default}),f()(component,{VCardTitle:E.d,VCol:w.a,VContainer:y.a,VRow:k.a,VTab:S.a,VTabItem:_,VTabs:x.a,VTabsItems:B.a})}}]);