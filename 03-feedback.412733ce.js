!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequired7c6=a);var o=a("1WSnx"),n=document.querySelector(".feedback-form"),l=document.querySelector('input[name="email"]'),i=document.querySelector('textarea[name="message"]'),u="feedback-form-state";n.addEventListener("input",(0,o.throttle)((function(){var e={email:l.value,message:i.value};localStorage.setItem(u,JSON.stringify(e))}),500)),n.addEventListener("submit",(function(e){e.preventDefault(),console.log({email:l.value,message:i.value}),n.reset(),localStorage.removeItem(u)}));var s=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}(u);s&&(l.value=s.email,i.value=s.message)}();
//# sourceMappingURL=03-feedback.412733ce.js.map
