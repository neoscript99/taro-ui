(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"208":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=_interopRequireDefault(n(1)),o=_interopRequireDefault(n(2)),i=n(60),u=_interopRequireDefault(n(61)),l=_interopRequireDefault(n(63)),s=_interopRequireDefault(n(62));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function addNum(e,t){var n=void 0,r=void 0;try{n=e.toString().split(".")[1].length}catch(e){n=0}try{r=t.toString().split(".")[1].length}catch(e){r=0}var a=Math.pow(10,Math.max(n,r));return(Math.round(e*a)+Math.round(t*a))/a}function parseValue(e){if(""===e)return"0";var t=e.toString();return 0===t.indexOf("0")&&-1===t.indexOf(".")?parseFloat(e).toString():e.toString()}(0,n(79).initTestEnv)();var c=function(e){function AtInputNumber(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtInputNumber);for(var r=arguments.length,a=Array(r),o=0;o<r;o++)a[o]=arguments[o];return t=n=_possibleConstructorReturn(this,(e=AtInputNumber.__proto__||Object.getPrototypeOf(AtInputNumber)).call.apply(e,[this].concat(a))),n.handleMinus=function(){var e=n.props,t=e.disabled,r=e.value,a=e.min,o=e.step,i=parseFloat(r);if(!(t||i<=a)){var u=addNum(i,-o);u=u>a?u:a,n.props.onChange(parseValue(u))}},n.handlePlus=function(){var e=n.props,t=e.disabled,r=e.value,a=e.max,o=e.step,i=parseFloat(r);if(!(t||i>=a)){var u=addNum(i,o);u=u<a?u:a,n.props.onChange(parseValue(u))}},n.handleValue=function(e){var t=n.props,r=t.max,a=t.min,o=""===e?a:e;return o>r&&(o=r),o<a&&(o=a),o},n.handleInput=function(e){for(var t,r=arguments.length,a=Array(r>1?r-1:0),o=1;o<r;o++)a[o-1]=arguments[o];var i=e.target.value;if(!n.props.disabled){var u=parseValue(n.handleValue(i));return(t=n.props).onChange.apply(t,[u,e].concat(a)),u.toString()}},n.handleBlur=function(){var e;return(e=n.props).onBlur.apply(e,arguments)},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtInputNumber,s.default),r(AtInputNumber,[{"key":"render","value":function render(){var e=this.props,t=e.customStyle,n=e.className,r=e.width,u=e.disabled,s=e.value,c=e.type,f=e.min,p=e.max,d=e.size,m="width: "+a.default.pxTransform(r),b=this.handleValue(s),h=(0,l.default)("at-input-number",{"at-input-number--lg":d},n),y=(0,l.default)("at-input-number__btn",{"at-input-number--disabled":b<=f||u}),_=(0,l.default)("at-input-number__btn",{"at-input-number--disabled":b>=p||u});return o.default.createElement(i.View,{"className":h,"style":t},o.default.createElement(i.View,{"className":y,"onClick":this.handleMinus},o.default.createElement(i.Text,{"className":"at-icon at-icon-subtract at-input-number__btn-subtract"})),o.default.createElement(i.Input,{"className":"at-input-number__input","style":m,"type":c,"value":b,"disabled":u,"onInput":this.handleInput,"onBlur":this.handleBlur}),o.default.createElement(i.View,{"className":_,"onClick":this.handlePlus},o.default.createElement(i.Text,{"className":"at-icon at-icon-add at-input-number__btn-add"})))}}]),AtInputNumber}();c.defaultProps={"customStyle":"","className":"","disabled":!1,"value":1,"type":"number","width":80,"min":0,"max":100,"step":1,"size":"","onChange":function onChange(){},"onBlur":function onBlur(){}},c.propTypes={"customStyle":u.default.oneOfType([u.default.object,u.default.string]),"className":u.default.oneOfType([u.default.array,u.default.string]),"value":u.default.oneOfType([u.default.number,u.default.string]),"type":u.default.oneOf(["number","digit"]),"disabled":u.default.bool,"width":u.default.number,"min":u.default.number,"max":u.default.number,"step":u.default.number,"size":u.default.string,"onChange":u.default.func,"onBlur":u.default.func},t.default=c},"209":function(e,t,n){},"48":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=_interopRequireDefault(n(1)),o=_interopRequireDefault(n(2)),i=n(60),u=_interopRequireDefault(n(208)),l=_interopRequireDefault(n(66));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(209);var s=function(e){function Index(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.state={"number1":1,"number2":1,"number3":1,"number4":1,"number5":1},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,a.default.Component),r(Index,[{"key":"handleNumberChange","value":function handleNumberChange(e,t){this.setState(function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}({},e,t))}},{"key":"render","value":function render(){return o.default.createElement(i.View,{"className":"page"},o.default.createElement(l.default,{"title":"Input Number 数字输入框"}),o.default.createElement(i.View,{"className":"doc-body"},o.default.createElement(i.View,{"className":"panel"},o.default.createElement(i.View,{"className":"panel__title"},"基础用法"),o.default.createElement(i.View,{"className":"panel__content"},o.default.createElement(i.View,{"className":"example-item"},o.default.createElement(i.View,{"className":"example-item__desc"},"min=0, max=10, step=1"),o.default.createElement(u.default,{"min":0,"max":10,"step":1,"value":this.state.number1,"onChange":this.handleNumberChange.bind(this,"number1")})))),o.default.createElement(i.View,{"className":"panel"},o.default.createElement(i.View,{"className":"panel__title"},"小数"),o.default.createElement(i.View,{"className":"panel__content"},o.default.createElement(i.View,{"className":"example-item"},o.default.createElement(i.View,{"className":"example-item__desc"},"min=0, max=10, step=0.1"),o.default.createElement(u.default,{"type":"digit","min":0,"max":10,"step":.1,"value":this.state.number2,"onChange":this.handleNumberChange.bind(this,"number2")})))),o.default.createElement(i.View,{"className":"panel"},o.default.createElement(i.View,{"className":"panel__title"},"禁用状态"),o.default.createElement(i.View,{"className":"panel__content"},o.default.createElement(i.View,{"className":"example-item"},o.default.createElement(u.default,{"disabled":!0,"min":0,"max":10,"step":1,"value":this.state.number3,"onChange":this.handleNumberChange.bind(this,"number3")})))),o.default.createElement(i.View,{"className":"panel"},o.default.createElement(i.View,{"className":"panel__title"},"自定义宽度"),o.default.createElement(i.View,{"className":"panel__content"},o.default.createElement(i.View,{"className":"example-item"},o.default.createElement(u.default,{"width":200,"min":0,"max":10,"step":1,"value":this.state.number4,"onChange":this.handleNumberChange.bind(this,"number4")})))),o.default.createElement(i.View,{"className":"panel"},o.default.createElement(i.View,{"className":"panel__title"},"大尺寸"),o.default.createElement(i.View,{"className":"panel__content"},o.default.createElement(i.View,{"className":"example-item"},o.default.createElement(u.default,{"size":"lg","min":0,"max":10,"step":1,"value":this.state.number5,"onChange":this.handleNumberChange.bind(this,"number5")}))))))}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}}]),Index}();t.default=s},"60":function(e,t,n){e.exports=n(0)(18)},"61":function(e,t,n){e.exports=n(64)()},"62":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=n(1);_interopRequireDefault(o),_interopRequireDefault(n(2));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var i=function objectToString(e){if(e&&"object"===(void 0===e?"undefined":a(e))){var t="";return Object.keys(e).forEach(function(n){var r=n.replace(/([A-Z])/g,"-$1").toLowerCase();t+=r+":"+e[n]+";"}),t}return e&&"string"==typeof e?e:""},u=function(e){function AtComponent(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtComponent),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtComponent.__proto__||Object.getPrototypeOf(AtComponent)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtComponent,o.Component),r(AtComponent,[{"key":"mergeStyle","value":function mergeStyle(e,t){return e&&"object"===(void 0===e?"undefined":a(e))&&t&&"object"===(void 0===t?"undefined":a(t))?Object.assign({},e,t):i(e)+i(t)}}]),AtComponent}();u.options={"addGlobalClass":!0},t.default=u},"63":function(e,t,n){e.exports=n(0)(19)},"64":function(e,t,n){"use strict";var r=n(65);function emptyFunction(){}e.exports=function(){function shim(e,t,n,a,o,i){if(i!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim};return e.checkPropTypes=emptyFunction,e.PropTypes=e,e}},"65":function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"66":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=n(1),o=(_interopRequireDefault(a),_interopRequireDefault(n(2))),i=_interopRequireDefault(n(61)),u=n(60);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(67);var l=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,a.Component),r(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return o.default.createElement(u.View,{"className":"doc-header"},o.default.createElement(u.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=l,l.defaultProps={"title":"标题"},l.propTypes={"title":i.default.string}},"67":function(e,t,n){},"79":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.handleTouchScroll=t.initTestEnv=t.getEventDetail=t.uuid=t.delayQuerySelector=t.delay=void 0;var r=_interopRequireDefault(n(1));_interopRequireDefault(n(2));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var a=r.default.getEnv();function delay(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500;return new Promise(function(t){a!==r.default.ENV_TYPE.WEB?t():setTimeout(function(){t()},e)})}var o=0;t.delay=delay,t.delayQuerySelector=function delayQuerySelector(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:500,o=a===r.default.ENV_TYPE.WEB?e:e.$scope,i=r.default.createSelectorQuery().in(o);return new Promise(function(e){delay(n).then(function(){i.select(t).boundingClientRect().exec(function(t){e(t)})})})},t.uuid=function uuid(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),r=[],a=0;if(t=t||n.length,e)for(a=0;a<e;a++)r[a]=n[0|Math.random()*t];else{var o=void 0;for(r[8]=r[13]=r[18]=r[23]="-",r[14]="4",a=0;a<36;a++)r[a]||(o=0|16*Math.random(),r[a]=n[19===a?3&o|8:o])}return r.join("")},t.getEventDetail=function getEventDetail(e){var t=void 0;switch(a){case r.default.ENV_TYPE.WEB:t={"pageX":e.pageX,"pageY":e.pageY,"clientX":e.clientX,"clientY":e.clientY,"offsetX":e.offsetX,"offsetY":e.offsetY,"x":e.x,"y":e.y};break;case r.default.ENV_TYPE.WEAPP:t={"pageX":e.target.pageX,"pageY":e.target.pageY,"clientX":e.touches[0].clientX,"clientY":e.touches[0].clientY,"offsetX":e.target.offsetLeft,"offsetY":e.target.offsetTop,"x":e.target.x,"y":e.target.y};break;case r.default.ENV_TYPE.ALIPAY:t={"pageX":e.target.pageX,"pageY":e.target.pageY,"clientX":e.target.clientX,"clientY":e.target.clientY,"offsetX":e.target.offsetLeft,"offsetY":e.target.offsetTop,"x":e.target.x,"y":e.target.y};break;default:t={"pageX":0,"pageY":0,"clientX":0,"clientY":0,"offsetX":0,"offsetY":0,"x":0,"y":0},console.warn("getEventDetail暂未支持该环境")}return t},t.initTestEnv=function initTestEnv(){},t.handleTouchScroll=function handleTouchScroll(e){a===r.default.ENV_TYPE.WEB&&(e?(o=document.documentElement.scrollTop,document.body.classList.add("at-frozen"),document.body.style.top=-o+"px"):(document.body.style.top=null,document.body.classList.remove("at-frozen"),document.documentElement.scrollTop=o))}}}]);