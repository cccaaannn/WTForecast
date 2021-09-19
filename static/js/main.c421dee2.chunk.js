(this.webpackJsonpwtforecast=this.webpackJsonpwtforecast||[]).push([[0],{198:function(e,t,c){"use strict";c.r(t);var n,a,s,r,i,l=c(1),o=c.n(l),m=c(73),d=c.n(m),h=c(4),u=(c(86),c(201)),j=c(11),b=c(7),p=Object(b.b)(n||(n=Object(j.a)(["\n    :root {\n        --background-color: ",";        \n        --color-primary: ",";\n        --color-secondary: ",";\n        \n        --text-primary: ",";\n        --text-secondary: ",";\n        --text-important: ",";\n\n        --form-placeholder: ",";\n        --valid-input: ",";\n        --invalid-input: ",";\n    }\n\n    * {\n        margin: 0; \n        padding: 0;\n        box-sizing: border-box;\n        list-style: none;\n        text-decoration: none;\n        font-size: 1.2rem;\n    }\n\n    body {\n        font-family: Arial, Helvetica, sans-serif;\n        background-color: var(--background-color) !important;\n        color: var(--text-primary);\n    }\n\n    .card {\n        border-radius: 15px !important;\n        border:0px;\n    }\n\n    .color-primary {\n        background-color: var(--color-primary);\n    }\n\n    .color-secondary {\n        background-color: var(--color-secondary);\n    }\n\n\n\n    .text-secondary {\n        color: var(--text-secondary) !important;\n    }\n\n    .text-important {\n        color: var(--text-important) !important;\n    }\n\n    a {\n        color: var(--color-secondary) !important;\n    }\n\n\n    /* bootstrap customizations */\n\n    .form-check-input:checked {\n        background-color: var(--text-important);\n        border-color: var(--text-important);\n    }\n\n    .form-check-input:focus {\n        outline: none;\n        box-shadow: none;\n    }\n\n    .form-control:focus {\n        border-color: var(--text-important);\n        box-shadow: inset 0 0px 7px rgb(252, 252, 252), 0 0 7px var(--text-important);\n    }\n\n    .form-floating {\n        color: var(--form-placeholder);\n    }\n\n    .valid-feedback {\n        color: var(--valid-input) !important;\n    }\n\n    .invalid-feedback {\n        color: var(--invalid-input) !important;\n    }\n\n    .is-valid {\n        border-color: var(--valid-input) !important;\n        box-shadow: inset 0 0px 7px rgb(252, 252, 252), 0 0 10px var(--valid-input) !important;\n    }\n\n    .is-invalid {\n        border-color: var(--valid-input) !important;\n        box-shadow: inset 0 0px 7px rgb(252, 252, 252), 0 0 10px var(--invalid-input) !important;\n    }\n\n"])),(function(e){return e.theme.background_color}),(function(e){return e.theme.color_primary}),(function(e){return e.theme.color_secondary}),(function(e){return e.theme.text_primary}),(function(e){return e.theme.text_secondary}),(function(e){return e.theme.text_important}),(function(e){return e.theme.form_placeholder}),(function(e){return e.theme.valid_input}),(function(e){return e.theme.invalid_input})),x=(c(89),c(202)),f=Object(b.c)(x.a)(a||(a=Object(j.a)(["\n\n    /* theme */\n    color: ",";\n    background-color: ",';\n\n    header{\n        font-family: "Handlee";\n    }\n\n    .flip-card { \n        perspective: 1000px;\n        width: 100%;\n        height: 100%;\n        position: relative;\n        backface-visibility: hidden;\n        transition: all .3s;\n    }\n    .flip-card .flip-card-wrap {\n        position: relative;\n        width: 100%;\n        height: 100%;\n        transition: transform 0.6s;\n        transform-style: preserve-3d;\n    }\n    \n    .flip-card:hover .flip-card-wrap {\n        transform: rotateX(-180deg);\n    }\n\n'])),(function(e){return e.theme.text_primary}),(function(e){return e.theme.background_color})),O=Object(b.c)(x.a)(s||(s=Object(j.a)(["\n    /* theme */\n    color: ",";\n    background-color: ",";\n    \n    width: 100%;\n    position: relative;\n    backface-visibility: hidden;\n    transition: all .3s;\n    text-align: center;\n"])),(function(e){return e.theme.text_primary}),(function(e){return e.theme.background_color})),y=Object(b.c)(x.a)(r||(r=Object(j.a)(["\n    /* theme */\n    color: ",";\n    background-color: ",";\n\n    width: 100%;\n    height: 100%;\n    backface-visibility: hidden;\n    transition: all .3s;\n    text-align: center;\n    position: absolute;\n    top: 0;\n    transform: rotateX(180deg);\n    /* bootstrap 5 sizes\n    <576px\txs\n    \u2265576px\tsm\n    \u2265768px\tmd\n    \u2265992px\tlg\n    \u22651200px\txl\n    \u22651400px xxl */\n\n    @media (max-width: 780px) {\n        p{\n            font-size: 15px;\n        }\n        a{\n            font-size: 15px;\n        }\n    }\n\n    @media (max-width: 400px) {\n        p{\n            font-size: 12px;\n        }\n        a{\n            font-size: 12px;\n        }\n    }\n"])),(function(e){return e.theme.text_primary}),(function(e){return e.theme.background_color})),g=c(0),v=function(){return Object(g.jsx)(O,{className:"header",children:Object(g.jsx)("header",{className:"display-4 align-self-center",children:"WTForecast"})})},k="https://api.openweathermap.org/data/2.5/weather",w="https://api.openweathermap.org/data/2.5/forecast",N="https://raw.githubusercontent.com/cccaaannn/WTForecast/master/public/icons/icon-192x192.png",S=function(){return Object(g.jsxs)(y,{className:"header",children:[Object(g.jsx)("header",{className:"h3 mb-0",children:"WTForecast"}),Object(g.jsxs)("p",{children:["WTForecast is an ",Object(g.jsx)("a",{className:"text-decoration-none",href:"https://github.com/cccaaannn/WTForecast",target:"_blank",rel:"noreferrer",children:"open source"})," weather application made with react."]})]})},I=function(){return Object(g.jsx)(f,{className:"header p-3 mb-3",children:Object(g.jsx)("div",{className:"flip-card",children:Object(g.jsxs)("div",{className:"flip-card-wrap",children:[Object(g.jsx)(v,{}),Object(g.jsx)(S,{})]})})})},C=c(199),U=c(200),_=b.c.button(i||(i=Object(j.a)(["\n    background: inherit;\n    color: inherit;\n    border: 0ch;\n    cursor: pointer;\n    \n    &:focus {\n        outline: none;\n    }\n    &:hover {\n        color: var(--button-color2);\n        border-color: var(--button-color2);\n        transform: rotate(15deg);\n    }\n    &:active {\n        transform: rotate(30deg);\n    }\n"]))),E=c(77),T=c.n(E),F={metric:{temp:"\u02daC",wind:"m/s",cloudiness:"%",humidity:"%",pressure:"hPa"},imperial:{temp:"\u02daF",wind:"mph",cloudiness:"%",humidity:"%",pressure:"hPa"}};function L(e){var t=e.temp,c=e.unit,n=void 0===c?"metric":c,a=e.fractionDigits,s=void 0===a?1:a;return"imperial"===n?t=9*t/5-459.67:t-=272.15,t=t.toLocaleString("en-US",{maximumFractionDigits:s})}function D(e){var t=e.speed,c=e.unit,n=void 0===c?"metric":c,a=e.fractionDigits,s=void 0===a?1:a;return"imperial"===n&&(t*=2.23694),t=t.toLocaleString("en-US",{maximumFractionDigits:s})}var W=function(e){return Object(g.jsx)(x.a,{className:"color-secondary p-3",children:Object(g.jsxs)(C.a,{children:[Object(g.jsxs)(U.a,{className:"col-xxl-10 col-xl-10 col-lg-9 col-md-9 col-sm-8 col-12 align-self-center",children:[Object(g.jsxs)(C.a,{children:[e.customUIElements.pressure?Object(g.jsxs)(U.a,{className:"col-md-auto",children:[Object(g.jsx)("p",{className:"text-important h6 mb-0 text-center",children:"Pressure"}),Object(g.jsx)("p",{className:"text-center",children:Object(g.jsxs)("small",{children:[e.weather.weather?e.weather.main.pressure:"-",F[e.unit].pressure]})})]}):"",e.customUIElements.humidity?Object(g.jsxs)(U.a,{className:"col-md-auto",children:[Object(g.jsx)("p",{className:"text-important h6 mb-0 text-center",children:"Humidity"}),Object(g.jsx)("p",{className:"text-center",children:Object(g.jsxs)("small",{children:[e.weather.weather?e.weather.main.humidity:"-",F[e.unit].humidity]})})]}):"",e.customUIElements.wind?Object(g.jsxs)(U.a,{className:"col-md-auto",children:[Object(g.jsx)("p",{className:"text-important h6 mb-0 text-center",children:"Wind"}),Object(g.jsx)("p",{className:"text-center",children:Object(g.jsxs)("small",{children:[e.weather.wind?D({speed:e.weather.wind.speed,unit:e.unit}):"-",F[e.unit].wind]})})]}):"",e.customUIElements.cloudiness?Object(g.jsxs)(U.a,{className:"col-md-auto",children:[Object(g.jsx)("p",{className:"text-important h6 mb-0 text-center",children:"Cloudiness"}),Object(g.jsx)("p",{className:"text-center",children:Object(g.jsxs)("small",{children:[e.weather.clouds?e.weather.clouds.all:"-",F[e.unit].cloudiness]})})]}):""]}),Object(g.jsx)(C.a,{children:Object(g.jsx)(U.a,{className:"col-md-auto text-center",children:Object(g.jsx)("h1",{className:"display-1",children:e.weather.main?L({temp:e.weather.main.temp,unit:e.unit})+F[e.unit].temp:"-"})})}),Object(g.jsxs)(C.a,{children:[e.customUIElements.minmax?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(U.a,{className:"col-md-auto",children:[Object(g.jsx)("p",{className:"text-important h6 mb-0 text-center",children:"Min"}),Object(g.jsx)("p",{className:"text-center mb-0",children:Object(g.jsx)("small",{children:e.weather.weather?L({temp:e.weather.main.temp_min,unit:e.unit,fractionDigits:0})+F[e.unit].temp:"-"})})]}),Object(g.jsxs)(U.a,{className:"col-md-auto",children:[Object(g.jsx)("p",{className:"text-important h6 mb-0 text-center",children:"Max"}),Object(g.jsx)("p",{className:"text-center mb-0",children:Object(g.jsx)("small",{children:e.weather.weather?L({temp:e.weather.main.temp_max,unit:e.unit,fractionDigits:0})+F[e.unit].temp:"-"})})]})]}):"",e.customUIElements.feels?Object(g.jsxs)(U.a,{className:"col-md-auto",children:[Object(g.jsx)("p",{className:"text-important h6 mb-0 text-center",children:"Feels"}),Object(g.jsx)("p",{className:"text-center mb-0",children:Object(g.jsx)("small",{children:e.weather.main?L({temp:e.weather.main.feels_like,unit:e.unit,fractionDigits:0})+F[e.unit].temp:"-"})})]}):""]})]}),Object(g.jsxs)(U.a,{className:"col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 align-self-center",children:[" ",Object(g.jsxs)(x.a,{className:"color-secondary",children:[Object(g.jsx)("img",{className:"align-self-center",src:e.weather.weather?"https://openweathermap.org/img/wn/"+e.weather.weather[0].icon+"@2x.png":N,alt:"weather icon",width:"100",height:"100"}),Object(g.jsx)("div",{class:"card-body",children:Object(g.jsx)("p",{className:"h5 text-center",children:e.weather.weather?e.weather.weather[0].description:"-"})})]})]})]})})},z=c(5),M=c(12),H=function(e){var t=function(t){e.setCustomUIElements(Object(M.a)(Object(M.a)({},e.customUIElements),{},Object(z.a)({},t,!e.customUIElements[t])))},c=function(t){e.setUnit(t)},n=function(t){e.setTheme(t)};return Object(g.jsxs)(x.a,{className:"color-secondary p-3",children:[Object(g.jsxs)(C.a,{children:[Object(g.jsxs)(U.a,{className:"col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12",children:[Object(g.jsx)("p",{className:"h4",children:"Choose City"}),Object(g.jsxs)("div",{className:"form-floating mb-3",children:[" ",Object(g.jsx)("input",{type:"text",className:"form-control ".concat(e.isCityValid),placeholder:"City","aria-label":"city-selection","aria-describedby":"city-selection",onChange:function(t){return e.setCitySearch(t.target.value)}}),Object(g.jsx)("label",{for:"city-selection",className:"form-label",children:"Search City"}),Object(g.jsx)("div",{className:"valid-feedback",children:"City Found!"}),Object(g.jsx)("div",{className:"invalid-feedback",children:"City Not Found"})]})]}),Object(g.jsxs)(U.a,{className:"col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-0 col-0",children:[Object(g.jsx)("p",{className:"h4",children:"Choose Unit"}),Object(g.jsxs)("div",{className:"form-check",children:[Object(g.jsx)("input",{className:"form-check-input",type:"radio",id:"metric",name:"unitRadio",checked:"metric"===e.unit?"checked":"",onChange:function(e){return c(e.target.id)}}),Object(g.jsx)("label",{className:"form-check-label",for:"metric",children:"Metric"})]}),Object(g.jsxs)("div",{className:"form-check",children:[Object(g.jsx)("input",{className:"form-check-input",type:"radio",id:"imperial",name:"unitRadio",checked:"imperial"===e.unit?"checked":"",onChange:function(e){return c(e.target.id)}}),Object(g.jsx)("label",{className:"form-check-label",for:"imperial",children:"Imperial"})]})]}),Object(g.jsxs)(U.a,{className:"col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-0 col-0",children:[Object(g.jsx)("p",{className:"h4",children:"Choose Theme"}),Object(g.jsxs)("div",{className:"form-check",children:[Object(g.jsx)("input",{className:"form-check-input",type:"radio",id:"light",name:"themeRadio",checked:"light"===e.theme?"checked":"",onChange:function(e){return n(e.target.id)},disabled:!0===e.useSystemTheme?"disabled":""}),Object(g.jsx)("label",{className:"form-check-label",for:"light",children:"Light"})]}),Object(g.jsxs)("div",{className:"form-check",children:[Object(g.jsx)("input",{className:"form-check-input",type:"radio",id:"dark",name:"themeRadio",checked:"dark"===e.theme?"checked":"",onChange:function(e){return n(e.target.id)},disabled:!0===e.useSystemTheme?"disabled":""}),Object(g.jsx)("label",{className:"form-check-label",for:"dark",children:"Dark"})]}),Object(g.jsxs)("div",{class:"form-check",children:[Object(g.jsx)("input",{class:"form-check-input",type:"checkbox",id:"useSystemTheme",checked:!0===e.useSystemTheme?"checked":"",onChange:function(t){e.setUseSystemTheme(!e.useSystemTheme)}}),Object(g.jsx)("label",{class:"form-check-label",for:"useSystemTheme",children:"Use system"})]})]})]}),Object(g.jsxs)(C.a,{children:[Object(g.jsx)("p",{className:"h4 mt-2",children:"Customize Look"}),Object(g.jsxs)(U.a,{children:[Object(g.jsx)(C.a,{children:Object(g.jsx)(U.a,{children:Object(g.jsxs)("div",{class:"form-check form-switch",children:[Object(g.jsx)("input",{class:"form-check-input",type:"checkbox",id:"pressure",onChange:function(e){return t(e.target.id)},checked:e.customUIElements.pressure?"checked":""}),Object(g.jsx)("label",{class:"form-check-label",for:"pressure",children:"Pressure"})]})})}),Object(g.jsx)(C.a,{children:Object(g.jsx)(U.a,{children:Object(g.jsxs)("div",{class:"form-check form-switch",children:[Object(g.jsx)("input",{class:"form-check-input",type:"checkbox",id:"humidity",onChange:function(e){return t(e.target.id)},checked:e.customUIElements.humidity?"checked":""}),Object(g.jsx)("label",{class:"form-check-label",for:"humidity",children:"Humidity"})]})})})]}),Object(g.jsxs)(U.a,{children:[Object(g.jsx)(C.a,{children:Object(g.jsx)(U.a,{children:Object(g.jsxs)("div",{class:"form-check form-switch",children:[Object(g.jsx)("input",{class:"form-check-input",type:"checkbox",id:"wind",onChange:function(e){return t(e.target.id)},checked:e.customUIElements.wind?"checked":""}),Object(g.jsx)("label",{class:"form-check-label",for:"wind",children:"Wind"})]})})}),Object(g.jsx)(C.a,{children:Object(g.jsx)(U.a,{children:Object(g.jsxs)("div",{class:"form-check form-switch",children:[Object(g.jsx)("input",{class:"form-check-input",type:"checkbox",id:"cloudiness",onChange:function(e){return t(e.target.id)},checked:e.customUIElements.cloudiness?"checked":""}),Object(g.jsx)("label",{class:"form-check-label",for:"cloudiness",children:"Cloudiness"})]})})})]}),Object(g.jsxs)(U.a,{children:[Object(g.jsx)(C.a,{children:Object(g.jsx)(U.a,{children:Object(g.jsxs)("div",{class:"form-check form-switch",children:[Object(g.jsx)("input",{class:"form-check-input",type:"checkbox",id:"minmax",onChange:function(e){return t(e.target.id)},checked:e.customUIElements.minmax?"checked":""}),Object(g.jsx)("label",{class:"form-check-label",for:"minmax",children:"Min Max"})]})})}),Object(g.jsx)(C.a,{children:Object(g.jsx)(U.a,{children:Object(g.jsxs)("div",{class:"form-check form-switch",children:[Object(g.jsx)("input",{class:"form-check-input",type:"checkbox",id:"feels",onChange:function(e){return t(e.target.id)},checked:e.customUIElements.feels?"checked":""}),Object(g.jsx)("label",{class:"form-check-label",for:"feels",children:"Feels like"})]})})})]}),Object(g.jsxs)(U.a,{children:[Object(g.jsx)(C.a,{children:Object(g.jsx)(U.a,{children:Object(g.jsxs)("div",{class:"form-check form-switch",children:[Object(g.jsx)("input",{class:"form-check-input",type:"checkbox",id:"lonlat",onChange:function(e){return t(e.target.id)},checked:e.customUIElements.lonlat?"checked":""}),Object(g.jsx)("label",{class:"form-check-label",for:"lonlat",children:"Lon Lat"})]})})}),Object(g.jsx)(C.a,{children:Object(g.jsx)(U.a,{children:Object(g.jsxs)("div",{class:"form-check form-switch",children:[Object(g.jsx)("input",{class:"form-check-input",type:"checkbox",id:"sun",onChange:function(e){return t(e.target.id)},checked:e.customUIElements.sun?"checked":""}),Object(g.jsx)("label",{class:"form-check-label",for:"sun",children:"Sunrise/set"})]})})})]})]})]})},J=function(e){return Object(g.jsxs)(T.a,{isFlipped:e.isFront,flipDirection:"vertical",children:[Object(g.jsx)(W,{keys:"front",weather:e.weather,unit:e.unit,customUIElements:e.customUIElements}),Object(g.jsx)(H,{keys:"back",isCityValid:e.isCityValid,setCitySearch:e.setCitySearch,unit:e.unit,setUnit:e.setUnit,customUIElements:e.customUIElements,setCustomUIElements:e.setCustomUIElements,theme:e.theme,setTheme:e.setTheme,useSystemTheme:e.useSystemTheme,setUseSystemTheme:e.setUseSystemTheme})]})};function P(e){return new Date(1e3*e).toLocaleString()}function V(e){return{0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"}[e]}var R,q,A,B=function(e){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("p",{className:"display-6 mb-0",children:[e.weather.name?e.weather.name:"-"," ",e.weather.sys?e.weather.sys.country:"-"]}),Object(g.jsx)(C.a,{className:"row-cols-auto",children:e.customUIElements.lonlat?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(U.a,{className:"pe-0",children:Object(g.jsx)("p",{className:"h6 mb-1",children:Object(g.jsxs)("small",{className:"text-secondary",children:["Lon:",e.weather.coord?e.weather.coord.lon:"-"]})})}),Object(g.jsx)(U.a,{children:Object(g.jsx)("p",{className:"h6 mb-1",children:Object(g.jsxs)("small",{className:"text-secondary",children:["Lat:",e.weather.coord?e.weather.coord.lat:"-"]})})})]}):""}),Object(g.jsx)(C.a,{className:"row-cols-auto",children:e.customUIElements.sun?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(U.a,{className:"pe-0",children:Object(g.jsx)("p",{className:"h6 mb-0",children:Object(g.jsxs)("small",{className:"text-secondary",children:["Sunrise:",e.weather.sys?P(e.weather.sys.sunrise).split(", ")[1]:"-"]})})}),Object(g.jsx)(U.a,{children:Object(g.jsx)("p",{className:"h6 mb-0",children:Object(g.jsxs)("small",{className:"text-secondary",children:["Sunset:",e.weather.sys?P(e.weather.sys.sunset).split(", ")[1]:"-"]})})})]}):""})]})},X=c.p+"static/media/Settings-icon.d2ca648e.png",Y=function(e){var t=Object(l.useState)(!1),c=Object(h.a)(t,2),n=c[0],a=c[1];return Object(g.jsxs)(x.a,{className:"color-primary p-3",children:[Object(g.jsxs)(C.a,{children:[Object(g.jsx)(U.a,{className:"col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10",children:Object(g.jsx)(B,{weather:e.weather,customUIElements:e.customUIElements})}),Object(g.jsx)(U.a,{className:"col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2",children:Object(g.jsx)(_,{className:"float-end",onClick:function(){a(!n)},children:Object(g.jsx)("p",{className:"display-6",children:Object(g.jsx)("img",{className:"m-0 p-0",src:X,alt:"settings_icon",width:"42",height:"42"})})})})]}),Object(g.jsx)(C.a,{className:"mt-2",children:Object(g.jsx)(U.a,{children:Object(g.jsx)(J,{weather:e.weather,isFront:n,isCityValid:e.isCityValid,setCitySearch:e.setCitySearch,unit:e.unit,setUnit:e.setUnit,customUIElements:e.customUIElements,setCustomUIElements:e.setCustomUIElements,theme:e.theme,setTheme:e.setTheme,useSystemTheme:e.useSystemTheme,setUseSystemTheme:e.setUseSystemTheme})})})]})},G=function(e,t){return e.dt_txt.split(" ")[1].split(":")[0]===t},K=Object(b.c)(x.a)(R||(R=Object(j.a)(["\n    .flipcard {\n        perspective: 1000px;\n        z-index: 2;\n        width: 100%;\n        height: 100%;\n        position: relative;\n        backface-visibility: hidden;\n        transition: all .3s;\n        text-align: center;\n    }\n\n    .flipcard .flipcard-wrap {\n        position: relative;\n        width: 100%;\n        height: 100%;\n        text-align: center;\n        transition: transform 0.6s;\n        transform-style: preserve-3d;\n    }\n\n    .flipcard:hover .flipcard-wrap {\n        transform: rotateY(-180deg);\n    }\n"]))),Q=Object(b.c)(x.a)(q||(q=Object(j.a)(["\n    width: 100%;\n    position: relative;\n    backface-visibility: hidden;\n    transition: all .3s;\n    text-align: center;\n"]))),Z=Object(b.c)(x.a)(A||(A=Object(j.a)(["\n    width: 100%;\n    height: 100%;\n    backface-visibility: hidden;\n    transition: all .3s;\n    text-align: center;\n    position: absolute;\n    top: 0;\n    transform: rotateY(180deg);\n"]))),$=function(e){return Object(g.jsxs)(Q,{className:"color-secondary p-3 px-2 mx-md-6 col-6 col-sm-5 mt-md-0 col-lg-2 col-xl-2 col-xxl-2.5",children:[Object(g.jsx)("p",{className:"h5",children:e.allList.dt_txt?e.allList.dt_txt.split(" ")[0].substring(5):"-"}),Object(g.jsx)("h6",{className:"h6 text-important",children:e.allList.dt?V(new Date(1e3*e.allList.dt).getDay()):"-"}),Object(g.jsx)("div",{className:"mb-2",children:Object(g.jsx)("img",{src:e.allList.weather?"https://openweathermap.org/img/wn/".concat(e.allList.weather[0].icon,"@2x.png"):N,alt:"tempIcon",width:"100"})}),Object(g.jsx)("p",{className:"h4 mb-0 mt-0 pb-md-2",children:e.allList.main?L({temp:e.allList.main.temp,unit:e.unit})+F[e.unit].temp:"-"})]})},ee=function(e){return Object(g.jsxs)(Z,{className:"card-back color-secondary align-items-center p-2 mx-md-6 px-2 col-6 col-sm-5 col-sm-4 col-xl-2 mt-md-0 col-lg-2 col-xxl-2.5 mb-0 mt-0",children:[Object(g.jsxs)(C.a,{children:[Object(g.jsx)("h6",{className:"text-important mb-0 mt-1",children:"Feels"}),Object(g.jsx)("p",{className:"h5 mb-1",children:e.allList.main?L({temp:e.allList.main.feels_like,fractionDigits:0,unit:e.unit})+F[e.unit].temp:"-"})]}),Object(g.jsxs)(C.a,{children:[Object(g.jsx)("h6",{className:"text-important mb-1",children:"Humidity"}),Object(g.jsx)("p",{className:"h5 mb-0",children:e.allList.main?e.allList.main.humidity+F[e.unit].humidity:"-"})]}),Object(g.jsxs)(C.a,{className:"pt-1",children:[Object(g.jsx)("h6",{className:"text-important mb-0",children:"Wind"}),Object(g.jsx)("p",{className:"h5 mb-0",children:e.allList.main?D({speed:e.allList.wind.speed,unit:e.unit})+F[e.unit].wind:"-"})]}),Object(g.jsxs)(C.a,{children:[Object(g.jsx)("h6",{className:"text-important mb-0",children:"Cloudiness"}),Object(g.jsx)("p",{className:"h5 mb-0",children:e.allList.main?e.allList.clouds.all+F[e.unit].cloudiness:"-"})]})]})},te=function(e){return Object(g.jsx)(U.a,{className:"p-2 col-auto col-sm-4 col-md-4 col-lg-2 col-xl-2 col-xxl-2",style:{flex:1},children:Object(g.jsx)("div",{className:"flipcard",children:Object(g.jsxs)("div",{className:"flipcard-wrap",children:[Object(g.jsx)($,{allList:e.weather,unit:e.unit}),Object(g.jsx)(ee,{allList:e.weather,unit:e.unit})]})})})},ce=function(e){return Object(g.jsx)(K,{className:"color-primary mt-3",children:Object(g.jsx)(C.a,{className:"g-md-3 p-3 g-ml-3 justify-content-center",children:e.forecast.list?e.forecast.list.map((function(t){return G(t,"12")?Object(g.jsx)(te,{weather:t,unit:e.unit}):""})):[0,1,2,3,4].map((function(t){return Object(g.jsx)(te,{weather:t,unit:e.unit})}))})})},ne=c(80),ae=Object(b.d)((function(e){Object(l.useEffect)((function(){var t=function(){var t=[],c=[],n=[],a=[];return e.allList.list&&e.allList.list.map((function(s){G(s,"12")&&(t.push(V(new Date(1e3*s.dt).getDay())),c.push(L({temp:s.main.temp,unit:e.unit})),n.push(s.main.humidity),a.push(D({speed:s.wind.speed,unit:e.unit})))})),{days:t,temp:c,humidity:n,wind:a}}(),c=t.days,n=t.temp,s=t.humidity,r=t.wind;a(c),o(n),j(s),f(r)}),[e.allList,e.unit]);var t=Object(l.useState)(""),c=Object(h.a)(t,2),n=c[0],a=c[1],s=Object(l.useState)(""),r=Object(h.a)(s,2),i=r[0],o=r[1],m=Object(l.useState)(""),d=Object(h.a)(m,2),u=d[0],j=d[1],b=Object(l.useState)(""),p=Object(h.a)(b,2),x=p[0],f=p[1],O=Object(l.useState)(!1),y=Object(h.a)(O,2),v=y[0],k=y[1],w=Object(l.useState)(!0),N=Object(h.a)(w,2),S=N[0],I=N[1],C=Object(l.useState)(!0),U=Object(h.a)(C,2),_=U[0],E=[k,I,U[1]],T={labels:n,datasets:[{type:"line",label:"Temperature"+F[e.unit].temp,hidden:v,backgroundColor:e.theme.color_secondary,borderColor:e.theme.text_important,data:i,fill:!0},{type:"line",label:"Humidity "+F[e.unit].humidity,hidden:S,backgroundColor:e.theme.color_secondary,borderColor:e.theme.text_important,data:u,borderWidth:2,fill:!0},{type:"line",label:"Wind "+F[e.unit].wind,hidden:_,backgroundColor:e.theme.color_secondary,borderColor:e.theme.text_important,data:x,borderWidth:2,fill:!0}]},W={indexAxis:"x",responsive:!0,plugins:{legend:{position:"top",onClick:function(e,t){for(var c=0;c<T.datasets.length;c++)E[c](!0);E[t.datasetIndex](!1)},labels:{color:e.theme.text_primary,font:{size:20}}}},scales:{y:{ticks:{stepSize:3,color:e.theme.text_primary,font:{size:20}}},x:{ticks:{stepSize:1,color:e.theme.text_primary,font:{size:20}}}}};return Object(g.jsx)(ne.a,{data:T,options:W})})),se=function(e){return Object(g.jsx)(x.a,{className:"color-primary mt-3 pb-2 mb-3",children:Object(g.jsx)(ae,{allList:e.forecast,unit:e.unit})})},re={dark:{background_color:"#222831",color_primary:"#393E46",color_secondary:"#017f85",text_primary:"#eee",text_secondary:"#919191",text_important:"#00bdb6",form_placeholder:"#919191",valid_input:"#08ceff",invalid_input:"#ff006acc"},light:{background_color:"#bef2ffb9",color_primary:"#00B7C2",color_secondary:"#128494",text_primary:"#3c3c3c",text_secondary:"#ffffff",text_important:"#43ff39a2",form_placeholder:"#919191",valid_input:"#43ff39a2",invalid_input:"#ff0077ce"}},ie={storageNames:{applicationName:"WTForecast",customUIElements:"customUIElements",unit:"unit",city:"city",theme:"theme",useSystemTheme:"useSystemTheme"},storageDefaults:{customUIElements:{pressure:!0,humidity:!0,wind:!0,cloudiness:!0,minmax:!0,feels:!0,lonlat:!0,sun:!0},unit:"metric",city:"istanbul",theme:"light",useSystemTheme:!0},cityFormDebounceTime:1e3,weatherFetchInterval:36e5},le=c(2),oe=c(3),me=function(){function e(t,c){Object(le.a)(this,e),this.saveName=t,this.defaults=c}return Object(oe.a)(e,[{key:"addItemToStorage",value:function(e){var t=this.getItemsFromStorage();localStorage.setItem(this.saveName,JSON.stringify(Object(M.a)(Object(M.a)({},t),e)))}},{key:"getItemsFromStorage",value:function(){return JSON.parse(localStorage.getItem(this.saveName))}},{key:"getItemsFromStorageWithDefaultFallback",value:function(){var e=JSON.parse(localStorage.getItem(this.saveName));return null===e?this.defaults:e}},{key:"getItemFromStorageWithDefaultFallback",value:function(e){return this.getItemsFromStorageWithDefaultFallback()[e]}},{key:"deleteItemFromStorage",value:function(e){var t=this.getItemsFromStorage();e in t&&(delete t[e],localStorage.setItem(this.saveName,JSON.stringify(t)))}},{key:"clearStorage",value:function(){localStorage.removeItem(this.saveName)}},{key:"isTherePreviousSave",value:function(){return null!==localStorage.getItem(this.saveName)}},{key:"isTherePreviousSavedItem",value:function(e){var t=localStorage.getItem(this.saveName);return null!==t&&e in t}}]),e}(),de=function(e){var t=new me(ie.storageNames.applicationName,ie.storageDefaults),c=Object(l.useState)(t.getItemFromStorageWithDefaultFallback(e)),n=Object(h.a)(c,2),a=n[0],s=n[1];return Object(l.useEffect)((function(){t.addItemToStorage(Object(z.a)({},e,a))}),[a]),[a,s]},he=c(17),ue=c.n(he),je=c(25),be=function(e,t){var c=Object(l.useState)({}),n=Object(h.a)(c,2),a=n[0],s=n[1],r=Object(l.useState)({}),i=Object(h.a)(r,2),o=i[0],m=i[1];function d(){return u.apply(this,arguments)}function u(){return(u=Object(je.a)(ue.a.mark((function t(){var c,n;return ue.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(k,"?q=").concat(e,"&appid=").concat("687afaabfeb3080e8b71b38d585046a0"));case 2:return c=t.sent,t.next=5,c.json();case 5:n=t.sent,s(n);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function j(){return b.apply(this,arguments)}function b(){return(b=Object(je.a)(ue.a.mark((function t(){var c,n;return ue.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(w,"?q=").concat(e,"&appid=").concat("687afaabfeb3080e8b71b38d585046a0"));case 2:return c=t.sent,t.next=5,c.json();case 5:n=t.sent,m(n);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(l.useEffect)((function(){var e=setInterval((function(){console.log("Weather updated"),d(),j()}),t);return d(),j(),function(){clearInterval(e)}}),[e]),[a,s,o,m]},pe=c(81),xe=function(){var e=Object(pe.a)("",ie.cityFormDebounceTime),t=Object(h.a)(e,2),c=t[0],n=t[1],a=Object(l.useState)(""),s=Object(h.a)(a,2),r=s[0],i=s[1],o=de(ie.storageNames.city),m=Object(h.a)(o,2),d=m[0],u=m[1];return Object(l.useEffect)((function(){function e(){return(e=Object(je.a)(ue.a.mark((function e(){var t;return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c){e.next=16;break}return e.prev=1,e.next=4,fetch("".concat(k,"?q=").concat(c,"&appid=").concat("687afaabfeb3080e8b71b38d585046a0"));case 4:return t=e.sent,e.next=7,t.json();case 7:200===e.sent.cod?(i("is-valid"),u(c)):i("is-invalid"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),i("is-invalid");case 14:e.next=17;break;case 16:i("");case 17:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]),[d,u,c,n,r,i]},fe=function(){var e=Object(l.useState)(window.matchMedia("(prefers-color-scheme: dark)").matches),t=Object(h.a)(e,2),c=t[0],n=t[1],a=function(e){n(e.matches)};return Object(l.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");return e.addEventListener("change",a),function(){return e.removeEventListener("change",a)}}),[]),c},Oe=function(){var e=de(ie.storageNames.theme),t=Object(h.a)(e,2),c=t[0],n=t[1],a=de(ie.storageNames.useSystemTheme),s=Object(h.a)(a,2),r=s[0],i=s[1],o=fe();return Object(l.useEffect)((function(){r&&n(o?"dark":"light")}),[c,r,o]),[c,n,r,i]},ye=function(e,t){Object(l.useEffect)((function(){e.main?document.title="WTF: ".concat(e.name," ").concat(L({temp:e.main.temp,unit:t})).concat(F[t].temp):document.title="WTForecast"}),[e,t])};var ge=function(){var e=de(ie.storageNames.unit),t=Object(h.a)(e,2),c=t[0],n=t[1],a=de(ie.storageNames.customUIElements),s=Object(h.a)(a,2),r=s[0],i=s[1],l=xe(),o=Object(h.a)(l,6),m=o[0],d=(o[1],o[2],o[3]),j=o[4],x=(o[5],be(m,ie.weatherFetchInterval)),f=Object(h.a)(x,4),O=f[0],y=(f[1],f[2]),v=(f[3],Oe()),k=Object(h.a)(v,4),w=k[0],N=k[1],S=k[2],C=k[3];return ye(O,c),Object(g.jsx)(u.a,{children:Object(g.jsxs)(b.a,{theme:re[w]?re[w]:re[ie.storageDefaults.theme],children:[Object(g.jsx)(p,{}),Object(g.jsx)(I,{}),Object(g.jsx)(Y,{weather:O,isCityValid:j,setCitySearch:d,unit:c,setUnit:n,customUIElements:r,setCustomUIElements:i,theme:w,setTheme:N,useSystemTheme:S,setUseSystemTheme:C}),Object(g.jsx)(ce,{forecast:y,unit:c}),Object(g.jsx)(se,{forecast:y,unit:c})]})})};d.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(ge,{})}),document.getElementById("root"))}},[[198,1,2]]]);
//# sourceMappingURL=main.c421dee2.chunk.js.map