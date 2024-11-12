import{_ as p,B as l,K as f}from"./q0QkuZ7K.js";import{a3 as u,F as d,a8 as o}from"./BxBGOMOY.js";import{s as m}from"./D1jYDqJ7.js";const b={},y={class:"text-center mb-10 mt-10"},g=o("div",{class:"spinner-grow background",role:"status"},[o("span",{class:"visually-hidden"},"Loading...")],-1),_=o("div",{class:"spinner-grow background mx-4",role:"status"},[o("span",{class:"visually-hidden"},"Loading...")],-1),v=o("div",{class:"spinner-grow background",role:"status"},[o("span",{class:"visually-hidden"},"Loading...")],-1),h=[g,_,v];function w(n,e){return u(),d("section",y,h)}const D=p(b,[["render",w]]);var O=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,j=l.extend({name:"baseicon",css:O});function i(n){"@babel/helpers - typeof";return i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(n)}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(c){return Object.getOwnPropertyDescriptor(n,c).enumerable})),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?s(Object(t),!0).forEach(function(r){k(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function k(n,e,t){return(e=P(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function P(n){var e=S(n,"string");return i(e)=="symbol"?e:e+""}function S(n,e){if(i(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(i(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var I={name:"BaseIcon",extends:m,props:{label:{type:String,default:void 0},spin:{type:Boolean,default:!1}},style:j,provide:function(){return{$pcIcon:this,$parentInstance:this}},methods:{pti:function(){var e=f(this.label);return a(a({},!this.isUnstyled&&{class:["p-icon",{"p-icon-spin":this.spin}]}),{},{role:e?void 0:"img","aria-label":e?void 0:this.label,"aria-hidden":e})}}};export{D as _,I as s};
